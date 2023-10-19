import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Titulo01 = styled.h1`
    color: #fff;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: DM Sans;
    font-size: clamp(2.813rem, 2.639rem + 0.926vw, 3.75rem);
    font-style: normal;
    font-weight: 700;
`;

export const Subtitulo01 = styled.h2`
    color: #fff;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: DM Sans;
    font-size: clamp(1.563rem, 1.389rem + 0.926vw, 2.5rem);
    font-style: normal;
    font-weight: 700;
`;

export const Subtitulo02 = styled.h3`
    color: #fff;
    text-align: center;
    font-family: DM Sans;
    font-size: clamp(1.063rem, 0.889rem + 0.926vw, 2rem);
    font-style: normal;
    font-weight: 700;
`;

export const Paragrafo01 = styled.p`
    color: #fff;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: DM Sans;
    font-size: clamp(0.938rem, 0.764rem + 0.926vw, 1.875rem);
    font-style: normal;
    font-weight: 400;
`;

export const BotaoPrimario01 = styled(Link)`
    color: #fff;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: DM Sans;
    font-size: clamp(0.625rem, 0.509rem + 0.617vw, 1.25rem);
    font-style: normal;
    font-weight: 700;
    border-radius: 9px;
    display: flex;
    padding: 2% 3%;
    align-items: center;
    gap: 8px;
    background-color: #238ca4;
    border: none;
    transition: all 0.2s ease-in-out;

    &:hover {
    color: #fff;
    background-color: #403e61;
    }

    @media (max-width: 600px) {
        width: 40%;
        padding: 3% 3%;
        
    }
`

export const BotaoPrimario02 = styled.button`
    color: #fff;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: DM Sans;
    font-size: clamp(0.625rem, 0.509rem + 0.617vw, 1.25rem);
    font-style: normal;
    font-weight: 700;
    border-radius: 9px;
    display: flex;
    padding: 2% 3%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #5D5A88;
    border: none;
    width: 100%;
    transition: all 0.2s ease-in-out;

    &:hover {
    color: #fff;
    background-color: #201C4B;
    }
`

export const BotaoSecundario01 = styled(Link)`
    color: #5d5a88;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: DM Sans;
    font-size: clamp(0.625rem, 0.509rem + 0.617vw, 1.25rem);
    font-style: normal;
    font-weight: 700;
    border-radius: 9px;
    display: flex;
    padding: 2% 3%;
    align-items: center;
    gap: 8px;
    background-color: #fff;
    border: 1px solid #d4d2e3;
    transition: all 0.2s ease-in-out;

    &:hover {
    color: #fff;
    background-color: #403e61;
    }

    @media (max-width: 600px) {
        width: 40%;
        padding: 3% 3%;
        
    }
`

