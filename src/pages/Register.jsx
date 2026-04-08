import { Link } from "react-router-dom";
import './sign.css'

const Register = () =>{
    return(
        <>
        <div className="signinpage">
        <div className="signincard">
          <h1 className="signinh1">Create an account</h1>
          <p className="signinsub">Sign up to get started today</p>
 
          <div className="row-2">
            <div className="field">
              <label>First name</label>
              <input className="signin-input" type="text" id="firstName" placeholder="John" />
            </div>
            <div className="field">
              <label>Last name</label>
              <input className="signin-input" type="text" id="lastName" placeholder="Doe" />
            </div>
          </div>
 
          <div className="field">
            <label>Email address</label>
            <input className="signin-input" type="email" id="email" placeholder="you@example.com" />
          </div>
 
          <div className="field">
            <label>Password</label>
            <input className="signin-input" type="password" id="password" placeholder="••••••••" />
          </div>
 
          <div className="field">
            <label>Confirm password</label>
            <input className="signin-input" type="password" id="confirmPassword" placeholder="••••••••" />
          </div>
 
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>
 
          <button className="signinbtn">Create Account</button>
 
          <div className="signup-row">
            Already have an account? <Link to= '/login'>Sign in</Link>
          </div>
        </div>
      </div>
        </>


    )
}

export default Register;