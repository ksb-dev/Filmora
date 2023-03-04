import React, { useRef } from 'react'

// Recat Router DOM
import { useNavigate } from 'react-router-dom'

// Context
import { useMovieContext } from '../../../../Context/Context'

// APIs
import { APIs } from '../../../../APIs/APIs'

const Actor = ({ actor }) => {
  const { mode } = useMovieContext()
  const { original_name, character, profile_path, id } = actor
  const nameRef = useRef(null)
  const navigate = useNavigate()

  const showName = () => {
    nameRef.current.style.zIndex = '1'
  }

  const hideName = () => {
    nameRef.current.style.zIndex = '-1'
  }

  return (
    <div
      className={'actor '}
      onMouseOver={() => showName()}
      onMouseLeave={() => hideName()}
    >
      <div className='actor__inner'>
        <img
          src={
            profile_path !== null
              ? APIs.img_path + profile_path
              : APIs.no_image_url
          }
          alt='actor'
        />

        <div
          ref={nameRef}
          className={
            'actor__inner__name ' +
            (mode === true
              ? 'darkAlpha5 lightColor1'
              : 'lightAlpha5 darkColor1')
          }
        >
          <div className='name-character'>
            <span>{original_name}</span>
            <span>{character}</span>
          </div>
          <span onClick={() => navigate(`/actor/${id}`)} className='bio'>
            Biography
          </span>
        </div>
      </div>
    </div>
  )
}

export default Actor
