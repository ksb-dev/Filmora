import React, { useState, useEffect, useMemo } from 'react'
import moment from 'moment'

// Hooks
import { useWatchlistOperations } from '../../Hooks/useWatchlistOperations'
import { useGetClassByVote } from '../../Hooks/useGetClassByVote'
import { useShowHide } from '../../Hooks/useShowHide'
import { useGetMovieInfo } from '../../Hooks/useGetMovieInfo'

// Data
import { genreArray } from '../../Data/GenreData'

// Redux
import { useSelector } from 'react-redux'

// Context
import { useMovieContext } from '../../Context/Context'

// APIs
import { APIs } from '../../APIs/APIs'

// Recat Icons
import { IoAddOutline, IoCheckmark } from 'react-icons/io5'
import { BsCalendar2Date } from 'react-icons/bs'
import { MdOutlineAccessTime } from 'react-icons/md'
import { TbMessageLanguage } from 'react-icons/tb'
import { FiPlay } from 'react-icons/fi'

// Sub-Components
import Loading from '../../Sub-Components/Loading/Loading'

// Circular progress bar
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const MovieDetail = ({
  data,
  loading,
  error,
  id,
  trailerUrl,
  setTrailerUrl,
  playerRef,
  playerInnerRef,
  setPlayerLoading,
  setPlayerError
}) => {
  const { mode, loginFormRef, loginRef } = useMovieContext()
  const { addWatchlist, deleteWatchlist } = useWatchlistOperations()
  const { getTrailer } = useGetMovieInfo()
  const { getClassBg } = useGetClassByVote()
  // const { id } = useParams()

  const [genres, setGenres] = useState(new Set())
  const [genre_ids, setGenre_ids] = useState(new Set())

  const [bookmark, setBookmark] = useState(false)
  const watchlist = useSelector(state => state.watchlist.watchlist)

  const { showForm, showPlayer } = useShowHide()

  // To stote genre_ids
  useEffect(() => {
    if (data && data.genres) {
      for (let i = 0; i < data.genres.length; i++) {
        setGenre_ids(prevId => new Set([...prevId, data.genres[i].id]))
      }

      for (let i = 0; i < data.genres.length; i++) {
        for (let j = 0; j < genreArray.length; j++) {
          if (data.genres[i].name === genreArray[j].genre) {
            setGenres(prevGenre => new Set([...prevGenre, genreArray[j]]))
          }
        }
      }
    }
  }, [data])

  // To find out watchlist
  useEffect(() => {
    if (watchlist && watchlist.length > 0) {
      for (let i = 0; i < (watchlist && watchlist.length); i++) {
        if (watchlist[i].id === Number(id)) {
          setBookmark(true)
        }
      }
    }

    if (watchlist && watchlist.length === 0) setBookmark(false)
  }, [watchlist, id])

  const handlePlayerClick = () => {
    showPlayer(playerRef, playerInnerRef)
    getTrailer(id, trailerUrl, setTrailerUrl, setPlayerLoading, setPlayerError)
  }

  if (loading) {
    return (
      <div className='loading'>
        <Loading />
      </div>
    )
  }

  if (error) {
    return (
      <div className='error'>
        <Error msg={'Failed to fetch movie information'} />
      </div>
    )
  }

  return (
    <div
      className={
        'detail ' +
        (mode === true ? 'lightBg1 darkColor1' : 'darkBg1 lightColor1')
      }
      style={{
        backgroundImage: `url(${
          data && data.backdrop_path === null
            ? APIs.no_image_url
            : APIs.img_path + data.backdrop_path
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
        //borderRadius: '10px'
      }}
    >
      {/* CONTAINER */}
      {data && (
        <div
          className={
            'detail__container ' +
            (mode === true
              ? 'lightGradient darkColor1'
              : 'darkGradient lightColor1')
          }
        >
          {/* CONTAINER ONE */}
          <div className={'detail__container__one '}>
            <div className='detail__container__one__image-vote'>
              <img
                src={
                  data.poster_path === null
                    ? APIs.no_image_url
                    : APIs.img_path + data.poster_path
                }
                alt=''
              />

              <div className={'vote ' + getClassBg(data.vote_average)}>
                <CircularProgressbar
                  value={data.vote_average * 10}
                  strokeWidth={5}
                  styles={buildStyles({
                    pathColor: '#fff'
                  })}
                />
                <span>{Number(String(data.vote_average).substring(0, 3))}</span>
              </div>
            </div>

            <div className={'detail__container__one__other '}>
              {/* Title, Tagline div*/}
              <div className='title-tagline'>
                <h2 className='title'>{data.title ? data.title : '----'}</h2>

                <h4 className={'tagline '}>
                  {data.tagline ? data.tagline : ''}
                </h4>
              </div>

              {/*  Add / Delete-Button, IMDb Button, Trailer-Button div */}
              <div className='addBtn-trailerBtn'>
                {/* Add-Button */}
                {sessionStorage.getItem('name') !== null && bookmark === false && (
                  <p
                    className={'addBtn '}
                    onClick={() =>
                      addWatchlist(
                        data.id,
                        data.title,
                        data.poster_path,
                        data.backdrop_path,
                        data.release_date,
                        data.vote_average,
                        setBookmark,
                        Array.from(genre_ids),
                        data.overview
                      )
                    }
                  >
                    <span className='addBtn--icon'>
                      <IoAddOutline
                        size={'20px'}
                        style={{ margin: '1px 2px 0 0' }}
                      />{' '}
                      Add
                    </span>
                  </p>
                )}

                {/* Delete Button */}
                {sessionStorage.getItem('name') !== null && bookmark === true && (
                  <p
                    className={'addBtn '}
                    style={{ background: 'var(--blue)', color: '#fff' }}
                    onClick={() => deleteWatchlist(id, setBookmark)}
                  >
                    <span
                      className='addBtn--icon'
                      style={{ background: 'var(--blue)', color: '#fff' }}
                    >
                      <IoCheckmark
                        size={'20px'}
                        style={{ margin: '1px 2px 0 0' }}
                      />
                      Added
                    </span>
                  </p>
                )}

                {/* Add-Button (without user) */}
                {sessionStorage.getItem('name') === null && (
                  <p
                    className={'addBtn '}
                    onClick={() => showForm(loginRef, loginFormRef)}
                  >
                    <span className='addBtn--icon'>
                      <IoAddOutline
                        size={'20px'}
                        style={{ margin: '1px 2px 0 0' }}
                      />{' '}
                      Add
                    </span>
                  </p>
                )}

                <p className='imdbBtn'>
                  <a
                    href={`https://www.imdb.com/title/${data?.imdb_id}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    IMDb
                  </a>
                </p>

                <div className='trailerBtn' onClick={() => handlePlayerClick()}>
                  <FiPlay size={'20px'} style={{ marginRight: '5px' }} />{' '}
                  Trailer
                </div>

                <div className='homepage'>Homepage</div>
              </div>

              {/* Genres */}
              <div className='genres'>
                <div className='genres__inner'>
                  {genres &&
                    Array.from(genres).map(genre => (
                      <span
                        key={genre.genre}
                        className={
                          'item ' +
                          (mode === true ? 'darkShadow' : 'lightShadow')
                        }
                      >
                        {genre.icon1} {genre.genre}
                      </span>
                    ))}
                </div>
              </div>

              {/* Overview */}
              <div className={'overview '}>
                {data.overview && (
                  <>
                    <h3>Overview</h3>
                    <p>{data.overview}</p>
                  </>
                )}
              </div>

              {/* Date, Runtime, Language */}
              <div className='date-runtime-language'>
                {data.release_date ? (
                  <span>
                    <BsCalendar2Date
                      size={'20px'}
                      style={{ marginRight: '5px' }}
                    />
                    {moment(data.release_date).format('Do MMM, YYYY')}
                  </span>
                ) : (
                  '-----'
                )}

                <span className='gap'>-</span>

                {data.runtime ? (
                  <span>
                    <MdOutlineAccessTime
                      size={'20px'}
                      style={{ marginRight: '5px' }}
                    />
                    <>
                      {`${Math.floor(data.runtime / 60)}` > 0 &&
                        `${Math.floor(data.runtime / 60)}h`}
                      {` ${data.runtime % 60}`}m
                    </>
                  </span>
                ) : (
                  '-----'
                )}

                <span className='gap'>-</span>

                {data.spoken_languages ? (
                  <span>
                    <TbMessageLanguage
                      size={'20px'}
                      style={{ marginRight: '5px' }}
                    />{' '}
                    {data.spoken_languages[0] &&
                      data.spoken_languages[0].english_name}
                  </span>
                ) : (
                  '----'
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <p className='line '>
        <span
          className={mode === true ? 'darkBorderBottom' : 'lightBorderBottom'}
        ></span>
      </p>
    </div>
  )
}

export default MovieDetail
