import { useState } from "react";

type Props = {
  darkMode: boolean;
};

export default function Backpacking({ darkMode }: Props) {
  const [mapsOpen, setMapsOpen] = useState(false);

  const mapTrips = [
    { name: "India", link: "https://www.google.com/maps/d/u/0/edit?mid=1kA9GRkKT_4AdDFq2X-F-fVHRI0xYu_A&usp=sharing" },
    { name: "USA & Canada", link: "https://maps.app.goo.gl/ojg7iep8Pt7c9qGC6" },
    { name: "South America", link: "https://maps.app.goo.gl/XoB19KQ2RMhUS7UB6" },
    { name: "Europe", link: "https://maps.app.goo.gl/2hrmRoH8WymDY1UH8" },
    { name: "Middle-East", link: "https://maps.app.goo.gl/Hr85ZwDDywT4FBKD6" },
    { name: "Japan | South-Korea", link: "https://maps.app.goo.gl/euhwV4YFV7Mu7EMX8" },
    { name: "Vietnam & Bali", link: "https://maps.app.goo.gl/sB7AdLUa26i3sJAN9" },
    { name: "Australia | New-Zealand ", link: "https://maps.app.goo.gl/p7uBx9L17ci93FnV6" },
  ];

  // Choose logo paths based on dark mode
  const logos = {
    vsco: darkMode ? "/iPortfolio/logos/vsco.png" : "/iPortfolio/logos/vsco.svg",
    maps: darkMode ? "/iPortfolio/logos/google-maps-white.png" : "/iPortfolio/logos/google-maps.svg",
  };

  return (
    <div className="backpacking-page">
      {/* Background SVGs */}
      <div className="bg-top-right" />
      <div className="bg-bottom-left" />

      <div className="backpacking-logos">
        {/* VSCO Logo */}
        <a href="https://vsco.co/rowrowrosh/" target="_blank" rel="noopener noreferrer">
          <img src={logos.vsco} alt="VSCO Logo" className="backpacking-logo" />
        </a>

        {/* Google Maps Logo */}
        <div className="maps-container">
          <img
            src={logos.maps}
            alt="Google Maps Logo"
            className="backpacking-logo"
            onClick={() => setMapsOpen(!mapsOpen)}
          />

          {mapsOpen && (
            <ul className="maps-branch">
              {mapTrips.map((trip, index) => (
                <li key={index}>
                  <a href={trip.link} target="_blank" rel="noopener noreferrer">
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