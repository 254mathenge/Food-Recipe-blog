/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
 
 import  aboutImage1  from "../../assets/about image1.jpg"
 import  aboutImage2  from "../../assets/about image2.jpg"
import "./About.css"
 
function About() {
    return ( 
        <div>
             <h2 className="about-title"> About Us</h2>
        <div className="about-section">
           
            <div className="about-text">
            
            <div className="about-text-title">
                <b><h2  className="about-text-title">Hi! I`m Alex</h2></b>
                <h3  className="about-text-title">Welcome to my blog</h3>
                <p  className="about-text-title">I'm a passionate food blogger, specializing in dessert recipes.I love sharing my knowledge with others and helping people discover new desserts to try.</p>
                <p className="about-text-title">My blog aims to inspire people to try their hand at desserts and to help them discover new flavors and techniques.</p>
                
                </div>
            </div>
            <div className="about-images">
            <div className="about-image1">
                    <img src={aboutImage1 } alt="aboutImage"  className="about-image1"/>
            </div> 
            <div className="about-image2">
                <img src={aboutImage2 } alt="aboutImage2"  className="about-image1"/>
                </div>
                </div>
            </div>
            </div>
    )
}

export default About