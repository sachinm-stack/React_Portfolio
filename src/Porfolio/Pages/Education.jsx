 import portfolioData from "../data/portfolioData";
 import './Education.css';

function Education() {
  return (
    <section className="page education-page">
      <div className="page-header">
        <h1>My Education</h1>
        <p>Building knowledge and skills for excellence</p>
      </div>

      <div className="education-timeline">
        {portfolioData.education.map((edu, index) => (
          <div
            key={edu.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <div className="edu-card">
                <h3>
  <span style={{ color: "#a855f7" }}>🎓</span> {edu.degree}
</h3>
                <p className="school">{edu.school}</p>
                <p className="year">{edu.year}</p>
                <p className="gpa">Score: {edu.gpa}</p>
                <p className="details">{edu.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;