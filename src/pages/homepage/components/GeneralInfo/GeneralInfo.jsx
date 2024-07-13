import React from 'react';
import './GeneralInfo.css';
import imageOne from '../../../../assets/making_charcoal.png';
import imageTwo from '../../../../assets/rostilj.jpg';
import imageThree from '../../../../assets/dzak.png';

const GeneralInfo = () => {
  return (
    <div className="general-info-container">
      <div className="grid-container">
        <div className="grid-item info-img">
          <img className="gi-img" src={imageOne} alt="Charcoal Origin" />
        </div>
        <div className="grid-item description">
          <h1>Proces proizvodnje ćumura</h1>
          <p>
          Početna faza proizvodnje ćumura, gde su drveni trupci pažljivo složeni i pripremljeni za pirolizu. Drvo se sporo sagoreva u uslovima sa malo kiseonika, što rezultira ćumurom sa visokim sadržajem ugljenika. Ovaj proces osigurava efikasno sagorevanje sa minimalnom količinom dima.
          </p>
        </div>
        <div className="grid-item description">
          <h1>Kako i u kojim prilikama se koristi</h1>
          <p>
          Ćumur visokog kvaliteta i energetske vrednosti idealan je za pripremu hrane na roštilju u svim prilikama. Obezbeđuje ravnomerno sagorevanje i intenzivnu toplotu, što omogućava pravljenje roštilja u punom intenzitetu. Takođe, zbog visoke kalorijske vrednosti može se koristiti više puta, pružajući karakterističan ukus i aromu.
          </p>
        </div>
        <div className="grid-item info-img">
          <img className="gi-img" src={imageTwo} alt="Charcoal Making Process" />
        </div>
        <div className="grid-item info-img">
          <img className="gi-img" src={imageThree} alt="Charcoal Packaging" />
        </div>
        <div className="grid-item description">
          <h1>Pakovanje</h1>
          <p>
            Proper packaging of charcoal ensures it remains dry and easy to ignite. High-quality
            packaging also protects the charcoal from breaking into smaller, less useful pieces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
