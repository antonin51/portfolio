import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import 'typeface-inter'
import Portfolio from './components/portfolio'
import About from './pages/about'
import Book from './pages/book'
import CounterPage from './pages/counter'
import Erreur from './pages/Erreur'
import Exercice from './pages/exercice'
import Home from './pages/home'




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path='/exercice' element={<Exercice />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='*' element={<Erreur />} />
      </Routes>
    </Router>
  )
}

export default App