import React from 'react'

// Context
import { useMovieContext } from '../../Context/Context'

const ProgressBar = ({ vote }) => {
  const { mode } = useMovieContext()

  return (
    <div className='piechart' style={{ '--percentage': `${vote * 10}%` }}>
      <p
        className={
          'circle ' +
          (mode === true ? 'lightBg1 darkColor1' : 'darkBg1 lightColor1')
        }
      >
        <span>{vote * 10}%</span>
      </p>
    </div>
  )
}

export default ProgressBar
