function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <p>
        {currentYear}. All Rights Reserved
      </p>

      <a
        href="#home"
        className="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </a>

    </footer>
  );
}

export default Footer;