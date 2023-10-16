/* eslint-disable react/prop-types */
import styled from "styled-components";

const Modal = ({ showModal, onAccept, onRefuse }) => {
  if (!showModal) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalTitle>Administrează consimțămintele pentru cookie-uri</ModalTitle>
      <ParagraphContainer>
        Utilizăm cookie-uri pentru a vă oferi cea mai bună experiență online.
      </ParagraphContainer>
      <ButtonContainer>
        <AcceptButton onClick={onAccept}>Accept</AcceptButton>
        <RefuseButton onClick={onRefuse}>Refuse</RefuseButton>
      </ButtonContainer>
      <LinkContainer>
        <div>
          <p>
            <a href="/cookies">Cookie Policy</a>
          </p>
        </div>
        <div>
          <p>
            <a href="/policy">Privacy Policy</a>
          </p>
        </div>
      </LinkContainer>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  margin-left: 20px;
  margin-bottom: 30px;
  height: 200px;
  width: 570px;

  background-color: #d1d1cf;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 15px 2px rgba(0, 0, 0, 0.1);
  z-index: 9999;

  @media screen and (min-width: 280px) and (max-width: 980px) {
    margin: 0 auto;
    width: 100%;
  }
`;

const ParagraphContainer = styled.p`
  font-size: 14px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ModalTitle = styled.h2`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    gap: 10px;
    margin-bottom: -20px;
  }
`;

const AcceptButton = styled.button`
  background-color: #1a1a1a;
  color: white;
  width: 250px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  border-radius: 8px;
  transition: border-color 0.25s;

  margin-bottom: 30px;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

const RefuseButton = styled.button`
  background-color: #1a1a1a;
  color: white;
  border: 1px solid transparent;
  width: 250px;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  border-radius: 8px;
  transition: border-color 0.25s;
  margin-bottom: 30px;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
