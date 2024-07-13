import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_PUBLIC_KEY
    ).then(
      (result) => {
        setStateMessage('Message sent!');
        setIsSubmitting(false);
        setTimeout(() => setStateMessage(null), 5000);
      },
      (error) => {
        setStateMessage('Something went wrong, please try again later');
        setIsSubmitting(false);
        setTimeout(() => setStateMessage(null), 5000);
      }
    );

    e.target.reset();
  };

  return (
    <form className="form-container" onSubmit={sendEmail}>
      <label className="form-label">Name</label>
      <input type="text" name="user_name" className="form-input" required />
      <label className="form-label">Email</label>
      <input type="email" name="user_email" className="form-input" required />
      <label className="form-label">Message</label>
      <textarea name="message" className="form-textarea" required />
      <input type="submit" value="Send" className="form-submit" disabled={isSubmitting} />
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};

export default ContactForm;
