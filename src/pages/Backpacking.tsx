import { useState } from "react";
import "../index.css";

export default function Backpacking() {
  const [mapsOpen, setMapsOpen] = useState(false);

  const mapTrips = [
    { name: "Mumbai", link: "https://maps.app.goo.gl/Xiqd77id5gdqZVKJ7" },
    { name: "Bangalore", link: "https://maps.app.goo.gl/G46ha1ULMVisJ9Mv5" },
    { name: "Pune", link: "https://maps.app.goo.gl/BQpgkxd88j4eLQ747" },
    { name: "North India & Nort-East India", link: "https://maps.app.goo.gl/BeehtdCCnECXb6YV8" },
    { name: "USA & Canada", link: "https://maps.app.goo.gl/ojg7iep8Pt7c9qGC6" },
    { name: "South America", link: "https://maps.app.goo.gl/XoB19KQ2RMhUS7UB6" },
    { name: "Europe", link: "https://maps.app.goo.gl/2hrmRoH8WymDY1UH8" },
    { name: "Middle-East", link: "https://maps.app.goo.gl/Hr85ZwDDywT4FBKD6" },
    { name: "Japan | South-Korea", link: "https://maps.app.goo.gl/euhwV4YFV7Mu7EMX8" },
    { name: "Vietnam & Bali", link: "https://maps.app.goo.gl/sB7AdLUa26i3sJAN9" },
    { name: "Australia | New-Zealand ", link: "https://maps.app.goo.gl/p7uBx9L17ci93FnV6" },
  ];

  return (
    <div className="backpacking-page">
      <div className="backpacking-logos">

        {/* VSCO Logo (simple link) */}
        <a href="https://vsco.co/rowrowrosh/" target="_blank" rel="noopener noreferrer">
          <img src="/vsco.svg" alt="VSCO Logo" className="backpacking-logo" />
        </a>

        {/* Google Maps Logo (branch menu) */}
        <div className="maps-container">
          <img
            src="/google-maps.svg"
            alt="Google Maps Logo"
            className="backpacking-logo"
            onClick={() => setMapsOpen(!mapsOpen)}
          />

          {mapsOpen && (
            <ul className="maps-branch">
              {mapTrips.map((trip, index) => (
                <li key={index}>
                  <a
                    href={trip.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {trip.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}
