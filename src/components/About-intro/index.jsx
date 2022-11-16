import React from "react";
import Split from "../Split";
import AboutInfo1Data from "../../data/sections/about-info1.json";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>{AboutInfo1Data.title}</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                >
                  We love asking questions and always like to know the ‘whys’ of things. Dissecting briefs and following them to the T is what we do best. We come with an opinion, but first we prefer listening. 
                </p>
                <p className="wow txt words chars splitting" data-splitting>
                  Come meet us at our office to hear some unheard music, have home-like chai (or coffee) and most importantly discuss your marketing goals with us, it’s our first favourite thing to do!
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
