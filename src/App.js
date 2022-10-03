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
      {/* <h2 >Projects</h2> */}
      <h2 className='prohead'>Have a look at my work</h2>
      <div className='projectcard'>
        <div className='innercard'>
          <h2>EventFinder</h2>
        </div>
        <img className='eventimg' />
      </div>

    </>
  )
}

export function About() {
  return (
    <>
      <h2 className='abouthead'>About Me</h2>
      <p className='aboutme'>I'm Keerthana from AndhraPradesh, India. I've graduated in Computer Science & Engineering Major. Seeing code getting converted into things we use reguarly which makes our work easier , like Zomato,Amazon,BookMyShow..etc,has driven my interest towards web development .
        And from then i started my web development  journey  and learnt  to build full stack applications , using MERN stack preferably .  </p>
      <p className='hobbies'> I spend  my free time reading books, listening music , painting and spend with family and friends . </p>
    </>
  )
}




export default App;
