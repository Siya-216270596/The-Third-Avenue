import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
      const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "021f0816-5d08-451d-ad73-4b0498dfa040");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Email Sent Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <section className="contact-section" id="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>GET IN TOUCH</h2>
          <p>We would love to hear from you.
            Whether you are an organization looking to enhance your workforce or
            an individual seeking to advance your career, we are here to help.</p>
        </div>
        <div className="contact-content">
          <div className="contact-left">
            <h1>Contact Us</h1>
            
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">
                  <FiPhone />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>012 055 1144</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>admin@thethirdavenue.co.za</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Eco Fusion</p>
                  <p>Witch-Hazel, Avenue</p>
                  <p>Eco Park Centurion 0169</p>
                </div>
              </div>
            </div>
            
            <div className="contact-hours">
              <h3>Operating Hours</h3>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div className="contact-right">
            <div className="contact-form-container">
              <h3>Send us a message</h3>
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    name="name"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    name="email"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Your Phone" 
                    name="Phone Number"
                  />
                </div>
                
                <div className="form-group">
                  <textarea 
                    placeholder="Your Message" 
                    name="message"
                    rows="5" 
                    required 
                  ></textarea>
                </div>
                
                <button type="submit" className="btn">
                  <span>Send Message</span>
                  <FiSend className="send-icon" />
                </button>
              </form>
              <span>{result}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;