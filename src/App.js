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
        <h3 className='logo'>Keerthana Malisetty</h3>
        <ul className={ismobile ? "mobile" : "list"}
          onClick={
            () => setIsmobile(false)}
        >
          <li className={`listitem ${tab === 'home' ? 'highlightbtn' : ''}`} onClick={() => setTab("home")} > Home</li>
          <li className={`listitem ${tab === 'about' ? 'highlightbtn' : ''}`} onClick={() => setTab("about")}>About</li>
          <li className={`listitem ${tab === 'projects' ? 'highlightbtn' : ''}`} onClick={() => setTab("projects")}> Projects</li>
          <li className={`listitem ${tab === 'contact' ? 'highlightbtn' : ''}`} onClick={() => setTab("contact")}>Contact</li>
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
      <h2 className='hey'>Hey there!</h2>
      <h1 className='name'>I'm <span>Keerthana</span></h1>
      <h3 className='qualification'>Full Stack Developer</h3>
      {/* <img src="src/port.jpg" className='portfolio' /> */}
      <div className='socialsctr'>
        <button className='resume'><i class="fa-brands fa-github icon"></i><a href='https://github.com/KeerthanaMalisetty'>Github</a></button>
        <button className='resume'><i class="fa-brands fa-linkedin icon"></i> <a href='https://www.linkedin.com/in/keerthana-malisetty-ba609215b/'>Linkedin</a></button>
        <button className='resume'><i class="fa-solid fa-file-lines icon"></i>Resume</button>
      </div>


    </>
  )
}

export function Contact() {
  return (
    <>
      <h1 className='head1'>Contact Me</h1>
      <h2 className='head2'>Let's get in touch and work together  :)
      </h2>
      <div className='contacts'>
        <div className='phone'>
          <i class="fa-solid fa-phone mob"></i>
          <p className='phn'>Phone</p>
          <p className='phnnum'>(+91) 6281993136</p>
        </div>
        <div className='location'>
          <i class="fa-sharp fa-solid fa-house home"></i>
          <p className='loc'>Location</p>
          <p className='adrs'>AndhraPradesh , India</p>
        </div>
        <div className='email'>
          <i class="fa-solid fa-envelope mail"></i>
          <p className='eml'>Email</p>
          <p className='mailid'> keerthanamalisetty@gmail.com</p>
        </div>
      </div>
    </>
  )
}

export function Projects() {
  return (
    <>
      {/* <h2 >Projects</h2> */}
      <h2 className='prohead'>Have a look at my work</h2>
      <div className='projectcard'>
        <img className='eventimg' src="./images/eventfinder.png" alt='' />
        <div className='innercard'>
          <h2 className='cardhead'>EventFinder</h2>
          <p className='desc'>EventFinder is a web app through which user can search the events easily using the filters for location and category , to  book the tickets Online for the  events happening at different places . It has features like login/sign with Auth,Admin .</p>
          <div className='techs'>
            <p className='react'> <i class="fa-brands fa-react"></i> React.Js</p>
            <p className='node'> <i class="fa-brands fa-node-js"></i>Node.Js</p>
            <p className='express'> <i class="fa-brands fa-node-js"></i>Express.Js</p>
            <p className='mongo'><i class="fa-solid fa-database"></i> MongoDB</p>
          </div>
        </div>

      </div>

    </>
  )
}

export function About() {
  return (
    <>
      <h2 className='abouthead'>About Me</h2>
      <p className='aboutme'>I'm Keerthana from AndhraPradesh, India. I've graduated in Computer Science & Engineering Major.
        Seeing code getting converted into things we use reguarly which makes our work easier , like Zomato,Amazon, BookMyShow..etc, has driven my interest towards web development .
        And from then i started my web development  journey  and learnt  to build full stack applications , using MERN stack preferably .  </p>
      <p className='hobbies'> I spend  my free time reading books, listening music , painting and spend with family and friends . </p>
    </>
  )
}

export default App;
