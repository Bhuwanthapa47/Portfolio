import './Footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-logo">Portfolio</h3>
                        <p>Building digital experiences that matter.</p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="https://github.com/Bhuwanthapa47">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/bhuwanthapa47/">LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/unfiltered.bhuvan/">Instagram</a></li>
                            <li><a href="mailto:bhuwanthapa4747@gmail.com">Email</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Bhuwan Thapa. All rights reserved.</p>
                    <p>Designed & Built with ❤️ and lot of tea 🍵</p>
                </div>
            </div>
        </footer>
    )
}
