import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stateMessage, setStateMessage] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          // Successfully sent email
          setStateMessage('Message sent!')
          setIsSubmitting(false)
          setTimeout(() => setStateMessage(null), 5000)
        },
        () => {
          // Error sending email
          setStateMessage('Something went wrong, please try again later')
          setIsSubmitting(false)
          setTimeout(() => setStateMessage(null), 5000)
        }
      )

    e.target.reset()
  }

  return (
    <form className="form-container" onSubmit={sendEmail}>
      <label className="form-label" htmlFor="user_name">
        Name
      </label>
      <input
        type="text"
        id="user_name"
        name="user_name"
        className="form-input"
        required
      />
      <label className="form-label" htmlFor="user_email">
        Email
      </label>
      <input
        type="email"
        id="user_email"
        name="user_email"
        className="form-input"
        required
      />
      <label className="form-label" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="form-textarea"
        required
      />
      <input
        type="submit"
        value="Send"
        className="form-submit"
        disabled={isSubmitting}
      />
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  )
}

export default ContactForm
