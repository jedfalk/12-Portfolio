function Project({ title, description, link }) {
  return (
    <div className="project-card" style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}
    </div>
  );
}

export default Project;
