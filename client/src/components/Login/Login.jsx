/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import * as Yup from "yup"
import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import "./Login.css"

function Login() {
    const [ loading, setLoading ] = useState(false)
  const [error, setError] = useState(false);
  
    const navigate = useNavigate();
    const handleSubmit = async (formState) => {
    console.log("submitting")
    setLoading(true)
    setError(false)

      
    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      
      const data = await response.json()
      // setLoading(false)
      console.log(data)
      if (response.status === 200) {
        //save the jwt token to the local storage for use in other requests
        localStorage.setItem('token', data.data.token);
        //redirect to /blogs
        navigate("/Create")
     }else{
      setError(data.message)
    }

    } catch (error) {
    setError(error.message)
    } finally {
      setLoading(false)
    }
    }

    const ValidationSchema = Yup.object({
        emailAddress: Yup.string("must be string")
        .email("invalid Email")
        .required("this field is required"),
      password: Yup.string("password must be string") .required("field is required"),
    })
    const formik = useFormik({
        initialValues: {
            emailAddress: "",
            password: "",
        },
        onSubmit:(formState) => {
          console.log("Trying to log in the user");
          console.log(formState);
          handleSubmit(formState);
        },
        validationSchema: ValidationSchema,
    })
    return (
        <div className="login-container" >
           
            <form className="login-form" onSubmit={formik.handleSubmit}>
            <h2 className="login-title">Login</h2>
                <div >
                    <label htmlFor="emailAddress">Email:</label><br/>
                    <input type="email" id="emailAddress" placeholder="email" className="login" value={formik.values.emailAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>{formik.touched.emailAddress && formik.errors.emailAddress && <p>{formik.errors.emailAddress}</p>}
                </div>
                <label htmlFor="password">Password:</label>
                <input type="password"id="password" placeholder="Password" className="login" value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>{formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}<br/>
                <button type="submit" className="submit">Login</button>
            </form>
        </div>
    )
}
export default Login