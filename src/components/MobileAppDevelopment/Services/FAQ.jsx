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
          <div className="col-lg-5">
            <div className="sec-head mb-40">
              <h6 className="sub-title">Frequently Asked Questions (FAQs)</h6>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cont">
              {/* <div className="text">
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text">Watch the creative process</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text"><span>behind our digital marketing</span>.</span>
                  </span>
                </h2>
              </div> */}
              <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">1. What types of services do you offer for creating mobile apps?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">We offer full mobile app development services, such as designing custom apps, developing apps for both iOS and Android, developing apps that work on multiple platforms using frameworks like React Native or Flutter, and helping you deploy your app.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">2. What platforms can you use to make apps?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">We make apps for both iOS and Android phones and tablets. We can also make hybrid or cross-platform apps that work on many devices if that's what you want.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">3. How long does it take to make an app for a phone?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">The timeline changes depending on how complicated the app is, what features it needs, and how it should look. It can take a few months to make a simple app, but it can take longer to make a complex app with advanced features. After we know what you need, we'll give you a detailed timeline for the project.</p>
                  </div>
                </div>
                     <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">4. What is the cost of making an app for a phone?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">The cost of making an app depends on its size, features, design complexity, platforms, and technologies. After looking over your project's needs, we'll give you a clear quote that fits your budget and goals.</p>
                  </div>
                </div>
                     <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">5. Do you design the UI and UX for mobile apps?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Yes, we offer mobile app development services that include user-cantered UI/UX design to make sure your app is easy to use, looks good, and works well on all devices.</p>
                  </div>
                </div>
                     <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">6. Will my app be safe and work well?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Yes, for sure. We use best practices for performance optimization and strict security standards to keep data safe and improve the user experience throughout the app's life.</p>
                  </div>
                </div>
                   <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">7. Can you help me submit my app to the app store and publish it?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Yes, we help you submit your app to the Apple App Store and Google Play Store. This includes making sure that all the necessary assets are ready, that the app follows the rules of each platform, and that the launch goes smoothly.</p>
                  </div>
                </div>
                   <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">8. What help and upkeep do you offer after the launch?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">We offer ongoing maintenance, updates, bug fixes, and feature upgrades to make sure your mobile app stays up to date with OS updates and user feedback.</p>
                  </div>
                </div>
                      <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">9. How do you make sure that different devices can work together?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">We do a lot of testing and quality assurance (QA) on a lot of different devices, screen sizes, and OS versions to make sure your app works perfectly on all the mobile devices you want it to.</p>
                  </div>
                </div>
                      <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">10. What kinds of technology do you use to make mobile apps?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">We use modern app development tools and frameworks, such as native languages like Swift and Kotlin and cross-platform frameworks like React Native and Flutter, to make high-quality mobile apps that fit your needs.</p>
                  </div>
                </div>
                             <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">11. What do we need to do to start my mobile app project?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">First, just get in touch with our team and tell them what you need or want from your app. We'll look over your idea, talk about your goals, and give you a custom plan, estimate, and timeline to make your mobile app a reality.</p>
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

export default FAQ