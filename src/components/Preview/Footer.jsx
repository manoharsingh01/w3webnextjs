import React from 'react';
//= Data
import data from "@/data/app-data.json";

function Footer() {
  return (
    <footer>
      <div className="sub-footer pt-40 pb-40 ontop sub-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="logo">
                <a href="#0">
                <img src="/dark/assets/imgs/w3-logo-light.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="copyright d-flex">
                <div className="ml-auto">
                  <p className="fz-13">© 2026 w3web All rights reserved </p>
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