import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
function App() {
  const [tab, setTab] = useState("home")

  const renderTab = () => {
    switch (tab) {
      case "home":
        return <Home setTab={setTab} />

      case "about":
        return <About setTab={setTab} />

      case "projects":
        return <Projects setTab={setTab} />

      case "contact":
        return <Contact setTab={setTab} />
      default:
        return ""
    }
  }

  const [ismobile, setIsmobile] = useState(false);
  return (
    <div className="App">

      <div className='header'>
        <h3 className='logo'>My Portfolio</h3>
        <ul className={ismobile ? "mobile" : "list"}
          onClick={
            () => setIsmobile(false)}
        >
          <li className={`listitem ${tab === 'home' ? 'highlightbtn' : ''}`} onClick={() => setTab("home")} > Home</li>
          <li className={`listitem ${tab === 'contact' ? 'highlightbtn' : ''}`} onClick={() => setTab("contact")}>Contact</li>
          <li className={`listitem ${tab === 'projects' ? 'highlightbtn' : ''}`} onClick={() => setTab("projects")}> Projects</li>
          <li className={`listitem ${tab === 'about' ? 'highlightbtn' : ''}`} onClick={() => setTab("about")}>About</li>
        </ul>
        <button className='button' onClick={() => setIsmobile(!ismobile)}>
          {ismobile ? <i className="fas fa-times"></i>
            : <i className="fas fa-bars"></i>}
        </button>
      </div>
      {renderTab()}
    </div >
  );
}

export function Home() {
  return (
    <>
      <h2 className='hey'>Hey!</h2>
      <h1 className='name'>I'm <span>Keerthana</span></h1>
      <h3 className='qualification'>Full Stack Developer</h3>
      {/* <img src="src/port.jpg" className='portfolio' /> */}
      <button className='resume'>Resume</button>


    </>
  )
}

export function Contact() {
  return (
    <>
      <h2>Contact Me</h2>

    </>
  )
}

export function Projects() {
  return (
    <>
      <h2>Projects</h2>

    </>
  )
}

export function About() {
  return (
    <>
      <h2>About</h2>

    </>
  )
}




export default App;
