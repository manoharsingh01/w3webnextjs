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
        <div className="row">
          <div className="col-lg-4">
            <div className="bg-img radius-10 md-mb50" data-background="/dark/assets/imgs/about/img-about.jpg"></div>
          </div>
          <div className="col-lg-8">
            <div className="bg-img radius-10" data-background="/dark/assets/imgs/about/img-about-01.jpg"></div>
          </div>
          <div className="col-lg-4">
            <div className="sec-head mt-80">
              <h6 className="sub-title">Our Story.</h6>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont mt-80">
              <h4>At W3 Web Technologies, we are passionate about helping businesses grow through innovative technology and creative solutions. With a team of expert developers, designers, and strategists, we specialize in web development, mobile apps, UX design, branding, and digital marketing. Our mission is to deliver scalable, high-quality solutions tailored to meet the unique needs of our clients. We take a client-first approach, ensuring that every project is crafted with precision, creativity, and a focus on long-term success. </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story