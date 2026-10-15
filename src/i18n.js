import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      menuTitle: "📋 Menu",
      aboutMe: "👾 About Me",
      apkDownloads: "Apk Downloads",
      projects: "📁 Projects",
      fortune: "🔮 Fortune"
    }
  },
  ru: {
    translation: {
      menuTitle: "📋 Меню",
      aboutMe: "👾 Обо мне",
      apkDownloads: "Скачать APK",
      projects: "📁 Проекты",
      fortune: "🔮 Предсказания"
    }
  },
  uk: {
    translation: {
      menuTitle: "📋 Меню",
      aboutMe: "👾 Про мене",
      apkDownloads: "Завантажити APK",
      projects: "📁 Проєкти",
      fortune: "🔮 Ворожіння"
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
