import Project from "../components/Project.jsx";

function Projects() {
  return (
    <div>
      <h2>My Projects</h2>
      <Project
        title="Portfolio Website"
        description="A personal portfolio built with React."
        link="https://your-portfolio-link.com"
      />
      <Project
        title="ToDo App"
        description="A task management app with add/edit/delete functionality."
        link="https://your-todo-app-link.com"
      />
      <Project
        title="Weather Dashboard"
        description="Displays real-time weather info using an API."
        link="https://your-weather-app-link.com"
      />
    </div>
  );
}

export default Projects;
