import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <div className="logo">
                    <span className="logo-text">Portfolio</span>
                </div>

                <ul className="nav-links">
                    {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                        <li key={section}>
                            <a
                                onClick={() => scrollToSection(section)}
                                className={activeSection === section ? 'active' : ''}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
