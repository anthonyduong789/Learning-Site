import styled from 'styled-components';


const InfoHeader = styled.h1`
    color: black;
    font-size: 2rem;
    font family: "Itim", "regular";
    font-weight: 550;
    text-decoration: underline;
`;

const InfoText = styled.p`
    color: black;
    font-size: 1.5rem;  

`;



function GapInfoPage() {
  return (
    <header className="gap-info-page">
      <InfoHeader>Use of this timer</InfoHeader>
      <InfoText>
      Whether mastering an instrument or a new language, scientific studies have shown that incorporating random 10-second pauses into practice sessions can significantly speed up the learning process.<br/><br/>

this appllication is a simple, easy-to-use tool that allows users to customize their practice sessions with random pauses.
      </InfoText>
      
    </header>
  );
}

export default GapInfoPage;