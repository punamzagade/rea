import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register/", {
        username,
        email,
        password,
      });
      res && navigate("/login");
      alert("registered successfully");
    } catch (err) {
      navigate("/register");
      alert("Enter valid data");
    }
  };

  return (
    <div>
      <div className="container border border-secondary border-1 rounded-3 mt-5">
        <div className="container-fluid nav-bg p-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <form className="row g-3">
                <div className="col-md-12">
                  <label htmlFor="input" className="form-label">
                    <b>Username</b>
                  </label>
                  <input
                    type="name"
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    id="name"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    <b>Email</b>
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleClick}
                  >
                    Register
                  </button>
                </div>
                <div>
                  <Link to="/login">ALREADY HAVE AN ACCOUNT</Link>
                </div>
                <div>
                  <Link to="/">back to HOME</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
