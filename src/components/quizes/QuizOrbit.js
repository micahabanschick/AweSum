import React from 'react'
// import React, { useState } from 'react'
import Quiz from './Quiz'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class QuizOrbit extends React.Component {
    
    state = {
        count: 1,
        correctAnswer: '',
        currentAnswer: '',
        numOfCorrect: 0,
        numOfIncorrect: 0,
        isQuestionOpen: false
    }
    
    quiz = new Quiz(6)
    
    
    orbitStyles = {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '50%',
        minHeight: '50vh',
        listStyle: 'none'
    }
    
    // formStyles = {
    //     backgroundColor: 'white',
    //     color: 'black',
    //     borderRadius: '3%',
    //     padding: '1em',
    //     minHeight: '50vh',
    //     listStyle: 'none'
    // }

    // get formStyles() {
    //     return this.formStyles 
    // }

    // set formStyles(styles) {
    //     this.formStyles = styles
    // }
    
    questionStyles = {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '3%',
        padding: '2em',
        // minHeight: '50vh',
        listStyle: 'none'
    }
    
    alertClicked = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }
    
    handleChange = (event) => {
        event.preventDefault()
        this.setState(
            (prevState) => {
                console.log(this.state)
                return {
                    currentAnswer: parseInt(event.target.innerText),
                    correctAnswer: this.quiz.questions[this.state.count].correctSum
                }
            },
            () => console.log('Login: ' + JSON.stringify(this.state))
        )
    }
        
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.props)
        // if (this.state.currentAnswer === this.state.correctAnswer) {
        //     let container = document.querySelector('.container');
        //     container.setAttribute('style', 'color: green;')
        //     this.formStyles.backgroundColor = 'green'
        // }
        this.setState(
            (prevState) => {
                if (this.state.currentAnswer === this.state.correctAnswer) {
                    console.log(this.state)
                    return {count: prevState.count + 1, numOfCorrect: prevState.numOfCorrect + 1}
                } else {
                    console.log(this.state)
                    return {count: prevState.count + 1, numOfIncorrect: prevState.numOfIncorrect + 1}
                }
            },
            () => console.log('Login: ' + JSON.stringify(this.state))
        )
        this.shuffleList()
        // alert('You clicked the third ListGroupItem');
    }

    shuffleList = () => {
        let listGroup = document.querySelector('.list-group');
        for (let i = listGroup.children.length; i >= 0; i--) {
            listGroup.appendChild(listGroup.children[Math.random() * i | 0]);
            console.log(listGroup.children[1]);
            listGroup.children[1].classList.remove('active') 
        }
    }

    showQuestion() {
        this.setState({isQuestionOpen: true})
    }

    render() {
        console.log(this.quiz)
        if (this.state.count < this.quiz.questions.length) {
            return (
                <Container style={this.formStyles}>
                    <Form onSubmit={this.handleSubmit}>
                        <h3>question {this.state.count} of 5</h3>
                        <h2 style={this.questionStyles}>
                            What is the sum of {this.quiz.questions[this.state.count].correctNum1} + {this.quiz.questions[this.state.count].correctNum2}
                        </h2>
                        <br/><br/>
                        <ListGroup>
                            <ListGroup.Item action href="#link1" onClick={this.handleChange}>
                                {this.quiz.questions[this.state.count].wrongSum1}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2" onClick={this.handleChange}>
                                {this.quiz.questions[this.state.count].wrongSum2}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link3" onClick={this.handleChange}>
                                {this.quiz.questions[this.state.count].wrongSum3}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#" onClick={this.handleChange}>
                                {this.quiz.questions[this.state.count].correctSum}
                            </ListGroup.Item>
                        </ListGroup>
                        <br/>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                    {this.shuffleList}
                </Container>
            )
        } else {
            return (
                <div>
                    <h1>Congradulations for completing the quiz!</h1>
                    <h3>You scored {this.state.numOfCorrect} out of {this.state.count} correct.</h3>
                </div>
            )
        }
    }
}    
            
export default QuizOrbit