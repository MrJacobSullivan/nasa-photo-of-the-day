import React from 'react'
import MediaSection from './MediaSection'
import InformationSection from './InformationSection'

export default function Card({ loaded, data }) {
  if (!loaded) {
    return (
      <section>
        <MediaSection placeholder />
        <InformationSection placeholder />
      </section>
    )
  }

  return (
    <section>
      <MediaSection href={data.hdurl} src={data.url} />
      <InformationSection
        title={data.title}
        author={data.copyright}
        description={data.explanation}
        date={data.date}
      />
    </section>
  )
}
