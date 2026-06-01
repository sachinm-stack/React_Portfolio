import portfolioData from "../data/portfolioData";
import './Skills.css';

function Skills() {
  return (
    <section className="page skills-page">
      <div className="page-header">
        <h1>My Skills</h1>
        <p>Technologies and tools I work with</p>
      </div>

      <div className="skills-container">
        {portfolioData.skills.map((skillGroup) => (
          <div key={skillGroup.id} className="skill-group">
            <h2 className="skill-category">{skillGroup.category}</h2>

            <div className="skill-items">
              {skillGroup.items.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-badge">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skill-chart">
        <h2>Proficiency Overview</h2>

        <div className="chart-item">
         <label>
  Frontend Development
</label>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "85%" }}></div>
          </div>
        </div>

        <div className="chart-item">
          <label>Backend Development</label>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "75%" }}></div>
          </div>
        </div>

        <div className="chart-item">
          <label>Database</label>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "70%" }}></div>
          </div>
        </div>

        <div className="chart-item">
          <label>Tools</label>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "80%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;