import React from 'react'

export interface indexProps {
  [key: string]: any,
}

export const IndexPage = (props: indexProps) => {
  const [data, setData] = React.useState({})

  React.useEffect(() => {
    fetch('/api?title=star&year=2018')
      .then((r)=> r.json())
      .then(setData)
  }, [])

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default IndexPage
