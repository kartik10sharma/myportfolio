import React, { useState } from "react";
import "./Skills.css";
import'./Animation.css';

const SkillCategory = ({ title, iconClass, skills }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`skill-category animation-up ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="skill-header">
        <i className={iconClass}></i>
        <h3>{title}</h3>
        <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
      </div>
      <div className="skills-content" style={{ display: isOpen ? "block" : "none" }}>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "🌐 Languages",
      iconClass: "fas fa-globe",
      skills: ["JavaScript", "Python", "Java"],
    },
    {
      title: "💻 Web Frameworks",
      iconClass: "fas fa-laptop-code",
      skills: ["React", "Vue", "Angular"],
    },
    {
      title: "🗄️ Databases",
      iconClass: "fas fa-database",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      title: "🎨 Frontend Technologies",
      iconClass: "fas fa-paint-brush",
      skills: ["HTML", "CSS", "Sass"],
    },
    {
      title: "🛠️ Tools",
      iconClass: "fas fa-tools",
      skills: ["Git", "Docker", "Jenkins"],
    },
    {
      title: "☁️ Cloud Services",
      iconClass: "fas fa-cloud",
      skills: ["AWS", "Azure", "Google Cloud"],
    },
  ];

  return (
    <div className="skills-section">
      <div className="text-section">
        <h1 className="heading">How My journey Started...</h1>
        <p className="paragraph animation-left">
        I was introduced to coding at the age of 14 when I embarked on a project focused on LiFi technology, a
         revolutionary method of transmitting data at the speed of light. Using an Arduino UNO, I developed a system that
          was eventually showcased at the CBSE exhibition. My passion for technology continued to grow, and by
           class 10, I chose "Foundation of IT" as an additional subject, diving deeper into programming
            with XML and HTML, where I secured 38 out of 40 marks. This foundation cemented my interest in coding and technology development.
        </p><div className="img animated-section"><img src="6.png" alt="Work Illustration" width="600px" /></div>
        
      </div>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            iconClass={category.iconClass}
            skills={category.skills}
          />
        ))}
      </div>
    </div>

  );
};

export default Skills;
