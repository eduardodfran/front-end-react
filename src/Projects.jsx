
import './Projects.css';
import StudelistImage from './assets/StudelistProjectImage.png';

const projects = [
  {
    title: 'Studelist',
    description: 'Studelist is a comprehensive productivity app designed for students to manage notes, to-do lists, calendars, and events all in one place.',
    projectUrl: 'https://studelist-app.vercel.app/'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>PROJECTS</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={StudelistImage} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
