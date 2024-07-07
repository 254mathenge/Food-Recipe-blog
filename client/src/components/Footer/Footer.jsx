import { Link } from "react-router-dom";
import "./Footer.css";
import { LuExternalLink } from "react-icons/lu";

function Footer() {
  return (
    <div className="footer">
    <div className="footer-section">
      <div className="footer-logo">
        <h1>LEMON & LIMES</h1>
      </div>
      <div className="footer-home-section">
        <h3 className="footer-title">Home</h3>
        <ul className="footer-home-list">
          <li  className="footer-home-list-l">
            <Link to="/"> <LuExternalLink/> AboutUs</Link>
          </li>
          <li  className="footer-home-list-l">
            <Link to="/"><LuExternalLink/>  Press</Link>
          </li>
          <li  className="footer-home-list-l">
            <Link to="/"><LuExternalLink/>  Careers</Link>
          </li >
          <li className="footer-home-list-l">
            <Link to="/"><LuExternalLink/>  Terms & Conditions</Link>
          </li>
        </ul>
      </div>
      <div className="footer-important-links-section">
        <h3 className="footer-title">Important Links</h3>
        <ul className="footer-home-list">
          <li className="footer-home-list-l">
            <Link to="/"> <LuExternalLink/> Menu Tracks</Link>
          </li>
          <li  className="footer-home-list-l">
            <Link to="/"><LuExternalLink/>  Blog</Link>
          </li>
          <li  className="footer-home-list-l">
            <Link to="/"> <LuExternalLink/>   Contact Us</Link>
          </li>
          <li  className="footer-home-list-l">
            <Link to="/"><LuExternalLink/>  Get Started</Link>
          </li>
        </ul>
      </div>
      
      </div>
      <div className="footer-copyright">
      <p className="footer-copyright">&copy; All Rights Reserved 2024</p>
          </div>
          </div>
  );
}
export default Footer;
