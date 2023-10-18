import styled from 'styled-components';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    align-items: center;
    text-align: center;
    width: 550px;
    height: 350px;
    border-radius: 20px;
    border: 1px solid #D4D2E3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: space-evenly;
    padding: 1% 0;


    @media (max-width: 600px) {
        width: 90%;
        height: 450px;
        margin-bottom: 7%;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`

const CardNome = styled.h2`
    color: #5D5A88;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    font-family: DM Sans;
    font-size: clamp(1.25rem, 1.023rem + 0.606vw, 1.75rem);
    font-style: normal;
    font-weight: 700;
    line-height: normal; 
`

const CardIdade = styled.h3`
    color: #8D8BA7;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    font-family: DM Sans;
    font-size: clamp(0.875rem, 0.761rem + 0.303vw, 1.125rem);
    font-style: normal;
    font-weight: 700;
    line-height: 20px; 
    letter-spacing: 1.8px;
    text-transform: uppercase;
`

const CardDescricao = styled.p`
    color: #9795B5;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    font-family: DM Sans;
    font-size: clamp(0.875rem, 0.761rem + 0.303vw, 1.125rem);
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    width: 90%;
`

const CardRedesSociais = styled.ul`
display: flex;
gap: 10px;
justify-content: center;
`


function GrupoCards({Foto, Nome, Idade, Descricao, Emoji, Facebook, Twitter, Instagram, Linkedin}) {
    return (
        <CardContainer>
            <div>
                <img src={Foto} alt="Foto do grupo"  style={{margin: "0 auto"}}/>
                <CardRedesSociais style={{margin: "15px auto"}}>
                    <li><a href={Instagram}><InstagramIcon sx={{ color: '#8D8BA7', backgroundColor: '#F2F1FA', borderRadius: '10%'}}/></a></li>
                    <li><a href={Linkedin}><LinkedInIcon sx={{ color: '#8D8BA7', backgroundColor: '#F2F1FA', borderRadius: '10%'}}/></a></li>
                </CardRedesSociais>
            </div>
            <div style={{textAlign: "center", justifyContent: "space-around"}}>
                <CardNome>{Nome}</CardNome>
                <CardIdade style={{margin: "8px 0"}}>{Idade}</CardIdade>
                <CardDescricao style={{margin: '0 auto'}}>{Descricao}</CardDescricao>
            </div>
        </CardContainer>
    );
}

export default GrupoCards;


