import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Story() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="pg-about section-padding sub-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className='about-page-img'>
              <img src="/dark/assets/imgs/about/img-about.jpg" alt=""></img>
            </div>
          </div>
          <div className="col-lg-6">
            <h2>Our Story</h2>
              <p>Founded with a passion for innovation and a client-first mindset, W3Web Technologies began with a simple mission: to help businesses leverage digital tools and technologies that scale. Our team of skilled developers, designers, and digital strategists who are dedicated to making digital products that work well. We specialize in making custom solutions that meet your business goals, the needs of your industry, and the needs of your audience.</p>
<p>We put the needs of our clients first on every project, and we focus on quality, innovation, and transparency. We make sure that every solution we deliver is optimized for performance, ease of use, and growth from the idea stage to the execution stage.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story