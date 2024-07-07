/* eslint-disable react/prop-types */
import "./Hero.css";
import pizzahero from "../../assets/pizzahero.jpg"




const hero = [
    {
       image: pizzahero,
        title: "Pepperoni Pizza",
        text: "Our delicious, organic, and locally sourced ingredients are made with love and care.",
        blogger:"Ratcharin "
    },
    {
        image: pizzahero,
         title: "Pepperoni Pizza",
         text: "Our delicious, organic, and locally sourced ingredients are made with love and care.",
         blogger:"Ratcharin "
     },
    {
        image: pizzahero,
         title: "Pepperoni Pizza",
         text: "Our delicious, organic, and locally sourced ingredients are made with love and care.",
         blogger:"Ratcharin "
    },
    {
        image: pizzahero,
         title: "Pepperoni Pizza",
         text: "Our delicious, organic, and locally sourced ingredients are made with love and care.",
         blogger:"Ratcharin"
     }
]
const HeroCard = (props) => {
    return (

        <div className="hero-card-section">

            <div className="hero-details">
            <div className="hero-card-image">
                <img src={props.image} alt=""  className="hero-image" />
            </div>
            <div className="hero-card-title">
                <h3 className="hero-card-title">{props.title}</h3>
            </div>
            <div className="hero-text">
                <p className="hero-card-text">{props.text}</p>
                <div className="hero-card-blogger">
                    <p className="hero-card-text-blogger" >By {props.blogger}    August23/2023</p>
                    </div>
                </div>
                </div>
        </div>
    )
}
function Hero(){
    return (
       
        <div className="hero-card-sections">
            <div className="hero-card">
            {hero.map((item,index) => (
                <HeroCard key={index}
                    image={item.image}
                    title={item.title}
                    text={item.text}
                    blogger={item.blogger}
                />
            ))}
            </div>
        </div>
    )
}
export default Hero;   
