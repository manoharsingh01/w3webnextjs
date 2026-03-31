import React from 'react';

function FAQ() {
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
        <div className="row">
            <div className="sec-head">
              <h3>Frequently Asked Questions (FAQs).</h3>
            </div>
            <div className="cont">
          
              <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">1. What software development services does W3 Web Technologies offer?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">W3 Web Technologies provides end-to-end software development services, including custom software development, enterprise software solutions, software product engineering, system integration, and ongoing maintenance and support. Our solutions are designed to be secure, scalable, and aligned with specific business goals.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">2. Is W3 Web Technologies a custom software development company?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Yes, W3 Web Technologies is a trusted custom software development company specializing in building tailor-made software solutions. We design and develop applications based on unique business requirements, workflows, and industry standards rather than using generic, off-the-shelf software.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">3. Which industries does W3 Web Technologies serve?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">W3 Web Technologies works with a wide range of industries, including startups, small and medium-sized businesses, and large enterprises. Our software development solutions are adaptable and can be customized to suit various sectors such as eCommerce, healthcare, finance, logistics, education, and professional services.</p>
                  </div>
                </div>
                   <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">4. How does W3 Web Technologies ensure software scalability and security?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">We follow industry best practices in architecture design, secure coding standards, and quality assurance. W3 Web Technologies builds scalable software solutions that can handle future growth while implementing robust security measures to protect data and systems.</p>
                  </div>
                </div>
                  <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">5. What is the software development process at W3 Web Technologies?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Our software development process includes requirement analysis, planning and architecture, development, testing and quality assurance, deployment, and post-launch support. This structured approach ensures timely delivery, transparency, and high-quality software solutions.</p>
                  </div>
                </div>
                     <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">6. Does W3 Web Technologies provide enterprise software development services?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Yes, W3 Web Technologies offers enterprise software development services designed for large organizations with complex operational needs. We build enterprise-grade applications that support high user volumes, system integrations, and long-term scalability.</p>
                  </div>
                </div>
                       <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">7. Can W3 Web Technologies help with software product development?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Absolutely. W3 Web Technologies supports software product development from idea validation and MVP creation to full-scale product engineering, optimization, and ongoing improvements.</p>
                  </div>
                </div>
                       <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">8. Does W3 Web Technologies provide post-launch support and maintenance?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Yes, we offer ongoing software maintenance, updates, and technical support to ensure your software remains secure, stable, and up to date as your business evolves.</p>
                  </div>
                </div>
                         <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">9. Why should businesses choose W3 Web Technologies for software development?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Businesses choose W3 Web Technologies for our technical expertise, business-focused approach, transparent communication, and commitment to delivering scalable, high-performance software development solutions that drive long-term value.</p>
                  </div>
                </div>
                        <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">10. How can I get started with W3 Web Technologies’ software development services?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">You can get started by contacting W3 Web Technologies through our website to discuss your software requirements. Our team will assess your needs and recommend the most suitable software development solution for your business.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ