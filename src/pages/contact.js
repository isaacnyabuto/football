
import React from "react";
import "../Styles/contact.css";
//import Navbar from "./navbar";

const Contact = () => {
  return (
    <div>
    <div className="background">
    <div className="contact-container">
      <h2>Contact Us</h2>

      {/* Contact Info */}
      <div className="contact-info">
        <p>📞 <a href="tel:+254700000000">+254 711 222 000</a></p>
        <p>📧 <a href="mailto:support@example.com">email@example.com</a></p>
        <p>📍 Nairobi, Kenya</p>
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>

      {/* Business Hours */}
      <div className="business-hours">
        <h3>Business Hours</h3>
        <p>🕒 Monday - Friday: 9:00 AM - 6:00 PM</p>
      </div>

    </div>
    </div>
    </div>
  );
};

export default Contact;
