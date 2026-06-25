import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'  // ← ИКОНКИ СТРЕЛОК

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)  // ← СОСТОЯНИЕ ДЛЯ ПРОЕКТОВ
  const menuRef = useRef(null)

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

  return (
    <>
      {/* Верхняя панель с гамбургером */}
      <div className="navbar">
        <span className="navbar-brand">👑 Dark Lord</span>
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Затемнение */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

      {/* Выдвижное меню */}
      <div ref={menuRef} className={`drawer ${isOpen ? 'open' : ''}`}>
        <h2 className="drawer-title">📋 Меню</h2>

        <Link to="/" className="drawer-link" onClick={handleLinkClick}>
          👾 About Me
        </Link>

        {/* Пункт "Projects" с раскрывашкой */}
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

          {/* Вложенные пункты (показываются если projectsOpen = true) */}
          {projectsOpen && (
            <div style={{ paddingLeft: '20px', marginTop: '4px' }}>
              <Link
                to="/projects/fortune"
                className="drawer-link"
                onClick={handleLinkClick}
                style={{ fontSize: '16px' }}
              >
                🎡 Fortune
              </Link>
            </div>
          )}
        </div>

      </div>
    </>
  )
}

export default Navbar
