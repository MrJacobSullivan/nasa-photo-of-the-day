import React from 'react'

export default function MediaSection({ href, src, placeholder }) {
  if (placeholder) {
    return (
      <section class='media placeholder'>
        <p>img goes here</p>
      </section>
    )
  }

  return (
    <section class='media'>
      <a href={href}>
        <img src={src} alt='example alt' />
      </a>
    </section>
  )
}
