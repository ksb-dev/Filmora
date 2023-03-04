import React, { useEffect } from 'react'

// Context
import { useMovieContext } from '../../../Context/Context'

// Hooks
import { useShowHide } from '../../../Hooks/useShowHide'

// Components
import Loading from '../../../Sub-Components/Loading/Loading'
import VideoPlayer from '../../../Sub-Components/VideoPlayer/VideoPlayer'

const YouTubePlayer = ({
  playerRef,
  playerInnerRef,
  trailerUrl,
  setTrailerUrl,
  playerLoading,
  playerError
}) => {
  const { mode } = useMovieContext()
  const { hidePlayer } = useShowHide()

  // Detect outside click of Side Menu
  useEffect(() => {
    const handleOutsideClick = e => {
      if (
        playerRef.current !== null &&
        playerRef.current.contains(e.target) &&
        !playerInnerRef.current.contains(e.target)
      ) {
        hidePlayer(playerInnerRef, playerRef)
        setTrailerUrl('')
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => document.removeEventListener('click', handleOutsideClick)
  }, [playerRef, playerInnerRef])

  return (
    <div
      ref={playerRef}
      className={'player ' + (mode === true ? 'lightAlpha1' : 'darkAlpha1')}
    >
      <div
        ref={playerInnerRef}
        className={'player__inner ' + (mode === true ? 'lightBg1' : 'darkBg1')}
      >
        {playerLoading && (
          <div className='player__inner__loading'>
            <Loading />
          </div>
        )}

        {!playerLoading && trailerUrl && <VideoPlayer embedId={trailerUrl} />}

        {!playerLoading && !trailerUrl && <h1>Trailer not found.</h1>}
      </div>
    </div>
  )
}

export default YouTubePlayer
