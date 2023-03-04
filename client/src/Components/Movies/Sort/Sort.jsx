import React, { useState, useEffect, useRef } from 'react'

// Sort Data
import { sortArray } from '../../../Data/SortData'

// Redux
import { useSelector } from 'react-redux'

// Context
import { useMovieContext } from '../../../Context/Context'

// Hooks
import { useSortFilter } from '../../../Hooks/useSortFilter'

const Sort = () => {
  const { sortState } = useSelector(state => state.movies)
  const { mode, setIndex } = useMovieContext()
  const { sortMovies } = useSortFilter()

  // States
  const [open, setOpen] = useState(false)

  // Ref's
  const btnRef = useRef(null)
  const filterRef = useRef(null)
  const openRef = useRef(null)
  const closeRef = useRef(null)

  // Detect outside click of Filter Menu
  useEffect(() => {
    const closeFilter = e => {
      if (!filterRef.current.contains(e.target)) {
        setOpen(false)
        btnRef.current.style.transform = 'rotate(0deg)'
      }
    }

    if (open) {
      btnRef.current.style.transform = 'rotate(180deg)'
      closeRef.current.style.opacity = '1'
      filterRef.current.style.zIndex = '3'
    } else {
      btnRef.current.style.transform = 'rotate(0deg)'
      closeRef.current.style.opacity = '0'
      filterRef.current.style.zIndex = '0'
    }

    document.body.addEventListener('click', closeFilter)

    return () => {
      document.body.removeEventListener('click', closeFilter)
    }
  }, [open])

  // Toggle Menu
  const toggleMenu = () => {
    setOpen(!open)
    if (open) {
      btnRef.current.style.transform = 'rotate(0deg)'
      btnRef.current.style.transition = 'all 0.3s ease'
      closeRef.current.style.opacity = '1'
    } else {
      btnRef.current.style.transform = 'rotate(180deg)'
      btnRef.current.style.transition = 'all 0.3s ease'
      closeRef.current.style.opacity = '0'
    }
  }

  return (
    <div ref={filterRef} className='sort'>
      <div
        ref={openRef}
        className={
          'sort__open ' +
          (mode === true ? 'lightBg2 darkColor1' : 'darkBg2 lightColor1')
        }
        onClick={toggleMenu}
      >
        <span>{sortState}</span>

        <span>
          <i className='fa-solid fa-chevron-down' ref={btnRef}></i>
        </span>
      </div>

      <div
        ref={closeRef}
        className={mode === true ? 'sort__close ' : 'sort__close '}
      >
        {sortArray.map((sort, index) => (
          <span
            className={
              mode === true ? ' lightBg2 darkColor1' : ' darkBg2 lightColor1'
            }
            onClick={() => {
              sortMovies(sort.id)
              toggleMenu()
              setIndex(0)
            }}
            key={index}
          >
            {sort.icon} {sort.value}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Sort
