import React from 'react'

import './IntroductionSection.css'

function IntroductionSection() {
  const text = `Mi smo vaša pouzdana veza za uvoz, prodaju i transport visokokvalitetnog ćumura i uglja. Nudimo vrhunske proizvode i usluge koje će zadovoljiti vaše potrebe. Naš ugalj, sa visokom kaloričnom vrednošću, idealan je za domaćinstva i industriju. Garantujemo efikasno sagorevanje i dugotrajnu toplinu, što ga čini ekonomičnim rešenjem.`

  return (
    <div className="introduction-section">
      <span>{text}</span>
    </div>
  )
}

export default IntroductionSection
