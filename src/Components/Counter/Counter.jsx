import React, { useState, useEffect } from "react";
import "./Counter.css";

function CountNumber({ target, speed }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true; // Flag to track component mounting state

    const updateCount = () => {
      const inc = target / speed;

      if (count < target && isMounted) {
        // Check if component is still mounted
        setCount(Math.floor(inc + count));
        setTimeout(updateCount, 15);
      } else if (isMounted) {
        // Ensure target is reached
        setCount(target);
      }
    };

    updateCount(); // Start the animation immediately

    return () => {
      isMounted = false; // Cleanup: set flag to false on unmount
    };
  }, [target, speed, count]);

  return <div className="count">{count}</div>;
}

const Counter = () => {
  return (
    <>
      <div className="counter-container">
        <div className="counter">
          <h4 className="count">
            <CountNumber target={80} speed={50} />
          </h4>
          <p>80+ Hospital Beds</p>
        </div>
        <div className="counter">
          <h4 className="count">
            <CountNumber target={700} speed={100} />
          </h4>
          <p>Free Treatments</p>
        </div>
        <div className="counter">
          <h4 className="count">
            <CountNumber target={500000} speed={1000} />
          </h4>
          <p>Happy Patients</p>
        </div>
      </div>
    </>
  );
};

export default Counter;
