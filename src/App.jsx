import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar' //navigation/ also do navigation bar
import Projects from './pages/Projects.jsx'
import Fortune from './pages/fortune.jsx'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Licenses from './pages/Licenses'
import About from './pages/About.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/fortune" element={<Fortune/>} />
        <Route path="/projects/fortune/terms" element={<Terms />} />
        <Route path="/projects/fortune/privacy" element={<Privacy />} />
        <Route path="/projects/fortune/licenses" element={<Licenses />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
