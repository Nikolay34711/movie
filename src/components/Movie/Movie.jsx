/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

export default function Movie({ movieList }) {
  // FUNK FOR FORMAT TEXT
  function formatText(text, maxLength = 350) {
    if (text.length > maxLength) {
      let cutText = text.substring(0, maxLength)
      cutText = cutText.replace(/\s+$/, '')
      cutText = cutText.substring(0, cutText.lastIndexOf(' '))
      cutText += '...'
      return cutText
    }
    return text
  }

  return (
    <div className="movies">
      {movieList.map(({ id, title, release_date, overview, poster_path }) => (
        <div className="movie" key={id}>
          <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="movie" />
          <div className="movie__info">
            <h3 className="movie__title">{title}</h3>
            <p className="movie__date">{format(new Date(release_date), 'MMMM dd, yyyy')}</p>
            <p style={{ color: 'red' }}>here will be genre</p>
            <p className="movie__description">{formatText(overview)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

Movie.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    }),
  ).isRequired,
}
