import React, { useEffect } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { getMovies } from '../../Redux/Services/movies/getMovies'

// React Icons
import { GiFilmSpool } from 'react-icons/gi'

// React Router
import { useNavigate } from 'react-router-dom'

// Hooks
import { useShowHide } from '../../Hooks/useShowHide'

// Context
import { useMovieContext } from '../../Context/Context'

// Components
import Categories from './Categories/Categories'
import Genre from './Genre/Genre'

const Menu = () => {
  const { mode, backCoverRef, menuRef, setQuery, setIndex } = useMovieContext()
  const { hideMenu } = useShowHide()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Detect outside click of Side Menu
  useEffect(() => {
    const handleOutsideClick = e => {
      if (
        backCoverRef.current !== null &&
        backCoverRef.current.contains(e.target) &&
        !menuRef.current.contains(e.target)
      ) {
        hideMenu(backCoverRef, menuRef)
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => document.removeEventListener('click', handleOutsideClick)
  }, [backCoverRef, menuRef])

  // Window > 1025 hide side menu
  window.onresize = () => {
    if (window.innerWidth >= 786) {
      if (backCoverRef.current !== null) hideMenu(backCoverRef, menuRef)
    }
  }

  return (
    <>
      <div
        className={
          'main-menu ' +
          (mode === true ? 'lightBg2 darkColor1' : 'darkBg2 lightColor1')
        }
      >
        <div className={'main-menu--title'}>
          <h1
            onClick={() => {
              sessionStorage.setItem('page', 1)
              sessionStorage.setItem('term', '')
              setQuery('')
              setIndex(0)
              dispatch(getMovies('popular'))
              navigate('/')
            }}
          >
            <span className='first'>Film</span>
            <span className='icon'>
              <GiFilmSpool />
            </span>
            <span className='last'>ra</span>
          </h1>
        </div>

        {/* Categories */}
        <Categories />

        {/* Genre */}
        {window.location.pathname.startsWith('/movie') ||
        window.location.pathname.startsWith('/actor') ||
        window.location.pathname.startsWith('/search') ? (
          ''
        ) : (
          <Genre />
        )}
      </div>

      {/* ---------------------------- */}

      <div
        ref={backCoverRef}
        className={
          'menu ' +
          (mode === true ? 'lightAlpha2 darkColor1' : 'darkAlpha2 lightColor1')
        }
      >
        <div
          ref={menuRef}
          className={
            'menu__inner ' +
            (mode === true ? 'lightBg1 darkColor1' : 'darkBg1 lightColor1')
          }
        >
          <div
            className={
              'menu__inner--title '
              //+ (mode === true ? 'lightBg1' : 'darkBg1')
            }
          >
            <h1
              onClick={() => {
                sessionStorage.setItem('page', 1)
                sessionStorage.setItem('term', '')
                setQuery('')
                setIndex(0)
                dispatch(getMovies('popular'))
                navigate('/')
              }}
            >
              <span className='first'>Film</span>
              <span className='icon'>
                <GiFilmSpool />
              </span>
              <span className='last'>ra</span>
            </h1>
          </div>

          {/* Categories */}
          <Categories />

          {/* Genre */}
          {window.location.pathname.startsWith('/movie') ||
          window.location.pathname.startsWith('/actor') ||
          window.location.pathname.startsWith('/search') ? (
            ''
          ) : (
            <Genre />
          )}
        </div>
      </div>
    </>
  )
}

export default Menu
