import { FaEye, FaLink } from "react-icons/fa";

import certificate2 from "../assets/img/2.jpg";
import certificate3 from "../assets/img/3.jpg";
import certificate4 from "../assets/img/4.jpg";
import certificate5 from "../assets/img/5.jpg";
import certificate6 from "../assets/img/6.jpg";
import certificate7 from "../assets/img/7.jpg";

/* =========================================================
   CERTIFICATES DATA
========================================================= */

const certificates = [
  {
    title: "Enhancing Soft Skills and Personality",
    description:
      "Enhancing Soft Skills and Personality certificate from NPTEL.",
    image: certificate2,
    link: "https://drive.google.com/file/d/1ERGJnLGQk3kEKX4L9QbXOdo0aC3501Ze/view?usp=drive_link",
  },

  {
    title: "Research Methodology",
    description:
      "Research Methodology certificate from NPTEL.",
    image: certificate3,
    link: "https://drive.google.com/file/d/1DenNSaSsP48oyLXGf4TdKLfqOFNYw07I/view?usp=drive_link",
  },

  {
    title: "Web Development",
    description:
      "Web Development certificate from Proxenix.",
    image: certificate4,
    link: "https://drive.google.com/file/d/1uvlOl4ZILOfINiZGNAL8JTRPAnDyTGMt/view?usp=drive_link",
  },

  {
    title: "Python Development",
    description:
      "Python Development certificate from IntelliseIT.",
    image: certificate5,
    link: "https://drive.google.com/file/d/1PJYcK0Gn_bTto9BpS04nA9wjvD2lEJ_T/view?usp=drive_link",
  },

  {
    title: "Web Designing",
    description:
      "Web Designing certificate from IntelliseIT.",
    image: certificate6,
    link: "https://drive.google.com/file/d/1LkwtlDDYlANjcogPt8tKqQUS73_cHaxC/view?usp=drive_link",
  },

  {
    title: "Web Development",
    description:
      "Web Development certificate from IntelliseIT.",
    image: certificate7,
    link: "https://drive.google.com/file/d/1WBLIGaH7QSQpQ5MXhAvP7GGfWCoQERLt/view?usp=sharing",
  },
];


/* =========================================================
   CERTIFICATES COMPONENT
========================================================= */

function Certificates() {
  return (
    <section
      className="section certificates-section"
      id="certificates"
    >

      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="section-heading certificates-heading">

        <p>MY ACHIEVEMENTS</p>

        <h2>Certificates</h2>

        <span></span>

      </div>


      {/* =====================================================
          CERTIFICATES GRID
      ===================================================== */}

      <div className="certificates-grid">

        {certificates.map((certificate, index) => (

          <div
            className="certificate-card"
            key={index}
          >

            {/* =================================================
                CERTIFICATE IMAGE
            ================================================= */}

            <div className="certificate-image">

              <img
                src={certificate.image}
                alt={certificate.title}
              />


              {/* ===============================================
                  HOVER ACTION BUTTONS
              =============================================== */}

              <div className="certificate-actions">

                {/* VIEW IMAGE */}

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-action"
                  title="View Certificate"
                  aria-label={`View ${certificate.title}`}
                >
                  <FaEye />
                </a>


                {/* OPEN CERTIFICATE */}

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-action"
                  title="Open Certificate"
                  aria-label={`Open ${certificate.title}`}
                >
                  <FaLink />
                </a>

              </div>

            </div>


            {/* =================================================
                CERTIFICATE CONTENT
            ================================================= */}

            <div className="certificate-content">

              <h3>
                {certificate.title}
              </h3>

              <p>
                {certificate.description}
              </p>


              {/* ===============================================
                  VIEW CERTIFICATE BUTTON
              =============================================== */}

              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-button"
              >
                VIEW CERTIFICATE
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certificates;