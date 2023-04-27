import React, { useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
        form.reset();
        navigate("/")
      })
      .catch(error => {
      console.log(error)
    })
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin}>
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
