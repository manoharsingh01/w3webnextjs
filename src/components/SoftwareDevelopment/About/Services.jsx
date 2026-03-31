import React from 'react';
//= Components
import StatementSplitter from '@/components/Common/StatementSplitter';
//= Data
import data from '@/data/InnerPages/About/services.json';

function Services({ lightMode }) {
  return (
    <section className="serv-box section-padding">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="position-re">
                <h2 className="fz-60 fw-700">Trusted Software Development Company for Modern Businesses</h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="text">
                <p>For digital success, it's very important to pick the right technology partner. W3 Web Technologies uses its technical know-how, industry knowledge, and strategic thinking to make software that fits with your business goals.</p>
            
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {
            data.map(item => (
              <div className="col-lg-4" key={item.id}>
                <div className="serv-item mb-30 md-mb50 radius-10">
                  <div className="icon-img-60 mb-40">
                    <img src={`/${lightMode ? 'light' : 'dark'}/${item.image}`} alt="" />
                  </div>
                  <h5 className="mb-30 pb-30 bord-thin-bottom"><StatementSplitter statement={item.title} /></h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services