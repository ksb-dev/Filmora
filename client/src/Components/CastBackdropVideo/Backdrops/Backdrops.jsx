import React, { useState } from 'react'

// Context
import { useMovieContext } from '../../../Context/Context'

// Components
import Backdrop from './Backdrop/Backdrop'

// Sub-Components
import Loading from '../../../Sub-Components/Loading/Loading'
import Error from '../../../Sub-Components/Error/Error'

const Backdrops = ({ backdrops, backdropsLoading, backdropsError }) => {
  const { mode } = useMovieContext()

  if (backdropsLoading) {
    return (
      <div className='load'>
        <Loading />
      </div>
    )
  }

  if (backdropsError) {
    return (
      <div className='err'>
        <Error msg={'No backdrops found.'} />
      </div>
    )
  }

  if (backdrops.length === 0) {
    return (
      <div className='err'>
        <Error msg={'No backdrops found.'} />
      </div>
    )
  }

  return (
    <div
      className={
        'backdrop__container ' + (mode === true ? 'lightBg1' : 'darkBg1')
      }
    >
      {backdrops.map((backdrop, index) => (
        <Backdrop key={backdrop.file_path} backdrop={backdrop} index={index} />
      ))}
    </div>
  )
}

export default Backdrops
