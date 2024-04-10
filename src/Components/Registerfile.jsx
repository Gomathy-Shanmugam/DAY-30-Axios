import React from "react";
import { Link } from "react-router-dom";

function Registerfile() {
  return (
    <div className="register">
      <div
        className="container-fluid d-flex align-items-center justify-content-center "
        style={{ minHeight: "100vh", maxWidth: "100vh" }}
      >
        <div className="card" style={{ width: "500px" }}>
          <div className="card-body">
            <div className="text-center">
              <p className="h4 mb-4">Create Account</p>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="firstName ">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control "
                  id="lastName"
                  name="lastName"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              <div class="text-center">
                <Link class="small" to="/forgotpassword">
                  Forgot Password?
                </Link>
              </div>
              <div class="text-center">
                <Link class="small" to="/">
                  Already have an account? Login!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerfile;
