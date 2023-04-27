import React from 'react';
import "./Signup.css"

const Signup = () => {
    return (
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
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
          <div className="form-control">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm"
              placeholder="Confirm password"
              required
            />
          </div>
          <input className="btn-submit" type="submit" value="Sign Up" />
        </form>
      </div>
    );
};

export default Signup;