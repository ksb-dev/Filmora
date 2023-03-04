import React from 'react'

// Context
import { useMovieContext } from '../../../Context/Context'

// Components
import Video from './Video/Video'

// Sub-Components
import Loading from '../../../Sub-Components/Loading/Loading'
import Error from '../../../Sub-Components/Error/Error'

const Videos = ({ videos, videosLoading, videosError }) => {
  const { mode } = useMovieContext()

  if (videosLoading) {
    return (
      <div className='load'>
        <Loading />
      </div>
    )
  }

  if (videosError) {
    return (
      <div className='err'>
        <Error msg={'No videos found.'} />
      </div>
    )
  }

  if (videos.length === 0) {
    return (
      <div className='err'>
        <Error msg={'No videos found.'} />
      </div>
    )
  }

  return (
    <div
      className={
        'videos__container ' + (mode === true ? 'lightBg1' : 'darkBg1')
      }
    >
      {videos.map(
        (video, index) => index < 5 && <Video key={video.id} video={video} />
      )}
    </div>
  )
}

export default Videos
