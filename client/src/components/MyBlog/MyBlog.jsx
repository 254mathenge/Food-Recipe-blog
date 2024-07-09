/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./MyBlog.css"
import { Link } from "react-router-dom";
import blog from "../../assets/blog image.jpg"
import { FaArrowRight } from "react-icons/fa";
import React, { useState, useEffect } from 'react';

const BlogCard = ({ title, content}) => {
    return (
        <div className="blogs-card-section">
            <div className="blogs-details">
                <div className="blog-title">
                    <p className="blog-title">{title}</p>
                </div>
                <div className="blog-text">
                    <p className="blog-text">{content}</p>
                </div>
                {/* <div className="blog-name">
                    <p className="blog-name">{blog.author.firstName}</p>
                </div> */}
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
                    method: 'GET',
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
        <div>
            <h2 className="blogs-title">Blogs</h2>
            <h3 className="blogs-title2">Recent Blog Posts</h3>
            <div className="blog-card-sections">
                <div className="blog-card">
                {Array.isArray(blogs) ? (
                        blogs.map((blog, index) => (
                            <BlogCard key={index} title={blog.title} content={blog.content} />
                        ))
                    ) : (
                        <p>No blogs available.</p>
                    )}
                </div>
                {/* <div className="loading">
                    <p className="loading">Loading More...</p>
                </div> */}
            </div>
        </div>
    );
}

export default MyBlog;