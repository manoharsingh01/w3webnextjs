import React from 'react';

function Header({ data, subBg }) {
  return (
    <header className={`page-header section-padding pb-0 ${subBg ? 'sub-bg' : ''}`}>
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-8">
            <div className="caption">
              <h1 className="fz-55">Branding Services That Transform Businesses</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 ">
            <div className="text mt-10">
              <p>At W3Web Technologies, our Branding Services go beyond logos and colours — we build powerful brand identities, compelling visual branding packages, and strategic brand positioning that resonates with your audience across web, mobile, and AI search experiences. In today's world, it's important for your brand to be memorable, meaningful, and easy for AI to find and search for.</p>
            </div>
            <h2 className='mt-20'>What We Do</h2>
            <p>We specialize in creating holistic branding solutions that help businesses:</p>
            <ul className='mt-20 why_choose'>
              <li>Stand out in crowded markets with unique <strong>brand strategy</strong></li>
              <li>Connect emotionally with customers through consistent <strong>brand messaging</strong></li>
              <li>Build credibility and trust online with branded content & design</li>
              <li>Improve visibility in AI-led and traditional search with structured, optimized content</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main-marq xlrg section-padding pb-0">
        <div className="slide-har st1">
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>Branding</h4>
                </div>
              ))
            }
          </div>
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>Branding</h4>
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