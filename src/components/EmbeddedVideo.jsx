import React from 'react'
import PropTypes from 'prop-types'

/** The video in the iframe is to be shown or hidden by clicking on the heading text */

const EmbeddedVideo = ({ headingText, video }) => {
  return (
    <>
      <h3>{headingText}</h3>
      <iframe
        title={video.title}
        src={video.src}
        height="300px"
        width="500px"
      />
    </>
  )
}

EmbeddedVideo.propTypes = {
  headingText: PropTypes.string.isRequired,
  video: PropTypes.shape().isRequired
}

export default EmbeddedVideo
