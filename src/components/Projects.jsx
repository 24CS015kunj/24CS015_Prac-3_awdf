import React, { useState, useEffect } from 'react'

function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [username, setUsername] = useState('kunjdesai')
  const [inputUser, setInputUser] = useState('kunjdesai')

  const fetchRepos = (targetUser) => {
    setLoading(true)
    setError(null)

    fetch(`https://api.github.com/users/${targetUser}/repos?sort=updated&per_page=12`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch repositories (${res.status} ${res.statusText})`)
        }
        return res.json()
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data)
        } else {
          setRepos([])
        }
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchRepos(username)
  }, [username])

  const handleUserSearch = (e) => {
    e.preventDefault()
    if (inputUser.trim()) {
      setUsername(inputUser.trim())
    }
  }

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="page-container">
      <div className="section-header">
        <h2>GitHub Projects & Repositories</h2>
        <p>Dynamic REST API integration consuming GitHub public endpoints.</p>
      </div>

      <div className="api-controls">
        <form onSubmit={handleUserSearch} className="user-form">
          <input
            type="text"
            placeholder="GitHub username"
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Load Repos
          </button>
        </form>

        <input
          type="text"
          className="search-input"
          placeholder="Filter repositories by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && (
        <div className="status-container">
          <div className="spinner"></div>
          <p>Fetching repositories from GitHub...</p>
        </div>
      )}

      {error && !loading && (
        <div className="error-card">
          <h3>Failed to Load Repositories</h3>
          <p>{error}</p>
          <div className="btn-group">
            <button className="btn btn-primary" onClick={() => fetchRepos(username)}>
              Retry Fetch
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setInputUser('octocat')
                setUsername('octocat')
              }}
            >
              Try Default (octocat)
            </button>
          </div>
        </div>
      )}

      {!loading && !error && filteredRepos.length === 0 && (
        <div className="status-container">
          <p>No repositories found matching your search.</p>
        </div>
      )}

      {!loading && !error && filteredRepos.length > 0 && (
        <div className="grid">
          {filteredRepos.map((repo) => (
            <div key={repo.id} className="project-card">
              <div className="repo-header">
                <h3>{repo.name}</h3>
                <span className="star-badge">⭐ {repo.stargazers_count}</span>
              </div>
              <p>{repo.description || 'No description provided for this repository.'}</p>
              {repo.language && <span className="card-tag">{repo.language}</span>}
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="card-link"
              >
                View Repository &rarr;
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Projects
