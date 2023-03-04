import React, { useState, useEffect, useCallback } from 'react'

// Hooks
import { useGetMovieInfo } from '../../Hooks/useGetMovieInfo'

// Context
import { useMovieContext } from '../../Context/Context'

// Components
import Cast from './Cast/Cast'
import Backdrops from './Backdrops/Backdrops'
import Videos from './Videos/Videos'
import Reviews from '../Reviews/Reviews'
//import Reviews from './Reviews/Reviews'

// Sub-Components
import Loading from '../../Sub-Components/Loading/Loading'
import Error from '../../Sub-Components/Error/Error'

const CastBackdropVideo = ({
  id,
  cast,
  castLoading,
  castError,
  setCast,
  setCastLoading,
  setCastError
}) => {
  const {
    mode,
    backdrops,
    setBackdrops,
    backdropsLoading,
    setBackdropsLoading,
    backdropsError,
    setBackdropsError
  } = useMovieContext()
  const { getCast, getBackdrops, getVideos } = useGetMovieInfo()

  const [castState, setCastState] = useState(true)
  const [backdropState, setBackdropState] = useState(false)
  const [videoState, setVideoState] = useState(false)

  // Videos
  const [videos, setVideos] = useState([])
  const [videosLoading, setVideosLoading] = useState(true)
  const [videosError, setVideosError] = useState('')

  //console.log('Cast : ', cast)
  // console.log('Backdrops : ', backdrops)
  // console.log('Reviews : ', reviews)

  const handleCast = () => {
    getCast(id, setCast, setCastLoading, setCastError)

    setBackdropState(false)
    setVideoState(false)
    setCastState(true)
  }

  const handleBackdrops = () => {
    getBackdrops(id, setBackdrops, setBackdropsLoading, setBackdropsError)

    setCastState(false)
    setVideoState(false)
    setBackdropState(true)
  }

  const handleVideos = () => {
    getVideos(id, setVideos, setVideosLoading, setVideosError)

    setCastState(false)
    setBackdropState(false)
    setVideoState(true)
  }

  return (
    <>
      <div
        className={
          'container ' +
          (mode === true ? 'lightBg1 darkColor1' : 'darkBg1 lightColor1')
        }
      >
        <div className='container__options'>
          {castState ? (
            <span
              className={
                mode === true ? 'darkBorderBottom' : 'lightBorderBottom'
              }
              onClick={() => handleCast()}
            >
              Cast
            </span>
          ) : (
            <span onClick={() => handleCast()}>Cast</span>
          )}

          {backdropState ? (
            <span
              className={
                mode === true ? 'darkBorderBottom' : 'lightBorderBottom'
              }
              onClick={() => handleBackdrops()}
            >
              Backdrops
            </span>
          ) : (
            <span onClick={() => handleBackdrops()}>Backdrops</span>
          )}

          {videoState ? (
            <span
              className={
                mode === true ? 'darkBorderBottom' : 'lightBorderBottom'
              }
              onClick={() => handleVideos()}
            >
              Videos
            </span>
          ) : (
            <span onClick={() => handleVideos()}>Videos</span>
          )}
        </div>

        <div className='container__components'>
          {castState && (
            <Cast cast={cast} castLoading={castLoading} castError={castError} />
          )}

          {backdropState && (
            <Backdrops
              backdrops={backdrops}
              backdropsLoading={backdropsLoading}
              backdropsError={backdropsError}
            />
          )}

          {videoState && (
            <Videos
              videos={videos}
              videosLoading={videosLoading}
              videosError={videosError}
            />
          )}
        </div>

        {/* <p className='line '>
        <span
          className={mode === true ? 'darkBorderBottom' : 'lightBorderBottom'}
        ></span>
      </p> */}
      </div>
      <p className='line '>
        <span
          className={mode === true ? 'darkBorderBottom' : 'lightBorderBottom'}
        ></span>
      </p>
    </>
  )
}

export default CastBackdropVideo
