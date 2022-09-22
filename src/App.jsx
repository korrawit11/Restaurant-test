import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import  Navbar   from './component/Navbar/Navbar.jsx'
import  Sidebar  from './component/Sidebar/Sidebar.jsx'
import Header from './component/Header/Header.jsx'
import Blog from './component/Blog/Blog.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sidebar />
      <Navbar />
      <Header />
      <Blog />
    </div>
  )
}

export default App
