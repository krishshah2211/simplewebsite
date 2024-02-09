import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name == "name" && value.length > 0 && value.length < 4) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Name must be at least 4 characters",
      }));
    } else if (name == "email") {
      const Regexp = /[a-zA-Z0-9]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      if (!value || !Regexp.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Invalid Email Address",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
    
  };
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       [name]: "",
  //     }));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "name must be at least 3 characters";
      //   alert("name must be at least 3 characters");
    }
    const RegEx = /[a-zA-Z0-9]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!formData.email || !RegEx.test(formData.email)) {
      newErrors.email = " Invalid Email Address";
      //   alert("Correct Regular Expression is required");
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
      //   alert("message should be written");
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Data:", formData);
      //   alert("Form is submitted");
      navigate("/");
    }
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error"> {errors.email}</p>}
          <label htmlFor="message">Message</label>
          <input
            name="message"
            placeholder="Enter message"
            type="text"
            onChange={handleChange}
          />
          {errors.message && <p className="error"> {errors.message}</p>}
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
