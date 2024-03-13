import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import { Card } from 'react-bootstrap';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const service = process.env.REACT_APP_EMAILJS_USER_ID;
  const template = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const key = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(service, template, e.target, key);
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Contact me</h2>
      <div className="container">
        <div className="big-container">
          {/* Cards */}
          <div className="cards-container">
            <div className="card" style={{ width: '25rem', height: "auto", margin: "30px" }}>
              <Card className='contact-card'>
                <Card.Body>
                  <Card.Title style={{ textAlign: "center", marginTop: "1.2rem" }}><FontAwesomeIcon icon={faEnvelope} /></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: "center" }}>Email</Card.Subtitle>
                  <Card.Text className="mb-2 text-muted" style={{ textAlign: "center", maxWidth: "100%" }}>{/* Added maxWidth */}
                    <i>pavanikuruva2109@gmail.com</i>
                  </Card.Text>
                  <a href="mailto:pavanikuruva2109@gmail.com" className="contactLink" target="_blank" rel="noreferrer">Write <FontAwesomeIcon icon={faArrowRight} /></a>
                </Card.Body>
              </Card>
            </div>
            <div className="card" style={{ width: '25rem', height: "auto", margin: "30px" }}>
              <Card className='contact-card'>
                <Card.Body>
                  <Card.Title style={{ textAlign: "center", marginTop: "1.2rem" }}><FontAwesomeIcon icon={faLinkedin} /></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: "center" }}>Linkedin</Card.Subtitle>
                  <Card.Text style={{ textAlign: "center" }}>
                    <i>kuruva-pavani-10388b27b</i>
                  </Card.Text>
                  <a href="https://www.linkedin.com/in/kuruva-pavani-10388b27b/" className="contactLink" target="_black" rel="noreferrer">Connect me <FontAwesomeIcon icon={faArrowRight} /></a>
                </Card.Body>
              </Card>
            </div>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control custom-input" required autoComplete='off'/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control custom-input" required autoComplete='off'/>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message:</label>
              <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="form-control custom-input" required style={{ height: '150px' }} autoComplete='off'/>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn" style={{ width: '100%' }}>Send Message  <FontAwesomeIcon icon={faPaperPlane}/></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
