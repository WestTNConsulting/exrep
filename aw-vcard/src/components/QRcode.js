import React, { useState, useMemo } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRcode = ({ qrData }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Ensure useMemo is being used correctly, like this:
  const qrCodeValue = useMemo(() => qrData, [qrData]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleNavbar}>
        {isOpen ? 'Close Navbar' : 'Open Navbar'}
      </button>
      
      {isOpen && (
        <div>
          <QRCodeSVG value={qrCodeValue} size={256} />
          <h2>Scan the QR Code</h2>
          <p>to view my Business Card on another device</p>
        </div>
      )}
    </div>
  );
};

export default QRcode;
