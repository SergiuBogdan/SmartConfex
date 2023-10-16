/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <Hero />
      <PolicyContainer>
        <TitleContainer>Privacy Policy</TitleContainer>
        <DivContainer>
          <i>
            This privacy statement was last updated on October 14, 2023, and
            applies to citizens of the European Economic Area.
          </i>
          <p>
            In this privacy statement, we explain what we do with the data we
            obtain about you through www.smartconfex.ro .
          </p>
          <p>
            We recommend that you read this statement carefully. In our
            procedures, we comply with the privacy legislation. This means,
            among other things, that:
          </p>
          <p>
            we clearly state the purposes for which we process personal data. We
            do this through this privacy statement;
          </p>
          <li>
            We clearly state the purposes for which we process personal data. We
            do this through this privacy statement;
          </li>
          <li>
            We aim to limit the collection of personal data to only the personal
            data necessary for legitimate purposes;
          </li>
          <li>
            We first obtain explicit consent from you to process your personal
            data in cases requiring your consent;
          </li>
          <li>
            We take appropriate security measures to protect your personal data
            and also require parties that process personal data on our behalf to
            do the same;
          </li>
          <li>
            We respect your right to access your personal data or have it
            corrected or deleted upon request.
          </li>
          <p>
            If you have questions or want to know exactly what data we keep
            about you.
          </p>
          <H3Container>1. Purpose, Data, and Retention Period</H3Container>
          <H3Container>
            1.1 We use your data for the following purpose:
          </H3Container>
          <p>Contact – Via phone, mail, email, and/or web forms</p>
          <p>For this purpose, we use the following data:</p>
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <p>The grounds on which we may process these data are:</p>
          <p>– Execution of an agreement;</p>
          <p>– Retention period;</p>
          <p>– We keep this data until the end of the service.</p>
          <H3Container>
            1.2 For this purpose, we use the following of your data:
          </H3Container>
          <p>– Newsletters</p>
          <p>For this purpose, we use the following data:</p>
          <p>– Obtained consent;</p>
          <p>– Retention period;</p>
          <p>– We keep this data until the end of the service.</p>
          <H3Container>
            1.3 We use your data for the following purpose:
          </H3Container>
          <p>
            – Compiling and analyzing statistics for the improvement of the
            website.
          </p>
          <p>For this purpose, we use the following data:</p>
          <p>– Visitor behavior.</p>
          <p>The basis on which we may process these data is:</p>
          <p>– Obtained consent;</p>
          <p>– Retention period;</p>
          <p>
            We keep this data for the following period: 12 months after the end
            of the service.
          </p>
          <H3Container>2. Cookies</H3Container>
          <p>
            Our website uses cookies. For more information about cookies, please
            refer to our Cookie Policy.
          </p>
          <H3Container>3. Security</H3Container>
          <p>
            We are dedicated to the security of personal data. We take
            appropriate security measures to limit abuse and unauthorized access
            to personal data. This ensures that only necessary persons have
            access to your data, that access to the data is protected, and that
            our security measures are regularly reviewed.
          </p>
          <H3Container>4. Third-Party Websites</H3Container>
          <p>
            This privacy statement does not apply to third-party websites linked
            to our website. We cannot guarantee that these third parties handle
            your personal data in a reliable or secure manner. We recommend
            reading the privacy statements of these websites before using these
            websites.
          </p>
          <H3Container>5. Changes to this Privacy Statement</H3Container>
          <p>
            We reserve the right to make changes to this privacy statement. It
            is recommended to consult this privacy statement regularly in order
            to be aware of any changes. In addition, we will actively inform you
            whenever possible.
          </p>
          <H3Container>6. Accessing and Modifying Your Data</H3Container>
          <p>
            If you have any questions or want to know which personal data we
            have about you, please contact us. You have the following rights:
          </p>
          <li>
            You have the right to know why your personal data is needed, what
            will happen to it, and how long it will be retained.
          </li>
          <li>
            Right to access: You have the right to access your personal data
            that we know.
          </li>
          <li>
            Right to rectification: You have the right to complete, correct,
            delete, or block your personal data whenever you wish.
          </li>
          <li>
            If you give us your consent to process your data, you have the right
            to withdraw that consent and have your personal data deleted.
          </li>
          <li>
            Right to data portability: You have the right to request all your
            personal data from the controller and transfer it in its entirety to
            another controller.
          </li>
          <li>
            Right to object: You can object to the processing of your data. We
            comply with this, unless there are justified grounds for processing.
          </li>
          <p>
            Please make sure to always clearly state who you are, so that we can
            be certain that we do not modify or delete any data of the wrong
            person.
          </p>
          <H3Container>7. Filing a Complaint</H3Container>
          <p>
            If you are not satisfied with the way in which we handle (a
            complaint about) the processing of your personal data, you have the
            right to submit a complaint to the Data Protection Authority.
          </p>
          <H3Container>8. Contact Details</H3Container>
          <p>Address: CLUJ-NAPOCA, STR. MEHEDINTI, NR. 47-49</p>
          <p>Phone: 0758876968</p>
          <p>Email: vladtrifan@smartconfex.ro</p>
        </DivContainer>
        <hr />
      </PolicyContainer>
      <Footer />
    </>
  );
}

const PolicyContainer = styled.div`
  max-width: 1380px;
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

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    color: gray;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

const H3Container = styled.h3`
  color: #525151;
`;

const DivContainer = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: gray;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const TitleContainer = styled.div`
  font-size: 35px;
  text-align: center;
  font-weight: bold;
`;
