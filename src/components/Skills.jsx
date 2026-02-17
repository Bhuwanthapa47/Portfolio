import './Skills.css'

export default function Skills() {
    const skills = [
        { name: 'Java', level: 90, icon: '☕' },
        { name: 'Spring Boot', level: 95, icon: '🍃' },
        { name: 'REST API Development', level: 85, icon: '🌐' },
        { name: 'Hibernate/JPA', level: 88, icon: '🐘' },
        { name: 'MySQL', level: 80, icon: '🐬' },
        { name: 'React.js', level: 92, icon: '⚛️' },
        { name: 'JavaScript', level: 88, icon: '📜' },
        { name: 'HTML/CSS', level: 90, icon: '🎨' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'Data Cleaning & EDA', level: 90, icon: '📊' },
        { name: 'Power BI', level: 92, icon: '📈' },
        { name: 'Tableau', level: 80, icon: '📉' },
        { name: 'Excel (Advanced)', level: 85, icon: '📄' },
        { name: 'Machine Learning', level: 85, icon: '🤖' },
        { name: 'Git & GitHub', level: 92, icon: '🐙' },
        { name: 'Docker', level: 70, icon: '🐳' },
    ]

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="skill-card glass-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="skill-header">
                                <span className="skill-icon">{skill.icon}</span>
                                <h3>{skill.name}</h3>
                            </div>

                            <div className="skill-bar-container">
                                <div
                                    className="skill-bar"
                                    style={{
                                        width: `${skill.level}%`,
                                        animationDelay: `${index * 0.1 + 0.5}s`
                                    }}
                                >
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="additional-skills">
                    <h3>Additional Technologies</h3>
                    <div className="tech-tags">
                        {['Spring Security', 'Maven', 'Thymeleaf', 'Bootstrap', 'Postman', 'REST API Integration', 'JSON / API Handling', 'MVC Architecture', 'Data Visualization Libraries', 'Jupyter Notebook'].map((tech) => (
                            <span key={tech} className="tech-tag glass-card">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
