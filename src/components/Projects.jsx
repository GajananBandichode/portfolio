const projects = [
  {
    title: "Portfolio Website",
    description:
      "Portfolio website showcasing skills, projects, and achievements.",
    image: "/src/assets/img/8.png",
    link: "#home",
    source: "https://github.com/GajananBandichode",
  },

  {
    title: "Online Learning Platform",
    description:
      "Online learning platform with live classes and payments.",
    image: "/src/assets/img/9.png",
    link:
      "https://gajananbandichode.github.io/Online-Learning-Platform/loginform.html",
    source:
      "https://github.com/GajananBandichode",
  },
];

function Projects() {
  return (
    <section className="section projects-section" id="projects">

      <div className="section-heading">
        <p>MY RECENT WORK</p>
        <h2>Projects</h2>
        <span></span>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <div
            className="project-card"
            key={project.title}
          >

            {/* Project Image */}
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-buttons">

                {/* VIEW BUTTON */}
                <button
                  type="button"
                  className="project-view"
                  onClick={() => {
                    window.open(project.link, "_blank");
                  }}
                >
                  VIEW
                </button>

                {/* SOURCE CODE BUTTON */}
                <button
                  type="button"
                  className="project-source"
                  onClick={() => {
                    window.open(project.source, "_blank");
                  }}
                >
                  SOURCE CODE
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;