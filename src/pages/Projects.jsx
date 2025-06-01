import Project from "../components/Project.jsx";

function Projects() {
  return (
    <div>
      <h2>My Projects</h2>
      <Project
        title="ReadMe Generator"
        description="A command line app that generates a ReadMe file based on user input."
        link="https://github.com/jedfalk/Readme-Generator"
      />
      <Project
        title="Vehicle Builder"
        description="A command line app that lets the user build a vehicle and perform actions with it."
        link="https://github.com/jedfalk/8-Vehicle-Builder"
      />
      <Project
        title="Pets-Who"
        description="A group project that lets users see different types of birds and has a quiz to test your knowledge of the birds."
        link="https://github.com/Falmanza94/pets-who"
      />
    </div>
  );
}

export default Projects;
