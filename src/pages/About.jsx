function About() {
  return (
    <div style={styles.card}>
      <h2>About Me</h2>
      <p>
        Hi, my name is Jeremiah Falk and I am a junior developer. I am currently learning the MERN stack and starting Python.
      </p>
      <p>
        If you would like to see my work, please go to the projects page.
      </p>
      <p>Thanks for visiting my portfolio!</p>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "2rem",
    backgroundColor: "rgba(0, 64, 128, 0.85)", // semi-transparent dark blue
    color: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    lineHeight: "1.6",
  },
};

export default About;
