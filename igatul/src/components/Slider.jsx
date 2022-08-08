import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="active"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=""
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              alt=""
              src="./img/s2.jpg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            ></img>

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Write Your First Blog</h1>
                <p>Follow Your Passion.</p>
                <p>
                  <Link className="btn btn-lg btn-primary" to="/register">
                    Sign up today
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              alt=""
              src="./img/s1.jpg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            ></img>

            <div className="container">
              <div className="carousel-caption">
                <h1>Join Us</h1>
                <p>Share Your Thoughts.</p>
                <p>
                  <Link className="btn btn-lg btn-primary" to="#">
                    Learn more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              alt=""
              src="./img/s3.jpg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            ></img>

            <div className="container">
              <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>Make your Life Beautifull.</p>
                <p>
                  <Link className="btn btn-lg btn-primary" to="#">
                    Browse gallery
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
