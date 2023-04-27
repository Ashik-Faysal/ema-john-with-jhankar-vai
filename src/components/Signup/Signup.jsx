import React, { useContext, useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Signup = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    console.log(email, password, confirmPassword);

    setError("");

    if (password !== confirmPassword) {
      setError("password not matched");
      return;
    } else if (password.length < 6) {
      setError("password too short, must be at least 6 characters");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
      <p className="text-error">{error}</p>
      <h5>
        Already Have an Account? &nbsp; <Link to="/login">Please Login</Link>{" "}
      </h5>
    </div>
  );
};

export default Signup;
