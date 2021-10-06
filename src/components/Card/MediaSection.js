import React from 'react'

export default function Media({ href, url }) {
  return (
    <div>
      <a href={href}>
        <img src={url} alt='example alt' />
      </a>
    </div>
  )
}
