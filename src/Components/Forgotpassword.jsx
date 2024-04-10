import React from "react";
import { Link } from "react-router-dom";

function Forgotpassword() {
  return (
    <div>
      <div
        className="container-fluid d-flex align-items-center justify-content-center forgotpassword"
        style={{ minHeight: "100vh" }}
      >
        <div className="card" style={{ width: "400px" }}>
          <div className="card-body">
            <div className="text-center">
              <p className="h4 mb-4">Forgot Password</p>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
                <label htmlFor="email">Reset password</label>
                <input
                  type="password"
                  className="form-control"
                  id="email"
                  required
                />
                <label htmlFor="email">Confirm password</label>
                <input
                  type="email"
                  className="form-control"
                  id="password"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Reset Password
                </button>
              </div>
              <div className="text-center">
                            <Link className="small" to="/register">Create an Account!</Link>
                        </div>
                        <div className="text-center">
                            <Link className="small" to="/">Already have an account? Login!</Link>
                        </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;
