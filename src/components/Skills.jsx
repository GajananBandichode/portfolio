import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaJsSquare,
  FaUsers
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFirebase
} from "react-icons/si";

import {
  MdEngineering
} from "react-icons/md";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "#e34f26"
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "#1572b6"
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    color: "#7952b3"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#06b6d4"
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    color: "#f24e1e"
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    color: "#f7df1e"
  },
  {
    name: "React.js",
    icon: <FaReact />,
    color: "#61dafb"
  },/*
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "#339933"
  },*/
  {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "#ffca28"
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F05032"
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "#181717"
  },
  {
    name: "Engineering",
    icon: <MdEngineering />,
    color: "#607d8b"
  },
  {
    name: "Soft Skills",
    icon: <FaUsers />,
    color: "#1597a8"
  }
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">

      <div className="section-heading">
        <p>MY EXPERTISE</p>

        <h2>Skills</h2>

        <span></span>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>

            <div
              className="skill-icon"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;