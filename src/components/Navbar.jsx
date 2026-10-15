import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'

// Функция для чтения выбранного языка из куки Google Translate
const getSavedLanguage = () => {
  const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/)
  return match ? match[1] : 'en'
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  // Инициализируем состояние сохраненным языком из куки
  const [currentLang, setCurrentLang] = useState(getSavedLanguage)
  const menuRef = useRef(null)

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ru,uk',
          autoDisplay: false
        },
        'google_translate_element'
      )
    }

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script')
      script.id = 'google-translate-script'
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const handleLanguageChange = (e) => {
    const lang = e.target.value
    setCurrentLang(lang)

    // Обновляем скрытый селект Google Translate
    const googleSelect = document.querySelector('.goog-te-combo')
    if (googleSelect) {
      googleSelect.value = lang
      googleSelect.dispatchEvent(new Event('change'))
    }
  }

  return (
    <>
      <div id="google_translate_element" style={{ display: 'none' }} />

      {/* Верхняя панель */}
      <div className="navbar">
        <span className="navbar-brand">
          👑 <span className="notranslate" translate="no">Dark Lord</span>
        </span>
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Затемнение */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

      {/* Выдвижное меню */}
      <div ref={menuRef} className={`drawer ${isOpen ? 'open' : ''}`}>
        <h2 className="drawer-title">📋 Menu</h2>

        <Link to="/" className="drawer-link" onClick={handleLinkClick}>
          👾 About Me
        </Link>
        <Link to="/projects/fortune/apk" className="drawer-link" onClick={handleLinkClick}>
          Apk Downloads
        </Link>

        {/* Пункт "Projects" */}
        <div>
          <div
            className="drawer-link drawer-parent"
            onClick={() => setProjectsOpen(!projectsOpen)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <span>📁 Projects</span>
            {projectsOpen ? <FaChevronDown size={14} /> : <FaChevronRight size={14} />}
          </div>

          {/* Вложенный пункт "Fortune" */}
          {projectsOpen && (
            <div style={{ paddingLeft: '20px', marginTop: '4px' }}>
              <Link
                to="/projects/fortune"
                className="drawer-link"
                onClick={handleLinkClick}
                style={{
                  fontSize: '16px',
                  display: 'block',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  transition: 'background 0.2s'
                }}
              >
                🔮 <span className="notranslate" translate="no">Fortune</span>
              </Link>
            </div>
          )}
        </div>

        {/* Селект переключения языка */}
        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <select 
            value={currentLang} 
            onChange={handleLanguageChange}
            className="notranslate"
            translate="no"
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '6px',
              background: '#1a1a1a',
              color: '#fff',
              border: '1px solid #333',
              fontSize: '14px',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <option value="en">EN English</option>
            <option value="ru">RU Русский</option>
            <option value="uk">UA Українська</option>
          </select>
        </div>

      </div>
    </>
  )
}

export default Navbar
