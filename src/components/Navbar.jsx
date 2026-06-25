import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false)
  }
  return (
    <>
  <nav className="desktop-nav">
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
    //mobile
    <nav className="mobile-nav">
    <span style={{color: '#c084fc', fontSize: '20px', fontWeight: 'bold'  }}>
    👑 Dark Lord
    </span>
    <button 
      onClick-{() => setIsOpen(!isOpen)}
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

    </dix>
    )}
    </>
  )
}

export default Navbar
