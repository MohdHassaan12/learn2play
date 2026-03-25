import { Link } from "react-router-dom";
import logo from "../assets/images/logo-white.png";
const Footer = () => {
  return (
    <footer className="footer py-5 bg-dark">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-3 col-md-6">
            <div className="pe-lg-4">
              <img src={logo} alt="Learn2Play logo" className="img-fluid mb-4" style={{ maxWidth: '200px' }} />
              <p className="text-light mb-4">
                Your comprehensive platform for learning and excelling in different sports.
              </p>
              <div className="contact-info text-light">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-telephone-fill me-2"></i>
                  <span>+91-6299310210</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-envelope-fill me-2"></i>
                  <span>learn2play@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i>About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/courses" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i>Courses
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/sports" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i>Sports
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/login" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i>Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Resources</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link to="/courses" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i>Courses
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i>Membership
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i>Mentor
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i>FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Support</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link to="#" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i>Forums
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i>Documentation
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i>Terms
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-2"></i>Community
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-top border-secondary mt-4 pt-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-light mb-0">© 2025 Learn2Play. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="social-links">
                <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-light"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
