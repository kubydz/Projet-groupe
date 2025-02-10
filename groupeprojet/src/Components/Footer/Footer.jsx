import './Footer.css';

function Footer() {
  return (
    <footer className="text-center">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Social media */}
        <section className="social-container mb-4">
          {/* Facebook */}
          <a className="social-btn" style={{ backgroundColor: "#3b5998" }} href="#!" role="button">
            <i className="fab fa-facebook-f" />
          </a>
          {/* Twitter */}
          <a className="social-btn" style={{ backgroundColor: "#55acee" }} href="#!" role="button">
            <i className="fab fa-twitter" />
          </a>
          {/* Google */}
          <a className="social-btn" style={{ backgroundColor: "#dd4b39" }} href="#!" role="button">
            <i className="fab fa-google" />
          </a>
          {/* Instagram */}
          <a className="social-btn" style={{ backgroundColor: "#ac2bac" }} href="#!" role="button">
            <i className="fab fa-instagram" />
          </a>
          {/* Linkedin */}
          <a className="social-btn" style={{ backgroundColor: "#0082ca" }} href="#!" role="button">
            <i className="fab fa-linkedin-in" />
          </a>
          {/* Github */}
          <a className="social-btn" style={{ backgroundColor: "#333333" }} href="#!" role="button">
            <i className="fab fa-github" />
          </a>
        </section>
      </div>
      <hr />
      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        © 2024 Copyright:
        <a className="text-body" href="https://mdbootstrap.com/">
          LaulauKubs.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
