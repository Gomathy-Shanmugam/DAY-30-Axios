import React from "react";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Details() {
  const navigate = useNavigate();
  let initialValues = {
    name: "",
    fullname: "",
    email: "",
    website: "",
    phonenumber : "",
    age:"",
    street:"",
    city:"",
    zipcode:"",
    user:""
  };

  let validate = (values) => {
    const errors = {};

    if (values.name === "") {
      errors.name = "Username is requires";
    }

    if (values.fullname === "") {
      errors.fulname = "Fullname is required";
    }

    if (values.email === "") {
      errors.email = "Email is required";
    }
    if (values.website === "") {
      errors.website = "Website is required";
    }
    if (values.phonenumber === "") {
      errors.phonenumber = "Phone Number is required";
    }
    
    if (values.age === "") {
      errors.age = "Age is required";
    }
    if (values.street === "") {
      errors.street = " Street Address is requires";
    }
    if (values.city === "") {
      errors.city = "City is required";
    }
    if (values.zipcode === "") {
      errors.zipcode = "Zipcode is required";
    }
    if (values.user === "") {
      errors.user = "About user is required";
    }
    return errors;
  };

  let onSubmit = async (values) => {
    try {
      await axios.post("https://660d1b103a0766e85dbf94e0.mockapi.io/api/axios", values);
      navigate("/dashboard"
    );
    alert("Details added Successfully")
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="p-5">
            <div className="text-center">
              <h4 className="text">Create Details</h4>
            </div>
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={onSubmit}
            >
              {({ values, errors, handleChange, handleSubmit }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-2">
                      <label>Username(how your name will appear to other users on the site)</label>
                      <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        className={`form-control form-control user ${
                          errors.name && "border-danger"
                        }`}
                        placeholder="Enter Username"
                        id="1"
                      ></input>
                      {errors.title && <div>{errors.name}</div>}
                    </div>
                    <div className="form-group mb-2">
                      <label>Fullname</label>
                      <input
                        type="text"
                        name="fullname"
                        value={values.fullname}
                        onChange={handleChange}
                        className={`form-control form-control user ${
                          errors.fullname && "border-danger"
                        }`}
                        placeholder="Enter your Fullname"
                        id="2"
                      ></input>
                      {errors.fullname && <div>{errors.fullname}</div>}
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group mb-2">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            className={`form-control form-control user ${
                              errors.email && "border-danger"
                            }`}
                            placeholder="Enter Your Email"
                            id="3"
                          ></input>
                          {errors.email && <div>{errors.email}</div>}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-2">
                          <label>Website</label>
                          <input
                            type="website"
                            name="website"
                            value={values.website}
                            onChange={handleChange}
                            className={`form-control form-control user ${
                              errors.website && "border-danger"
                            }`}
                            placeholder="Enter website"
                            id="4"
                          ></input>
                          {errors.website && <div>{errors.website}</div>}
                        </div>
                      </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <label>Phone Number</label>
                        <input
                          type="phonenumber"
                          name="phonenumber"
                          value={values.phonenumber}
                          onChange={handleChange}
                          className={`form-control form-control user ${
                            errors.phonenumber && "border-danger"
                          }`}
                          placeholder="Enter Phone Number"
                          id="5"
                        ></input>
                        {errors.phonenumber && <div>{errors.phonenumber}</div>}
                      </div>
                        
                        <div className="col-lg-3">
                          <label>Birthday</label>
                        <input
                          type="date"
                          name="birthday"
                          value={values.birthday}
                          onChange={handleChange}
                          className={`form-control form-control user ${
                            errors.content && "border-danger"
                          }`}
                          placeholder="DD-MM-YY"
                          id="lastname"
                        ></input>
                        {errors.content && <div>{errors.content}</div>}
                      </div>
                       
                        <div className="col-lg-3">
                          <label>Age</label>
                        <input
                          type="Number"
                          name="age"
                          value={values.age}
                          onChange={handleChange}
                          className={`form-control form-control user ${
                            errors.age && "border-danger"
                          }`}
                          placeholder="Enter age"
                          id="lastname"
                        ></input>
                        {errors.content && <div>{errors.age}</div>}
                      
                        </div>
                      </div>
                   
                       <div className="row">
                        <div className="col-lg-5">
                        <label>Street</label>
                        <input
                          type="text"
                          name="street"
                          value={values.street}
                          onChange={handleChange}
                          className={`form-control form-control user ${
                            errors.street && "border-danger"
                          }`}
                          placeholder="Enter Your Street"
                          id="lastname"
                        ></input>
                        {errors.street && <div>{errors.street}</div>}
                      
                        </div>
                        
                        <div className="col-lg-4">
                        <label>City</label>
                        <input
                          type="text"
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                          className={`form-control form-control user ${
                            errors.city && "border-danger"
                          }`}
                          placeholder="Enter City"
                          id="lastname"
                        ></input>
                        {errors.city && <div>{errors.city}</div>}
                        </div>
                        <div className="col-lg-3">
                        <label>Zipcode</label>
                        <input
                          type="Number"
                          name="zipcode"
                          value={values.zipcode}
                          onChange={handleChange}
                          className={`form-control form-control user ${
                            errors.zipcode && "border-danger"
                          }`}
                          placeholder="Enter Zipcode"
                          id="lastname"
                        ></input>
                        {errors.zipcode && <div>{errors.zipcode}</div>}
                        </div>
                       </div>
                      <div className="form-group mb-2">
                        <label>User Comment</label>
                        <textarea
                          type="text"
                          name="user"
                          value={values.user}
                          onChange={handleChange}
                          className={`form-control form-control user ${
                            errors.content && "border-danger"
                          }`}
                          placeholder="Enter about User"
                          id="lastname"
                        ></textarea>
                        {errors.user && <div>{errors.user}</div>}
                      </div>
                      

                    <input
                      type="submit"
                      className="btn btn-primary btn-user btn-block "
                      value="Create Details"
                    ></input>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
