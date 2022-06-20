import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1>
                    {props.name}
                    <br />
                    <strong className="brand-name">LearnForTomorrow</strong>
                  </h1>
                  <h2 className="my-3">
                    We are providing more than 100+ courses with 24*7 live
                    supports. And that too with very resonable prices.
                  </h2>
                  <div className="mt-3">
                    <h2 style={{ underline: "none" }}>Do not wait, let's </h2>
                    <NavLink to={props.visit} class="btn-get-started scrollto">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 header-img ">
                  <img src={props.imgsrc} class="img-fluid animated" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
