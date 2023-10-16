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
        <FirstContainer>
          <p>Get in touch with us</p>
          <div>
            <AboutDivContainer>
              <img src={email} />
              <p>sergiu.bogdan09@yahoo.com</p>
            </AboutDivContainer>
            <AboutDivContainer>
              <img src={phone} />
              <p>0741339534</p>
            </AboutDivContainer>
            <AboutDivContainer>
              <img src={location} />
              <p>CLUJ-NAPOCA, STR. MEHEDINTI, NR. 47-49</p>
            </AboutDivContainer>
          </div>
        </FirstContainer>

        <SecondContainer
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
        </SecondContainer>
        <ThirdContainer>
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
        </ThirdContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  @media (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-evenly;
    padding: 20px;
    flex-direction: column;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
    margin-left: 35px;
  }
`;

const SecondContainer = styled.div`
  display: flex;
  padding: 35px;
  font-family: "Montserrat", sans-serif;
  div {
    display: block;
    background-color: #fff;
    box-shadow: 1px 1px 3px 2px #ddd;
    margin: 0 auto;
    padding: 20px;
    border-radius: 15px;
    @media (max-width: 1024px) {
      margin: 20px auto;

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
    width: calc(100% - 20px);
    @media (max-width: 1024px) {
      width: calc(100% - 16px);
  }
  div span {
    color: rgb(29, 185, 237);
  }
`;

const ThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  position: relative;

  h2 {
    font-size: 24px;
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
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.3rem;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const AboutDivContainer = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const TitleH1 = styled.h2`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
  }
`;

export default Contacts;
