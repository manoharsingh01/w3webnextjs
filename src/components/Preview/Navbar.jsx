import React, { useEffect } from 'react';
import Link from 'next/link';
//= Data
import appData from '@/data/app-data.json';

function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
  }

  function handleDropdownSideMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-side').classList.add('show');
  }

  function handleDropdownSideMouseLeave(event) {
    event.currentTarget.querySelector('.dropdown-side').classList.remove('show');
  }

  function toggleNavbar() {
    document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
  }

  return (
    <nav className="navbar navbar-expand-lg static">
      <div className="container">
        <Link className="logo icon-img-100" href="/"><img src="/dark/assets/imgs/w3-logo-light.png" alt="logo" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavbar} >
          <span className="icon-bar"><i className="fas fa-bars"></i></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/"><span className="rolling-text">Home</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about"><span className="rolling-text">About</span></Link>
            </li>
            <li className="nav-item dropdown" onMouseMove={handleDropdownMouseMove} onMouseLeave={handleDropdownMouseLeave}>
              <Link className="nav-link dropdown-toggle" data-toggle="dropdown" href="/services" role="button" aria-haspopup="true" aria-expanded="false">
                <span className="rolling-text">Services</span>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="/services/software-development">Software Development</Link>
                <Link className="dropdown-item" href="/services/mobile-app-development">Mobile App Development</Link>
                <Link className="dropdown-item" href="/services/branding">Branding </Link>
                <Link className="dropdown-item" href="/services/ux-design">UX Design </Link>
                <Link className="dropdown-item" href="/services/web-development">Web Development </Link>
                <Link className="dropdown-item" href="/services/digital-marketing">Digital Marketing </Link>
              </div>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" href="/portfolio"><span className="rolling-text">Portfolio</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/blog"><span className="rolling-text">Blog</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact"><span className="rolling-text">Contact</span></Link>
            </li>
          </ul>
        </div>

        {/* <div className="purchase">
          <a href={appData.author_link} className="butn butn-md butn-bord radius-30">
            <span>Purchase</span>
          </a>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar