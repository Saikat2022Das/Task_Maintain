import React from "react";
import clickup from "./clickup.png";
import { useNavigate } from "react-router-dom";
const Loginpage = () => {
  
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("CombinedPage");
  };

  return (
    <>
      
        <div className="full-section">
          <div className="header-sec">
            <img src={clickup} alt="" style={{ height: "70px" }} />
            <a className="signup-link" href=" ">
              Don't have an account?
            </a>
            <button className="signup-btn">
              <span>Sign up</span>
            </button>
          </div>
          <div className="main-body">
            <div className="Box">
              <h2>Welcome Back!</h2>

              <form>
                <div className="form-group">
                  <label htmlFor="email-input">Email</label>
                  <br />
                  <i className="fa fa-envelope env-lock"></i>
                  <input
                    type="email"
                    className="form-control"
                    id="email-input"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password-input">Password</label>
                  <br />
                  <i className="fa solid fa-lock env-lock"></i>
                  <input
                    type="password"
                    className="form-control"
                    id="password-input"
                    placeholder="Password"
                  />
                </div>
                <a href=" " className="link-style">
                  Forgot Password?
                </a>
              </form>

              <div className="login-div">
                <button className="login-btn"onClick={handleLogin} >
                  <span>Log In</span>
                </button>

                <a href=" ">or login with SSO</a>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Loginpage;
