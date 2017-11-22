import React from 'react'
import FunctionComponent from './components/FunctionComponent'
import Data from './data/info'

export default class App extends React.Component {
  render () {
    return (
      <div className='hello-world'>
        <h1>Hello World!!!!!</h1>
        <FunctionComponent data={Data} />
      </div>
    )
  }
}
