function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* ================= LEFT CONTENT ================= */}

        <div className="hero-content">

          <p className="hero-intro">
            HELLO, I'M
          </p>


          {/* NAME */}

          <h1 className="hero-name">

            <span className="gradient-name">
              Gajanan
            </span>

            <span className="gradient-name">
              Bandichode
            </span>

          </h1>


          {/* TITLE */}

          <h2 className="hero-title">
            Driven to Learn. Ready to Deliver
          </h2>


          {/* SMALL LINE */}

          <div className="title-line"></div>


          {/* DESCRIPTION */}

          <p className="hero-description">
            Passionate about technology and Artificial Intelligence
           
          </p>


          {/* BUTTONS */}

          <div className="hero-buttons">

            <a
              href="#contact"
              className="hero-btn primary-btn"
            >
              Contact Me
            </a>


            <a
              href="#projects"
              className="hero-btn secondary-btn"
            >
              View Projects
            </a>

          </div>

        </div>


        {/* ================= RIGHT IMAGE ================= */}

        <div className="hero-image-section">

          <div className="image-frame">

            <img
              src="/src/assets/img/1.jpg"
              alt="Gajanan Bandichode"
              className="hero-image"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;