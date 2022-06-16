import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>company information</h6>
            <hr />
            <p className="text-white">
              hfkjghf hdkfhk hfkjghf hdkfhk hfkjghf hdkfhk hfkjghf hdkfhk
              hfkjghf hdkfhk hfkjghf hdkfhk hfkjghf hdkfhk hfkjghf hdkfhk hdkfhk
              hfkjghf hdkfhk hdkfhk hfkjghf hdkfhk hdkfhk hfkjghf hdkfhk
            </p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <Link to="/blog">Blog</Link>
            </div>
          </div>
          <div className="col-md-4">
            <h6>Contact Information</h6>
            <hr />
            <div>
              <p className="text-white mb-1">West-Bank, Ramallah</p>
            </div>
            <div>
              <p className="text-white mb-1"></p>+97256845XXXX
            </div>
            <div>
              <p className="text-white mb-1"></p>+97277845XXXX
            </div>
            <div>
              <p className="text-white mb-1"></p>target@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
