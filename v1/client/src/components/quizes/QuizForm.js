import React from 'react'
import Quiz from './Quiz'
import Container from 'react-bootstrap/Container'

const QuizForm = (props) => {

    const quiz = new Quiz(6)
    console.log(quiz)

    const formStyles = {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '3%',
        minHeight: '50vh',
    }

    return (
        <Container style={formStyles}>
            {quiz.questions[0].num1} + {quiz.questions[0].num2} = {quiz.questions[0].sum}
        </Container>
    )
}

export default QuizForm