import React from "react";
import { brandingData,otherData } from "../../data/sections/brandingData";

const Services5 = () => {
  return (
    <section className="services box lficon section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
           
              <h3 className="wow color-font">
                Branding and Strategy
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {brandingData.map((item, index) => (
            <div
              className="col-lg-6 wow fadeInLeft "
              data-wow-delay={
                index == 0
                  ? ".5s"
                  : index == 1
                  ? ".7s"
                  : index === 2
                  ? ".9s"
                  : ".5s"
              }
              key={item.id}
            >
              <div className="item-box no-curve">
                <div>
                  <span className={`icon color-font ${item.icon}`}></span>
                </div>
                <div className="cont">
                  <h6>{item.title}</h6>
                  <ul  >
                 {
                  item.content.map((i)=>(
                      <li style={{marginTop:"5px",fontSize:"15px"}}>{i}</li>
                  ))
                 }
                 </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
         <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h3  className="wow mt-40 mb-0 color-font">
                Other Services
              </h3>
              
            </div>
          </div>
        </div>
         <div className="row justify-content-center">
          {otherData.map((item, index) => (
            <div
              className="col-lg-6 wow fadeInLeft "
              data-wow-delay={
                index == 0
                  ? ".5s"
                  : index == 1
                  ? ".7s"
                  : index === 2
                  ? ".9s"
                  : ".5s"
              }
              key={item.id}
            >
              <div className="item-box no-curve">
                <div>
                  <span className={`icon color-font ${item.icon}`}></span>
                </div>
                <div className="cont">
                <h6>{item.title}</h6>
                  <ul  >
                 {
                  item.content.map((i)=>(
                      <li style={{marginTop:"5px",fontSize:"15px"}}>{i}</li>
                  ))
                 }
                 </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default Services5;
