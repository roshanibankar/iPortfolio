import "../index.css"; // or app.css if you prefer


export default function Backpacking() {
  return (
    <div className="backpacking-page">
      <div className="backpacking-logos">
        <a href="https://vsco.co/rowrowrosh/" target="_blank" rel="noopener noreferrer">
          <img src="/vsco.svg" alt="VSCO Logo" />
        </a>
        <a href="https://maps.google.com/" target="_blank" rel="noopener noreferrer">
          <img src="/google-maps.svg" alt="Google Maps Logo" />
        </a>
      </div>
    </div>
  );
}
