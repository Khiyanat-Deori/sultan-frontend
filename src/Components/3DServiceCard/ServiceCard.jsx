import React from "react";
import "./ServiceCard.css";

const ServiceCard = () => {
  return (
    <>
      <section className="section ">
        <div className="heading_service">Our Services</div>
        <div className="container">
          <main className="main_services">
            <div className="parents">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">Full Body Checkup</span>
                  <p className="card-content">
                    Get Your Full Body Checkup Facilities
                    <br />
                  </p>
                  <span className="see-more">See More</span>
                </div>
              </div>
            </div>
            <div className="parents">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">Affordable Treatment</span>
                  <p className="card-content">Get Quick Report </p>
                  <span className="see-more">See More</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default ServiceCard;
