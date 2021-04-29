import React from 'react'
import QuizesContainer from '../../containers/QuizesContainer'

const Main = (props) => {

  console.log(props)

  return (
    <main className="App-main">
        <QuizesContainer/>
    </main>
  )
}

export default Main