 import "./Header.css"
 import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";

function HeaderTop() {
    return (
      <div className="header-top">
            <div className="header-logo">
                <h1>LEMON & LIMES</h1>
            </div>
            <div className="header-socials">
                <p className="f-social" >< FaFacebookF /></p>
                <p className="f-social" >< FaXTwitter /></p>
                <p className="f-social" >< IoLogoInstagram /></p>
                <p className="f-social" >< FaYoutube /></p>
                <p className="f-social" >< IoLogoPinterest /></p>
            </div>
      </div>
        
)
}
export default HeaderTop;