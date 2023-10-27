import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import Dropdown from "react-bootstrap/Dropdown";

const containerStyle = {
  width: "100%",
  height: "65vh",
};

const libraries = ["places"];

function CepsFavoritos() {
  const userLogado = localStorage.getItem("UserLogado");
  const UserLogadoCepsFavoritos = localStorage
    .getItem("UserLogadoCepsFavoritos")
    .split(",");

  if (userLogado != null) {
    console.log("UserLogado: ", userLogado);
    console.log("UserLogadoCepsFavoritos: ", UserLogadoCepsFavoritos);
    return UserLogadoCepsFavoritos;
  }
}

CepsFavoritos();

export default function Map({ onLocationSelect }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD04y6Ip4Gu5lnlO894XGdf3rOA6BhGxow",
    libraries,
  });

  const [selectedAddress, setSelectedAddress] = useState("");
  const [mapCenter, setMapCenter] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMapCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setMarkerPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          onLocationSelect({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting current position", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleAddressChange = (address) => {
    setSelectedAddress(address);
  };

  const handleSelect = async (address) => {
    setSelectedAddress(address);
    console.log("address: ", address);
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setMapCenter(latLng);
      setMarkerPosition(latLng);
      onLocationSelect(latLng); // Call the callback function with the selected location
    } catch (error) {
      console.error("Error", error);
    }
  };

  const renderSuggestion = ({ description }) => {
    const addressParts = description.split(",");
    const streetName = addressParts[0];
    const city = addressParts[1];
    return (
      <div
        style={{
          padding: "10px",
          borderBottom: "1px solid #ccc",
          fontFamily: "DM Sans",
          width: "100%",
        }}
      >
        <span style={{ fontWeight: "bold" }}>{streetName}</span>, {city}
      </div>
    );
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div style={{ height: "100%" }}>
      <PlacesAutocomplete
        value={selectedAddress}
        onChange={handleAddressChange}
        onSelect={handleSelect}
        renderSuggestion={renderSuggestion}
        style={{ width: "100%", height: "100%" }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex" }}>
              <input
                {...getInputProps({
                  placeholder: "Digite seu endereço...",
                  className: "location-search-input",
                  style: {
                    height: "8vh",
                    border: "none",
                    marginBottom: "2vh",
                    width: "90%",
                    backgroundColor: "#EDF2F7",
                    borderRadius: "20px 0 0 20px",
                    fontSize: "16px",
                    padding: "0 5%",
                    fontFamily: "DM Sans",
                  },
                })}
              />
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{
                    height: "8vh",
                    background: "#EDF2F7",
                    border: "none",
                    borderRadius: "0 20px 20px 0",
                    textAlign: "center",
                  }}
                >
                  <i
                    className="fa fa-star"
                    style={{
                      color: "#C38F40",
                      height: "8vh",
                      width: "10%",
                      textAlign: "center",
                      lineHeight: "8vh",
                      fontSize: "20px",
                    }}
                  ></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {CepsFavoritos().map((cep) => (
                    <Dropdown.Item key={cep} onClick={() => handleSelect(`${cep.slice(0, 5)}-${cep.slice(5)}`)}>
                      {cep.slice(0, 5)}-{cep.slice(5)}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>  
              </Dropdown>
            </div>
            <div
              className="autocomxplete-dropdown-container"
              style={{
                position: "absolute",
                zIndex: 1,
                backgroundColor: "#fff",
                width: "100%",
                fontSize: "16px",
              }}
            >
              {loading && <div>Carregando...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                return (
                  <div
                    key={suggestion.description}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                  >
                    <span style={{ fontFamily: "DM Sans" }}>
                      {renderSuggestion(suggestion)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={17}
        center={mapCenter}
      >
        {markerPosition && <Marker position={markerPosition} />}
      </GoogleMap>
    </div>
  );
}
