import React from 'react'

// Context
import { useMovieContext } from '../../Context/Context'

// Components
import Review from './Review/Review'

// Sub-Components
import Loading from '../../Sub-Components/Loading/Loading'
import Error from '../../Sub-Components/Error/Error'

const Reviews = ({ reviews, reviewsLoading, reviewsError }) => {
  const { mode } = useMovieContext()

  //console.log(reviewsLoading, reviewsError)

  //reviewsLoading = true
  //reviewsError = true

  // if (reviewsLoading) {
  //   return (
  //     <div className='review__loading'>
  //       <Loading />
  //     </div>
  //   )
  // }

  // if (reviewsError) {
  //   return (
  //     <div className='review__err'>
  //       <Error msg={'No reviews found.'} />
  //     </div>
  //   )
  // }

  // if (reviews.length === 0) {
  //   return (
  //     <div className='review__err'>
  //       <Error msg={'No reviews found.'} />
  //     </div>
  //   )
  // }

  return (
    <div
      className={
        'reviews__container ' + (mode === true ? 'lightBg1' : 'darkBg1')
      }
    >
      <div
        className={
          'reviews__container--title ' +
          (mode === true ? 'darkColor1' : 'lightColor1')
        }
      >
        <span>Reviews</span>
      </div>
      {reviewsLoading && (
        <span className='e'>
          <Loading />
        </span>
      )}
      {reviewsLoading === false && reviewsError && (
        <span className='e'>
          <Error msg={'No reviews found.'} />
        </span>
      )}
      {reviewsLoading === false &&
        reviewsError === false &&
        reviews.length === 0 && (
          <span className='e'>
            <Error msg={'No reviews found.'} />
          </span>
        )}
      {reviewsLoading === false &&
        reviewsError === false &&
        reviews.length > 0 &&
        reviews.map(review => <Review key={review.id} review={review} />)}
    </div>
  )
}

export default Reviews
