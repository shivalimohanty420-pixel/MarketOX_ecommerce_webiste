import { Link, useNavigate } from "react-router-dom";
import "./sign.css"
import { useEffect, useState } from "react";


export default function Signin() {

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const Nav = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("userid")) {
      Nav("/dashboard");
    }
  }, [Nav]);

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: Username,
        password: Password,
        expiresInMins: 30,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.accessToken) {
          localStorage.setItem("userid", data.id)
          Nav('/dashboard');
        }

        else {
          alert('Invalid Credentionals')
        }
      });
  }

  return (
    <>
      <div className="signinpage">
        <div className="signincard">
          <h1 className="signinh1">Welcome back</h1>
          <p className="signinsub">Sign in to your account</p>
          <form onSubmit={handleSubmit}>
            <label>Email address</label>
            <input type="text" value={Username} onChange={(e) => setUsername(e.target.value)}
              id="email" placeholder="john" className="signin-input" />

            <label>Password</label>
            <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)}
              id="password" placeholder="••••••••" className="signin-input" />

            <div className="remrow">
              <label className="remember">
                <input className="signin-input" type="checkbox" />
                Remember me
              </label>
              <a className="forgot" href="..">Forgot password?</a>
            </div>

            <button type="submit" className="signinbtn">Sign in</button>

            <div className="divider">or</div>

            <div className="signup-row">
              Don't have an account? <Link to="/register">Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}