import { useEffect, useState } from "react";

import {
  FaLaptopCode,
  FaTrophy,
  FaStopwatch
} from "react-icons/fa";

function Stats() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setSeconds((previous) => previous + 1);
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (
    <section className="stats-section">

      <div className="stats-container">

        <div className="stat-card">

          <div className="stat-icon">
            <FaLaptopCode />
          </div>

          <strong>2</strong>

          <p>Projects</p>

          <span></span>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            <FaTrophy />
          </div>

          <strong>6</strong>

          <p>Certificates</p>

          <span></span>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            <FaStopwatch />
          </div>

          <strong>
            {seconds}+
          </strong>

          <p>Seconds on This Site</p>

          <span></span>

        </div>

      </div>

    </section>
  );
}

export default Stats;