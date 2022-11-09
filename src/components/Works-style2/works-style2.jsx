/* eslint-disable @next/next/no-img-element */
import React,{useState} from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import { urlFor } from "../../../lib/client";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import MuxVideo from '@mux/mux-video-react';
const WorksStyle2 = ({ grid, hideFilter, filterPosition, works,productions,shoots,reels,productionReels }) => {
    console.log(shoots)
  const [isOpen, setOpen] = useState(false);
  console.log(productions)
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
    console.clear();
  }, []);
  return (
    <section
      className={`${
        grid ? (grid === 3 ? "three-column" : null) : null
      } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Statics
                </h6>
                <h3 className="wow color-font">
                  Our Recent Cretives 
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={"container"}>
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === "center"
                  ? "text-center"
                  : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
              } col-12`}
            >
              <div className="filter">
                <span  className="active"  data-filter="*">All</span>
                 <span     data-filter=".shoots">Shoots</span>
                <span   data-filter=".cretives">Creatives</span>
               

              </div>
            </div>
          )}
      
          <div className="gallery  full-width">
             {works?.map((work)=>(
            <div
              className={`${
                grid === 3
                  ? "col-lg-3 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items cretives  wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
             
                  <a className="imago wow">
                    <img src={urlFor(work.starterImage.asset._ref)} alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>

              </div>
              <div className="cont">
                <h6>{work.title}</h6>
                <span>
                  <p>{work.subTitle}</p>
                </span>
              </div>
            </div>
          ))}
    
         
             {shoots?.map((work)=>(
            <div
              className={`${
                grid === 3
                  ? "col-lg-3 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items shoots  wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
             
                  <a className="imago wow">
                    <img src={urlFor(work.mainImage.asset._ref)} alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>

              </div>
              <div className="cont">
                <h6>{work.title}</h6>
                <span>
                  <p>{work.subTitle}</p>
                </span>
              </div>
            </div>
          ))}
          </div>
          </div>
        </div>
         

    </section>
  );
};

export default WorksStyle2;
