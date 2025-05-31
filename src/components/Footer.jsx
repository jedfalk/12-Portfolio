function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "1rem 0", borderTop: "1px solid #ccc", marginTop: "2rem" }}>
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
