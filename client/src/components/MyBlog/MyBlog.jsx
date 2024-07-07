/* eslint-disable react/prop-types */
import "./MyBlog.css"
import { Link } from "react-router-dom";
import blog from "../../assets/blog image.jpg"
import { FaArrowRight } from "react-icons/fa";
const blogs = [
    {
       
            image: blog,
            name: "fresh pineapple peach smoothie recipe",
        link:"View More",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing",
        blogger:"By kim  14th May/2024"
    },
    {
       
        image: blog,
        name: "fresh pineapple peach smoothie recipe",
    link:"View More",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing",
    blogger:"By kim  14th May/2024"
},
    
        {
       
            image: blog,
            name: "fresh pineapple peach smoothie recipe",
        link:"View More",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing"
    },
    {
       
        image: blog,
        name: "fresh pineapple peach smoothie recipe",
    link:"View More",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing",
    blogger:"By kim  14th May/2024"
    },
    {
       
        image: blog,
        name: "fresh pineapple peach smoothie recipe",
    link:"View More",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing",
    blogger:"By kim  14th May/2024"
    },
    {
       
        image: blog,
        name: "fresh pineapple peach smoothie recipe",
    link:"View More",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing",
    blogger:"By kim  14th May/2024"
},
    ]
    
    const BlogCard =(props)=> {
        return (
           
           
        <div className="blogs-card-section">
      <div className="blogs-details">
        
        <div className="blog-image">
          <img src={props.image} alt="" className="blog-image"/>
                    
                    </div>
                <div className="blog-name">
        <p className="blog-name">{props.name} </p>
      </div>
                <div className="blog-text">
          <p  className="blog-text">{props.text}</p>
                </div>
                <div className="blogger">
                    <p className="blogger">{props.blogger}</p>
                </div>
                <div className="blog-link">
          <p className="blog-link"><Link to="/{props.link}">{props.link} <FaArrowRight/></Link></p>
                </div>
      </div>
      
        </div>
       
      
    );
    };
    
    function MyBlog() {
        return (
            <div>
                <h2 className="blogs-title">Blogs</h2>
            <h3 className="blogs-title2">Recent blog Posts</h3> 
        <div className="blog-card-sections">
            
            
        <div className="blog-card">
                {blogs.map((blog, index) => {
                    return (
                        <BlogCard
                            key={index}
                            
                            image={blog.image}
                            name={blog.name}
                            link={blog.link}
                            text={blog.text}
                            blogger={blog.blogger}
                        />
                    );
             
                })}
            </div>
            <div className="loading">
         <p className="loading">Loading More...</p>
       </div>
                </div>
                </div>
            );
        }
export default MyBlog;
