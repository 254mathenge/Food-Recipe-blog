import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./CreateBlog.css";

function CreateBlog() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    console.log("submitting");
    setLoading(true);
    setError("");

    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:3000/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log(data);
      setLoading(false);

      if (response.ok) {
        alert("blog created sucessful");
        navigate("/Blog");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Failed to create blog.");
      setLoading(false);
    }
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit: (values) => {
      console.log("Trying to log in the user");
      console.log(values);
      handleSubmit(values);
    },
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
          {formik.touched.title && formik.errors.title && (
            <p className="error">{formik.errors.title}</p>
          )}
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
          {formik.touched.content && formik.errors.content && (
            <p className="error">{formik.errors.content}</p>
          )}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
