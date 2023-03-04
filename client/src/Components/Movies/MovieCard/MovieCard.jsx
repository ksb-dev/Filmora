import React, { useState, useRef } from 'react'
import moment from 'moment'

// Hooks
import { useWatchlistOperations } from '../../../Hooks/useWatchlistOperations'
import { useShowHide } from '../../../Hooks/useShowHide'
import { useGetClassByVote } from '../../../Hooks/useGetClassByVote'

// Redux
import { useSelector } from 'react-redux'

// Recat Router
import { Link } from 'react-router-dom'

// Context
import { useMovieContext } from '../../../Context/Context'

// Recat Icons
import { IoAddOutline, IoCheckmark } from 'react-icons/io5'

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const MovieCard = ({ movie }) => {
  const { mode, loginRef, loginFormRef } = useMovieContext()
  const { addMovie, deleteMovie } = useWatchlistOperations()

  const { getClassBg } = useGetClassByVote()
  const { showForm } = useShowHide()

  const watchlist = useSelector(state => state.watchlist.watchlist)
  const user = useSelector(state => state.watchlist.user)

  const ratingTitleDateRef = useRef(null)
  const addBtnRef = useRef(null)

  const {
    title,
    vote_average,
    release_date,
    poster_path,
    backdrop_path,
    id,
    genre_ids,
    overview
  } = movie

  const show = () => {
    ratingTitleDateRef.current.style.opacity = '1'
  }

  const hide = () => {
    ratingTitleDateRef.current.style.opacity = '0'
  }

  return (
    <div className='card'>
      <img
        className='card--image'
        src={poster_path === null ? url : IMG_PATH + poster_path}
        alt={title}
      />

      {user && watchlist && watchlist.length === 0 && (
        <p
          ref={addBtnRef}
          className={
            'card__btn ' +
            (mode === true
              ? 'darkBg2 lightColor1 lightBookmarkBorder'
              : 'lightBg1 darkColor1 darkBookmarkBorder')
          }
          onClick={() =>
            addMovie(
              id,
              title,
              poster_path,
              backdrop_path,
              release_date,
              vote_average,
              genre_ids,
              overview
            )
          }
        >
          <span className='card__btn--icon'>
            <IoAddOutline size={'20px'} />
          </span>
        </p>
      )}

      {/* ADD-BUTTON */}
      {user &&
        watchlist &&
        watchlist.length > 0 &&
        watchlist.map((item, index) => {
          if (item.id !== id) {
            return (
              <p
                key={index}
                ref={addBtnRef}
                className={
                  'card__btn ' +
                  (mode === true
                    ? 'darkBg2 lightColor1 lightBookmarkBorder'
                    : 'lightBg1 darkColor1 darkBookmarkBorder')
                }
                onClick={() =>
                  addMovie(
                    id,
                    title,
                    poster_path,
                    backdrop_path,
                    release_date,
                    vote_average,
                    genre_ids,
                    overview
                  )
                }
              >
                <span className='card__btn--icon'>
                  <IoAddOutline size={'20px'} />
                </span>
              </p>
            )
          }
        })}

      {/* DELETE-BUTTON */}
      {user &&
        watchlist &&
        watchlist.length > 0 &&
        watchlist.map((item, index) => {
          if (item.id === id) {
            return (
              <p
                ref={addBtnRef}
                className={
                  'card__btn ' +
                  (mode === true
                    ? ' darkBg2 lightColor1 lightBookmarkBorder'
                    : ' lightBg1 darkColor1 darkBookmarkBorder')
                }
                style={{ background: 'var(--blue)', color: '#fff' }}
                onClick={() => deleteMovie(id)}
              >
                <span
                  className='card__btn--icon'
                  style={{ color: 'var(--gold)' }}
                >
                  <IoCheckmark size={'20px'} />
                </span>
              </p>
            )
          }
        })}

      {/* ADD-BUTTON (without user) */}
      {sessionStorage.getItem('name') === null && (
        <p
          ref={addBtnRef}
          className={
            'card__btn ' +
            (mode === true
              ? 'darkBg2 lightColor1 lightBookmarkBorder'
              : 'lightBg1 darkColor1 darkBookmarkBorder')
          }
          onClick={() => showForm(loginRef, loginFormRef)}
        >
          <span className='card__btn--icon'>
            <IoAddOutline size={'20px'} />
          </span>
        </p>
      )}

      {/* CARD-INFO */}
      <div
        to='#'
        ref={ratingTitleDateRef}
        onMouseOver={show}
        onMouseLeave={hide}
        className={
          'card__info ' + (mode === true ? 'darkCardInfo' : 'lightCardInfo')
        }
      >
        {vote_average ? (
          <span
            className={`card__info--rating ${getClassBg(
              Number(String(vote_average).substring(0, 3))
            )}`}
          >
            {Number(String(vote_average).substring(0, 3))}
          </span>
        ) : (
          <span className='rating red'>0.0</span>
        )}

        <div className='card__info__inner'>
          <span className='card__info__inner--title'>
            {title
              ? title.length >= 50
                ? title.substring(0, 45) + '...'
                : title
              : 'Title Unknown'}
          </span>
          <span className='card__info__inner--date'>
            {release_date
              ? moment(release_date).format('Do MMM, YYYY')
              : '----'}
          </span>
        </div>

        <Link
          to={`/movie/${id}`}
          className={`card__info--more ${getClassBg(vote_average)}`}
        >
          View More
        </Link>
      </div>
    </div>
  )
}

export default MovieCard
