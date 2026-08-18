import {
  FaUser,
  FaRocket,
  FaBullseye
} from "react-icons/fa";

const aboutData = [
  {
    icon: <FaUser />,
    title: "Who I Am",
    text:
      "A passionate learner interested in Technology, Artificial Intelligence and Automobile."
  },
  {
    icon: <FaRocket />,
    title: "What I Do",
    text:
      "I create websites, applications and practical projects using modern technologies."
  },
  {
    icon: <FaBullseye />,
    title: "My Goal",
    text:
      "To continuously improve my technical skills and create useful real-world solutions."
  }
];

function About() {
  return (
    <section className="section" id="about">

      <div className="section-heading">

        <p>GET TO KNOW ME</p>

        <h2>About Me</h2>

        <span></span>

      </div>

      <div className="about-grid">

        {aboutData.map((item) => (
          <div className="about-card" key={item.title}>

            <div className="about-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default About;