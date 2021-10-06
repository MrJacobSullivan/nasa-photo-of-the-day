import React, { useState, useEffect } from 'react'
import Media from './MediaSection'
import InformationSection from './InformationSection'

export default function Card({ data }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(() => true)
  }, [data])

  if (!loaded) {
    return <p>loading...</p>
  }

  return (
    <section>
      {/* <Media href={data.hdhref} src={data.href} /> */}
      <InformationSection
        title={data.title}
        author={data.copyright}
        description={data.explanation}
      />
    </section>
  )
}
