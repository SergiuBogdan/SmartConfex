/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Modal from "./Modal";

export default function Cookies() {
  const [showModal, setShowModal] = useState(true);

  const handleAccept = () => {
    console.log("Cookies accepted!");
    setShowModal(false);
  };

  const handleRefuse = () => {
    console.log("Cookies refused!");
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <TermsContainer>
        <TitleContainerRow>Cookie Policy</TitleContainerRow>

        <p>
          This Cookie Policy was last updated on October 14, 2023., and applies
          to citizens and permanent residents of the European Economic Area and
          Switzerland.
        </p>

        <h3>1. Introduction</h3>
        <p>
          Our website, www.smartconfex.ro (hereinafter referred to as "the
          website"), uses cookies and other similar technologies (for
          convenience, all technologies are referred to as "cookies"). Cookies
          are also placed by third parties we have engaged. In the document
          below, we inform you about the use of cookies on our website.
        </p>

        <h3>2. What are cookies?</h3>
        <p>
          A cookie is a simple small file that is sent along with pages of this
          website and stored by your browser on your hard drive of your computer
          or another device. The information stored therein may be returned to
          our servers or to the servers of the relevant third parties during a
          subsequent visit.
        </p>

        <h3>3. What are scripts?</h3>
        <p>
          A script is a piece of code that is used to make our website function
          properly and interactively. This code is executed on our server or on
          your device.
        </p>

        <h3>4. What is a web beacon?</h3>
        <p>
          A "web beacon" (or a "pixel tag") is a small, invisible piece of text
          or image on a website that is used to monitor traffic. To do this,
          various data about you is stored using web beacons.
        </p>

        <h3>5. Cookies</h3>

        <h3>5.1 Technical or functional cookies</h3>
        <p>
          Some cookies ensure that certain parts of the website work properly
          and that your user preferences remain known. By placing functional
          cookies, we make it easier for you to visit our website. This way, you
          do not need to repeatedly enter the same information when visiting our
          website and, for example, the items remain in your shopping cart until
          you pay. We may place these cookies without your consent.
        </p>

        <h3>5.2 Statistical cookies</h3>
        <p>
          We use statistical cookies to optimize the website experience for our
          users. With these statistical cookies, we get insights into how our
          website is used. We ask your permission to place statistical cookies.
        </p>

        <h3>5.3 Advertising cookies</h3>
        <p>
          On this website, we use advertising cookies, enabling us to
          personalize the advertisements for you; we (and third parties) gain
          insights into the campaign results. This happens on the basis of a
          profile that we create based on your click and surfing on and outside
          www.smartconfex.ro . With these cookies, as a website visitor, you are
          associated with a unique ID, so you do not see the same ad multiple
          times, for example.
        </p>

        <h3>5.4 Marketing/tracking cookies</h3>
        <p>
          Marketing/tracking cookies are cookies (or any other form of local
          storage) used in the process of creating user profiles to display
          advertising or to track the user on this website or several websites
          for similar marketing purposes.
        </p>
        <p>
          As these are tracking cookies, we ask your permission to place them.
        </p>

        <h3>5.5 Social media</h3>
        <p>
          On our website, we include content from Facebook and Instagram to
          promote web pages (e.g., "like", "pin") or share (e.g., "tweet") on
          social networks such as Facebook and Instagram. This content is
          embedded with code derived from Facebook and Instagram and places
          cookies. This content may store and process certain information for
          personalized advertising.
        </p>
        <p>
          Please read the privacy statement of these social networks (which may
          change regularly) to find out what they do with your (personal) data
          processed through these cookies. The data retrieved is anonymized as
          much as possible. Facebook and Instagram are located in the United
          States.
        </p>

        <h3>6. Placed cookies</h3>

        <p>
          -Google Fonts
          <br />
          Marketing/Tracking
          <br />
          Consent to service google-fonts
        </p>

        <p>
          -Diverse
          <br />
          Purpose under investigation
          <br />
          Consent to service diverse
        </p>

        <h3>7. Consent</h3>
        <p>
          When you visit our website for the first time, we will show you a
          pop-up with an explanation about cookies. After you click "Accept,"
          you give us your consent to use all the cookies and plugins described
          in the pop-up and this Cookie Policy. You can disable the use of
          cookies via your browser, but please note that our website may no
          longer work properly.
        </p>

        <h3>7.1 Manage consent settings</h3>
        <p>
          You loaded the Cookie Policy without JavaScript support. In AMP, you
          can use the manage consent button at the bottom of the page.
        </p>

        <h3>8. Enabling/disabling and deleting cookies</h3>
        <p>
          You can use your internet browser to automatically or manually delete
          cookies. You can also specify that certain cookies may not be placed.
          Another option is to change the settings of your internet browser so
          that you receive a message each time a cookie is placed. For more
          information about these options, please refer to the instructions in
          the Help section of your browser.
        </p>
        <p>
          Please note that our website may not work correctly if all cookies are
          disabled. If you do delete the cookies in your browser, they will be
          placed again after your consent when you visit our website again.
        </p>

        <h3>9. Your rights regarding personal data</h3>
        <p>You have the following rights regarding personal data:</p>

        <li>
          You have the right to know why your personal data is needed, what will
          happen to it, and how long it will be retained.
        </li>
        <li>
          Right of access: You have the right to access your personal data that
          we know about.
        </li>
        <li>
          Right to rectification: You have the right to supplement, correct,
          delete, or block your personal data whenever you wish.
        </li>
        <li>
          If you give us your consent to process your data, you have the right
          to revoke that consent and to have your personal data deleted.
        </li>
        <li>
          Right to transfer your data: You have the right to request all your
          personal data from the data controller and to transfer them in their
          entirety to another data controller.
        </li>
        <li>
          Right to object: You can object to the processing of your data. We
          comply with this, unless there are justified grounds for processing.
        </li>

        <p>
          To exercise these rights, please contact us. Please refer to the
          contact details at the bottom of this Cookie Policy. If you have a
          complaint about how we handle your data, we would like to hear from
          you, but you also have the right to submit a complaint to the
          supervisory authority (the Data Protection Authority).
        </p>

        <h3>10. Contact details</h3>
        <p>
          For questions and/or comments about our Cookie Policy and this
          statement, please contact us using the following contact details:
        </p>
        <p>
          SMART CONFEX S.R.L
          <br />
          STR. MEHEDINTI, NR. 47-49
          <br />
          Cluj, Cluj Napoca
          <br />
          Romania
          <br />
          Website: www.smartconfex.ro
          <br />
          Email: vladtrifan@smartconfex.ro
          <br />
          Phone number: 0758876968
        </p>

        <p>
          This Cookie Policy was synchronized with cookiedatabase.org on October
          14, 2023.
        </p>
      </TermsContainer>
      <Modal
        showModal={showModal}
        onAccept={handleAccept}
        onRefuse={handleRefuse}
      />
      <Footer />
    </>
  );
}

const TermsContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Montserrat", sans-serif;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: #525151;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    color: gray;
  }
`;

const TitleContainerRow = styled.div`
  margin-top: 60px;
  font-size: 30px;
  font-weight: bold;
`;

<input></input>;
