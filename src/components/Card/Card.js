import React from 'react'
import { CardContainer } from '../Styled'
import MediaSection from './MediaSection'
import InformationSection from './InformationSection'

export default function Card({ loaded, data, children }) {
  if (!loaded) {
    return (
      <CardContainer>
        <MediaSection placeholder />
        <InformationSection placeholder />
      </CardContainer>
    )
  }

  return (
    <CardContainer>
      <MediaSection href={data.hdurl || null} src={data.url} mediaType={data.media_type} />
      <InformationSection
        title={data.title}
        author={data.copyright}
        description={data.explanation}
        date={data.date}
      >
        {children}
      </InformationSection>
    </CardContainer>
  )
}
