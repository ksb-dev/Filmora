import React, { useRef } from 'react'

import { Link } from 'react-router-dom'

// Hooks
import { useShowHide } from '../../Hooks/useShowHide'

// Context
import { useMovieContext } from '../../Context/Context'

// React Icons
import { BsSun, BsMoonStars } from 'react-icons/bs'
import { BiLogInCircle, BiUserCircle, BiSearch, BiMenu } from 'react-icons/bi'

// Redux
import { useSelector } from 'react-redux'

// Components
import Logout from './Logout/Logout'
import Search from '../Search/Search'

const Header = () => {
  const {
    mode,
    setMode,
    backCoverRef,
    menuRef,
    loginRef,
    loginFormRef,
    setName,
    setEmail,
    setPassword,
    logoutRef,
    userRef,
    show,
    setShow
  } = useMovieContext()
  const { showMenu, showForm, showLogout, hideLogout } = useShowHide()
  const user = useSelector(state => state.watchlist.user)
  const headerRef = useRef(null)

  let prevScrollpos = window.pageYOffset

  //Window Scroll Function
  window.onscroll = () => {
    scrollFunction()
  }

  const scrollFunction = () => {
    if (logoutRef.current !== null) hideLogout(logoutRef, setShow)
    setShow(false)

    var currentScrollpos = window.pageYOffset

    if (prevScrollpos === 0 || prevScrollpos > currentScrollpos) {
      setTimeout(() => {
        if (headerRef.current !== null) {
          headerRef.current.style.top = '0.5rem'
        }
        //headerRef.current.style.boxShadow = '0px 3px 5px #000'
      }, 300)
    } else {
      setTimeout(() => {
        if (headerRef.current !== null) {
          headerRef.current.style.top = '-100%'
        }
        //headerRef.current.style.boxShadow = 'unset'
      }, 300)
    }
    prevScrollpos = currentScrollpos
  }

  const showLoginForm = () => {
    showForm(loginRef, loginFormRef)
    setName('')
    setEmail('')
    setPassword('')
  }

  const toggleLogout = () => {
    setShow(!show)

    if (show) {
      hideLogout(logoutRef)
    } else {
      showLogout(logoutRef)
    }
  }

  return (
    <div
      ref={headerRef}
      className={
        'header ' +
        (mode === true ? 'lightBg1 darkColor1' : 'darkBg1 lightColor1')
      }
    >
      <div className='header__options'>
        <span
          className={
            'header__options--option ' +
            (mode === true ? 'lightBg1 darkColor1' : 'darkBg1 lightColor1')
          }
          onClick={() => showMenu(backCoverRef, menuRef)}
        >
          <BiMenu
            size='25px'
            style={{ paddingLeft: '0.5rem' }}
            cursor={'pointer'}
          />
        </span>

        <span
          className={
            'header__options--option ' +
            (mode === true ? 'lightBg1 darkColor1' : 'darkBg1 lightColor1')
          }
          onClick={() => setMode(!mode)}
        >
          {mode === false ? <BsMoonStars size='25px' /> : <BsSun size='25px' />}
        </span>

        {window.location.pathname === '/search' ? (
          <Search />
        ) : (
          <Link
            to='/search'
            className={
              'header__options--option ' +
              (mode === true ? 'lightBg1 darkColor1' : 'darkBg1 lightColor1')
            }
          >
            <BiSearch size='25px' />
          </Link>
        )}

        {user ? (
          <span
            ref={userRef}
            onClick={() => toggleLogout()}
            className={
              'header__options--option ' +
              (mode === true ? 'lightBg1 darkColor1' : 'darkBg1 lightColor1')
            }
          >
            <BiUserCircle size='25px' style={{ paddingLeft: '0.5rem' }} />
          </span>
        ) : (
          <span
            onClick={() => showLoginForm()}
            className={
              'header__options--option ' +
              (mode === true ? 'lightBg1 darkColor1' : 'darkBg1 lightColor1')
            }
          >
            <BiLogInCircle size='25px' style={{ paddingLeft: '0.5rem' }} />
          </span>
        )}
      </div>

      {/* Logout Component */}
      <Logout />
    </div>
  )
}

export default Header
