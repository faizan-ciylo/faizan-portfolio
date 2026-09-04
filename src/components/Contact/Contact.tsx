import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

const EMAIL = "muhammadfaizansgc@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/faizan-profile87";
const GITHUB_URL = "https://github.com/faizan-ciylo";
const WHATSAPP_NUMBER = "923067106239";
const PHONE_DISPLAY = "+92 306 7106239";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">

        {/* LEFT: Text Content */}
        <div className="contact-left">
          <img
            src="/images/profile_pic.jpg"
            alt="Muhammad Faizan"
            className="contact-avatar"
          />
          <div className="contact-status-row">
            <span className="contact-available">
              <span className="contact-dot"></span>
              Available for Work
            </span>
            <a href={`mailto:${EMAIL}`} className="contact-connect-btn">
              CONNECT
            </a>
          </div>

          <h2 className="section-heading">Let's Work<br />Together</h2>
          <div className="contact-divider"></div>

          <p className="contact-desc">
            I'm currently open to full-time AI/ML engineering roles, freelance
            projects, and remote opportunities. If you're looking for someone
            who can take a model from prototype to production and wire it into
            a real application, I'd love to hear from you.
          </p>
        </div>

        {/* RIGHT: Contact Cards */}
        <div className="contact-right">
          <a href={`mailto:${EMAIL}`} className="contact-card" data-cursor="disable">
            <div className="contact-card-icon email-icon">
              <MdEmail size={20} />
            </div>
            <div className="contact-card-info">
              <span className="contact-card-label">DIRECT EMAIL</span>
              <span className="contact-card-value">{EMAIL}</span>
            </div>
          </a>

          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="contact-card" data-cursor="disable">
            <div className="contact-card-icon linkedin-icon">
              <FaLinkedinIn size={18} />
            </div>
            <div className="contact-card-info">
              <span className="contact-card-label">PROFESSIONAL NETWORK</span>
              <span className="contact-card-value">LinkedIn Profile</span>
            </div>
          </a>

          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="contact-card" data-cursor="disable">
            <div className="contact-card-icon whatsapp-icon">
              <FaWhatsapp size={20} />
            </div>
            <div className="contact-card-info">
              <span className="contact-card-label">INSTANT MESSAGE</span>
              <span className="contact-card-value">{PHONE_DISPLAY}</span>
            </div>
          </a>

          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="contact-card" data-cursor="disable">
            <div className="contact-card-icon github-icon">
              <FaGithub size={20} />
            </div>
            <div className="contact-card-info">
              <span className="contact-card-label">CODEBASE</span>
              <span className="contact-card-value">faizan-ciylo</span>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
