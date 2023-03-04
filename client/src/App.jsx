import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Context
import { useMovieContext } from './Context/Context'

// Pages
import Home from './Pages/Home/Home'
import Upcoming from './Pages/Upcoming/Upcoming.jsx'
import TopRated from './Pages/TopRated/TopRated'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Watchlist from './Pages/Watchlist/Watchlist.jsx'
import MovieInfo from './Pages/MovieInfo/MovieInfo'
import ActorDetail from './Pages/ActorDetail/ActorDetail'
import SearchPage from './Pages/SearchPage/SearchPage'

const App = () => {
  const { mode } = useMovieContext()

  return (
    <div className={'app ' + (mode === true ? 'lightBg1' : 'darkBg1')}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/upcoming' element={<Upcoming />} />
          <Route path='/top' element={<TopRated />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/movie/:id' element={<MovieInfo />} />
          <Route path='/actor/:id' element={<ActorDetail />} />
          {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
