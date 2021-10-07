import React from 'react'
import { InformationContainer } from '../Styled'
import HeaderText from './HeaderText'
import DescriptionText from './DescriptionText'
import DateText from './DateText'

export default function InformationSection({
  title,
  author,
  description,
  date,
  placeholder,
  children,
}) {
  if (placeholder) {
    return (
      <InformationContainer placeholder>
        <HeaderText placeholder />
        <DescriptionText placeholder />

        <DateText placeholder />
      </InformationContainer>
    )
  }

  return (
    <InformationContainer>
      <HeaderText title={title} author={author} />
      <DescriptionText description={description} />

      <div className='date-container'>{children}</div>
    </InformationContainer>
  )
}
