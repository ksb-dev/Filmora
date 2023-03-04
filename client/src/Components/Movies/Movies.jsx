//import React, { useState, useEffect, useRef } from 'react'
import React, { useRef } from 'react'

// Hooks
import { useGetClassByVote } from '../../Hooks/useGetClassByVote'

// APIs
import { APIs } from '../../APIs/APIs'

// React Router
import { Link } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux'

// Context
import { useMovieContext } from '../../Context/Context'

// Components
import MovieCard from './MovieCard/MovieCard'
import Sort from './Sort/Sort'
import Pagination from './Pagination/Pagination'
import Loading from '../../Sub-Components/Loading/Loading'
import Error from '../../Sub-Components/Error/Error'

// Rect Icons
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline
} from 'react-icons/io5'
// import { AiFillStar } from 'react-icons/ai'

const Movies = () => {
  const { mode, index, setIndex } = useMovieContext()
  const { getClassBg } = useGetClassByVote()
  const movies = useSelector(state => state.movies.sortedMovies)
  const sortedMovies = useSelector(state => state.movies.sortedMovies)
  const loading = useSelector(state => state.movies.loading)
  const error = useSelector(state => state.movies.error)
  const user = useSelector(state => state.watchlist.user)

  // const [stop, setStop] = useState(0)
  // const timeoutRef = useRef(null)
  const btnRef = useRef(null)
  const infoRef = useRef(null)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIndex(prevIndex =>
  //       prevIndex === sortedMovies.length - 1 ? 0 : prevIndex + 1
  //     )
  //   }, 2000)

  //   if (stop === 1) {
  //     clearTimeout(timer)
  //   }

  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [index, stop])

  const previousImage = () => {
    index < 1
      ? setIndex(sortedMovies.length - 1)
      : setIndex(prevIndex => prevIndex - 1)
  }

  const nextImage = () => {
    index === sortedMovies.length - 1
      ? setIndex(0)
      : setIndex(prevIndex => prevIndex + 1)
  }

  if (loading) {
    return (
      <div className='loading'>
        <Loading />
      </div>
    )
  }

  if (user && window.location.pathname === '/watchlist' && error.isError) {
    return (
      <div className='error'>
        <Error msg={error.msg} />
      </div>
    )
  }

  if (
    user &&
    window.location.pathname === '/watchlist' &&
    movies &&
    movies.length === 0 &&
    sortedMovies &&
    sortedMovies.length === 0
  ) {
    return (
      <div className='error'>
        <Error msg={'Add movies to watchlist'} />
      </div>
    )
  }

  if (!user && window.location.pathname === '/watchlist') {
    return (
      <div className='error'>
        <Error msg={'Login to see your watchlist'} />
      </div>
    )
  }

  if (error.isError) {
    return (
      <div className='error'>
        <Error msg={error.msg} />
      </div>
    )
  }

  return (
    <>
      {sortedMovies && sortedMovies.length > 0 && (
        <>
          <div
            className={mode === true ? 'wall lightBg2' : 'wall darkBg1'}
            onMouseOver={() => {
              //clearTimeout(timeoutRef.current)
              //setStop(1)
              //btnRef.current.style.zIndex = '1'
            }}
            onMouseLeave={() => {
              //setStop(0)
              //btnRef.current.style.zIndex = '-1'
            }}
          >
            <img
              className='wall--image'
              src={
                sortedMovies[index].backdrop_path === null
                  ? APIs.no_image_url
                  : APIs.img_path + sortedMovies[index].backdrop_path
              }
              alt={sortedMovies[index].title}
            />

            <Link
              to={`/movie/${sortedMovies[index].id}`}
              className={
                'wall__cover ' +
                (mode === true
                  ? 'lightGradient1 darkColor1'
                  : 'darkGradient1 lightColor1')
              }
              // onMouseOver={() => {
              //   //clearTimeout(timeoutRef.current)
              //   //setStop(1)
              //   btnRef.current.style.zIndex = '1'
              // }}
              // onMouseLeave={() => {
              //   //setStop(0)
              //   btnRef.current.style.zIndex = '-1'
              // }}
            >
              <p
                className={
                  'wall__cover--number '
                  // +
                  // (mode === true ? 'lightBg2' : 'darkBg2')
                }
              >
                {index + 1 + ' / ' + sortedMovies.length}
              </p>

              <div className='wall__cover__info'>
                <div className='wall__cover__info__rating-title'>
                  {sortedMovies.length > 0 && (
                    <>
                      <p
                        className={
                          'rating ' +
                          getClassBg(sortedMovies[index].vote_average)
                        }
                      >
                        <span>
                          {/* <AiFillStar style={{ margin: '0 3px -2px -2px' }} /> */}
                          {sortedMovies[index].vote_average.toFixed(1)}
                        </span>
                      </p>
                      <span className='title'>{sortedMovies[index].title}</span>
                    </>
                  )}
                </div>
                <p className='wall__cover__info--overview'>
                  {sortedMovies[index].overview
                    ? sortedMovies[index].overview.length > 245
                      ? sortedMovies[index].overview.substring(0, 248) +
                        ' .....'
                      : sortedMovies[index].overview
                    : '-----'}
                </p>
              </div>
            </Link>

            <div ref={btnRef} className='wall__buttons'>
              {/* ref={btnRef} */}
              {sortedMovies.length > 1 ? (
                <>
                  <IoChevronBackCircleOutline
                    cursor={'pointer'}
                    size={'35px'}
                    style={{
                      marginLeft: '1rem',
                      color: '#fff',
                      background: 'rgba(0, 0, 0, 0.5)',
                      borderRadius: '50%'
                    }}
                    onClick={previousImage}
                  />
                  <IoChevronForwardCircleOutline
                    cursor={'pointer'}
                    size={'35px'}
                    style={{
                      marginRight: '1rem',
                      color: '#fff',
                      background: 'rgba(0, 0, 0, 0.5)',
                      borderRadius: '50%'
                    }}
                    onClick={nextImage}
                  />
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      )}

      {/* Sort Component */}
      {sortedMovies && sortedMovies.length > 0 && <Sort />}

      <div className={mode === true ? 'movies lightBg1' : 'movies darkBg1'}>
        {sortedMovies &&
          sortedMovies.length > 0 &&
          sortedMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
      </div>

      {window.location.pathname !== '/watchlist' &&
        window.location.pathname !== '/search' && (
          <div className='pagination'>
            <Pagination data={sortedMovies} pageLimit={5} dataLimit={20} />
          </div>
        )}
    </>
  )
}

export default Movies
