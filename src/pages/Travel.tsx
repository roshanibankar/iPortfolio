import { useState } from "react";

type Props = {
  darkMode: boolean;
};

export default function travel({ darkMode }: Props) {
  const [mapsOpen, setMapsOpen] = useState(false);

  const mapTrips = [
    { name: "A List of my Fav Third Spaces", link: "https://maps.app.goo.gl/oBDuXYvcSX5aL7S5A" },
    { name: "Chef's Kiss (Restaurants) ", link: "https://maps.app.goo.gl/JbEjrwxZLfWMH6re9" },
    { name: "Dessert Stomach", link: "https://maps.app.goo.gl/xZKXj6ZaFtsh482S7" },
    { name: "Blu Blu Beaches & Rocks", link: "https://maps.app.goo.gl/AtbUrCNFHkohNMGs6" },
    { name: "Stores with Personality", link: "https://maps.app.goo.gl/qDnHxH3T9r1epEC47" },
    { name: "Fav Matcha Spots", link: "https://maps.app.goo.gl/PnwVcwjVEJ78QE5r9"},
    { name: "Cafés with a View", link: "https://maps.app.goo.gl/Dy14kB4tfKHne2U28"}
  ];

  // Choose logo paths based on dark mode
  const logos = {
    vsco: darkMode ? "/iPortfolio/logos/vsco.png" : "/iPortfolio/logos/vsco.svg",
    maps: darkMode ? "/iPortfolio/logos/google-maps-white.png" : "/iPortfolio/logos/google-maps.svg",
  };

  return (
    <div className="travel-page">
      {/* Background SVGs */}
      <div className="bg-top-right" />
      <div className="bg-bottom-left" />

      <div className="travel-logos">
        {/* VSCO Logo */}
        <a href="https://vsco.co/rowrowrosh/" target="_blank" rel="noopener noreferrer">
          <img src={logos.vsco} alt="VSCO Logo" className="travel-logo" />
        </a>

        {/* Google Maps Logo */}
        <div className="maps-container">
          <img
            src={logos.maps}
            alt="Google Maps Logo"
            className="travel-logo"
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
