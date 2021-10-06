import React, { useState, useEffect } from 'react'
import MediaSection from './MediaSection'
import InformationSection from './InformationSection'

export default function Card({ loaded, data }) {
  if (!loaded) {
    return (
      <section>
        <MediaSection />
        <InformationSection title='hello world' />
      </section>
    )
  }

  return (
    <section>
      <MediaSection loaded={loaded} href={data.hdurl} src={data.url} />
      <InformationSection
        loaded={loaded}
        title={data.title}
        author={data.copyright}
        description={data.explanation}
      />
    </section>
  )
}
