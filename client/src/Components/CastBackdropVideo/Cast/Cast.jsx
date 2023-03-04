import React from 'react'

// Context
import { useMovieContext } from '../../../Context/Context'

// Components
import Actor from './Actor/Actor'

// Sub-Components
import Loading from '../../../Sub-Components/Loading/Loading'
import Error from '../../../Sub-Components/Error/Error'

const Cast = ({ cast, castLoading, castError }) => {
  const { mode } = useMovieContext()

  if (castLoading) {
    return (
      <div className='load'>
        <Loading />
      </div>
    )
  }

  if (castError) {
    return (
      <div className='err'>
        <Error msg={'No cast found.'} />
      </div>
    )
  }

  if (cast.length === 0) {
    return (
      <div className='err'>
        <Error msg={'No cast found.'} />
      </div>
    )
  }

  return (
    <div className={'cast ' + (mode === true ? 'lightBg1' : 'darkBg1')}>
      {cast.map((actor, index) => (
        <Actor key={index} actor={actor} />
      ))}
    </div>
  )
}

export default Cast
