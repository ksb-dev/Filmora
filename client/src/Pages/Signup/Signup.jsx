import React, { useState, useEffect } from 'react'

// Hooks
import { useShowHide } from '../../Hooks/useShowHide'
import { useAuthentication } from '../../Hooks/useAuthentication'

// React Router
import { Link } from 'react-router-dom'

// React Icons
import { BsEye, BsEyeSlash } from 'react-icons/bs'

// Context
import { useMovieContext } from '../../Context/Context'

const Signup = () => {
  const {
    mode,
    signupRef,
    signupFormRef,
    loginRef,
    loginFormRef,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword
  } = useMovieContext()
  const { showForm, hideForm } = useShowHide()
  const { register, isPending, error } = useAuthentication()
  const [show, setShow] = useState(false)

  // Detect outside click of Side Menu
  useEffect(() => {
    const handleOutsideClick = e => {
      if (
        signupRef.current.contains(e.target) &&
        !signupFormRef.current.contains(e.target)
      ) {
        hideForm(signupFormRef, signupRef)
        setName('')
        setEmail('')
        setPassword('')
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => document.removeEventListener('click', handleOutsideClick)
  }, [signupRef, signupFormRef, hideForm, setEmail, setPassword, setName])

  // Hide login form
  const hideSignupForm = () => {
    hideForm(signupFormRef, signupRef)
    setName('')
    setEmail('')
    setPassword('')
  }

  // Show login form
  const showLoginForm = () => {
    hideSignupForm()

    showForm(loginRef, loginFormRef)
    setName('')
    setEmail('')
    setPassword('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    register(
      name,
      email,
      password,
      setName,
      setEmail,
      setPassword,
      signupRef,
      signupFormRef
    )
  }

  return (
    <div
      ref={signupRef}
      className={
        'signup ' +
        (mode === true ? 'lightAlpha1 darkColor1' : 'darkAlpha1 lightColor1')
      }
    >
      <div
        ref={signupFormRef}
        className={
          'signup__form ' +
          (mode === true ? 'lightBg1 darkColor1' : 'darkBg1 lightColor1')
        }
      >
        <h1 className='signup__form--title'>Register</h1>

        <form action='' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Name'
            className={
              'name ' +
              (mode === true ? 'lightBg2 darkColor1' : 'darkBg2 lightColor1')
            }
            value={name}
            onChange={e => setName(e.target.value)}
          />
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
            <button onSubmit={handleSubmit}>...</button>
          ) : (
            <button onSubmit={handleSubmit}>Submit</button>
          )}
        </form>

        <div className='signup__form__options'>
          <Link
            to='#'
            className={
              'signup__form__options--option ' +
              (mode === true ? 'darkColor1' : 'lightColor1')
            }
          >
            Already have an account?{' '}
            <span onClick={() => showLoginForm()}>Login</span>
          </Link>
        </div>

        {error && (
          <p
            className={
              'signup--error ' + (mode === true ? 'lightAlpha1' : 'darkAlpha1')
            }
          >
            <span>{error}</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default Signup
