import React from 'react'

export default function MediaSection({ href, src, placeholder }) {
  if (placeholder) {
    return (
      <section className='media placeholder'>
        <p>img goes here</p>
      </section>
    )
  }

  return (
    <section className='media'>
      <div>
        <a href={href}>
          <img src={src} alt='example alt' />
        </a>
      </div>
    </section>
  )
}
