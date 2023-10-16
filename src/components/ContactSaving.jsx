import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contacts = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <FirstContainer>
          <p>Get in touch with usdsadsadasfasfasf</p>
        </FirstContainer>

        <SecondContainer
          action="https://formsubmit.co/9e4963c4078efc3ca497d5f8a07ce108"
          method="POST"
        >
          <div>
            <h1>
              Contact <span>Here</span>
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
      </MainContainer>
      <Footer />
    </>
  );
};

const MainContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const FirstContainer = styled.form`
  margin: 0 auto;
  border: 1px solid black;
`;

const SecondContainer = styled.form`
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  div {
    display: block;
    background-color: #fff;
    box-shadow: 1px 1px 3px 2px #ddd;
    margin: 40px auto;
    max-width: 600px;
    max-height: 700px;
    padding: 20px;
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
  }
  div span {
    color: rgb(29, 185, 237);
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

export default Contacts;
