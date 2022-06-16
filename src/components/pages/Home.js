import React from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import Vmc from "../inc/Vmc";
import product1 from "../images/f1.jpg";
import product2 from "../images/f2.jpg";
import product3 from "../images/f3.jpg";
const Home = () => {
  return (
    <div>
      <Slider />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our company</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <Link to="/about" className=" btn btn-warning shadow">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Vmc />
      <section class="container">
        <div class="row">
          <div className="col-md-12 mb-4 text-center">
            <h3 className="main-heading">Our Products</h3>
            <div className="underline mx-auto"></div>
          </div>
          <div class="col-sm">
            <div className="card shadow">
              <img
                style={{ height: "12rem" }}
                src={product1}
                className="w-100 border-bottom"
                alt=""
              />
              <div className="card-body">
                <h6>product 1</h6>
                <div className="underline"></div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/services" className="btn btn-link">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm mb-4">
            <div className="card shadow">
              <img
                style={{ height: "12rem" }}
                src={product2}
                className="w-100 border-bottom"
                alt=""
              />
              <div className="card-body">
                <h6>product 2</h6>
                <div className="underline"></div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/services" className="btn btn-link">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div className="card shadow">
              <img
                style={{ height: "12rem" }}
                src={product3}
                className="w-100 border-bottom"
                alt=""
              />
              <div className="card-body">
                <h6>product 3</h6>
                <div className="underline"></div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/services" className="btn btn-link">
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
