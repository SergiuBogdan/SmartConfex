import SOL from "../assets/SOL.png";
import SAL from "../assets/SAL.png";
import styled from "styled-components";

const Copyrights = () => {
  return (
    <Copyright>
      <p>Copyright &copy; 2023 Sergiu. All rights reserved</p>

      <FirstDiv>
        <div>
          <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=EN">
            <img src={SOL} alt="ANPC" className="anpc" />
          </a>
        </div>
        <div>
          <a href="https://anpc.ro/ce-este-sal/">
            <img src={SAL} alt="ANPC" className="anpc" />
          </a>
        </div>
      </FirstDiv>
    </Copyright>
  );
};

const Copyright = styled.div`
  display: flex;
  width: 190%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  left: 0;
  transform: translate(300px);
  top: 30px;
  color: white;
  gap: 5px;
  margin: 2.5rem auto;

  @media (min-width: 1025px) and (max-width: 1535px) {
    display: block;
    width: 100%;
  }

  @media (max-width: 1024px) {
    position: relative;
    left: 0;
    display: grid;
    grid-template-columns: 2fr;
    transform: translate(0px) !important ;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
}
    ul {
      flex-direction: column;
    }
    .social__links {
      display: flex;
      flex-direction: row;
    }
  }
`;

const FirstDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export default Copyrights;
