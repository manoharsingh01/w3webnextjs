import React from 'react';
import Link from 'next/link';
//= Data
import data from '@/data/Preview/demos.json';   

function Demos() {
  return (
    <section className="demos section-padding pt-80">
      <div className="container-xxl">
        <div className="row">
          {
            data.map(item => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="item text-center">
              
                  <Link href={item.link} target="_blank">
                  <div className='works-layout-info'>
                    <div className="img">
                      <img src={item.image} alt="" />
                    </div>
                    </div>
                    <h6 className="mt-15">{item.title} {item.mode === 'light' && <span>(Light)</span>}</h6>
                  </Link>
                  {
                    item.new &&
                    <span className="new">New</span>
                  }
              
                </div>
              </div>
            ))
          }
    
        </div>
      </div>
    </section>
  )
}

export default Demos