import React from 'react'

export default function MediaSection({ href, src, placeholder }) {
  if (placeholder) {
    return (
      <section>
        <p>img goes here</p>
      </section>
    )
  }

  return (
    <section>
      <a href={href}>
        <img src={src} alt='example alt' />
      </a>
    </section>
  )
}
