import { useRef } from "react";
import emailjs from "@emailjs/browser";
import portfolioData from "../data/portfolioData";
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y6fxc35",
        "template_d05iudp",
        form.current,
        {
          publicKey: "lCH5Kj8eYIm0nHTVq",
        }
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <section className="page contact-page">
      <div className="page-header">
        <h1>Let's Connect</h1>
        <p>
          Feel free to contact me for job opportunities, freelance work, or
          collaborations.
        </p>
      </div>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-card">
            <span className="info-icon">📧</span>
            <h3>Email</h3>
            <p>{portfolioData.contact.email}</p>
          </div>

          <div className="info-card">
            <span className="info-icon">📱</span>
            <h3>Phone</h3>
            <p>{portfolioData.contact.phone}</p>
          </div>

          <div className="info-card">
            <span className="info-icon">📍</span>
            <h3>Location</h3>
            <p>{portfolioData.contact.location}</p>
          </div>

          <div className="social-links">
            <h3>Follow Me</h3>

            <div className="social-icons">
              {portfolioData.contact.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  name="social"
                  title={social.platform}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <form
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
        >
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message , i get this from Mail Directly !!!"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;