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

import enMeta from './locales/meta/meta-en.json'
import srMeta from './locales/meta/meta-sr.json'
import bgMeta from './locales/meta/meta-bg.json'
import mkMeta from './locales/meta/meta-mk.json'
import sqMeta from './locales/meta/meta-sq.json'
import roMeta from './locales/meta/meta-ro.json'
import deMeta from './locales/meta/meta-de.json'

import enAltMeta from './locales/meta/alt-meta-en.json'
import srAltMeta from './locales/meta/alt-meta-sr.json'
import bgAltMeta from './locales/meta/alt-meta-bg.json'
import mkAltMeta from './locales/meta/alt-meta-mk.json'
import sqAltMeta from './locales/meta/alt-meta-sq.json'
import roAltMeta from './locales/meta/alt-meta-ro.json'
import deAltMeta from './locales/meta/alt-meta-de.json'


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { content: enContent, privacy: enPrivacy, meta: enMeta, 'alt-meta': enAltMeta },
      sr: { content: srContent, privacy: srPrivacy, meta: srMeta, 'alt-meta': srAltMeta },
      bg: { content: bgContent, privacy: bgPrivacy, meta: bgMeta, 'alt-meta': bgAltMeta },
      mk: { content: mkContent, privacy: mkPrivacy, meta: mkMeta, 'alt-meta': mkAltMeta },
      sq: { content: sqContent, privacy: sqPrivacy, meta: sqMeta, 'alt-meta': sqAltMeta },
      ro: { content: roContent, privacy: roPrivacy, meta: roMeta, 'alt-meta': roAltMeta },
      de: { content: deContent, privacy: dePrivacy, meta: deMeta, 'alt-meta': deAltMeta }
    },
    fallbackLng: 'sr',
    ns: ['content', 'privacy', 'meta', 'alt-meta'], // Add 'alt-meta' to namespaces
    defaultNS: 'content',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
