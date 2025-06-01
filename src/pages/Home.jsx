import { Link } from "react-router-dom";

function Home() {
  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Welcome to My Portfolio</h1>
      <p style={styles.description}>
        Hi! I’m Jeremiah Falk, a junior developer passionate about building web applications and learning new technologies.
      </p>
      <Link to="/projects" style={styles.button}>
        View My Projects
      </Link>
    </section>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "3rem auto",
    padding: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)", 
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    color: "white",
    textAlign: "center",
  },
  title: {
    fontSize: "2.8rem",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    lineHeight: "1.5",
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#004080",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "6px",
    boxShadow: "0 3px 6px rgba(0, 64, 128, 0.6)",
    transition: "background-color 0.3s ease",
  },
};

export default Home;
