import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// APIs
import { APIs } from '../../../APIs/APIs'

const initialState = {
  watchlist: [],
  loading: false,
  error: {
    msg: '',
    isError: false
  },
  user: ''
}

export const setWatchlist = createAsyncThunk(
  'watchlists/getwatchlists',
  async () => {
    const savedToken = sessionStorage.getItem('token')
    let response = ''

    if (savedToken) {
      response = await axios.get(APIs.get_movies_url, {
        headers: {
          Authorization: `Bearer ${savedToken}`
        }
      })
    }
    return response.data.movies
  }
)

export const modeSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setWatchlist.pending, state => {
        state.loading = true
        state.error.msg = ''
        state.error.isError = false
      })
      .addCase(setWatchlist.fulfilled, (state, action) => {
        state.loading = false
        state.error.msg = ''
        state.error.isError = false
        state.watchlist = action.payload

        state.user = sessionStorage.getItem('name')
      })
      .addCase(setWatchlist.rejected, state => {
        state.watchlist = []
        state.loading = false
        state.error.isError = true
        state.error.msg = 'Failed to fetch Wishlists'

        state.user = ''
      })
  }
})

export default modeSlice.reducer
//export const { } = modeSlice.actions
