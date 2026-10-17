import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [showBio, setShowBio] = useState(false)

  const skills = [
    'React.js',
    'REST APIs',
    'JavaScript (ES6+)',
    'Async / Await',
    'Node.js',
    'HTML5 & CSS3'
  ]

  return (
    <div className="page-container">
      <section className="hero-card">
        <span className="badge">Practical 3: API Integration</span>
        <h1>Hi, I am Kunj Desai</h1>
        <p className="subtitle">
          Demonstrating REST API data fetching using useEffect, async handling, loading states, and error handling.
        </p>

        <div className="btn-group">
          <Link to="/projects" className="btn btn-primary">
            Explore GitHub Repos
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Me
          </Link>
          <button
            className="btn btn-secondary"
            onClick={() => setShowBio(!showBio)}
          >
            {showBio ? 'Hide Bio' : 'Show Bio'}
          </button>
        </div>

        {showBio && (
          <div className="info-box">
            <h3>Student Profile</h3>
            <p>
              CSE student at CHARUSAT exploring front-end API integrations, hooks (useEffect, useState), and clean user interfaces.
            </p>
          </div>
        )}
      </section>

      <section className="card">
        <h2>Technical Stack</h2>
        <div className="tags-container">
          {skills.map((skill, index) => (
            <span key={index} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
