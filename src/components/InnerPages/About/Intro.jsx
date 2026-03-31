import React from 'react';

function Intro() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach(element => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    })
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }

  return (
    <section className="intro-corp section-padding pt-0">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-5 valign md-mb50">
            <div className="imgs mb-80">
              <div className="img1 wow fadeInUp">
                <img src="/dark/assets/imgs/about/img-about-03.jpg" alt="" className="radius-10" />
              </div>
              <div className="img2 wow fadeInLeft">
                <img src="/dark/assets/imgs/about/img-about-02.jpg" alt="" className="radius-10" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <div className="text">
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text">Why Choose Us</span>
                  </span>
                </h2>
                <p>Every project at W3Web Technologies is grounded in strategy, quality, and innovation. Here’s what makes us your trusted digital partner:</p>
              </div>
              <br></br>
              {/* <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Client-centred approach </h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">We tailor solutions to your business needs</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Team with experience</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Experts in development, design, and marketing</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Transparent communication</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Clear timelines, updates, and collaboration</p>
                  </div>
                </div>
                   <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Results-driven mindset</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">We measure success through performance and growth goals</p>
                  </div>
                </div>
              </div> */}
              <ul className='why_choose'>
                <li><strong>Client-centred approach</strong> - we tailor solutions to your business needs</li>
                <li><strong>Team with experience</strong> - experts in development, design, and marketing</li>
                <li><strong>Transparent communication</strong> - clear timelines, updates, and collaboration</li>
                <li><strong>Results-driven mindset</strong> - we measure success through performance and growth goals</li>
              </ul>
              <p>We don't just make products; we make solutions that help your business grow, change, and do well in a digital world where there is a lot of competition.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro