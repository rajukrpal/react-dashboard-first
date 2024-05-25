
import SideNav from './components/SideNav/SideNav'
import{ BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Setting from './components/pages/Setting'
import User from './components/pages/User'
import Analysis from './components/pages/Analysis'
import Products from './components/pages/Products'
import Dashboard from './components/pages/Dashboard'

function App() {
    //hjhh
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/dashboard' exact element={<Dashboard/>} />
        <Route path='/products' exact element={<Products/>} />
        <Route path='/user' exact element={<User/>} />
        <Route path='/analysis' exact element={<Analysis/>} />
        <Route path='/setting' exact element={<Setting/>} />
        <Route path='/about' exact element={<About/>} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
