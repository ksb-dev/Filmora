import React, { useState } from 'react'

// Context
import { useMovieContext } from '../../../Context/Context'

// APIs
import { APIs } from '../../../APIs/APIs'

// React Icons
import { GrStar } from 'react-icons/gr'
import { HiOutlineUserCircle } from 'react-icons/hi'

const Review = ({ review }) => {
  const [show, setShow] = useState(false)
  const { mode } = useMovieContext()
  const { avatar_path, name, username, rating } = review.author_details
  const { content } = review

  return (
    <div
      className={
        'review__container ' + (mode === true ? 'darkColor1' : 'lightColor1')
      }
    >
      <div className='avatar-name'>
        {avatar_path !== null && !avatar_path.startsWith('/https') ? (
          <img src={APIs.img_path + avatar_path} alt='User' />
        ) : (
          <span className='user'>
            <HiOutlineUserCircle style={{ height: '100%', width: '100%' }} />
          </span>
        )}
        <span className='name'>{name ? name : username}</span>
      </div>

      <div className='rating-review'>
        {rating ? (
          <span className='rating'>
            <GrStar size={'20px'} style={{ color: 'gold' }} />
            {rating}
          </span>
        ) : (
          <></>
        )}

        {content ? (
          content.length > 95 ? (
            <>
              {!show ? (
                <>
                  <span className='content'>{content.substring(0, 100)}</span>
                  <span
                    style={{
                      color: 'var(--blue)',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                    onClick={() => setShow(!show)}
                  >
                    Read more
                  </span>
                </>
              ) : (
                <>
                  <span className='content'>{content}</span>
                  <span
                    style={{
                      color: 'var(--blue)',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                    onClick={() => setShow(!show)}
                  >
                    Hide more
                  </span>
                </>
              )}
            </>
          ) : (
            <span className='content'>{content}</span>
          )
        ) : (
          <></>
        )}

        {/* {content ? (
          <p>
            {show ? (
              <>
                <span className='content'>{content}</span>
                <span
                  style={{
                    color: 'var(--blue)',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                  onClick={() => setShow(!show)}
                >
                  Hide more
                </span>
              </>
            ) : (
              <>
                {content.substring > 100 ? (
                  <>
                    <span className='content'>{content.substring(0, 100)}</span>
                    <span
                      style={{
                        color: 'var(--blue)',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                      onClick={() => setShow(!show)}
                    >
                      Read more
                    </span>
                  </>
                ) : (
                  <span className='content'>{content}</span>
                )}
              </>
            )}
          </p>
        ) : (
          <></>
        )} */}
      </div>
    </div>
  )
}

export default Review
