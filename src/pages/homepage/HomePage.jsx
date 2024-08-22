import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import homeImage from '../../assets/charcoal.jpg'
import CoverImage from './components/CoverImage/CoverImage'
import GeneralInfo from './components/GeneralInfo/GeneralInfo'
import OurServices from './components/OurServices/OurServices'

function HomePage() {
  const { t } = useTranslation('meta')

  return (
    <div className="container">
      <Helmet>
        <title>{t('meta.homepage.title')}</title> {/* Adjusted to match the expected keys */}
        <meta name="description" content={t('meta.homepage.description')} /> {/* Using t instead of i18n.t */}
        <meta name="keywords" content={t('meta.homepage.keywords')} /> {/* Using t instead of i18n.t */}

        {/* hreflang tags for SEO */}
        <link rel="alternate" hreflang="en" href="http://yourdomain.com/en/homepage" />
        <link rel="alternate" hreflang="sr" href="http://yourdomain.com/sr/homepage" />
        <link rel="alternate" hreflang="bg" href="http://yourdomain.com/bg/homepage" />
        <link rel="alternate" hreflang="mk" href="http://yourdomain.com/mk/homepage" />
        <link rel="alternate" hreflang="sq" href="http://yourdomain.com/sq/homepage" />
        <link rel="alternate" hreflang="ro" href="http://yourdomain.com/ro/homepage" />
        <link rel="alternate" hreflang="de" href="http://yourdomain.com/de/homepage" />
      </Helmet>
      <CoverImage image={homeImage} />
      <GeneralInfo />
      <OurServices />
    </div>
  )
}

export default HomePage
