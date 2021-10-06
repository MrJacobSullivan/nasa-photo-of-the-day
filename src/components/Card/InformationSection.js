import React from 'react'
import Title from './Title'
import Description from './Description'

export default function InformationSection({ title, author, description }) {
  return (
    <aside>
      <Title title={title} author={author} />
      <Description description={description} />
    </aside>
  )
}
