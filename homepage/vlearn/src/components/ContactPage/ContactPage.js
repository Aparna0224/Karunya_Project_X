import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Reach out to us for any queries or support.</p>
      <div className="contact-info">
        <p className="contact-item">
          📞 Phone: <span>+91 98404 88355</span>
        </p>
        <p className="contact-item">
          ✉️ Email: <span>Davidjayaraj@karunya.edu.in</span>
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
