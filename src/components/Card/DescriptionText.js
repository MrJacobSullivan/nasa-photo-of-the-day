import React from 'react'

export default function DescriptionText({ description, placeholder }) {
  if (placeholder) {
    return (
      <div className='description-text placeholder'>
        <p>Description</p>
      </div>
    )
  }

  return (
    <div className='description-text'>
      <p>{description}</p>
    </div>
  )
}
