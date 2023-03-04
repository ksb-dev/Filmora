import React, { useState, useEffect } from 'react'

// APIs
import { APIs } from '../../APIs/APIs'

// React Router DOM
import { useParams } from 'react-router-dom'

// Hooks
import { useGetMovieInfo } from '../../Hooks/useGetMovieInfo'

// Context
import { useMovieContext } from '../../Context/Context'

// Components
import Header from '../../Components/Header/Header'
import SmallHeader from '../../Components/Header/SmallHeader/SmallHeader'
import Menu from '../../Components/Menu/Menu'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'

// Sub-Components
import Loading from '../../Sub-Components/Loading/Loading'
import Error from '../../Sub-Components/Error/Error'

const ActorDetail = () => {
  const { mode } = useMovieContext()
  const { getActorDetail } = useGetMovieInfo()

  const { id } = useParams()
  const [actorDetail, setActorDetail] = useState('')
  const [actorDetailLoading, setActorDetailLoading] = useState(true)
  const [actorDetailError, setActorDetailError] = useState('')

  const { imdb_id, name, birthday, place_of_birth, profile_path, biography } =
    actorDetail

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    getActorDetail(
      id,
      setActorDetail,
      setActorDetailLoading,
      setActorDetailError
    )
  }, [])

  const humanReadableDate = new Date(birthday).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <div
      className={
        'actor__detail ' +
        (mode === true ? 'lightBg1 darkColor1' : 'darkBg1 lightColor1')
      }
    >
      <Header />
      <SmallHeader />
      <Menu />
      <Login />
      <Signup />

      <div className='actor__detail__container'>
        {actorDetailLoading && (
          <span className='e'>
            <Loading />
          </span>
        )}

        {!actorDetailLoading && actorDetailError && (
          <span className='e'>
            <Error msg={'No details found!'} />
          </span>
        )}

        {!actorDetailLoading && !actorDetailError && (
          <>
            <div className='img-name-birth-place'>
              <img
                src={
                  profile_path !== null
                    ? APIs.img_path + profile_path
                    : APIs.no_image_url
                }
                alt='actor'
              />
              <span className='name'>{name && name}</span>
              <span className='place'>{place_of_birth && place_of_birth}</span>
              <span className='birth'>{birthday && humanReadableDate}</span>
            </div>
            <div className='bio'>
              <h3>Biography</h3>
              <span>
                {biography ? biography : <span>No details found.</span>}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ActorDetail
