/* eslint-disable react/no-unknown-property */

import { FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";
import "./Contact.css"
function Contact() {
    return (
        <div className="contact-section" >
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-blog-section">
                <h3 className="contact-blog-title">Get in touch with us!!!</h3>
                <div className="contact-blog2">
                <div className="contact-phone">
                    <p className="phone-icon"><FaMobileAlt /></p>
                    <p>PHONE</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="contact-phone">
                    <p className="phone-icon"><FaLocationDot  /></p>
                    <p>Location</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="contact-phone">
                    <p className="phone-icon"><MdEmail /></p>
                    <p>Address</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="contact-form">
                    <h3 className="contact-text">If You Have any Questions Please Do Not Hesitate To Send Us A Message</h3>  
                    <form className="contact-message">
                        <input type="text" placeholder="name" className="input">
                        </input>
                        <input type="text" placeholder="Email Address" className="input"></input>
                        <input type="text" placeholder="subject" className="input"></input>
                        <textarea  name="message" ></textarea>
                    </form>
                </div>
                <div className="contact-socials">
                <p className="f-social" >< FaFacebookF /></p>
                <p className="f-social" >< FaXTwitter /></p>
                <p className="f-social" >< IoLogoInstagram /></p>
                <p className="f-social" >< FaYoutube /></p>
                <p className="f-social" >< IoLogoPinterest /></p>
            </div>
            </div>
            {/* <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15958.033406616942!2d37.1573373!3d-0.7142048499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1719992721534!5m2!1sen!2ske" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </div> */}
        </div>
     )
}
export default Contact;