import React from 'react'

// Data
import { genreArray } from '../../../Data/GenreData'

// Redux
import { useSelector } from 'react-redux'

// Hooks
import { useSortFilter } from '../../../Hooks/useSortFilter'
import { useShowHide } from '../../../Hooks/useShowHide'

// Context
import { useMovieContext } from '../../../Context/Context'

// Components
import Loading from '../../../Sub-Components/Loading/Loading'

const Genre = () => {
  const { mode, backCoverRef, menuRef, setIndex } = useMovieContext()
  const { hideMenu } = useShowHide()
  const { filterMovies } = useSortFilter()
  const filterState = useSelector(state => state.movies.filterState)
  const loading = useSelector(state => state.movies.loading)
  const movies = useSelector(state => state.movies.movies)

  const handleFilter = genre => {
    filterMovies(genre.id, genre.genre, genre.url)
    hideMenu(backCoverRef, menuRef)
    setIndex(0)
  }

  return (
    <div className='genre'>
      {loading && (
        <>
          <p className='genre--title'>Filter by Genre</p>
          <span className='genre--loading'>
            <Loading />
          </span>
        </>
      )}

      {!loading && movies && movies.length > 0 && (
        <>
          <p
            className={
              'genre--title ' + (mode === true ? 'lightBg1' : 'darkBg1')
            }
          >
            Filter by Genre
          </p>
          <div
            className={
              'genre__options ' +
              (mode === true ? 'scroll lightBg1' : 'scroll darkBg1')
            }
          >
            {genreArray.map((genre, index) => {
              return filterState === genre.genre ? (
                <p
                  key={index}
                  className={
                    'genre__options--option ' +
                    (mode === true
                      ? 'lightBg1 darkColor1 lightActive'
                      : 'darkBg1 lightColor1 darkActive')
                  }
                  onClick={() => {
                    handleFilter(genre)
                  }}
                >
                  {genre.icon} <span>{genre.genre}</span>
                </p>
              ) : (
                <p
                  key={index}
                  className={
                    'genre__options--option ' +
                    (mode === true
                      ? 'lightBg1 darkColor1'
                      : 'darkBg1 lightColor1')
                  }
                  onClick={() => {
                    handleFilter(genre)
                  }}
                >
                  {genre.icon} <span>{genre.genre}</span>
                </p>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default Genre
