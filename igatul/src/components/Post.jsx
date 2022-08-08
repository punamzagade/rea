import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="container marketing">
              <div className="row mt-5">
                <div className="col-lg-4">
                  <img
                    className="bd-placeholder-img rounded-circle"
                    width="140"
                    height="140"
                    alt=""
                    src="./img/m1.jpg"
                    role="img"
                    aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  ></img>

                  <h2>Makeup</h2>
                  <p>
                    Some representative placeholder content for the three
                    columns of text below the carousel. This is the first
                    column.
                  </p>
                  <p>
                    <Link className="btn btn-secondary" to="#">
                      View details »
                    </Link>
                  </p>
                </div>
                <div className="col-lg-4">
                  <img
                    className="bd-placeholder-img rounded-circle"
                    width="140"
                    height="140"
                    alt=""
                    src="./img/f1.jpg"
                    role="img"
                    aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  ></img>

                  <h2>Fashion</h2>
                  <p>
                    Another exciting bit of representative placeholder content.
                    This time, we've moved on to the second column.
                  </p>
                  <p>
                    <Link className="btn btn-secondary" to="#">
                      View details »
                    </Link>
                  </p>
                </div>
                <div className="col-lg-4">
                  <img
                    className="bd-placeholder-img rounded-circle"
                    width="140"
                    height="140"
                    alt=""
                    src="./img/b1.jpg"
                    role="img"
                    aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  ></img>

                  <h2>Blog</h2>
                  <p>
                    And lastly this, the third column of representative
                    placeholder content. This time, we've moved on to the second
                    column.
                  </p>
                  <p>
                    <Link className="btn btn-secondary" to="#">
                      View details »
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <hr className="featurette-divider" />

            <div className="row featurette d-flex justify-content-center align-items-center ">
              <div className="col-md-7">
                <h2 className="featurette-heading">
                  First featurette heading.
                  <span className="text-muted">It’ll blow your mind.</span>
                </h2>
                <p className="lead">
                  Some great placeholder content for the first featurette here.
                  Imagine some exciting prose here.
                </p>
              </div>
              <div className="col-md-5">
                <img
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  alt=""
                  src="./img/i1.jpg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                ></img>
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette d-flex justify-content-center align-items-center ">
              <div className="col-md-7 order-md-2 ">
                <h2 className="featurette-heading">
                  Oh yeah, it’s that good.
                  <span className="text-muted">See for yourself.</span>
                </h2>
                <p className="lead">
                  Another featurette? Of course. More placeholder content here
                  to give you an idea of how this layout would work with some
                  actual real-world content in place.
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <img
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  alt=""
                  src="./img/i2.jpg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                ></img>
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette d-flex justify-content-center align-items-center">
              <div className="col-md-7">
                <h2 className="featurette-heading">
                  And lastly, this one.{" "}
                  <span className="text-muted">Checkmate.</span>
                </h2>
                <p className="lead">
                  And yes, this is the last block of representative placeholder
                  content. Again, not really intended to be actually read,
                  simply here to give you a better view of what this would look
                  like with some actual content. Your content.
                </p>
              </div>
              <div className="col-md-5">
                <img
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  alt=""
                  src="./img/i3.jpg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                ></img>
              </div>
            </div>

            <hr className="featurette-divider" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
