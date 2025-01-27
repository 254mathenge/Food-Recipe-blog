/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./MyBlog.css"
import { Link } from "react-router-dom";
import blog from "../../assets/blog image.jpg"
import { FaArrowRight } from "react-icons/fa";
import React, { useState, useEffect } from 'react';

const BlogCard = ({ title, content, authorFirstName }) => {
    const [image,setImage]=useState()
    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append("file", image);
      
        const uploadPreset = "blog-image";
        const cloudName = "dxwlzto9h";
        formData.append("upload_preset", uploadPreset);
        try {
          const response = await fetch("https://api.cloudinary.com/v1_1/${dxwlzto9h}/image/upload",
            {
              method: "POST",
              body: formData,
            },
          );
          const data = await response.json();
          if (!data) return null;
          return data.secure_url;
        } catch (err) {
          return null;
        }
      };
    return (
        <div className="blogs-card-section">
           
            <div className="blogs-details">
                <div className="blog-image">
            <input type="file" name="image" className="blog-image" id="image" onChange={((e) => {setImage(e.target.files[0])})}/>
                </div>
                <div>
                    <button onClick={uploadImage} >upload Image</button>
                </div>
                <div className="blog-details-section">
          <div className="blog-title">
                    <p className="blog-title">{title}</p>
                </div>
                <div>
                    <p className="blog-content">{content}</p>
                </div>
                <div className="blog-author">
                    <p className="blog-author">By {authorFirstName}</p>
                </div>
                
                <div className="view-more">
                    <Link to="/ViewMore" className="view-more"> View More <FaArrowRight /></Link>
                    </div>
                    </div>
            </div>
        </div>
    );
};

function MyBlog() {
   
     
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            // const token = localStorage.getItem('token');
            // if (!token) {
            //     console.error('No token found');
            //     return;
            // }

            try {
                const response = await fetch('http://localhost:3000/blogs', {
                    method: 'GET' ,
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': `Bearer ${token}`
                    }
                });

                console.log(response)
      if (response.status === 201) {
                   console.log("blogs fetched")
                }

                // const data = await response.json();
                // setBlogs(data);
                const data = await response.json();
                if (Array.isArray([data])) {
                    setBlogs(data);
                    console.log([data[0]])
                } else {
                    console.error('Response data is not an array:', data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <>
            <h2 className="blogs-title">Blogs</h2>
            <h3 className="blogs-title2">Recent Blog Posts</h3> 
        <div className="blog-card-sections">
                
       
           
                {Array.isArray(blogs) ? (
                        blogs.map((blog, index) => (
                            <BlogCard key={index} title={blog.title} content={blog.content}  authorFirstName={blog.author.firstName} />
                        ))
                    ) : (
                        <p>No blogs available.</p>
                    )}
              
                {/* <div className="loading">
                    <p className="loading">Loading More...</p>
                </div> */}
            
            </div>
            </>
    );
}

export default MyBlog;