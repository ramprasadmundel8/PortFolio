import { useState } from 'react'
// import './App.css'
// import Header from './components/Header'
// import About from './components/About'
// import Projects from './components/Project'
// function App() {
//   return (
//     <div>
//       <Header />
//        <About />
//       <Projects />
//       {/* other components or content */}
//     </div>
//   )
// }
// export default App


import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer' // Make sure the filename matches!

function App() {
  return (
    <div className="container">
      <Header />
      <main>
<About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
       <Footer />
    </div>
  )
}
export default App