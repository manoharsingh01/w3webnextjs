import React from 'react';

function Header({ data, subBg }) {
  return (
    <header className={`page-header section-padding pb-0 ${subBg ? 'sub-bg' : ''}`}>
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-9">
            <div className="caption">
              <h1 className="fz-55">Software Development Services - Scalable & Future-Ready Digital Solutions</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="text mt-30">
              <p>At W3 Web Technologies, we offer a full range of software development services to help businesses stay competitive, grow, and develop to new ideas in a digital world that is always changing. As a reliable software development company, we create secure, high-performance, and scalable software solutions that are tailored to meet the needs of each business.</p>
            <p>Our team creates reliable custom software development solutions for businesses of all sizes, from startups to large enterprises. These solutions make operations easier, improve user experiences, and help businesses grow over time.</p>
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
                  <h4>Software Development </h4>
                </div>
              ))
            }
          </div>
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>Software Development</h4>
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