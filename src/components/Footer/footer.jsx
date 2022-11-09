/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { client, urlFor } from "../../../lib/client";

const Footer = ({ hideBGCOLOR,blogs }) => {
  console.log(blogs)
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>Office No 2037, 2nd Floor, Oberoi Garden Estate, Chandivali Farm Rd, Andheri East, Mumbai 400072</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>contact@oneimpact.co</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+87986451666</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>

              

                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src={urlFor(blogs[0]?.bannerImage.asset._ref)} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p>
                          {blogs[0]?.title}
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date"> {blogs[0]?.releaseDate}</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src={urlFor(blogs[1]?.bannerImage.asset._ref)} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p>
                          {blogs[1]?.title}
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">{blogs[1]?.releaseDate}</span>
                      </a>
                    </Link>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
             
              <div className="social d-flex justify-content-center">
                
                <a target="_blank" href="https://www.linkedin.com/company/oneimpactagency/mycompany/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a target="_blank" href="https://www.instagram.com/oneimpactagency/">
                  <i className="fab fa-instagram"></i>
                </a>
                
              </div>
              <div className="copy-right">
                <p>
                  © 2022, One Impact. All Rights Reserved
                 
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};




export default Footer;
