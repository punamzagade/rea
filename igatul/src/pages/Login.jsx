import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "../redux/userRedux";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login/", {
        username,
        password,
      });
      dispatch(loginSuccess(res.data)) && alert("Successfully Login");
    } catch (error) {
      dispatch(loginFailure()) && alert("Please Enter Valid Data");
    }
  };

  return (
    <div>
      <div className="container border border-secondary border-1 rounded-3 mt-5 ">
        <div className="container-fluid nav-bg p-5">
          <div className="row ">
            <div className="col-10 mx-auto ">
              <form method="POST" className="row g-3">
                <div className="col-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    <b>Username</b>
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="inputEmail4"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputPassword4" className="form-label">
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={userLogin}
                  >
                    Sign in
                  </button>
                </div>

                <div>
                  <Link to="/register">CREATE AN NEW ACCOUNT</Link>
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

export default Login;
