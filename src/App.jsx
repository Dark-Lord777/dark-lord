import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Licenses from './pages/Licenses'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Terms />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/licenses" element={<Licenses />} />
      </Routes>
    </HashRouter>
  )
}

export default App
