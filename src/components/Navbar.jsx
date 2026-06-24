import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      padding: '16px 24px',
      display: 'flex',
      gap: '24px',
      backgroundColor: '#1a1a2e',
      borderBottom: '1px solid #2d1b4e',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      <Link to="/terms" style={{ color: '#c084fc', textDecoration: 'none', fontWeight: '500' }}>
        📄 Условия
      </Link>
      <Link to="/privacy" style={{ color: '#c084fc', textDecoration: 'none', fontWeight: '500' }}>
        🔒 Конфиденциальность
      </Link>
      <Link to="/licenses" style={{ color: '#c084fc', textDecoration: 'none', fontWeight: '500' }}>
        📜 Лицензии
      </Link>
    </nav>
  )
}

export default Navbar
