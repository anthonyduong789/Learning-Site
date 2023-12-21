import styled from "styled-components";

const InfoHeader = styled.h1`
    color: black;
    font-size: 2rem;
    font family: "Itim", "regular";
    font-weight: 550;
    text-decoration: underline;
    text-align: center;
    margin-top: 5vh;
    margin-bottom: 0rem;
    padding-bottom: 0rem
`;

const InfoText = styled.p`
  color: black;
  font-size: 1.5rem;
  margin-top: 0rem;
  padding-top: 0rem;
`;

function GapInfoPage() {
  return (
    <>
      {/* <InfoHeader>Use of this timer</InfoHeader> */}
      <InfoText>
        Whether mastering an instrument or a new language, scientific studies
        have shown that incorporating random 10-second pauses into practice
        sessions can significantly speed up the learning process.
        <br />
        <br />
        this appllication is a simple, easy-to-use tool that allows users to
        customize their practice sessions with random pauses.
      </InfoText>
      <div style={{display:"flex", justifyContent:"center"}}>
      <iframe
        
        src="https://www.youtube.com/embed/yKMvJiQldMQ?si=N9lT7OEhJmTo2gtp"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      </div>
     
    </>
  );
}

export default GapInfoPage;
