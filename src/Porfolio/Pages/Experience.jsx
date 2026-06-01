import portfolioData from "../data/portfolioData";
import './Experience.css';

function Experience() {
  return (
    <section className="page experience-page">
      <div className="page-header">
        <h1>My Experience</h1>
        <p>Internships and practical learning experience</p>
      </div>

      <div className="experience-container">
        {portfolioData.experience.map((exp, index) => (
          <div key={exp.id} className="experience-card">
            <div className="exp-header">
              <h3>{exp.position}</h3>
              <span className="exp-duration">{exp.duration}</span>
            </div>

            <p className="exp-company">{exp.company}</p>
            <p className="exp-description">{exp.description}</p>

            {index < portfolioData.experience.length - 1 && (
              <div className="exp-divider"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;