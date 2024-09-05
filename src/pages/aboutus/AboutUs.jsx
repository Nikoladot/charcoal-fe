import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import secondImage from '../../assets/gallery/image5.png'
import firstImage from '../../assets/gallery/image14.jpg'
import './AboutUs.css'

function AboutUs() {
  const { t } = useTranslation(['meta', 'content'])

  return (
    <div className="about-us">
      <Helmet>
        <title>{t('meta:meta.about.title')}</title>
        <meta name="description" content={t('meta:meta.about.description')} />
        <meta name="keywords" content={t('meta:meta.about.keywords')} />

        {/* hreflang tags for SEO */}
        <link rel="alternate" hreflang="en" href="https://cumurprodaja-plv.com/en/about" />
        <link rel="alternate" hreflang="sr" href="https://cumurprodaja-plv.com/sr/about" />
        <link rel="alternate" hreflang="bg" href="https://cumurprodaja-plv.com/bg/about" />
        <link rel="alternate" hreflang="mk" href="https://cumurprodaja-plv.com/mk/about" />
        <link rel="alternate" hreflang="sq" href="https://cumurprodaja-plv.com/sq/about" />
        <link rel="alternate" hreflang="ro" href="https://cumurprodaja-plv.com/ro/about" />
        <link rel="alternate" hreflang="de" href="https://cumurprodaja-plv.com/de/about" />
      </Helmet>
      <section className="section black-background">
        <div className="text-content txt-cntn-one">
          <h1>{t('content:about_us_title')}</h1>
          <p>{t('content:about_us_content')}</p>
        </div>
        <div className="image-container right-image">
          <img src={firstImage} alt="About Us" />
        </div>
      </section>
      <div className="line"></div>
      <section className="section lighter-black-background">
        <div className="image-container left-image">
          <img src={secondImage} alt="Our Team" />
        </div>
        <div className="text-content txt-cntn-two">
          <h1>{t('content:our_team_title')}</h1>
          <p>{t('content:our_team_content')}</p>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
