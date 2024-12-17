import React from 'react';

function Contact() {
  return (
    <section className="contact_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone Number" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Message" className="message-box" />
              <button type="submit">SEND</button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="map_container">
              <iframe
                title="Google Map"
                src="https://maps.google.com/?q=location"
                height="300"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
