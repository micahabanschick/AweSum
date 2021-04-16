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
            {quiz.questions[0].num1} + {quiz.questions[0].num2} = {quiz.questions[0].sum}
        </Container>
    )
}

export default QuizOrbit