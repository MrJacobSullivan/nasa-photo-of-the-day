import React from 'react'
import { H1Text, H2Text } from '../Styled'

export default function HeaderText({ title, author, placeholder }) {
  if (placeholder) {
    return (
      <div className='header-text placeholder'>
        <h1>Title</h1>
        <h2>Author</h2>
      </div>
    )
  }

  return (
    <div className='header-text'>
      <H1Text>{title}</H1Text>
      <H2Text>{author}</H2Text>
    </div>
  )
}
