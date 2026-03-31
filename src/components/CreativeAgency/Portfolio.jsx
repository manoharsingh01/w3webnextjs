import React from 'react';
//= Data
import data from '@/data/CreativeAgency/portfolio.json';

function Portfolio() {
  return (
    <section className="portfolio section-padding">
      <div className="container ontop">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-7">
              <div className="position-re">
                {/* <h6 className="dot-titl mb-10">Selected Projects</h6> */}
                <h2 className="fz-70 fw-700">Our Work That Drives Real Results</h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="text">
                <p>We design and develop high-performing websites, mobile applications, and digital solutions tailored to business goals. Each project reflects our focus on clean design, scalable technology, and measurable results.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="item md-mb80">
              <div className="o-hidden">
                <div className="img imago wow">
                  {/* <img src={data[0].image} alt="" /> */}
                  <img src="/dark/assets/imgs/portfolio/2/memate.jpg" alt=""></img>
                </div>
              </div>
              <div className="cont mt-30 d-flex">
                <div>
                  <h6 className="line-height-1">Memate</h6>
                  <p>Business Management Software Platform</p>
                </div>
                <div className="ml-auto">
                  <p className="fz-14">2026</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="item full-width">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="o-hidden">
                    <div className="img imago wow">
                     <img src="/dark/assets/imgs/portfolio/2/img-scr-04.jpg" alt=""></img>
                    </div>
                  </div>
                  <div className="cont mt-30 d-flex">
                    <div>
                      <h6 className="line-height-1">Atlas Lending Group</h6>
                      <p>Grow Smarter with Expert Support</p>
                    </div>
                    <div className="ml-auto">
                      <p className="fz-14">2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="item mt-80 full-width">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="o-hidden">
                    <div className="img imago wow">
                     <img src="/dark/assets/imgs/portfolio/2/img-scr-02.jpg" alt=""></img>
                    </div>
                  </div>
                  <div className="cont mt-30 d-flex">
                    <div>
                      <h6 className="line-height-1">Australian Real Estate</h6>
                      <p>Buy Property in Australia</p>
                    </div>
                    <div className="ml-auto">
                      <p className="fz-14">2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item mt-80">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="o-hidden">
                    <div className="img imago wow">
                       <img src="/dark/assets/imgs/portfolio/2/img-scr-03.jpg" alt=""></img>
                    </div>
                  </div>
                  <div className="cont mt-30 d-flex">
                    <div>
                      <h6 className="line-height-1">Wheels Respray </h6>
                      <p>Sydney Wheels Respray</p>
                    </div>
                    <div className="ml-auto">
                      <p className="fz-14">2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio