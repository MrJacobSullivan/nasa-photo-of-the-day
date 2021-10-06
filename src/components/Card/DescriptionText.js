import React from 'react'

export default function DescriptionText({ description, placeholder }) {
  if (placeholder) {
    return (
      <div>
        <p>Description</p>
      </div>
    )
  }

  return (
    <div>
      <p>{description}</p>
    </div>
  )
}
