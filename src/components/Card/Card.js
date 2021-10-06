import React from 'react'
import MediaSection from './MediaSection'
import InformationSection from './InformationSection'

export default function Card({ loaded, data }) {
  if (!loaded) {
    return (
      <div className='card placeholder'>
        <MediaSection placeholder />
        <InformationSection placeholder />
      </div>
    )
  }

  return (
    <div className='card'>
      <MediaSection href={data.hdurl} src={data.url} />
      <InformationSection
        title={data.title}
        author={data.copyright}
        description={data.explanation}
        date={data.date}
      />
    </div>
  )
}
