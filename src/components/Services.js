import React from "react";

function Services() {
  return (
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img src="/images/s1.png" alt="Maintenance" />
              </div>
              <div className="detail-box">
                <h5>Maintenance</h5>
                <p>Reliable maintenance services to keep everything running smoothly.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img src="/images/s2.png" alt="Electrical" />
              </div>
              <div className="detail-box">
                <h5>Electrical</h5>
                <p>Expert electrical services for all your home or office needs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img src="/images/s3.png" alt="Plumbing" />
              </div>
              <div className="detail-box">
                <h5>Plumbing</h5>
                <p>Professional plumbing solutions at your doorstep.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
