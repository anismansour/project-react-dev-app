import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;
  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  const onSubmit = async e => {
    e.preventDefault();
    console.log("success");
  };
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Sign in</h1>
        <p className="lead">
          <i className="fas fa-user" /> sign in into Account
        </p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onChange(e)}
            />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              minLength="6"
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </section>
    </Fragment>
  );
};

export default Login;
