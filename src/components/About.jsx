import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import styled from "styled-components";
import gears from "../assets/gears.jpeg";
import welding from "../assets/welding2.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PrimaryContainer>
        <MainContainer>
          <Container>
            <p>Finding A Permanent Solution Is</p>
            <p>Our Ultimate Goal!</p>
            <img src={welding} alt="welding" />
          </Container>
          <SecondContainer>
            <SecondContainerParagraph>
              Since 2018, Our Facility Has Succeeded In Understanding The Needs
              Of The Industry And Creating Reliable Products To Serve Them All.
            </SecondContainerParagraph>
            <ThirdContainerParagraph>
              &nbsp; &nbsp; &nbsp; At SmartConfex, we take pride in our track
              record of delivering top-quality products with unwavering
              commitment. With numerous successfully completed projects, we
              bring a wealth of experience to precision machining and parts
              production. Trust us to consistently deliver high-quality results,
              as we continue to set industry standards in machining excellence.”
            </ThirdContainerParagraph>
            <img src={gears} alt="gears" />
          </SecondContainer>
        </MainContainer>
        <hr></hr>

        <FactsGrid>
          <Fact>
            <FactNumber>1,328</FactNumber>
            <FactLabel>Products</FactLabel>
          </Fact>
          <Fact>
            <FactNumber>6</FactNumber>
            <FactLabel>Years of Experience</FactLabel>
          </Fact>
          <Fact>
            <FactNumber>173</FactNumber>
            <FactLabel>Completed Projects</FactLabel>
          </Fact>
        </FactsGrid>
        <br></br>
      </PrimaryContainer>
      <Footer />
    </div>
  );
};

const PrimaryContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  border-radius: 0.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Montserrat", sans-serif;
`;

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Container = styled.div`
  flex: 1;
  margin: 20px;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  color: #2b161b;
  line-height: 1.4em;
  font-size: 34px;
  font-weight: 700;
  font-family: "Playfair Display", serif;
  img {
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
    height: auto;
    object-fit: cover;
  }
`;

const SecondContainer = styled.div`
  flex: 1;
  margin: 20px;

  padding: 30px;
  border-radius: 10px;
  text-align: center;
  img {
    border-radius: 10px;
    width: 100%;
    max-width: 600px;
    height: auto;
    object-fit: cover;
  }
`;

const FactsGrid = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Fact = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`;

const FactNumber = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #0077b6;
  margin-bottom: 10px;
`;

const FactLabel = styled.p`
  font-size: 1.2rem;
  color: #023e8a;
`;

const SecondContainerParagraph = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #2b161b;
  line-height: 1.2em;
  text-align: left;
  font-family: "Playfair Display", serif;
`;

const ThirdContainerParagraph = styled.p`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  color: #453e3e;
  letter-spacing: 0.4px;
  line-height: 1.5em;
`;

export default About;
