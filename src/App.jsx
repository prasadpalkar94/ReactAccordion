import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import ErrorPage from './components/pages/ErrorPage'
import Product from './components/pages/Product'
import About from './components/pages/About'
import FAQ from './components/pages/FAQ'
import ReactLayout from './components/common/ReactLayout'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes >
    <Route element={<ReactLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
