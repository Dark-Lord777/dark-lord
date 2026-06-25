import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
  <div className="navbar">
  <button className="navbar-toggle" onClick={() => setIsOpen('isOpen')}>
  {isOpen ? <IoClose/> : <GiHamburgerMenu/>}
  </button>
  </div>
  {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

  <div ref{menuRef} className={`drawer ${isOpen ? 'open' : ''}`}>
        <h2 className="drawer-title">Menu</h2>
    <Link to="/" style={{ color: '#c084fc', textDecoration: 'none', fontWeight: '500'}} >
      👾 About Me 
    </Link>
      <Link to="/terms" style={{ color: '#c084fc', textDecoration: 'none', fontWeight: '500' }}>
        📄 Terms and Conditions
      </Link>
      <Link to="/privacy" style={{ color: '#c084fc', textDecoration: 'none', fontWeight: '500' }}>
        🔒 Privacy 
      </Link>
      <Link to="/licenses" style={{ color: '#c084fc', textDecoration: 'none', fontWeight: '500' }}>
        📜 Licenses 
      </Link>
    </nav>
    <nav className="mobile-nav">
    <span style={{color: '#c084fc', fontSize: '20px', fontWeight: 'bold'  }}>
    
    </span>
    <button 
      onClick={() => setIsOpen(!isOpen)}
      style={{
      background: 'none',
      border: 'none',
      color: '#c084fc',
      fontSize: '30px',
      cursor: 'pointer'
      }}
      >
      {isOpen ? <IoClose/> : <GiHamburgerMenu/>}
      </button>
    </nav>
    {isOpen && (
    <div className="mobile-dropdown">
    <Link to="/" style={{ color: '#c084fc', textDecoration: 'none', fontWeight: '18px'}} >
      👾 About Me 
    </Link>
      <Link to="/terms" style={{ color: '#c084fc', textDecoration: 'none', fontWeight: '18px' }}>
        📄 Terms and Conditions
      </Link>
      <Link to="/privacy" style={{ color: '#c084fc', textDecoration: 'none', fontWeight: '18px' }}>
        🔒 Privacy 
      </Link>
      <Link to="/licenses" style={{ color: '#c084fc', textDecoration: 'none', fontWeight: '18px' }}>
        📜 Licenses 
      </Link>

    </div>
    )}
    </>
  )
}

export default Navbar
