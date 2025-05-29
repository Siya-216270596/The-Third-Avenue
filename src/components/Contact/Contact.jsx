import React from 'react';
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
    <div className="contact-section">
      <div className="contact-left">
        <h3>Contact Us</h3>
        <br></br>
        <p>We would love to hear from you. Whether you are an organization looking to enhance your workforce or an individual seeking to advance your career, we are here to help.</p>
        <div className="contact-info">
          <p><strong>Email:</strong> admin@thethirdavenue.co.za</p>
          <p><strong>Phone:</strong> +27(0) 63 834 6632</p>
        </div>
      </div>

      <div className="contact-left">
        <h3>Our Offices</h3>
        <br></br>
          <p><strong>Gauteng (Centurion):</strong> Block 2, Manhattan Office Park, Highveld 0169</p>
          <p><strong>Eastern Cape (East London): </strong> Office 1B, Esprit House, St Helena Drive, Triple Point, Beacon Bay</p>
      </div>

      <div className="contact-right">
      <form className="contact-form" onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
