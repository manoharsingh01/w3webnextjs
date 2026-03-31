import React from 'react';
//= Components
import Split from '@/components/Common/Split';
//= Data
import data from '@/data/InnerPages/About/clients.json';
import appData from '@/data/app-data.json';

function Clients({ lightMode }) {
  return (
    <div className="clients section-padding pb-100 position-re">
      <div className="container">
        <div className="row justify-content-center mb-80">
          <div className="col-lg-6 text-center">
            <div className="text">
              <h3>Our Vision & Mission</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row md-marg">
              {
                data.map((item) => (
                  <div className="col-md-4 col-6 brand box-bg" key={Math.floor(Math.random() * 10000)}>
                    <div className="item mb-30 wow fadeIn" data-wow-delay=".6s">
                      <div className="img">
                        <img src={`/${lightMode ? 'light' : 'dark'}${item}`} alt="" />
                      </div>
                      <Split tag="a" href={appData.author_link} className="link">
                        www.GeekFolio.com
                      </Split>
                    </div>
                  </div>
                ))
              }
            </div>
            {/* <div className='our_vision'>
            <p><strong>Vision:</strong> To be a leading digital solutions provider, giving businesses the technology they need to succeed.</p>
            <p><strong>Mission:</strong> Our mission is to give our clients new, dependable, and user-friendly digital experiences that help them succeed now and in the future.</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="bg-pattern patrn1 bg-img opacity-5" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/pattern.svg`}></div>
    </div>
  )
}

export default Clients