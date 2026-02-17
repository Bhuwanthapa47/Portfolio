import './Hero.css'

export default function Hero() {
    return (
        <section id="home" className="section hero">
            <div className="container">
                <div className="hero-content animate-fadeInUp">
                    <p className="hero-greeting">👋 Hello, I'm</p>
                    <h1 className="hero-name">Bhuwan Thapa</h1>
                    <h2 className="hero-title">Full Stack Developer & Data Analyst</h2>
                    <p className="hero-description">
                        Building scalable full-stack Java applications and transforming data
                        into actionable insights through analytics and intelligent solutions.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Get In Touch</a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="floating-card card-1 glass-card">
                        <div className="card-icon">💻</div>
                        <p>Java Development</p>
                    </div>
                    <div className="floating-card card-2 glass-card">
                        <div className="card-icon">🎨</div>
                        <p>Data Analytics</p>
                    </div>
                    <div className="floating-card card-3 glass-card">
                        <div className="card-icon">🚀</div>
                        <p>Performance</p>
                    </div>
                    <div className="floating-card card-4 glass-card">
                        <div className="card-icon">📱</div>
                        <p>Data Visualization</p>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>Scroll Down</p>
            </div>
        </section>
    )
}
