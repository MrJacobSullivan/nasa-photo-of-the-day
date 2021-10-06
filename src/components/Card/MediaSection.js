import React from 'react'

export default function MediaSection({ loaded, href, src }) {
  if (!loaded) {
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
