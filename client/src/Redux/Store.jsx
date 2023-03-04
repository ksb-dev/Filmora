import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './Services/movies/getMovies'
import watchlistReducer from './Services/movies/setWatchlist'

export default configureStore({
  reducer: {
    movies: movieReducer,
    watchlist: watchlistReducer
  }
})
