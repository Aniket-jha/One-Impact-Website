/* eslint-disable @next/next/no-img-element */
import React from "react";

const PagesHeader = () => {
  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont aboutMargin   mb-50 text-center">
              <h1 className="color-font fw-700">About Us</h1>
              <p className="aboutHeaderContent  text-justify">
                We are a bunch of hyperactive people who are constantly focused
                on getting things done. We operate on the much overrated
                ‘hustle’ mindset, a mixed music playlist that keeps us awake
                after our second most favourite activity (eating) and a lot of
                chai, maggi and coffee. Each of us have a personality that’s
                individual to us, but together we are in sync to bring the best
                output possible. Our creative juices are sometimes too much for
                people but we know how to control the flow, so fitting into a
                box or stepping out of it, we are perfectly comfortable with
                both.
              </p>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="img">
              <img src="/img/aboutBanner.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="half sub-bg">
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;
