import { Link } from "react-router-dom";
import portfolioData from "../data/portfolioData";
import './Home.css';
import profileImg from "../../assets/sachinfor1.jpeg";

function Home() {
  return (
    <section className="page home-page">
      <div className="hero">
        <div className="hero-content">
          <div className="profile-image">
            <img src={profileImg} alt="Profile" />
          </div>

                <a
          href="https://www.linkedin.com/in/sachin-m-0a673a2a2/"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-tag linkedin-tag"
        >
          Connect on LinkedIn
        </a>

          <h1 className="hero-title">
            Hi, I'm <span>Sachin M</span>
          </h1>

          <h2 className="hero-subtitle">Full Stack Developer</h2>

          <p className="hero-bio">
            BCA graduate skilled in React.js, Python, Django, MySQL and REST API
            development. I build responsive web applications with clean UI,
            structured backend logic, and practical real-world features.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Hire Me
            </Link>

            <a
            href="https://github.com/sachinm-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            >
             GitHub Profile
            </a>
          </div>

          <div className="hero-info">
            <div className="info-item">📧 {portfolioData.profile.email}</div>
            <div className="info-item">📍 {portfolioData.profile.location}</div>
            <a
              href="https://wa.me/917502155570?text=Hi%20Sachin,%20I%20visited%20your%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
              className="info-item whatsapp-link"
            >
           💬 WhatsApp
          </a>

          </div>
        </div>

        <div className="stats">
          <div className="stat-card">
            <h2>8+</h2>
            <p>Projects</p>
          </div>

          <div className="stat-card">
            <h2>3+</h2>
            <p>Internships</p>
          </div>

          <div className="stat-card">
            <h2>2025</h2>
            <p>BCA Graduate</p>
          </div>
        </div>

        <div className="tech-stack">
          <h3>Tech Stack</h3>

          <div className="tech-list">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Django</span>
            <span>MySQL</span>
            <span>REST API</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;