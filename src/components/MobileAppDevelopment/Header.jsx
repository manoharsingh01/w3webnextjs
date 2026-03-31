import React from 'react';

function Header({ data, subBg }) {
  return (
    <header className={`page-header section-padding pb-0 ${subBg ? 'sub-bg' : ''}`}>
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-10">
            <div className="caption">
              <h1 className="fz-55">Mobile App Development Services</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 ">
            <div className="text mt-10">
              <p>W3Web Technologies offers complete mobile app development services to businesses all over the world that want to turn their ideas into reliable, profitable mobile solutions. We create and build mobile apps for businesses of all sizes, from small startups to large global companies. These apps provide great user experiences, high performance, and measurable business growth.</p>
              <p>Our skilled mobile app developers can make custom mobile apps, iOS app development, Android app development, or cross-platform mobile solutions that grow with your business.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-marq xlrg section-padding pb-0">
        <div className="slide-har st1">
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>Mobile App Development</h4>
                </div>
              ))
            }
          </div>
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>Mobile App Development</h4>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header