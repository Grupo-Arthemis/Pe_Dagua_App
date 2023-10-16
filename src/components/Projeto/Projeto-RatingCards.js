import styled from 'styled-components';

const RatingCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 340px;
    border-radius: 20px;
    border: 1px solid #D4D2E3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: space-evenly;
    padding: 1% 2% ;
    margin: 0 15px;
    margin-bottom: 7%;


    @media (max-width: 600px) {
        height: 250px;
    }
`

const RatingCardNome = styled.h2`
    color: #5D5A88;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    font-family: DM Sans;
    font-size: clamp(1.125rem, 1.011rem + 0.303vw, 1.375rem);
    font-style: normal;
    font-weight: 700;
    line-height: normal; 
`

const RatingCardIdade = styled.h3`
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

const RatingCardDescricao = styled.p`
    color: #9795B5;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    font-family: DM Sans;
    font-size: clamp(0.875rem, 0.761rem + 0.303vw, 1.125rem);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: justify;

    width: 100%;
`



const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StarIcon = styled.i`
  color: ${props => props.$filled ? '#C38F40' : 'gray'};
  font-size: clamp(0.875rem, 0.761rem + 0.303vw, 1.125rem);
`;

function ProjetoRatingCards({Rating, Comentario, Nome, Localizacao}) {
    Rating = Rating || 5;
    Comentario = Comentario || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.";
    Nome = Nome || "Nome do Avaliador";
    Localizacao = Localizacao || "Localização do Avaliador";


    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<StarIcon key={i} className="fa fa-star" $filled={i <= Rating} />);
    }
    return (
        <RatingCardContainer>
            <StarContainer>{stars}</StarContainer>
            <RatingCardDescricao>{Comentario}</RatingCardDescricao>
            <RatingCardNome>{Nome}</RatingCardNome>
            <RatingCardIdade>{Localizacao}</RatingCardIdade>
        </RatingCardContainer>
    );
}

export default ProjetoRatingCards;