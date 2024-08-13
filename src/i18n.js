import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enContent from './locales/content-en.json'
import srContent from './locales/content-sr.json'
import bgContent from './locales/content-bg.json'
import mkContent from './locales/content-mk.json'
import sqContent from './locales/content-sq.json'
import roContent from './locales/content-ro.json'
import deContent from './locales/content-de.json'

import enPrivacy from './locales/privacy-en.json'
import srPrivacy from './locales/privacy-sr.json'
import bgPrivacy from './locales/privacy-bg.json'
import mkPrivacy from './locales/privacy-mk.json'
import sqPrivacy from './locales/privacy-sq.json'
import roPrivacy from './locales/privacy-ro.json'
import dePrivacy from './locales/privacy-de.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { content: enContent, privacy: enPrivacy },
      sr: { content: srContent, privacy: srPrivacy },
      bg: { content: bgContent, privacy: bgPrivacy },
      mk: { content: mkContent, privacy: mkPrivacy },
      sq: { content: sqContent, privacy: sqPrivacy },
      ro: { content: roContent, privacy: roPrivacy },
      de: { content: deContent, privacy: dePrivacy }
    },
    fallbackLng: 'en',
    ns: ['content', 'privacy'], // Specify namespaces
    defaultNS: 'content', // Set the default namespace
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
