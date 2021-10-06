import React from 'react'
import Title from './Title'
import Description from './Description'

export default function InformationSection({ loaded, title, author, description }) {
  if (!loaded) {
    return (
      <section>
        <Title title={title} author={author} />
        <Description description={description} />
      </section>
    )
  }

  return (
    <section>
      <Title title={title} author={author} />
      <Description description={description} />
    </section>
  )
}
