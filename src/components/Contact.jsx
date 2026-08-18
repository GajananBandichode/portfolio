import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaPhone
} from "react-icons/fa";

function Contact() {
  return (
    <section className="section contact-section" id="contact">

    
      <div className="section-heading">

        <p>GET IN TOUCH</p>

        <h2>Contact</h2>

        <span></span>

      </div>


      
      <p className="contact-description">
        Feel free to connect with me through any of the
        platforms below.
      </p>


      
      <div className="contact-buttons">


        
        <a
          href="https://www.linkedin.com/in/gajananbandichode/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button linkedin"
          aria-label="LinkedIn"
        >

          <FaLinkedinIn />

          <span className="contact-tooltip">
            LinkedIn
          </span>

        </a>


        
        <a
          href="https://github.com/GajananBandichode"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button github"
          aria-label="GitHub"
        >

          <FaGithub />

          <span className="contact-tooltip">
            GitHub
          </span>

        </a>


        <a
          href="https://www.instagram.com/gajananbandichode/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button instagram"
          aria-label="Instagram"
        >

          <FaInstagram />

          <span className="contact-tooltip">
            Instagram
          </span>

        </a>


    

        <a
          href="tel:+917559398237"
          className="contact-button phone"
          aria-label="Phone"
        >

          <FaPhone />

          <span className="contact-tooltip">
            Call Me
          </span>

        </a>


      </div>

    </section>
  );
}

export default Contact;