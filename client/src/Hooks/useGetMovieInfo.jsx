import { useCallback } from 'react'

export const useGetMovieInfo = () => {
  // Get movie info
  const getMovieInfo = async (id, setData, setLoading, setError) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_KEY
      }&language=en-US`

      const res = await fetch(url)
      const data = await res.json()

      if (data) {
        setData(data)
        setLoading(false)
        setError('')
      }
    } catch (error) {
      setData('')
      setLoading(false)
      setError('No details found.')
    }
  }

  const getCast = async (id, setCast, setCastLoading, setCastError) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${
        import.meta.env.VITE_KEY
      }&language=en-US`

      setCastLoading(true)
      setCastError('')

      const res = await fetch(url)
      const data = await res.json()

      if (data) {
        setCast(data.cast)
        setCastLoading(false)
        setCastError('')
      }
    } catch (error) {
      setCast('')
      setCastLoading(false)
      setCastError('No cast found.')
    }
  }

  const getBackdrops = async (
    id,
    setBackdrops,
    setBackdropsLoading,
    setBackdropsError
  ) => {
    const url = `
https://api.themoviedb.org/3/movie/${id}/images?api_key=${
      import.meta.env.VITE_KEY
    }`

    setBackdropsLoading(true)
    setBackdropsError('')

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data) {
        setBackdropsLoading(false)
        setBackdrops(data.backdrops)
        setBackdropsError('')
      }
    } catch (error) {
      setBackdrops('')
      setBackdropsLoading(false)
      setBackdropsError('Backdrops not found.')
    }
  }

  // Get trailer
  const getTrailer = async (
    id,
    trailerUrl,
    setTrailerUrl,
    setPlayerLoading,
    setPlayerError
  ) => {
    if (trailerUrl && id) {
      setTrailerUrl('')
    } else {
      try {
        setPlayerLoading(true)
        setPlayerError('')

        let response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
            import.meta.env.VITE_KEY
          }&language=en-US`
        )
        let trailerUrl = await response.json()

        trailerUrl.results.map(result => {
          if (result.official === true) {
            setTrailerUrl(result.key)
          }
          return 0
        })

        //setTrailerUrl(trailerUrl.results[0].key)

        setPlayerLoading(false)
        setPlayerError('')
      } catch (error) {
        setPlayerLoading(false)
        setPlayerError('Failed to play video')
      }
    }
  }

  const getReviews = async (
    id,
    setReviews,
    setReviewsLoading,
    setReviewsError
  ) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${
      import.meta.env.VITE_KEY
    }&language=en-US&page=1`

    setReviewsLoading(true)
    setReviewsError(true)

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data) {
        setReviews(data.results)
        setReviewsLoading(false)
        setReviewsError(false)
      }
    } catch (err) {
      setReviewsLoading(false)
      setReviewsError(true)
    }
  }

  const getVideos = async (id, setVideos, setVideosLoading, setVideosError) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
      import.meta.env.VITE_KEY
    }&language=en-US`

    setVideosLoading(true)
    setVideosError(true)

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data) {
        setVideos(data.results)
        setVideosLoading(false)
        setVideosError(false)
      }
    } catch (err) {
      setVideosLoading(false)
      setVideosError(true)
    }
  }

  const getActorDetail = async (
    id,
    setActorDetail,
    setActorDetailLoading,
    setActorDetailError
  ) => {
    const url = `https://api.themoviedb.org/3/person/${id}?api_key=${
      import.meta.env.VITE_KEY
    }&language=en-US`
    setActorDetailLoading(true)
    setActorDetailError(true)

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data) {
        setActorDetail(data)
        setActorDetailLoading(false)
        setActorDetailError(false)
      }
    } catch (err) {
      setActorDetailLoading(false)
      setActorDetailError(true)
    }
  }

  return {
    getMovieInfo,
    getCast,
    getBackdrops,
    getTrailer,
    getReviews,
    getVideos,
    getActorDetail
  }
}
