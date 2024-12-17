import React from "react";

function Hero() {
  return (
    <section className="slider_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <h1>
                Repair and <br />
                Maintenance <br />
                Services
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum
                voluptatem adipisci...
              </p>
              <a href="/contact">Contact Us</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src="/images/slider-img.png" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
