import portfolioData from "../data/portfolioData";
import "./Projects.css";

function Projects() {
  return (
    <section className="page projects-page">
      <div className="page-header">
        <h1>My Projects</h1>
        <p>
          Practical projects built using frontend and backend technologies
        </p>
      </div>

      {/* Completed Projects */}

      <h2 className="project-section-title">
        🚀 Completed Projects
      </h2>

      <div className="projects-grid">
        {portfolioData.projects.completed.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              {project.image}
            </div>

            <div className="project-content">
              <h3>{project.name}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <span className="project-year">
                  {project.year}
                </span>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Working Projects */}

      <h2 className="project-section-title working-title">
        🔨 Currently Working On
      </h2>

      <div className="projects-grid">
        {portfolioData.projects.working.map((project) => (
          <div
            key={project.id}
            className="project-card working-card"
          >
            <div className="project-image">
              {project.image}
            </div>

            <div className="project-content">
              <h3>{project.name}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <span className="project-year">
                  🚧 In Progress
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;