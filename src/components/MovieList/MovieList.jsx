import React, { useState, useEffect } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Spin, Alert } from 'antd'
import Movie from '../Movie/Movie'
import './MovieList.css'

export default function MovieList() {
  const [error, setError] = useState(null)
  const [isLoad, setIsLoad] = useState(false)
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/search/movie?query=avengers&include_adult=false&language=en-US&page=1',
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGMwMjE3Mjk3OWMzYmU0ZWUwMWNkYWEwODI1ZjgxZSIsInN1YiI6IjY1YjM1YTIwYTA2NjQ1MDEyZjhkNDg0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.spiF3fMG198wcAtX0TcY8zXvocO5VIXY_6E46Fvxl_g',
            },
          },
        )
        const data = await res.json()
        setIsLoad(true)
        setMovieList(data.results)
        // eslint-disable-next-line no-shadow
      } catch (error) {
        setError(error)
      }
    }

    fetchData()
  }, [])

  if (error) {
    return <Alert type="error" message={error.message} />
    // eslint-disable-next-line no-else-return
  } else if (!isLoad) {
    // eslint-disable-next-line react/jsx-boolean-value
    return <Spin size="large" tip="Loading..." className="spin" />
  } else {
    return <Movie movieList={movieList} />
  }
}
