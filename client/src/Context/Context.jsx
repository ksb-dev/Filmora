import React, { useState, useEffect, useContext, useRef } from 'react'

// 1. Create Context
const MovieContext = React.createContext()

const MovieProvider = ({ children }) => {
  const [mode, setMode] = useState(true)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState('')
  const [token, setToken] = useState('')

  // Ref's
  const backCoverRef = useRef(null)
  const menuRef = useRef(null)
  const categoryRef = useRef(null)
  const genreRef = useRef(null)
  const loginRef = useRef(null)
  const loginFormRef = useRef(null)
  const signupRef = useRef(null)
  const signupFormRef = useRef(null)
  const logoutRef = useRef(null)
  const userRef = useRef(null)
  const viewerRef = useRef(null)
  const innerViewerRef = useRef(null)

  // Logout State
  const [show, setShow] = useState(false)

  // Backdrop Index
  const [index, setIndex] = useState(0)
  const [backdropIndex, setBackdropIndex] = useState(0)
  // Backdrops
  const [backdrops, setBackdrops] = useState([])
  const [backdropsLoading, setBackdropsLoading] = useState(false)
  const [backdropsError, setBackdropsError] = useState('')
  //Search
  const [query, setQuery] = useState('')
  const [searchLoading, setSearchLoading] = useState(false)
  const [searchError, setSearchError] = useState(false)

  return (
    <MovieContext.Provider
      value={{
        mode,
        setMode,

        backCoverRef,
        menuRef,

        categoryRef,
        genreRef,

        loginRef,
        loginFormRef,
        signupRef,
        signupFormRef,

        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,

        user,
        setUser,
        token,
        setToken,

        logoutRef,
        userRef,

        show,
        setShow,

        backdropIndex,
        setBackdropIndex,

        viewerRef,
        innerViewerRef,

        index,
        setIndex,

        backdrops,
        setBackdrops,
        backdropsLoading,
        setBackdropsLoading,
        backdropsError,
        setBackdropsError,

        query,
        setQuery,
        searchLoading,
        setSearchLoading,
        searchError,
        setSearchError
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export const useMovieContext = () => {
  return useContext(MovieContext)
}

export { MovieContext, MovieProvider }
