import React, { useEffect } from 'react'

// Hooks
import { useShowHide } from '../../../Hooks/useShowHide'

// Data
import { categoryArray } from '../../../Data/CategoryData'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { setDefault, getMovies } from '../../../Redux/Services/movies/getMovies'

// React Router
import { Link } from 'react-router-dom'

// Context
import { useMovieContext } from '../../../Context/Context'

const Categories = () => {
  const { mode, backCoverRef, menuRef, setIndex, setQuery } = useMovieContext()
  const watchlist = useSelector(state => state.watchlist.watchlist)
  const user = useSelector(state => state.watchlist.user)
  const { hideMenu } = useShowHide()
  const dispatch = useDispatch()
  const term = sessionStorage.getItem('term')

  const handleClick = category => {
    hideMenu(backCoverRef, menuRef)

    sessionStorage.setItem('page', 1)
    //sessionStorage.setItem('term', '')
    setQuery('')

    dispatch(setDefault('All'))
    // dispatch(getMovies(category))

    if (category === 'watchlist') {
      if (user) {
        dispatch(getMovies(category))
      }
    } else {
      dispatch(getMovies(category))
    }

    setIndex(0)
  }

  return (
    <div className='categories'>
      <p
        className={
          'categories--title ' + (mode === true ? 'lightBg1' : 'darkBg1')
        }
      >
        Categories
      </p>

      <div
        className={
          'categories__options ' + (mode === true ? 'lightBg1' : 'darkBg1')
        }
      >
        {categoryArray.map((category, index) => {
          return window.location.pathname === category.path ? (
            <Link
              key={index}
              to={category.path}
              className={
                'categories__options--option ' +
                (mode === true
                  ? 'lightBg1 darkColor1 lightActive'
                  : 'darkBg1 lightColor1 darkActive')
              }
              onClick={() => handleClick(category.category)}
            >
              {category.icon} <span>{category.value}</span>
              {category.value === 'Watchlist' && (
                <p className='number'>
                  <span>{user && watchlist ? watchlist.length : 0}</span>
                </p>
              )}
            </Link>
          ) : (
            <Link
              key={index}
              to={category.path}
              className={
                'categories__options--option ' +
                (mode === true ? 'lightBg1 darkColor1' : 'darkBg1 lightColor1')
              }
              onClick={() => handleClick(category.category)}
            >
              {category.icon} <span>{category.value}</span>
              {category.value === 'Watchlist' && (
                <p className='number'>
                  <span>{user && watchlist ? watchlist.length : 0}</span>
                </p>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
