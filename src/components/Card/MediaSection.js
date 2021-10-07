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
    return <ReactPlayer url={src} width='100%' height='100%' playing />
  }

  return (
    <section className='media'>
      <div>
        <a href={href} target='_blank' rel='noopener noreferrer'>
          <img src={src} alt='example alt' />
        </a>
      </div>
    </section>
  )
}
