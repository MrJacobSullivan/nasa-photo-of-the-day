import React from 'react'

export default function HeaderText({ title, author, placeholder }) {
  if (placeholder) {
    return (
      <div class='header-text placeholder'>
        <h1>Title</h1>
        <h2>Author</h2>
      </div>
    )
  }

  return (
    <div class='header-text'>
      <h1>{title}</h1>
      <h2>{author}</h2>
    </div>
  )
}
