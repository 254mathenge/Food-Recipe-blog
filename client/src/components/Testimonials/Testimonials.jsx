/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import person from "../../assets/testimonial1.jpg"
import "./Testimonials.css"


const testimonials = [
{
   
        image: person,
        name: "Andres",
    title:"blogger",
    testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, beatae?"
},
{
   
    image: person,
    name: "Andres",
    title:"blogger",
    testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit"
},
{
    
    image: person,
    name: "Andres",
    title:"blogger",
    testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit"
},
{
    
    image: person,
    name: "Andres",
    title:"blogger",
    testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit"
},
]

const TestimonialCard =(props)=> {
return (
 
  
    <div className="testimonials-card-section">
    
  <div className="testimonial-details">
    
    <div className="testimonial-image">
      <img src={props.image} alt="" className="testimonial-image"/>
                
                </div>
            <div className="testimonial-name">
    <p className="testimonial-name">{props.name} </p>
  </div>
    <div className="testimonial-title">
      <p className="testimonial-title">{props.title}</p>
            </div>
            <div className="testimonial-text">
      <p className="testimonial-text">{props.testimony}</p>
    </div>
  </div>
 
</div>
);
};

function Testimonials() {
  return (
    <div>
    <h2 className="testimonials-testimonial">Testimonials</h2>
    <div className="testimonials-card-sections">

       
    <div className="testimonial-card">
            {testimonials.map((testimonial, index) => {
                return (
                    <TestimonialCard
                        key={index}
                        
                        image={testimonial.image}
                        name={testimonial.name}
                        title={testimonial.title}
                        testimony={testimonial.testimony}
                    />
                );
         
            })}
            </div>
            </div>
    </div>
        );
    }
    export default Testimonials;