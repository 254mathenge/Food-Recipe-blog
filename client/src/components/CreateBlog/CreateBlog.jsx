import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import './CreateBlog.css';

function CreateBlog() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('http://localhost:5000/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                navigate('/blogs');
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError('Failed to create blog.');
            setLoading(false);
        }
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        content: Yup.string().required('Content is required'),
        author: Yup.string().required('Author is required'),
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            content: '',
            author: '',
            date: new Date().toISOString().split('T')[0], // Sets the date to today's date
        },
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    });

    return (
        <div className="create-blog-container">
            <form className="create-blog-form" onSubmit={formik.handleSubmit}>
                <h2>Create Food Blog</h2>
                {error && <p className="error">{error}</p>}
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.title && formik.errors.title && <p className="error">{formik.errors.title}</p>}
                </div>
                <div>
                    <label htmlFor="content">Content/Recipe:</label>
                    <textarea
                        id="content"
                        name="content"
                        value={formik.values.content}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.content && formik.errors.content && <p className="error">{formik.errors.content}</p>}
                </div>
                <div>
                    <label htmlFor="author">Your Name:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formik.values.author}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.author && formik.errors.author && <p className="error">{formik.errors.author}</p>}
                </div>
                <div>
                    <label htmlFor="date">Date Created:</label>
                    <input
                        type="text"
                        id="date"
                        name="date"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        readOnly
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Blog'}
                </button>
            </form>
        </div>
    );
}

export default CreateBlog;
