/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PagesHeader = () => {
  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont mt-100 mb-50 text-center">
            <h1 className='color-font fw-700'>About Us</h1>
              <h6 className=" fw-200">
                Our team of passionate thinkers are ready to scale the steep mountains of the marketing world with their creative and strategically sound solutions to gain sustained results.. 
              </h6>
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