import React from "react";

function Features() {
  return (
    <section className="feature_section">
      <div className="container">
        <div className="feature_container">
          <div className="box">
            <div className="img-box">
              <i className="fa fa-wrench" aria-hidden="true"></i>
            </div>
            <h5 className="name">Repair</h5>
          </div>
          <div className="box active">
            <div className="img-box">
              <i className="fa fa-paint-brush" aria-hidden="true"></i>
            </div>
            <h5 className="name">Improve</h5>
          </div>
          <div className="box">
            <div className="img-box">
              <i className="fa fa-cogs" aria-hidden="true"></i>
            </div>
            <h5 className="name">Maintain</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
