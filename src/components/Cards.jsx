import { useState } from "react";
import styled from "styled-components";
import Milling from "../assets/Milling.jpeg";
import Turning from "../assets/Turning.jpeg";
import LaserCutting from "../assets/LaserCutting.jpeg";
import Grinding from "../assets/Grinding.jpeg";
import WaterjetCutting from "../assets/WaterjetCutting.jpeg";
import WireEDM from "../assets/WireEDM.jpeg";
// import PlasmaCutting from "../assets/PlasmaCutting.jpeg";

export default function Recommend() {
  const data = [
    {
      image: Milling,
      title: "Milling",
      subTitle:
        "At our precision machining facility, we specialize in crafting top-quality components using advanced CNC machines with 3 to 5-axis capabilities. Our dedication to excellence ensures that each part we manufacture adheres to the highest standards of quality and performance.",
    },
    {
      image: Turning,
      title: "Turning",
      subTitle:
        "“In our machining facility, we specialize in crafting top-quality precision parts. Our advanced CNC machines and unwavering commitment to excellence ensure every component meets the highest standards of quality and performance.",
    },
    {
      image: LaserCutting,
      title: "Laser Cutting",
      subTitle:
        "Our advanced manufacturing facility specializes in precision engineering, utilizing cutting-edge CNC machines, laser cutting, and 3 to 5-axis capabilities. Our unwavering commitment ensures every component meets the highest standards of quality and performance.",
    },
    {
      image: Grinding,
      title: "Grinding",
      subTitle:
        "Our advanced manufacturing facility excels in precision engineering, utilizing state-of-the-art CNC machines for ultra-precise grinding. Achieving micro-level accuracy and superior surface quality with tight tolerances ensures our top-quality, high-performance products.",
    },
    {
      image: WaterjetCutting,
      title: "Waterjet Cutting",
      subTitle:
        "In our cutting-edge manufacturing facility, we specialize in precision engineering, using advanced CNC machines for accurate waterjet cutting. This enables us to shape materials intricately, meeting the highest standards of quality and performance.",
    },
    {
      image: WireEDM,
      title: "Wire EDM",
      subTitle:
        "In our cutting-edge facility, we specialize in precision engineering, utilizing advanced CNC wire EDM machines with 3 to 5-axis capabilities. Our expertise ensures the creation of top-quality, highly accurate components, delivering superior performance.",
    },
    // {
    //   image: PlasmaCutting,
    //   title: "Plasma Cutting",
    //   subTitle:
    //     "Our expertise in plasma cutting ensures that every component we produce meets the most stringent standards of quality and performance. This technology enables efficient, precise cutting of materials, from metals to plastics, with high-speed accuracy and minimal heat-affected zones.",
    // },
  ];

  const packages = ["Precision Cutting"];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>The manufacturing processes we perform</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                key={index}
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>

      <MainContainer>
        <div className="container">
          {data.map((milling, index) => {
            return (
              <div key={index} className="secondContainer">
                <img src={milling.image} alt="mill image" />
                <H3CardTitle>{milling.title}</H3CardTitle>
                <CardParagraph>{milling.subTitle}</CardParagraph>
                <div className="info">
                  <h4>{milling.cost}</h4>
                </div>
                <div className="distance">
                  <span>{milling.duration}</span>
                </div>
              </div>
            );
          })}
        </div>
      </MainContainer>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
  ul {
    display: flex;
    list-style-type: none;
    width: max-content;
    li {
      padding: 1rem 2rem;
      border-bottom: 0.1rem solid black;
    }
    .active {
      border-bottom: 0.5rem solid #8338ec;
    }
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    overflow-x: hidden;
    padding: 30px;
    
    @media (max-width: 1024px) { 
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 30px;
      justify-content: center;
      padding-top: 20px;
    }
  
    .secondContainer {
      display: flex;
      width: 450px;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #e1e8f2;
      border-radius: 1rem;
      img {
        width: 450px;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
      }

      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }


      @media (max-width: 1024px)  {

        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background-color: #e1e8f2;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;

      }
      @media (max-width: 400px)  {

        display: flex;
        flex-direction: column;
        width: 400px;
        gap: 0.5rem;
        background-color: #e1e8f2;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        padding: 5px;
      }
    }
  
   
    @media (min-width: 1472px) and (max-width: 1700px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 50px;
        grid-row-gap: 50px;
        padding-left: 50px;      
    }

    @media (min-width: 1025px) and (max-width: 1471px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);     
      grid-row-gap: 50px;
      justify-items: center;
      padding: 50px;
    }

  }
  @media (max-width: 1024px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destination {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100%;
    }
    .destinations {
      display: block;
      margin: 0 auto;
      padding: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const MainContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1024px) {
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 30px;
    justify-content: center;
  }
`;

const CardParagraph = styled.p`
  font-size: 500;
  font-size: 17px;
  line-height: 20px;
  padding: 25px;
`;

const H3CardTitle = styled.h3`
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
`;
