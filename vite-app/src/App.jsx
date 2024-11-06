import React from 'react';
import './App.css'; // Import the custom CSS

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">Arnav Barway</div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Arnav Barway</h1>
          <p>Web Developer | Designer | Problem Solver</p>
          <a href="#projects" className="btn-primary">View My Projects</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I’m a passionate web developer with a focus on creating beautiful, user-friendly web applications.
          With a background in both frontend and backend technologies, I work to build seamless and dynamic experiences on the web.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project">
            <h3><a href="http://tsc.is-best.net" target="_blank" rel="noopener noreferrer">TSC Project</a></h3>
            <p>A web application I developed to manage tasks and projects. View it live at <a href="http://tsc.is-best.net">tsc.is-best.net</a>.</p>
          </div>
          <div className="project">
            <h3><a href="https://kind-nodes.vercel.app" target="_blank" rel="noopener noreferrer">kindNodes</a></h3>
            <p>kindNodes is an open-source Minecraft server hosting dashboard. Check it out at <a href="https://kind-nodes.vercel.app">kind-nodes.vercel.app</a>.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Feel free to get in touch for collaboration, job opportunities, or just to say hello!</p>
        <p>Email: <a href="mailto:playnav.yt@gmail.com">playnav.yt@gmail.com</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Arnav Barway</p>
      </footer>
    </div>
  );
}

export default App;
