import React from 'react'

const Video = ({ video }) => {
  return (
    <div className='video'>
      <iframe
        // width='400'
        // height='200'
        src={`https://www.youtube.com/embed/${video.key}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  )
}

export default Video
