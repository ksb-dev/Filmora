import React, { useState, useEffect } from 'react'

// Hooks
import { useShowHide } from '../../Hooks/useShowHide'
import { useAuthentication } from '../../Hooks/useAuthentication'

// React Router
import { Link } from 'react-router-dom'

// React Icons
import { BsEye, BsEyeSlash } from 'react-icons/bs'
// import { FcGoogle } from 'react-icons/fc'
// import { IoCloseOutline } from 'react-icons/io5'

// Context
import { useMovieContext } from '../../Context/Context'

// // Style
// import './Login.css'

const Login = () => {
  const {
    mode,
    loginRef,
    loginFormRef,
    signupRef,
    signupFormRef,
    email,
    setEmail,
    password,
    setPassword
  } = useMovieContext()
  const { showForm, hideForm } = useShowHide()
  const { login, isPending, error } = useAuthentication()

  const [show, setShow] = useState(false)

  // Detect outside click of Side Menu
  useEffect(() => {
    const handleOutsideClick = e => {
      if (
        loginRef.current.contains(e.target) &&
        !loginFormRef.current.contains(e.target)
      ) {
        hideForm(loginFormRef, loginRef)
        setEmail('')
        setPassword('')
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => document.removeEventListener('click', handleOutsideClick)
  }, [loginRef, loginFormRef, hideForm, setEmail, setPassword])

  const showSignupForm = () => {
    hideForm(loginFormRef, loginRef)
    setEmail('')
    setPassword('')

    showForm(signupRef, signupFormRef)
  }

  const handleSubmit = e => {
    e.preventDefault()
    login(email, password, setEmail, setPassword, loginRef, loginFormRef)
  }

  return (
    <div
      ref={loginRef}
      className={
        'login ' +
        (mode === true ? 'lightAlpha1 darkColor1' : 'darkAlpha1 lightColor1')
      }
    >
      {/* <p
        className={
          mode === true ? 'closeBtn darkColor1' : 'closeBtn lightColor1'
        }
        onClick={() => hideLoginForm()}
      >
        <IoCloseOutline size={'40px'} cursor={'pointer'} />
      </p> */}

      <div
        ref={loginFormRef}
        className={
          'login__form ' +
          (mode === true ? 'lightBg1 darkColor1' : 'darkBg1 lightColor1')
        }
      >
        <h1 className='login__form--title'>Login</h1>

        {/* <p>Login</p> */}

        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email'
            className={
              'email ' +
              (mode === true ? 'lightBg2 darkColor1' : 'darkBg2 lightColor1')
            }
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type={show ? 'text' : 'password'}
            placeholder='Password'
            className={
              'password ' +
              (mode === true ? 'lightBg2 darkColor1' : 'darkBg2 lightColor1')
            }
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          {password && show && (
            <span className='eye' onClick={() => setShow(false)}>
              <BsEye />
            </span>
          )}

          {password && !show && (
            <span className='eye' onClick={() => setShow(true)}>
              <BsEyeSlash />
            </span>
          )}

          {isPending ? (
            <button>...</button>
          ) : (
            <button onSubmit={handleSubmit}>Submit</button>
          )}
        </form>

        {/* <span className={mode === true ? 'or darkColor1' : 'or lightColor1'}>
          OR
        </span>

        <button className='google'>
          <FcGoogle size={'25px'} />
        </button> */}

        <div className='login__form__options'>
          <Link
            to='#'
            className='login__form__options--option '
            onClick={() => showSignupForm()}
          >
            Register
          </Link>
          <Link to='#' className='login__form__options--option'>
            Forgot your password?
          </Link>
        </div>

        {error && (
          <p
            className={
              'login--error ' + (mode === true ? 'lightAlpha1' : 'darkAlpha1')
            }
          >
            <span>{error}</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default Login
