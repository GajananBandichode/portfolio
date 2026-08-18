import {
  FaLightbulb,
  FaListCheck,
  FaUsers,
  FaHeadset
} from "react-icons/fa6";

const services = [
  {
    icon: <FaLightbulb />,
    title: "Innovative Solutions",
    text:
      "Creating creative and practical solutions for real-world problems."
  },
  {
    icon: <FaListCheck />,
    title: "Problem Solving",
    text:
      "Breaking complex problems into simple and effective solutions."
  },
  {
    icon: <FaUsers />,
    title: "Team Collaboration",
    text:
      "Working effectively with teams to achieve project goals."
  },
  {
    icon: <FaHeadset />,
    title: "Technical Support",
    text:
      "Helping with technical issues and providing reliable solutions."
  }
];

function Services() {
  return (
    <section className="section services-section" id="services">

      <div className="section-heading">

        <p>WHAT I DO</p>

        <h2>Services</h2>

        <span></span>

      </div>

      <div className="services-grid">

        {services.map((service) => (
          <div className="service-card" key={service.title}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;