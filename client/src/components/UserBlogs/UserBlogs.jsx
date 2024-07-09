/* eslint-disable no-unused-vars */
import React from "react"
import { useState, useEffect } from "react"
import "./UserBlogs.css"
function UserBlogs() {
    const [blogs, setBlogs] = useState()
    useEffect(()=> {
        const fetchUserBlogs = async () => {
            try {
                const response = await fetch('http://localhost:3000/blogs/authorid', {
                    method:['GET',"PATCH" ,"DELETE" ],
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': `Bearer ${token}`
                    }
                });
            } catch (error) {
                //
            }

        }
        fetchUserBlogs();
    } ,[])
    return (
        <div className="user-blogs-section">
            <h2>Welcome to your Blogs!!</h2>
            {blogs.map((blog, i) => {
                <div className="user-blogs-card" key={i}>
                    <div className="blogs-title">
                        <p className="blogs-title">{blog.title}</p>
                    </div>
                    <div className="blogs-content">
                        <p className="blogs-content">{blog.content}</p>
                    </div>
                    <div className="blogs-name">
                        <p className="blogs-name">{blog.author.firstName}</p>
                    </div>
                    <div className="blogs-date">
                        <p className="blogs-date">{blog.author.CreatedAt}</p>
                    </div>
            
               
                </div>
            })}
            <div className="user-buttons">
                <button className="submit" >Update</button>
                <button className="submit" >Delete</button>
                </div>
        </div>
    )
}
export default UserBlogs;
