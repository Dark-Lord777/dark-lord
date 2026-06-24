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
  <nav style={{
      padding: '16px 24px',
      display: 'flex',
      gap: '24px',
      backgroundColor: '#1a1a2e',
      borderBottom: '1px solid #2d1b4e',
      flexWrap: 'wrap',
      justifyContent: 'center'
      '@media (max-width: 768px)': {
        display: 'none'
      }
    }}>
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
    <nav style={{
    padding: '16px 24px',
    backgroundColor: '#1a1a2e',
    borderBottom: '1x solid #2d1b4e',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media {min-width: 769px}': {
      display: 'none'
    }
    }}>
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
    <dix style={{
      position: 'fixed',
      top: '80px',
      left: 0,
      right: 0,
      backgroundColor: '#1a1a2e',
      borderBottom: '1px solid #2d1b4e',
      padding: '16px 24px',
      display: 'flex',
      flexdirection: 'column',
      gap: '16px',
      zIndex: 1000,
      boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
    }}>
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
