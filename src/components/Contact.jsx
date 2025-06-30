import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        I’m currently seeking front-end developer roles. If you’re hiring or think I could be a good fit, feel free to reach out!
      </p>
      <div className="contact-links">
        <a href="mailto:ksanthosharni@gmail.com" className="contact-link">📧 ksanthosharni@gmail.com</a>
        <a href="https://www.linkedin.com/in/santhosh-kumar-0172b8271" target="_blank" rel="noreferrer" className="contact-link">🔗 LinkedIn | Santhosh Kumar</a>
      </div>

      <form
        className="contact-form"
        action="https://formspree.io/f/movwrejp"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
