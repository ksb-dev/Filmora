import React from 'react'

// React Icons
import { GiFilmSpool } from 'react-icons/gi'

const SmallHeader = () => {
  return (
    <div className='small__header'>
      <h1 className='title'>
        <span className='first'>Film</span>
        <span className='icon'>
          <GiFilmSpool />
        </span>
        <span className='last'>ra</span>
      </h1>
      {/* <p>
        Wishlist <span>00</span>
      </p> */}
    </div>
  )
}

export default SmallHeader
