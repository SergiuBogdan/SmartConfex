import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import phone from "../assets/phoneAbout.png";
import email from "../assets/emailAbout.png";
import location from "../assets/locationAbout.png";

const Contacts = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MainContainer>
        <WrapperContainer>
          <FirstContainer>
            <p>Get in touch with us</p>
            <div>
              <AboutDivContainer>
                <IconWrapper>
                  <img src={email} />
                </IconWrapper>
                <p>vladtrifan@smartconfex.ro</p>
              </AboutDivContainer>
              <AboutDivContainer>
                <IconWrapper>
                  <img src={phone} />
                </IconWrapper>
                <p>0758876968</p>
              </AboutDivContainer>
              <AboutDivContainer>
                <IconWrapper>
                  <img src={location} />
                </IconWrapper>
                <p>CLUJ-NAPOCA, STR. MEHEDINTI, NR. 47-49</p>
              </AboutDivContainer>
            </div>
          </FirstContainer>
          <FormContainer
            action="https://formsubmit.co/9e4963c4078efc3ca497d5f8a07ce108"
            method="POST"
          >
            <div>
              <h1>
                Contact Us <span>Here</span>
              </h1>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Enter name"
                required
              />
              <input
                type="email"
                name="email"
                id=""
                placeholder="Your email"
                required
              />
              <input
                type="phone"
                name="phone"
                id=""
                placeholder="Phone number"
                required
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Type your message here..."
                required
              />

              <SubmitButton type="submit">Submit</SubmitButton>
            </div>
          </FormContainer>
        </WrapperContainer>
        <GoogleMapsContainer>
          <TitleH1>You can find us here</TitleH1>
          <br></br>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d683.4269899865078!2d23.560375769725777!3d46.75094019819529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490e71bba9753d%3A0x4d4fef376948b75d!2sBloc%20C11%2C%20Strada%20Mehedin%C8%9Bi%2047-49%2C%20Cluj-Napoca%20400675!5e0!3m2!1sro!2sro!4v1697465856861!5m2!1sro!2sro"
            width="450px"
            height="450px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </GoogleMapsContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  padding: 2px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  @media (max-width: 1024px) {
    display: flex;
    align-items: stretch;
    justify-content: space-evenly;
    padding: 20px;
    flex-direction: column;
  }
`;

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10%;
  padding: 30px;
  @media (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 0;
  }
`;

const FirstContainer = styled.div`
  font-size: 45px;
  img {
    display: flex;
    justify-content: space-between;
    width: 3rem;
  }

  @media (max-width: 1024px) {
    font-size: 35px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  font-family: "Montserrat", sans-serif;

  div {
    display: block;
    background-color: #fff;
    width: 470px;
    height: 600px;
    box-shadow: 1px 1px 3px 2px #ddd;
    margin: 0 auto;
    padding: 25px;
    border-radius: 15px;

    span {
      color: rgb(29, 185, 237);
    }

    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 30px;
      width: 350px;
      margin-top: 2rem;
    }
  }

  div input,
  textarea {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px auto;
    padding: 8px;
    background-color: #f1f1f1;
    border: 1px solid #ddd;
    border: none;
    width: calc(100% - 20px);
    margin-top: 35px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px 2px #ddd;
    @media (max-width: 1024px) {
      width: calc(100% - 16px);
    }
  }
`;

const GoogleMapsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 25px;
    margin-bottom: 10px;
  }

  iframe {
    width: 100%;
    height: 450px;
    border: 0;
    border-radius: 15px;
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    iframe {
      width: 100vw;
      height: 450px;
      border: 0;
      border-radius: 15px;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.3rem;
  padding: 1rem 1.8rem;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 9px;
  transition: background-color 0.3s ease-in-out;
  box-shadow: 1px 1px 3px 2px #ddd;

  &:hover {
    background-color: #0056b3;
    box-shadow: 1px 1px 3px 2px #ddd;
  }

  &:active {
    transform: translateY(5px);
    box-shadow: 1px 1px 3px 2px #ddd;
  }

  transition: transform 0.5s ease-in-out;
`;

const AboutDivContainer = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  gap: 15px;
  margin-top: 60px;
`;

const TitleH1 = styled.h1`
  font-size: 35px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  img {
    width: 3rem;
    transition: transform 0.3s, translate 0.3s;
  }
  &:hover img {
    transform: scale(1.2);
    translate: 0 -10px;
  }
`;

export default Contacts;
