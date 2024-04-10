import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";



function Editfile() {
 

  const navigate = useNavigate();
  const { id } = useParams();
  console.log("ID:", id);
  const [userData, setUserData] = useState({
    name: "",
    fullname: "",
    email: "",
    website: "",
    phonenumber: "",
    age: "",
    street: "",
    city: "",
    zipcode: "",
    user: ""
   
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://660d1b103a0766e85dbf94e0.mockapi.io/api/axios/${id}`,
        );
        console.log(response);
        setUserData(response.data[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [id]);



  const validate = (values) => {
    const errors = {};
   

    return errors;
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const onSubmit = async (values) => {
    try {
      // Construct the URL with the id parameter to specify the user to update
      const url = `https://660d1b103a0766e85dbf94e0.mockapi.io/api/axios/${id}`;
  
      // Make the PUT request with the updated user data
      await axios.put(url, values);
      alert("Used Data Successfully Edited");
  
      // Navigate to the dashboard upon successful update
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating user data:", error);
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
                initialValues={userData}
                validate={validate}
                onSubmit={onSubmit}
              >
                {({ values, errors, handleChange, handleSubmit }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="form-group mb-2">
                        <label>
                          Username(how your name will appear to other users on
                          the site)
                        </label>
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
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group mb-2">
                            <label>Website</label>
                            <input
                              type="text"
                              name="website"
                              value={values.website}
                              onChange={handleChange}
                              className={`form-control form-control user ${
                                errors.website && "border-danger"
                              }`}
                              placeholder="Enter website"
                              id="4"
                            ></input>
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
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Update Details
                      </button>
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

export default Editfile;
