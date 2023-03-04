import React, { useState, useEffect, useRef } from 'react'

// React Router
import { useParams } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'
import { setWatchlist } from '../../Redux/Services/movies/setWatchlist'

// Context
import { useMovieContext } from '../../Context/Context'

// Hooks
import { useGetMovieInfo } from '../../Hooks/useGetMovieInfo'

// Components
import Header from '../../Components/Header/Header'
import SmallHeader from '../../Components/Header/SmallHeader/SmallHeader'
import Menu from '../../Components/Menu/Menu'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'

import MovieDetail from '../../Components/MovieDetail/MovieDetail'
import YouTubePlayer from '../../Components/MovieDetail/YoutubePlayer/YouTubePlayer'
import CastBackdropVideo from '../../Components/CastBackdropVideo/CastBackdropVideo'
import Reviews from '../../Components/Reviews/Reviews'
import ImageViewer from '../../Components/ImageViewer/ImageViewer'

// Sub-Components
import Loading from '../../Sub-Components/Loading/Loading'
import Error from '../../Sub-Components/Error/Error'

const MovieInfo = () => {
  const { mode } = useMovieContext()
  const dispatch = useDispatch()

  const { getMovieInfo, getCast, getReviews } = useGetMovieInfo()

  // Movie info
  const { id } = useParams()
  const [data, setData] = useState({})
  let [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Youtube player
  const [trailerUrl, setTrailerUrl] = useState('')
  const [playerLoading, setPlayerLoading] = useState(false)
  const [playerError, setPlayerError] = useState('')
  const playerRef = useRef(null)
  const playerInnerRef = useRef(null)

  // Cast
  const [cast, setCast] = useState([])
  const [castLoading, setCastLoading] = useState(true)
  const [castError, setCastError] = useState('')

  // Reviews
  const [reviews, setReviews] = useState([])
  const [reviewsLoading, setReviewsLoading] = useState(true)
  const [reviewsError, setReviewsError] = useState('')

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    const savedToken = sessionStorage.getItem('token')

    if (savedToken !== '' || savedToken !== undefined || savedToken !== null) {
      dispatch(setWatchlist())
    }
  }, [dispatch])

  useEffect(() => {
    // 1. Get movie info
    getMovieInfo(id, setData, setLoading, setError)

    getCast(id, setCast, setCastLoading, setCastError)

    getReviews(id, setReviews, setReviewsLoading, setReviewsError)

    //2. Get cast
    // setTimeout(() => {
    //   getCast(id, setCast, setCastLoading, setCastError)
    // }, 1000)

    // // 3. Get Reviews
    // setTimeout(() => {
    //   getReviews(id, setReviews, setReviewsLoading, setReviewsError)
    // }, 2000)
  }, [])

  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <Loading />
  //     </div>
  //   )
  // }

  // if (error) {
  //   return (
  //     <div className='error'>
  //       <Error msg={'Failed to fetch movie information'} />
  //     </div>
  //   )
  // }

  return (
    <div className={'movie-info ' + (mode === true ? 'lightBg2' : 'darkBg2')}>
      <Header />
      <SmallHeader />
      <Menu />

      <MovieDetail
        data={data}
        loading={loading}
        error={error}
        playerRef={playerRef}
        playerInnerRef={playerInnerRef}
        id={id}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
        setPlayerLoading={setPlayerLoading}
        setPlayerError={setPlayerError}
      />

      <YouTubePlayer
        playerRef={playerRef}
        playerInnerRef={playerInnerRef}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
        playerLoading={playerLoading}
        playerError={playerError}
      />

      {!loading && !error && (
        <>
          <CastBackdropVideo
            id={id}
            cast={cast}
            castError={castError}
            castLoading={castLoading}
            setCast={setCast}
            setCastLoading={setCastLoading}
            setCastError={setCastError}
            reviews={reviews}
            reviewsError={reviewsError}
            reviewsLoading={reviewsLoading}
          />

          <Reviews
            id={id}
            reviews={reviews}
            reviewsError={reviewsError}
            reviewsLoading={reviewsLoading}
          />

          <ImageViewer />
        </>
      )}
      <Login />
      <Signup />
    </div>
  )
}

export default MovieInfo
