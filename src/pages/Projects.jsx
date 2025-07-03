import "./Projects.css";

const projects = [
  {
    title: "Application de gestion de stock",
    description: "Développement d'une API REST avec Laravel et React pour gérer les entrées et sorties de produits.",
    technologies: ["Laravel", "React", "MySQL"],
    link: "#"
  },
  {
    title: "Plateforme de gestion de mémoires",
    description: "Projet fullstack avec Node.js, Express et React pour le dépôt, le suivi et la validation des mémoires.",
    technologies: ["Node.js", "React", "MySQL"],
    link: "#"
  },
  {
    title: "QuizAcademy (Flutter)",
    description: "Application mobile avec microservices (Spring Boot + Node.js) pour les quiz pédagogiques.",
    technologies: ["Flutter", "Spring Boot", "Docker", "Node.js"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <div className="container">
      <h2 className="projects-title">Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tags">
              {proj.technologies.map((tech, idx) => (
                <span className="tag" key={idx}>{tech}</span>
              ))}
            </div>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
              Voir plus
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
