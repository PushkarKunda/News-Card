import React from 'react'
import NewsFeed from './components/NewsFeed'

function App() {
  return (
    <main className="app-container">
      <header className="app-header">
        <h1>News App</h1>
        <div className="header-glass"></div>
      </header>
      <NewsFeed />
    </main>
  )
}

export default App
