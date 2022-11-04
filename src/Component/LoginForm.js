import React, { useRef } from "react";

import Home from "./Home";
const LoginForm = () => {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassowrd = localStorage.getItem("passwordData");

  const handleSubmit = () => {
    if (
      email.current.value === "default@email.com" &&
      password.current.value === "Default@2022"
    ) {
      localStorage.setItem("emailData", "default@email.com");
      localStorage.setItem("passwordData", "Default@2022");
    }
  };

  return (<>
      {getEmail && getPassowrd ?  <Home /> : 
    <div className="login-form">
        
            <div className="login-wrapper">
            
              <div className="tab-pane fade show active">
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4 text-start">
                  <label className="form-label">Email or username</label>
                  <input
                    type="text"
                    ref={email}
                    id="loginName"
                    className="form-control"
                  />
                </div>

                <div className="form-outline mb-4 text-start ">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    ref={password}
                    id="loginPassword"
                    className="form-control"
                  />
                </div>

                <div className="col-md-12 d-flex justify-content-center">
                  <ul className="nav nav-pills nav-justified ">
                    <li className="nav-item" role="presentation">
                      <button className="btn login-btn active">Login</button>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <p>
                    Not a member? <a href="#!">Register</a>
                  </p>
                </div>
              </form>
              </div>
        
      </div>
      
        
    </div>
          }
    </>
  );
};

export default LoginForm;
