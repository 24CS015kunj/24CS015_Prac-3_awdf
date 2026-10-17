import React, { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !message) return
    setSubmitted(true)
  }

  const handleReset = () => {
    setName('')
    setEmail('')
    setMessage('')
    setSubmitted(false)
  }

  return (
    <div className="page-container">
      <div className="section-header">
        <h2>Get in Touch</h2>
        <p>Send a message or reach out for collaboration.</p>
      </div>

      <div className="contact-layout">
        <div className="card">
          <h3>Contact Form</h3>

          {submitted ? (
            <div className="success-box">
              <h4>Message Sent!</h4>
              <p>Thank you, {name}. We will get back to you soon.</p>
              <button className="btn btn-secondary" onClick={handleReset}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <div className="char-count">
                  Characters: {message.length}
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="card preview-card">
          <h3>Live Form Preview</h3>
          <p className="preview-note">Captured in real-time React state:</p>
          <div className="preview-content">
            <p><strong>Name:</strong> {name || '---'}</p>
            <p><strong>Email:</strong> {email || '---'}</p>
            <p><strong>Message:</strong></p>
            <div className="preview-message">
              {message || 'Type in the form to see real-time updates...'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
