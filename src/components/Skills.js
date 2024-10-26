import React, { useState } from "react";
import "./Skills.css";
import "./Animation.css";

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
  const [activeTab, setActiveTab] = useState("Skills");

  const skillCategories = [
    { title: "🌐 Languages", iconClass: "fas fa-globe", skills: ["JavaScript", "Python", "Java"] },
    { title: "💻 Web Frameworks", iconClass: "fas fa-laptop-code", skills: ["React", "Vue", "Angular"] },
    { title: "🗄️ Databases", iconClass: "fas fa-database", skills: ["MongoDB", "PostgreSQL", "MySQL"] },
    { title: "🎨 Frontend Technologies", iconClass: "fas fa-paint-brush", skills: ["HTML", "CSS", "Sass"] },
    { title: "🛠️ Tools", iconClass: "fas fa-tools", skills: ["Git", "Docker", "Jenkins"] },
    { title: "☁️ Cloud Services", iconClass: "fas fa-cloud", skills: ["AWS", "Azure", "Google Cloud"] },
  ];

  const educationContent = (
    <div className="education-content">
      <h3>Bachelor of Technology in Artificial Intelligence and Machine Learning</h3>
      <p>GGSIPU EDC,  (2022 - Present)</p>
      <ul>
        <li>University School of automation and robotics</li>
        <li>Relevant Coursework: Machine Learning, Data Structures, Algorithms, Cloud Computing</li>
      </ul>
      <h3>Class 12th (CBSE)</h3>
      <p>D.A.V Public School (Janakpuri) </p>

      <h3>Class 10th School (CBSE)</h3>
      <p>M.L. Khanna D.A.V. Public School </p>
      <ul>
        <li>Notable Projects: LiFi Technology-based data transmission using Arduino UNO</li>
      </ul>
    </div>
  );

  const experienceContent = (
    
    <div className="experience-content ">
      <h3>PR Co-Lead - Tradophile Finance Society</h3>
      <p>Entrepreneurship Development Cell, GGSIPU (2024 - Present)</p>
      <ul>
        <li>Organized and managed events promoting financial literacy and entrepreneurship.</li>
        <li>Collaborated with team members to handle public relations and outreach efforts.</li>
      </ul>
      <h3>AI micro Sass Developer Intern</h3>
      <p> Eddy Tech Solutions Inc. (Summer 2023)</p>
      <ul>
        <li>Developed a real-time emotion detection system using Python Tensorflow.</li>
        <li>Implemented REST APIs and optimized database queries for efficient data handling.</li>
      </ul>
    </div>
  );
 

  return (
    <div className="skills-section">
      {/* Unified Header, Content, and Picture */}
      <div className="text-section">
        <h1 className="heading">How My Journey Started...</h1>
        <p className="paragraph animation-left">
          I was introduced to coding at the age of 14 when I embarked on a project focused on LiFi technology, a
          revolutionary method of transmitting data at the speed of light. Using an Arduino UNO, I developed a system that
          was eventually showcased at the CBSE exhibition. My passion for technology continued to grow, and by
          class 10, I chose "Foundation of IT" as an additional subject, diving deeper into programming
          with XML and HTML, where I secured 38 out of 40 marks. This foundation cemented my interest in coding and technology development.
        </p>
        <div className="img animated-section"><img src="6.png" alt="Work Illustration" width="600px" /></div>
      </div>

      {/* Skills, Experience, Education Tab Section */}
      <div className="tab-section">
        <div className="tab-navigation">
          {["Skills", "Experience", "Education"].map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === "Skills" && (
            <div className="skills-container">
              {skillCategories.map((category, index) => (
                <SkillCategory key={index} {...category} />
              ))}
            </div>
          )}
          {activeTab === "Experience" && <div>{experienceContent}</div>}
          {activeTab === "Education" && <div>{educationContent}</div>}
        </div>
      </div>
    </div>
  );
};

export default Skills;
