import React from 'react';
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import './btnwhats.css';

function BtnWhats() {
  return (
    <div className="btn-whats">
      <WhatsAppWidget phoneNumber="+5511984075826" />
    </div>
  );
}

export default BtnWhats;
