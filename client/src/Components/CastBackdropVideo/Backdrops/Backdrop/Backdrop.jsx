import React from 'react'

// Hooks
import { useShowHide } from '../../../../Hooks/useShowHide'

// APIs
import { APIs } from '../../../../APIs/APIs'

// Context
import { useMovieContext } from '../../../../Context/Context'

const Backdrop = ({ backdrop, index }) => {
  const { setBackdropIndex, viewerRef, innerViewerRef } = useMovieContext()
  const { showViewer } = useShowHide()

  const handleClick = () => {
    setBackdropIndex(index)
    showViewer(viewerRef, innerViewerRef)
  }

  return (
    <div className='backdrop' onClick={() => handleClick()}>
      <img
        src={
          backdrop.file_path !== null
            ? APIs.img_path + backdrop.file_path
            : APIs.no_image_url
        }
        alt={backdrop.file_path}
      />
    </div>
  )
}

export default Backdrop
