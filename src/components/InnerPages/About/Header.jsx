import React from 'react';

function Header({ data, subBg }) {
  return (
    <header className={`page-header section-padding pb-0 ${subBg ? 'sub-bg' : ''}`}>
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-10">
            <div className="caption">
              <h6 className="sub-title">About W3 Web Technologies</h6>
              <h1 className="fz-55">Web Development &amp; Digital Marketing Services</h1>
            </div>
              <div className="text mt-30">
              <p>Welcome to W3 Web Technologies, a full-service digital agency that helps businesses grow online by offering the latest in web development, mobile apps, UX design, branding, and digital marketing. We work with startups, large enterprises, and established brands to turn ideas into digital solutions that can grow and get results that can be measured.</p>
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
                  <h4>About </h4>
                </div>
              ))
            }
          </div>
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>About</h4>
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