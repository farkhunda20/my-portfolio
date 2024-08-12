import React from "react";
import skillsData from "./skillsData";

const Skills = () => {
  const skillsElements = skillsData.map((skill) => {
    return (
      <div key={skill.id} className="skills">
        <img src={skill.img}></img>
        <h3 className="skillName">{skill.skillName}</h3>
        <p>{skill.description}</p>
      </div>
    );
  });

  return (
    <section>
      <h1 className="skills--title top"> Skills </h1>
      <h1 className="skills--title"> My Expertise </h1>
      <div className="skills--container">{skillsElements}</div>
    </section>
  );
};

export default Skills;
