import React from 'react'
import PropTypes from 'prop-types'
import MovieItem from '../Movie/Movie'
import './MovieList.scss'

export default function MovieList({ moviesData, onRate }) {
  const elem = moviesData.map((item) => (
    <MovieItem
      key={item.id}
      img={item.poster_path}
      title={item.title}
      overview={item.overview}
      date={item.release_date}
      genreId={item.genre_ids}
      vote={item.vote_average}
      idForRate={item.id}
      onRate={onRate}
    />
  ))
  return <ul className="all-content">{elem}</ul>
}

MovieList.propTypes = {
  moviesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      genre_ids: PropTypes.arrayOf(PropTypes.number),
      vote_average: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onRate: PropTypes.func.isRequired,
}
