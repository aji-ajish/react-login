import React, { useState, useRef, useEffect } from "react";
import "./Login2.css";
import {
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiUser,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

export default function Login2() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [confirmPasswordTouch, setConfirmPasswordTouch] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const toogle_btn = useRef(null);
  const loginform = useRef(null);
  const signupform = useRef(null);

  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (confirmPasswordTouch) {
      setPasswordMatch(value === password);
      setErrorMessage(value === password ? "" : "error-border");
    }
  };
  const handleConfirmPasswordFocus = () => {
    setConfirmPasswordTouch(true);
  };

  const login = () => {
    loginform.current.style.left = "0px";
    signupform.current.style.left = "450px";
    toogle_btn.current.style.left = "0";
  };
  const signup = () => {
    loginform.current.style.left = "-400px";
    signupform.current.style.left = "0px";
    toogle_btn.current.style.left = "110px";
  };

  return (
    <div className="login2">
      <div className="toggleButton">
        <div id="toogle_btn" ref={toogle_btn}></div>
        <button type="button" className="toogle-btn" onClick={login}>
          Login
        </button>
        <button type="button" className="toogle-btn" onClick={signup}>
          Signup
        </button>
      </div>
      <div className="social-icons">
        <div className="instagram">
          <FiInstagram />
        </div>
        <div className="facebook">
          <FiFacebook />
        </div>
        <div className="twitter">
          <FiTwitter />
        </div>
      </div>
      <div className="form-box">
        <form id="login" ref={loginform}>
          <div className="username">
            <div className="icon">
              <FiMail />
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
            />
          </div>

          <div className="password">
            <div className="icon">
              <FiLock />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="icon" onClick={togglePasswordVisible}>
              {showPassword ? (
                <div className="eye">
                  <FiEye />
                </div>
              ) : (
                <div className="eye">
                  <FiEyeOff />
                </div>
              )}
            </div>
          </div>
          <div className="remember">
            <input type="checkbox" />
            <p>Remember me</p>
            <p className="forgot">Forgot password?</p>
          </div>
          <div className="submit-btn">
            <input type="submit" value="Login" />
          </div>
        </form>

        <form id="signup" ref={signupform}>
          <div className="username">
            <div className="icon">
              <FiUser />
            </div>
            <input
              type="text"
              placeholder="Enter your name"
              autoComplete="off"
            />
          </div>
          <div className="email">
            <div className="icon">
              <FiMail />
            </div>
            <input
              type="email"
              placeholder="Enter your name"
              autoComplete="off"
            />
          </div>
          <div className="password">
            <div className="icon">
              <FiLock />
            </div>
            <input
              className={errorMessage}
              type={showPassword ? "text" : "password"}
              placeholder="Enter a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="false"
            />
          </div>
          <div className="cpassword">
            <div className="icon">
              <FiLock />
            </div>
            <input
              className={errorMessage}
              type={showPassword ? "text" : "password"}
              placeholder="Confirm a password"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              onFocus={handleConfirmPasswordFocus}
              autoComplete="false"
            />
            <div className="icon" onClick={togglePasswordVisible}>
              {showPassword ? (
                <div className="eye">
                  <FiEye />
                </div>
              ) : (
                <div className="eye">
                  <FiEyeOff />
                </div>
              )}
            </div>
          </div>
          {confirmPasswordTouch &&
            (passwordMatch ? (
              ""
            ) : (
              <p className="error-msg">
                Confirmation Password not Match
              </p>
            ))}
          <div className="accept">
            <input type="checkbox" />
            <p>I accept all terms & conditions</p>
          </div>
          <div className="submit-btn">
            <input type="submit" value="Signup" />
          </div>
        </form>
      </div>
    </div>
  );
}

