import React, { useEffect } from 'react';
//= Data
import data from '@/data/app-data.json';
import Link from 'next/link';

function Footer({ lightMode }) {
  useEffect(() => {
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 })
      const uncover = gsap.timeline({ paused: true })
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }
  }, []);

  return (
    <footer>
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="row">
            <div className="col-lg-3">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Address</h6>
                </div>
                <div className="text">
                  <p>4th Floor, F388, Charu Tower, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Say Hello</h6>
                </div>
                <div className="text">
                  <p className="mb-10">
                    <Link href="mailto:info@w3webs.com">info@w3webs.com</Link>
                  </p>
                  <h5>
                    <Link href="tel:+91:9814930250">+91: 9814930250</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6>Social</h6>
              </div>
              <ul className="rest social-text">
                <li>
                  <Link href="#0">Facebook</Link>
                </li>
                <li>
                  <Link href="#0">Twitter</Link>
                </li>
                <li>
                  <Link href="#0">LinkedIn</Link>
                </li>
                <li>
                  <Link href="#0">Instagram</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="tit mb-20">
                <h6>Newsletter</h6>
              </div>
              <div className="subscribe">
                <form action="contact.php">
                  <div className="form-group rest">
                    <input type="email" placeholder="Type Your Email" />
                    <button type="submit">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="logo">
                  <Link href="/">
                  <img src="/dark/assets/imgs/w3-logo-light.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="copyright d-flex">
                  <div className="ml-auto">
                    <p className="fz-13">© 2026 w3web All rights reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer