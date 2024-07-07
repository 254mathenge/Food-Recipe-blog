/* eslint-disable react/prop-types */
import "./Tracks.css"
import food from "../../assets/food.jpg"

const tracks= [
    {
        title:"Breakfast",
            image: food,
            name: "Breakfast Meal",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, beatae?"
    },
    {
        title:"Breakfast",
            image: food,
            name: "Breakfast Meal",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, beatae?"
    },
    {
        title:"Breakfast",
            image: food,
            name: "Breakfast Meal",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, beatae?"
    },
    {
        title:"Breakfast",
            image: food,
            name: "Breakfast Meal",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, beatae?"
    },
    {
        title:"Breakfast",
            image: food,
            name: "Breakfast Meal",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, beatae?"
    },
    {
        title:"Breakfast",
            image: food,
            name: "Breakfast Meal",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, beatae?"
    },
    ]
    
    const TracksCard =(props)=> {
    return (
        <div className="tracks-card-section">
            <div className="tracks-title">
          <p className="tracks-title">{props.title}</p>
                </div>
      <div className="tracks-details">
        
        <div className="tracks-image">
          <img src={props.image} alt=""className="tracks-image"/>
                    
                    </div>
                <div className="tracks-name">
        <p className="tracks-name">{props.name} </p>
      </div>
        
                <div className="tracks-text">
          <p  className="tracks-text">{props.text}</p>
        </div>
      </div>
    </div>
    );
    };
    
    function Tracks() {
    return (
        <div className="tracks-card-sections">
    
           <h2 className="tracks-title1">MenuTracks</h2>
        <div className="tracks-card">
                {tracks.map((tracks, index) => {
                    return (
                        <TracksCard
                            key={index}
                            
                            image={tracks.image}
                            name={tracks.name}
                            title={tracks.title}
                           text={tracks.text}
                        />
                    );
             
                })}
                </div>
        </div>
            );
        }
        export default Tracks;