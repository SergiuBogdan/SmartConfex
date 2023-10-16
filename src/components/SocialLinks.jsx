import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import styled from "styled-components";

const SocialLinks = () => {
  return (
    <Container>
      <p>
        <BsFacebook />
      </p>
      <p>
        <AiFillInstagram />
      </p>
      <p>
        <BsLinkedin />
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 40px;
  }
  svg {
    font-size: 1.9rem;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      color: lightblue;
    }
  }
`;
export default SocialLinks;
