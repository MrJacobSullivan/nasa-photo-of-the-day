import React from 'react'
import { PText } from '../Styled'

export default function DescriptionText({ description, placeholder }) {
  if (placeholder) {
    return (
      <div className='description-text placeholder'>
        <p>Description</p>
      </div>
    )
  }

  return (
    <PText>
      <p>{description}</p>
    </PText>
  )
}
