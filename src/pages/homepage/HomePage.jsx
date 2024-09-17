import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import homeImage from '../../assets/homepage_charcoal.jpg'
import CoverImage from './components/CoverImage/CoverImage'
import GeneralInfo from './components/GeneralInfo/GeneralInfo'
import OurServices from './components/OurServices/OurServices'

function HomePage() {
  const { t, i18n } = useTranslation('meta')
  const currentLanguage = i18n.language

  return (
    <div className="container">
      <Helmet>
        {/* Dynamic Title, Description, and Keywords */}
        <title>{t('meta.homepage.title')}</title>
        <meta name="description" content={t('meta.homepage.description')} />
        <meta name="keywords" content={t('meta.homepage.keywords')} />

        {/* Canonical Tag for the Current Language Version */}
        <link
          rel="canonical"
          href={`https://cumurprodaja-plv.com/${currentLanguage}/homepage`}
        />

        {/* hreflang Tags for SEO */}
        <link rel="alternate" hreflang="en" href="https://cumurprodaja-plv.com/en/homepage" />
        <link rel="alternate" hreflang="sr" href="https://cumurprodaja-plv.com/sr/homepage" />
        <link rel="alternate" hreflang="bg" href="https://cumurprodaja-plv.com/bg/homepage" />
        <link rel="alternate" hreflang="mk" href="https://cumurprodaja-plv.com/mk/homepage" />
        <link rel="alternate" hreflang="sq" href="https://cumurprodaja-plv.com/sq/homepage" />
        <link rel="alternate" hreflang="ro" href="https://cumurprodaja-plv.com/ro/homepage" />
        <link rel="alternate" hreflang="de" href="https://cumurprodaja-plv.com/de/homepage" />
      </Helmet>
      <CoverImage image={homeImage} />
      <GeneralInfo />
      <OurServices />
    </div>
  )
}

export default HomePage
