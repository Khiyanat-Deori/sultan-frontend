import React from 'react';
import './services.css'; // Import the CSS file
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const servicesData = [
  {
    title: "ICU",
    imageSrc: "https://iili.io/dIjM0gV.jpg",
    description: "Intensive care units cater to patients with severe or life-threatening illnesses and injuries, which require constant care, close supervision from life support equipment and medication in order to ensure normal bodily functions. They are staffed by highly trained physicians, nurses, and respiratory therapists who specialize in caring for critically ill patients."
  },
  {
    title: "NICU",
    imageSrc: "https://iili.io/dIjMT57.jpg",
    description: "The Neonatal Intensive Care Unit is divided into several areas, including a critical care area for babies who require close monitoring and intervention, an intermediate care area for infants who are stable but still require specialized care, and a step down unit where babies who are ready to leave the hospital can receive additional care before being discharged."
  },
  {
    title: "OPERATION THEATER",
    imageSrc: "https://iili.io/dIjMfxs.jpg",
    description: "An operation theater (also known as an operating room (OR)) is a facility within a hospital where surgical operations are carried out in an aseptic environment."
  },
  {
    title: "PHYSIOTHERAPY",
    imageSrc: "https://iili.io/dIjGmiv.jpg",
    description: "Physical therapy addresses the illnesses or injuries that limit a person’s abilities to move and perform functional activities in their daily lives."
  },
  {
    title: "ULTRASOUND (COLOR DOPPLER 3D/4D)",
    imageSrc: "https://iili.io/dIjGPUB.jpg",
    description: "Diagnostic sonography (ultrasonography) is an ultrasound-based diagnostic imaging technique used to visualize subcutaneous body structures including tendons, muscles, joints, vessels and internal organs for possible pathology or lesions."
  },
  {
    title: "CT-SCAN",
    imageSrc: "https://iili.io/dIjGMoG.jpg",
    description: "Computerized tomography (CT) scan combines a series of X-ray images taken from different angles around your body and uses computer processing to create cross-sectional images (slices) of the bones, blood vessels and soft tissues inside your body."
  },
  {
    title: "PATHOLOGICAL LABORATORY",
    imageSrc: "https://iili.io/dIjGRPR.jpg",
    description: "A Pathology Laboratory is a Laboratory where tests are carried out on clinical specimens to obtain information about the health of a PATIENT to aid in diagnosis, treatment, and prevention of disease."
  },
  {
    title: "DIGITAL X-RAY",
    imageSrc: "https://iili.io/dIjGJwu.jpg",
    description: "A digital X-ray, or digital radiography, is a modern type of X-ray that utilises digital sensors instead of photographic film, as with a traditional X-ray. The image captured is converted to digital data immediately and is available for review within seconds."
  },
  {
    title: "ECG",
    imageSrc: "https://iili.io/dIjEV3B.jpg",
    description: "An electrocardiogram (ECG) is a simple test that can be used to check your heart’s rhythm and electrical activity."
  },
];

const ServiceItem = ({ title, imageSrc, description }) => (
  <div>
    <div className="service-description">
      <h2>{title}</h2>
    </div>
    <div className="services-container">
      <div className="service-item">
        <div className="service-image">
          <img src={imageSrc} alt={`${title} Service`} />
        </div>
        <div className="service-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
    <hr />
  </div>
);

const Services = () => {
  return (
    <>
      <Navbar />
      {servicesData.map(service => (
        <ServiceItem
          key={service.title}
          title={service.title}
          imageSrc={service.imageSrc}
          description={service.description}
        />
      ))}
      <Footer />
    </>
  );
}

export default Services;

