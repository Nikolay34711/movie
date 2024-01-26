import React from 'react'
import MovieList from '../MovieList/MovieList'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Movie list</h1>
        <MovieList />
      </div>
    </div>
  )
}
