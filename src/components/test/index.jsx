import React from 'react'

require('./test.styl')

const Teste = (props) => {
  let { data } = props

  return (
    <div className='STYLUS'>
      <h2>{data.a}</h2>
    </div>
  )
}

export default Teste
