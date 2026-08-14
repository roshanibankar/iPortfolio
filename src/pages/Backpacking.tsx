import { useState } from "react";

type Props = {
  darkMode: boolean;
};

export default function Backpacking({ darkMode }: Props) {
  const [mapsOpen, setMapsOpen] = useState(false);

  const mapTrips = [
    { name: "A List of my Fav Third Spaces", link: "https://maps.app.goo.gl/zCHaasVeBzqWe98m7" },
    { name: "Restaurants & Cafes", link: "https://maps.app.goo.gl/oSyATK4cKYSjjd9q9" },
    { name: "Dessert Stomach", link: "https://maps.app.goo.gl/neCf8KhAG6BHjgf37" },
    { name: "Blu Blu Beaches & Rocks", link: "https://maps.app.goo.gl/6RzGUuwYAKbbfsx7A" },
    { name: "Stores with Personality", link: "https://maps.app.goo.gl/WEt6GQtiFKUAibrN9" },
    { name: "Fav Matcha Spots", link: "https://maps.app.goo.gl/p2Cu35CzTxqZ7rdM9"}
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
