import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillSection from "../Components/SkillSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/design.svg";
import gamedev from "../img/game-dev.svg";
import intelligence from "../img/intelligence.svg";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Title title={"About me"} span={"about me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillSection skill={"JavaScript"} progress={"60%"} width={"60%"} />
        <SkillSection skill={"Reactjs"} progress={"80%"} width={"80%"} />
        <SkillSection skill={"Nodejs"} progress={"60%"} width={"60%"} />
        <SkillSection skill={"React-Native"} progress={"60%"} width={"60%"} />
        <SkillSection skill={"GraphQl"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"MongoDB"} progress={"90%"} width={"90%"} />
        <SkillSection
          skill={"Graphic Designs"}
          progress={"60%"}
          width={"60%"}
        />
        <SkillSection skill={"Web Designs"} progress={"40%"} width={"40%"} />
      </div>
      <Title title={"Services"} span={"Services"} />
      <div className="service-container">
        <ServicesSection
          image={design}
          title={"Web Design"}
          text={
            "Lorem Ipsum is a new way to see justfilly have been in a wielrdsituation"
          }
        />
        <ServicesSection
          image={intelligence}
          title={"Artificial inteligence"}
          text={
            "Lorem Ipsum is a new way to see justfilly have been in a wielrdsituation"
          }
        />
        <ServicesSection
          image={gamedev}
          title={"Game Development"}
          text={
            "Lorem Ipsum is a new way to see justfilly have been in a wielrdsituation"
          }
        />
      </div>
    </div>
  );
};

export default AboutPage;
