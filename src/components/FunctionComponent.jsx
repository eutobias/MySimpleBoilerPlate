import React from 'react'
import Teste from './test'

const FunctionComponent = ({ data }) => {
  return (
    <div>
      <h2>{data.a}</h2>
      <Teste data={data} />
    </div>
  )
}

export default FunctionComponent
