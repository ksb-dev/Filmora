import React, { useEffect } from 'react'

// Redux
import { useSelector } from 'react-redux'

// Hooks
import { useShowHide } from '../../../Hooks/useShowHide'
import { useAuthentication } from '../../../Hooks/useAuthentication'

// React Icons
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineLogout } from 'react-icons/ai'

// Context
import { useMovieContext } from '../../../Context/Context'

const Logout = () => {
  const { mode, logoutRef, userRef, show, setShow } = useMovieContext()
  const { hideLogout } = useShowHide()
  const { logout } = useAuthentication()
  const user = useSelector(state => state.watchlist.user)

  // Detect outside click of Filter Menu
  useEffect(() => {
    const closeFilter = e => {
      if (
        userRef.current &&
        !userRef.current.contains(e.target) //&&
        //!logoutRef.current.contains(e.target)
      ) {
        setShow(false)
      }
    }

    if (show) {
      //showLogout(logoutRef)
    } else {
      hideLogout(logoutRef)
    }

    document.body.addEventListener('click', closeFilter)

    return () => {
      document.body.removeEventListener('click', closeFilter)
    }
  }, [userRef, logoutRef, show, setShow])

  return (
    <div
      ref={logoutRef}
      className={
        'logout ' +
        (mode === true ? 'lightBg1 darkColor1' : 'darkBg2 lightColor1')
      }
    >
      <div className='logout__inner'>
        <p
          className={
            'logout__inner--name ' +
            (mode === true ? 'lightBg1 darkColor1' : 'darkBg2 lightColor1')
          }
        >
          <span>
            <BiUserCircle size={'25px'} style={{ paddingRight: '0.25rem' }} />
            {user && user.charAt(0).toUpperCase() + user.substring(1)}
          </span>
        </p>
        <p className='logout__inner--ok ' onClick={() => logout()}>
          <span>
            <AiOutlineLogout
              size={'25px'}
              style={{ paddingRight: '0.25rem' }}
            />
            Logout
          </span>
        </p>
      </div>
    </div>
  )
}

export default Logout
