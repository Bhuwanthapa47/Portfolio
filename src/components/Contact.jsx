import { useState } from 'react'
import './Contact.css'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            // Replace 'YOUR_FORM_ID' with your actual FormSpree form ID
            // To get your form ID: Go to https://formspree.io and create a free account
            const response = await fetch('https://formspree.io/f/xykdjqlw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setSubmitted(true)
                setFormData({ name: '', email: '', message: '' })

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setSubmitted(false)
                }, 5000)
            } else {
                throw new Error('Failed to send message')
            }
        } catch (err) {
            setError('Failed to send message. Please try again or email me directly at bhuwanthapa4747@gmail.com')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                    Have a project in mind? Let's work together to create something amazing!
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card glass-card">
                            <div className="info-icon">📧</div>
                            <h3>Email</h3>
                            <p>bhuwanthapa4747@gmail.com</p>
                        </div>

                        <div className="info-card glass-card">
                            <div className="info-icon">📱</div>
                            <h3>Phone</h3>
                            <p>+91-7710238747</p>
                        </div>

                        <div className="info-card glass-card">
                            <div className="info-icon">📍</div>
                            <h3>Location</h3>
                            <p>Hisar, Haryana</p>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/Bhuwanthapa47" className="social-link glass-card" aria-label="GitHub">
                                <span className="social-icon">🐙</span>
                            </a>

                            <a href="https://www.linkedin.com/in/bhuwanthapa47/" className="social-link glass-card" aria-label="LinkedIn">
                                <span className="social-icon">💼</span>
                            </a>

                            <a href="https://www.instagram.com/unfiltered.bhuvan/" className="social-link glass-card" aria-label="Instagram">
                                <span className="social-icon">📷</span>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form glass-card" onSubmit={handleSubmit}>
                        {submitted ? (
                            <div className="success-message">
                                <div className="success-icon">✓</div>
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out. I'll get back to you soon.</p>
                            </div>
                        ) : (
                            <>
                                {error && (
                                    <div className="error-message">
                                        <p>{error}</p>
                                    </div>
                                )}

                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Name"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Your message here..."
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}
