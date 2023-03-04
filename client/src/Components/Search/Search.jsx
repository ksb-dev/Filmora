import React, { useState, useEffect } from 'react'

// Context
import { useMovieContext } from '../../Context/Context'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getMovies } from '../../Redux/Services/movies/getMovies'

const Search = () => {
  const {
    mode,
    query,
    setQuery,
    searchLoading,
    setSearchLoading,
    searchError,
    setSearchError
  } = useMovieContext()

  const dispatch = useDispatch()

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    const term = sessionStorage.getItem('term')

    if (term) dispatch(getMovies('search'))
  }, [])

  return (
    <div className='search'>
      <form
        className='search__form'
        onSubmit={e => {
          e.preventDefault()
          sessionStorage.setItem('term', query)
          dispatch(getMovies('search'))
        }}
      >
        <input
          type='text'
          className={
            mode === true
              ? 'lightBg1 darkColor1 darkFilterBottomBorder'
              : 'darkBg1 lightColor1 lightFilterBottomBorder'
          }
          placeholder='Search'
          value={query ? query : ''}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search
