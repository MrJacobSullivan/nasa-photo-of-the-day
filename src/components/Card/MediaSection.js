import React from 'react'
import ReactPlayer from 'react-player'
import { MediaContainer } from '../Styled'

export default function MediaSection({ href, src, mediaType, placeholder }) {
  if (placeholder) {
    return (
      <MediaContainer placeholder>
        <p>img goes here</p>
      </MediaContainer>
    )
  }

  if (mediaType === 'video') {
    return <ReactPlayer url={src} width='100%' height='calc(95vh * 0.6)' playing />
  }

  return (
    <MediaContainer>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <img src={src} alt='example alt' />
      </a>
    </MediaContainer>
  )
}
