import React from "react";
import "./ServiceCard.css";

const ServiceCard = () => {
  return (
    <>
      <section>
        <div className="heading_service">Our Services</div>
        <main className="main_services">
          <div className="parents">
            <div className="card">
              <div className="content-box">
                <span className="card-title">
                  Full Body Checkup for everyone
                </span>
                <p className="card-content">
                  Get Your Full Body Checkup Now @Affordable prices <br />
                </p>
                <span className="see-more">See More</span>
              </div>
              <div className="date-box">
                <span className="month">₹</span>
                <span className="date">1599</span>
              </div>
            </div>
          </div>
          <div className="parents">
            <div className="card">
              <div className="content-box">
                <span className="card-title">
                  Affordable Treatment and Test
                </span>
                <p className="card-content">Get Quick Test Result at ease</p>
                <span className="see-more">See More</span>
              </div>
              <div className="date-box">
                <span className="month">₹</span>
                <span className="date">999</span>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default ServiceCard;
