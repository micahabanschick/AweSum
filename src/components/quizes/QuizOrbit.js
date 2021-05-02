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
        // display: 'grid',
        // gridTemplateColumns: 'auto auto auto',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '50%',
        minHeight: '50vh',
        listStyle: 'none'
    }

    gItems = {
        // display: 'grid',
        border: 'none',
    }

    // get formStyles() {
    //     return this.formStyles 
    // }

    // set formStyles(styles) {
    //     this.formStyles = styles
    // }
    
    // questionStyles = {
    //     backgroundColor: 'white',
    //     color: 'black',
    //     borderRadius: '3%',
    //     padding: '2em',
    //     // minHeight: '50vh',
    //     listStyle: 'none'
    // }
    
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
        let listGroup = document.querySelectorAll('.list-group');
        for (let i = listGroup.children.length; i >= 0; i--) {
            listGroup.appendChild(listGroup.children[Math.random() * i | 0]);
            console.log(listGroup.children[1]);
            listGroup.children[1].classList.remove('active') 
        }

        // let listGroups = document.querySelectorAll('.list-group');
        // console.log(listGroups);
        // // colors.push(colors.splice(colors.indexOf('blue'), 1).pop());
        // for (let i = listGroups.length; i >= 0; i--) {
        //     let randomList = listGroups[Math.random() * i | 0];
        //     listGroups.push(listGroups.splice(listGroups.indexOf(randomList), 1).pop());
        //     console.log(listGroups[1]);
        //     listGroups[1].classList.remove('active') 
        // }
    }

    showQuestion() {
        this.setState({isQuestionOpen: true})
    }

    render() {
        console.log(this.quiz)
        if (this.state.count < this.quiz.questions.length) {
            return (
                <Container style={this.orbitStyles}>
                    <Form onSubmit={this.handleSubmit}>                        
                        <ListGroup horizontal="sm" className="my-2" key={0} style={this.gItems}>
                            <ListGroup.Item className="border-0" action href="#disabled" onClick={this.handleChange} disabled></ListGroup.Item>
                            <ListGroup.Item className="border-0" action href="#link1" onClick={this.handleChange}>
                                {this.quiz.questions[this.state.count].wrongSum1}
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0" action href="#disabled" onClick={this.handleChange} disabled></ListGroup.Item>
                        </ListGroup>
                        <br/><br/>
                        <ListGroup horizontal="sm" className="my-2" key={1}>
                            <ListGroup.Item className="border-0" action href="#link2" onClick={this.handleChange}>
                                {this.quiz.questions[this.state.count].wrongSum2}
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0" action href="#submit" onClick={this.handleChange} disabled>
                                <i>Question {this.state.count} of 5</i>
                                <br/>
                                <b>
                                    {this.quiz.questions[this.state.count].correctNum1} + {this.quiz.questions[this.state.count].correctNum2}
                                </b>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0" action href="#link3" onClick={this.handleChange}>
                                {this.quiz.questions[this.state.count].wrongSum3}
                            </ListGroup.Item>
                        </ListGroup>
                        <br/><br/>
                        <ListGroup horizontal="sm" className="my-2" key={2}>
                            <ListGroup.Item className="border-0" action href="#disabled" onClick={this.handleChange} disabled></ListGroup.Item>
                            <ListGroup.Item className="border-0" action href="#link3" onClick={this.handleChange}>
                                {this.quiz.questions[this.state.count].correctSum}
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0" action href="#disabled" onClick={this.handleChange} disabled></ListGroup.Item>
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