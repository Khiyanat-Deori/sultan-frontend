import React from 'react';
import './aboutUs.css'; // Import the CSS file
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="about-us-container">
      <div className="about-us-image">
        <img src="https://i.postimg.cc/cJKk0pBk/Whats-App-Image-2024-07-26-at-11-11-53.jpg" alt="Sultan Hospital" />
      </div>
      <div className="about-us-description">
        <h2>An Overview</h2>
        <p>
          Sultan Hospital & Research Centre, Morigaon established in 2017, is a top player in the category of Private Hospitals in Morigaon.
          This well-known establishment acts as a one-stop destination, servicing clients both local and from other parts of Morigaon. Over the 
          course of its journey, this business has established a firm foothold in it’s industry. The belief that client satisfaction is as important 
          as their products and services, have helped this establishment to treat a vast base of clients, which continues to grow by the day. This 
          business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and 
          larger goals of the company. In the near future, this business aims to expand its line of products and services and cater to a larger client 
          base. In Morigaon, this establishment occupies a prominent location in Telahi Morigaon Road. It is an effortless task in commuting to this 
          establishment as there are various modes of transport readily available. It is at Telahi Morigaon Road, Maidhali Pathar, which makes it easy 
          for first-time visitors in locating this establishment.
        </p>
      </div>
      <div className="about-us-awards">
        <h2>Awards and Achievements</h2>
        <div className="awards-images">
          <img src="https://i.postimg.cc/C1T3tMps/award-1.jpg" alt="Award 1" />
          <img src="https://i.postimg.cc/DyMYHfq4/Whats-App-Image-2023-05-26-at-10-19-01.jpg" alt="Award 2" />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default AboutUs;
