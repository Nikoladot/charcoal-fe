import React from 'react';
import './IntroductionSection.css';
import { useTranslation } from 'react-i18next';


function IntroductionSection() {
  const { t } = useTranslation();

  return (
    <div className="introduction-section">
      <div className="introduction-fade"></div>
      <span>{t('introduction')}</span>
    </div>
  );
}

export default IntroductionSection;
