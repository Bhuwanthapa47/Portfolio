import './Experience.css'

export default function Experience() {
    const experiences = [
        {
            role: 'Data Analyst Intern',
            company: 'Unified Mentor',
            period: '2026 - Present',
            description: 'Worked on real-world datasets performing data cleaning, exploratory analysis, and dashboard creation to generate actionable business insights.',
            achievements: [
                'Built interactive dashboards using Power BI and Excel',
                'Performed data cleaning and EDA using Python (Pandas, NumPy)',
                'Wrote SQL queries for reporting and insights generation'
            ]
        },
        {
            role: 'Software Development Intern',
            company: 'The SkyBrisk',
            period: '2026 - Present',
            description: 'Contributed to full-stack application development using Java and Spring Boot, building REST APIs and scalable backend systems.',
            achievements: [
                'Developed RESTful APIs using Spring Boot',
                'Worked on full-stack features with Java and MySQL',
                'Gained hands-on experience in backend architecture and workflows'
            ]
        },
        {
            role: 'Full Stack Developer Intern',
            company: '1 Stop.ai',
            period: '2025',
            description: 'Worked on full-stack web development projects building scalable applications and integrating backend APIs with modern frontend interfaces.',
            achievements: [
                'Developed full-stack features using Java, Spring Boot, and React',
                'Integrated REST APIs with responsive frontend components',
                'Improved understanding of real-world product development workflows'
            ]
        }
    ]

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Work Experience</h2>
                    <p className="section-subtitle">My professional journey</p>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-card">
                                <span className="timeline-period">{exp.period}</span>
                                <h3>{exp.role}</h3>
                                <h4>{exp.company}</h4>
                                <p>{exp.description}</p>
                                <ul className="achievements">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i}>
                                            <span className="achievement-checkbox">✓</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
