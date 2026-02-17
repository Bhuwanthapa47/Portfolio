import './About.css'
import profilePic from '../assets/profile.jpg'

export default function About() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            I am a passionate Full Stack Java Developer and Data Analyst who loves building scalable web applications and extracting meaningful insights from data.
                        </p>

                        <p>
                            With hands-on experience in Spring Boot, React, MySQL, and REST APIs, I enjoy developing end-to-end solutions that solve real-world problems. Alongside development, I specialize in data analytics using Python, SQL, Power BI, and Excel to transform raw data into actionable insights.
                        </p>

                        <p>
                            When I'm not coding, you'll find me exploring new technologies, contributing to
                            open-source projects, or sharing knowledge with the developer community.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item glass-card">
                                <h3>1+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-item glass-card">
                                <h3>10+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className="stat-item glass-card">
                                <h3>10+</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-image">
                        <div className="image-container glass-card">
                            <img src={profilePic} alt="Bhuwan Thapa" className="profile-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
