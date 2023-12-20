import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Form() {
  // Initialising the states using the useState hook
  const initValues = { name: "", email: "", password: "", repeat: "" };
  const [formData, setformData] = useState(initValues);
  const [register, setregister] = useState(false);
  const [formErr, setformErr] = useState({});

  // Function for handling input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  // function for submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    validation(formData);
    setformErr(validation(formData));
    setregister(true);
  };

  useEffect(() => {
    if (Object.keys(formErr).length === 0 && register) {
    }
  }, [formErr]);

  // Function for validating the input values
  const validation = (values) => {
    const err = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!values.name) {
      err.name = "*Name is required";
    } else if (values.name.length > 30 || values.name.length < 3) {
      err.name = "*Name must be between 3 and 30 characters!";
    }
    if (!values.email) {
      err.email = "*Email is required";
    } else if (!regex.test(values.email)) {
      err.email = "*This is not a valid email format!";
    }
    if (!values.password) {
      err.password = "*Password is required";
    } else if (values.password.length < 10) {
      err.password = "*Password should be atleast 10 characters!";
    } else if (!specialCharRegex.test(values.password)) {
      err.password = "*Password should contain at least one special character!";
    }
    if (!values.repeat) {
      err.repeat = "*Repeat your Password!";
    } else if (values.repeat !== values.password) {
      err.repeat = "*Passwords don't match!";
    }
    return err;
  };
  return (
    <>
      {Object.keys(formErr).length === 0 && register ? (
        <div
          className="success"
          style={{ backgroundColor: "rgb(158, 220, 152)" }}
        >
          <img src="./imgs/check.png" alt="" />
          <div>Registration Successful!</div>
        </div>
      ) : null}

      <div className="container">
        <div className="flex">
          <form onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            <div>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <p className="err">{formErr.name}</p>
            <div>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <p className="err">{formErr.email}</p>
            <div>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <p className="err">{formErr.password}</p>
            <div>
              <input
                className="input"
                type="password"
                name="repeat"
                placeholder="Repeat your Password"
                value={formData.repeat}
                onChange={handleChange}
              />
            </div>
            <p className="err">{formErr.repeat}</p>
            <div className="info">
              <div className="sign_up">
                <button className="sign-up-btn">Sign Up</button>
              </div>
              <div>
                <p
                  className="
        click"
                >
                  Already have an account?{" "}
                  <Link className="link" to="/">
                    Click here!
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
