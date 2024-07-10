/* eslint-disable no-unused-vars */
import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./UserBlogs.css"


function UserBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);
    // const navigate = useNavigate();
    const handleDelete =() => {
        alert("blog deleted")
        ;
    }
   
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
                    // credentials:"include"
                   

                });

                console.log(response)
               
                
                 
                const data = await response.json();
                if (Array.isArray(data)) {
                    setBlogs(data);
                    console.log(data)
                } 
                if (response.status === 200) {
                    console.log("blogs fetched")
                    // localStorage.setItem('token', data.data.token);
                 } 
            } catch (error) {
                setError(error.message);
                console.error(error);
            }
        };

        fetchUserBlogs();
    }, []);
    

    return (
        <div className="user-blogs-section">
            <h2>Welcome to your Blogs!!</h2>
            {error && <p className="error">{error}</p>}
            {blogs.length === 0 ? (
                <p>No blogs available.</p>
            ) : (
                blogs.map((blog, i) => (
                    <div className="user-blogs-card" key={i}  onClick={handleDelete}>
                        <div className="blogs-title">
                            <p className="blogs-title">{blog.title}</p>
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
                        <div className="user-buttons">
                <button className="submit" >Update</button>
                <button className="submit">Delete</button>
            </div>
                    </div>
                ))
            )}
            
        </div>
    );
}

export default UserBlogs;
