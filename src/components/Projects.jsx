import './Projects.css'

export default function Projects() {
    const projects = [
        {
            title: 'Invoice Processing System with PDF Generation',
            description: 'A full-stack invoice management system with authentication, invoice CRUD operations, role-based security, and downloadable PDF invoices.',
            technologies: ['Java', 'Spring Boot', 'Hibernate', 'Spring Security', 'React', 'MySQL', 'iText'],
            image: '🧾',
            link: 'https://github.com/Bhuwanthapa47/invoice-system'
        },
        {
            title: 'Movie Recommendation System',
            description: 'A content-based movie recommender built using Python that suggests similar movies using data preprocessing and similarity modeling.',
            technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
            image: '🎬',
            link: 'https://github.com/Bhuwanthapa47/IMDB-Movies-Dataset-Recommendation-Engine'
        },
        {
            title: 'Portfolio Website',
            description: 'Modern, responsive portfolio website with smooth animations and glassmorphism design.',
            technologies: ['React', 'CSS', 'Vite'],
            image: '💼',
            link: '#'
        },
        {
            title: 'Doubt Solver App',
            description: 'A full-stack doubt-solving platform where users can post questions and get answers, featuring authentication, CRUD operations, and structured discussions.',
            technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs'],
            image: '❓',
            link: 'https://github.com/Bhuwanthapa47/Doubt_Solver_app'
        },
        {
            title: 'Hate Speech Detection (ML Project)',
            description: 'A machine learning model that detects hate speech in text using NLP techniques, data preprocessing, and classification algorithms.',
            technologies: ['Python', 'NLP', 'Scikit-learn', 'Pandas', 'NumPy'],
            image: '🧠',
            link: 'https://github.com/Bhuwanthapa47/Hate_Speach_Detection_ML_Project'
        },
        {
            title: 'Bookstore Management System',
            description: 'A Java-based bookstore management system for handling inventory, billing, and customer transactions with structured data storage.',
            technologies: ['Java', 'OOP', 'MySQL', 'JDBC'],
            image: '📚',
            link: 'https://github.com/Bhuwanthapa47/BookStore_Management_System'
        },
        {
            title: 'Realtime Collaboration App',
            description: 'A real-time collaboration platform that allows users to manage shared tasks and updates instantly with live synchronization and interactive UI.',
            technologies: ['Spring Boot', 'React', 'WebSockets', 'MySQL', 'REST APIs'],
            image: '⚡',
            link: 'https://github.com/Bhuwanthapa47/realtime_collab'
        },
    ]

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Here are some of my recent works</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass-card" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="project-image">{project.image}</div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                    View Project →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
