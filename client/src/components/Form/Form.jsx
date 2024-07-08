/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Form.css";
import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";
function Form() {
  const [ loading, setLoading ] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate();
  const handleSubmit = async (formState) => {
    console.log("submitting")
    setLoading(true)
    setError(false)
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      alert("Sign Up Successful");
      const data = await response.json()
      
      console.log(data)
      if (response.status === 201) {
        navigate("/SignIn")
     }else{
      setError(data.message)
    }

    } catch (error) {
      alert("Failed to Sign Up");
      console.error(error);
    } finally {
      setLoading(false)
    }
  }
  
  const ValidationSchema = Yup.object({
    firstName: Yup.string("name must be string").required("field is required"),
    lastName: Yup.string("LasName must be string").required(
      "field is required"
    ),
    emailAddress: Yup.string("must be string")
      .email("invalid Email")
      .required("this field is required"),
    password: Yup.string("password must be string"),
    phone: Yup.string("must be string").required("field is required"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      phone: 896553456,
    },
    onSubmit: (formState) => {
      console.log("Here is the user");
      console.log(formState);
      handleSubmit(formState);
    },
    validationSchema: ValidationSchema,
  });

  return (
    <div className="get-started">
      <div className="sighup-section">
        <h2 className="sigh-title">SignUp</h2>
        <form className="sigh-form" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="first">FirstName:</label>
            <br />
            <input
              type="text"
              className="form-section"
              id="first"
              placeholder="firstName"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />{formik.touched.firstName && formik.errors.firstName && <p>{formik.errors.firstName }</p>}
          </div>
          <div>
            <label htmlFor="last">LastName:</label>
            <br />
            <input
              type="text"
              className="form-section"
              id="last"
              placeholder="lastName"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />{formik.touched.firstName && formik.errors.lastName && <p>{formik.errors.lastName}</p>}
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <br />
            <input
              type="email"
              className="form-section"
              id="email"
              placeholder="email"
              name="emailAddress"
              value={formik.values.emailAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />{formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <br />
            <input
              type="password"
              className="form-section"
              id="password"
              placeholder="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />{formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
          </div>
          <div>
            <label htmlFor="">Phone: </label>
            <br />
            <input
              type="number"
              className="form-section"
              id="phone"
              placeholder="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />{formik.touched.phone && formik.errors.phone&& <p>{formik.errors.phone}</p>}
          </div>
          <button type="submit" className="submit" disabled={loading}>{loading ? "please wait..." : " Submit"}
           
          </button>
          <div>
            <p className="sign-in-text">
              Already have an Account?? <Link to="/SignIn">SignIn</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
