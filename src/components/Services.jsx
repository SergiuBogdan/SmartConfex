import styled from "styled-components";
import milling from "../assets/machine.png";
import laser from "../assets/laser.png";
import custom from "../assets/custom.png";
import prototype from "../assets/prototype.png";

export default function Services() {
  const data = [
    {
      icon: milling,
      title: "Precision Machining",
      subTitle:
        "Expert milling, turning, and EDM services for precise components and parts.",
    },
    {
      icon: laser,
      title: "Laser Cutting Solutions",
      subTitle:
        "High-quality laser cutting services for intricate and accurate material processing.",
    },
    {
      icon: custom,
      title: "Custom Fabrication",
      subTitle:
        "Tailored solutions for unique projects, ensuring top-quality manufacturing and assembly.",
    },
    {
      icon: prototype,
      title: "Rapid Prototyping",
      subTitle:
        "Fast and efficient prototyping services to bring your designs to life swiftly and accurately.",
    },
  ];
  return (
    <div>
      <H1>WE OFFER !</H1>
      <Section id="services">
        {data.map((service, index) => {
          return (
            <div key={index} className="service">
              <div className="icon">
                <img src={service.icon} alt="" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.subTitle}</p>
            </div>
          );
        })}
      </Section>
    </div>
  );
}

const Section = styled.section`
  padding: 0rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const H1 = styled.h1`
  height: 2vw;
  text-align: center;
  font-size: 55px;
  align-items: center;
  margin: 3rem auto;
  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
    height: 6vw;
  }
`;
