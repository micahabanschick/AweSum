import React from 'react'
import Quiz from './Quiz'
import Container from 'react-bootstrap/Container'

const QuizOrbit = (props) => {

    
    const quiz = new Quiz(6)
    console.log(quiz)

    const orbitStyles = {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '50%',
        minHeight: '50vh',
    }

    return (
        <Container style={orbitStyles}>
            <h2>
                {quiz.questions[0].correctNum1} + {quiz.questions[0].correctNum2} = {quiz.questions[0].correctSum}
            </h2>
            <ul>
                <li>Wrong Answer 1: {quiz.questions[0].wrongSum1}</li>
                <li>Wrong Answer 2: {quiz.questions[0].wrongSum2}</li>
                <li>Wrong Answer 3: {quiz.questions[0].wrongSum3}</li>
            </ul>
        </Container>
    )
}

export default QuizOrbit