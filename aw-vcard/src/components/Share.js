import React, { useState } from 'react';
import QRcode from './QRcode';
const Share = () => {
  const [qrData, setQrData] = useState('https://example.com');  // Initial QR data

  // Function to change QR data
  const changeQRData = () => {
    setQrData('https://new-example.com');
  };

  return (
    <div className="App">
      {/* Pass qrData prop to the QR component */}
      <QRcode qrData={qrData} />

      {/* Button to change QR code data */}
      <button className="toggleButton" onClick={changeQRData}>
        Change QR Code Data
      </button>
    </div>
  );
};

export default Share;


