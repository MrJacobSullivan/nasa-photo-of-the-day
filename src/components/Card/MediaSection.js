import React from 'react'
import ReactPlayer from 'react-player'

export default function MediaSection({ href, src, mediaType, placeholder }) {
  if (placeholder) {
    return (
      <section className='media placeholder'>
        <p>img goes here</p>
      </section>
    )
  }

  if (mediaType === 'video') {
    return <ReactPlayer url={src} width='100%' height='calc(95vh * 0.6)' playing />
  }

  return (
    <section className='media'>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <img src={src} alt='example alt' />
      </a>
    </section>
  )
}
