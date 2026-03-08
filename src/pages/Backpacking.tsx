import { useState } from "react";

type Props = {
  darkMode: boolean;
};

export default function Backpacking({ darkMode }: Props) {
  const [mapsOpen, setMapsOpen] = useState(false);

  const mapTrips = [
    { name: "India", link: "https://www.google.com/maps/d/u/0/edit?mid=1kA9GRkKT_4AdDFq2X-F-fVHRI0xYu_A&usp=sharing" },
    { name: "USA & Canada", link: "https://www.google.com/maps/d/u/0/edit?mid=1tTR6kWL4osKYi-qOh8xin4I3xmDV13c&usp=sharing" },
    { name: "South America", link: "https://www.google.com/maps/d/u/0/edit?mid=1zdXAFL24wGXV0Ylbs_NfCjg1s1G5KlQ&usp=sharing" },
    { name: "Europe", link: "https://www.google.com/maps/d/u/0/edit?mid=1la-8LU-ISVp7S-gp9kahcd4tbeSTGnY&usp=sharing" },
    { name: "Middle-East", link: "https://www.google.com/maps/d/u/0/edit?mid=1S7TH33Wcx8HGNz1_LpMkXwzV8PGT60E&usp=sharing" },
    { name: "Japan | South-Korea", link: "https://www.google.com/maps/d/u/0/edit?mid=10xXUdPDZAAvO73pN2-6WM8-rDcO684o&usp=sharing" },
    { name: "Vietnam | Bali", link: "https://www.google.com/maps/d/u/0/edit?mid=13q8evhJTlFuUvxea9ULgqihjjIqL3sw&usp=sharing" },
    { name: "Australia | New-Zealand ", link: "https://www.google.com/maps/d/u/0/edit?mid=1Im3VXKJGK4Wc79ZsFRHZVJan3KDoGT8&usp=sharing" },
    { name: "Maldives | Antartica", link: "https://www.google.com/maps/d/u/0/edit?mid=1S-BMLDdkrKHAFj-Qgf0Px0VvU0HpYIw&usp=sharing" }
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