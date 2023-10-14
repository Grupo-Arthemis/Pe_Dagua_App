import Carousel from 'react-bootstrap/Carousel';
import Foto01 from '../../assets/projetosSociais/Foto-Carrossel-1.jpg';
import Foto02 from '../../assets/projetosSociais/Foto-Carrossel-2.jpg';
import Foto03 from '../../assets/projetosSociais/Foto-Carrossel-3.jpg';



function ApoioCarrossel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Foto01} style= {{aspectRatio: 3.84, width:"100%"}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Foto02} style= {{aspectRatio: 3.84, width:"100%"}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Foto03} style= {{aspectRatio: 3.84, width:"100%"}} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ApoioCarrossel;