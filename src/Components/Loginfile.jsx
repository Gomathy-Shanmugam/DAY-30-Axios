import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



    
  

function Loginfile() {
  const Navigate = useNavigate()
    let login = ()=>{
        Navigate("/home")
    }
  return (
    <div>
      <div className="col-lg-12">

      <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: "100vh",maxWidth:"100vh" }}>
      <div className="card" style={{ width: "500px" }}>
        <div className="card-body">
          <div className="text-center">
            <p className="h4 mb-4">Welcome</p>
          </div>
          <form className="user">
            <div className="form-group row">
              <label htmlFor="exampleInputEmail" className="col-md-8 col-form-label">E-mail</label>
            
                <input
                  type="email"
                  className="form-control form-control-user "
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email Address..."
                />
             
            </div>
            <div className="form-group row">
              <label htmlFor="exampleInputPassword" className="col-md-8 col-form-label">Password</label>
              
                <input
                  type="password"
                  className="form-control form-control-user"
                  id="exampleInputPassword"
                  placeholder="Password"
                />
              
            </div>
            <div className="text-center">
              <button  onClick={login} type="submit" className="btn btn-primary btn-user ">Login</button>
            </div>
            <div className="text-center">
                      <Link className="small" to="/forgotpassword">
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to="/register">
                        Create an Account!
                      </Link>
                    </div>
          </form>
        </div>
      </div>
    </div>
    </div> 
      </div>

 
  );
}

export default Loginfile;
