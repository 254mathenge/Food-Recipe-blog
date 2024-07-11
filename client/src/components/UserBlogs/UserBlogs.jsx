/* eslint-disable no-unused-vars */
import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./UserBlogs.css"


function UserBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);
    const[loading,setLoading]=useState()
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
    
    
   
    useEffect(() => {
       
        const token = localStorage.getItem('token');

        if (!token) {
            setError('No token found');
            return;
        }
        const fetchUserBlogs = async () => {
            try {
                const response = await fetch('http://localhost:3000/blogs/authorId', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    
                   

                });

                console.log(response)
               
                
                 
                const data = await response.json();
                if (Array.isArray(data)) {
                    setBlogs(data);
                    console.log(data)
                } 
                if (response.status === 200) {
                    console.log("blogs fetched")
                   
                 } 
            } catch (error) {
                setError(error.message);
                console.error(error);
            }
        };

        fetchUserBlogs();
    }, []);
    const handleDelete = async ( authorId,blogid ) => {
        console.log("deleting")
        console.log([blogs[0]])
        console.log(authorId,blogid)
        setLoading(true)
    const token = localStorage.getItem('token');

    if (!token) {
        setError('No token found');
        return;
        }
        
        try {
            const response = await fetch(`http://localhost:3000/blogs/${authorId}/${blogid}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response)
            const data = await response.json();
            if (Array.isArray(data)) {
                setBlogs(data);
                console.log(data)
                
            }
            if (response.status === 200) {
                setBlogs(blogs.filter((blog) => blog.blogid !== blogid));
                console.log("blogs fetched")
        
            }
        
        } catch (error) {
            setError(error.message);
            console.error(error);
        } finally {
            setLoading(false)
        }

    
            // setBlogs(blogs.filter((blog) => blog.id !== id)),
            
    
    };

    return (
        <>
            <h2 className="user-title">Welcome to your Blogs!!</h2>
        <div className="user-card-sections">
           
            {error && <p className="error">{error}</p>}
            {blogs.length === 0 ? (
                <p>No blogs available.</p>
            ) : (
                blogs.map((blog, i) => (
                    <div className="user-blogs-card" key={i} >
                        <div className="blog-image">
            <input type="file" name="image" className="blog-image" id="image" onChange={((e) => {setImage(e.target.files[0])})}/>
                </div>
                <div>
                    <button onClick={uploadImage} >upload Image</button>
                        </div>
                        <div className="user-details">
                        <div className="blogs-title">
                            <p className="user-blog-title">{blog.title}</p>
                        </div>
                        <div className="blogs-content">
                            <p className="blogs-content">{blog.content}</p>
                        </div>
                        {blog.author && (
                            <>
                                <div className="blogs-name">
                                    <p className="blogs-name">{blog.author.firstName}</p>
                                </div>
                                <div className="blogs-date">
                                    <p className="blogs-date">{new Date(blog.createdAt).toLocaleDateString()}</p>
                                </div>
                            </>
                            )}
                            </div>
                        <div className="user-buttons">
                            <button className="edit-btn" >Edit</button>
                            <button className="delete-btn" disabled={loading} onClick={(e) => {
                                e.preventDefault();
                                handleDelete(blog.authorId , blog.blogid)
                            }}>
                            {loading ? "deleting..." : "delete"} </button>
                        </div>
                    </div>
                ))
            )}
            
            </div>
            </>
    );
}

export default UserBlogs;
