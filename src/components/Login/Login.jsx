import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form>
        <div className="form-control">
          <label>Email</label>
          <input type="email" name="email" placeholder="email" required />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <h5>
        New to this website? &nbsp; <Link to="/signup">Register here</Link>
      </h5>
    </div>
  );
};

export default Login;
