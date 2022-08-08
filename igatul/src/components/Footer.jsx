import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="container">
        <p className="float-end">
          <Link to="#">Back to top</Link>
        </p>
        <p>
          © 2017–2021 Company, Inc. · <Link to="#">Privacy</Link> ·{" "}
          <Link to="#">Terms</Link>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
