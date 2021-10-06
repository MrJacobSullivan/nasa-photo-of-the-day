import React from 'react'
import HeaderText from './HeaderText'
import DescriptionText from './DescriptionText'
import DateText from './DateText'

export default function InformationSection({ title, author, description, date, placeholder }) {
  if (placeholder) {
    return (
      <section>
        <HeaderText placeholder />
        <DescriptionText placeholder />

        <DateText placeholder />
      </section>
    )
  }

  return (
    <section>
      <HeaderText title={title} author={author} />
      <DescriptionText description={description} />

      <DateText date={date} />
    </section>
  )
}
