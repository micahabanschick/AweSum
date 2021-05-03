import React from 'react'
// import React, { useState } from 'react'
import Quiz from './Quiz'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
// import Form from 'react-bootstrap/Form'
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // gridTemplateColumns: 'auto auto auto',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '50%',
        minHeight: '60vh',
        listStyle: 'none',
        // textAlign: "center",
    }

    gItem = {
        // display: 'flex',
        border: 'none',
        margin: 'auto',
        padding: '0',
        // textAlign: 'center',
        justifyContent: 'center',
    }

    gLeftItem = {
        display: 'flex',
        border: 'none',
        margin: 'auto',
        padding: '0',
        // textAlign: 'center',
        justifyContent: 'flex-start',
    }

    gRightItem = {
        display: 'flex',
        border: 'none',
        margin: 'auto',
        padding: '0',
        // textAlign: 'center',
        justifyContent: 'flex-end',
    }

    gOuterRow = {
        width: "30%",
        height: "30%",
        margin: "auto",
    }

    gInnerRow = {
        display: "flex",
        // justifyContent: "space-between",
        width: "100%",
        height: "40%",
        margin: "auto 0",
        // padding: "20",
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

    optionsArray = [
        this.quiz.questions[this.state.count].correctSum, 
        this.quiz.questions[this.state.count].wrongSum1, 
        this.quiz.questions[this.state.count].wrongSum2, 
        this.quiz.questions[this.state.count].wrongSum3
    ];

    shuffleList = () => {
        let listGroups = document.querySelectorAll('.list-group');
        console.log(listGroups)
        console.log(this.optionsArray)
        for (let i = this.optionsArray.length - 1; i >= 0; i--) {
            this.optionsArray.push(this.optionsArray.splice(Math.random() * i | 0, 1)[0]);
            console.log(this.optionsArray);
            console.log(i)
            // listGroups[i].children.forEach(item => item.classList.remove('active'))

            for (let j = 0; j < listGroups[i].children.length; j++) {
                listGroups[i].children[j].classList.remove('active')
            }
        }
        // listGroups.forEach(group => group.children.classList.remove('active'))
        // [1].classList.remove('active') 

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
                <div>
                <Container style={this.orbitStyles}>
                                       
                    <ListGroup horizontal="sm" className="my-2" key={0} style={this.gOuterRow}>
                        <ListGroup.Item style={this.gItem} action href="#disabled" onClick={this.handleChange} disabled></ListGroup.Item>
                        <ListGroup.Item style={this.gItem} className="" action href="#link1" onClick={this.handleChange}>
                            {this.optionsArray[0]}
                        </ListGroup.Item>
                        <ListGroup.Item style={this.gItem} className="" action href="#disabled" onClick={this.handleChange} disabled></ListGroup.Item>
                    </ListGroup>
                    
                    <ListGroup horizontal="sm" className="my-2" key={1} style={this.gInnerRow}>
                        <ListGroup.Item style={this.gLeftItem} className="" action href="#link2" onClick={this.handleChange}>
                            {this.optionsArray[1]}
                        </ListGroup.Item>
                        <ListGroup.Item style={this.gItem} className="" action href="#submit" onClick={this.handleChange} disabled>
                            <i>Question {this.state.count} of 5</i>
                            <br/>
                            <b>
                                {this.quiz.questions[this.state.count].correctNum1} + {this.quiz.questions[this.state.count].correctNum2}
                            </b>
                        </ListGroup.Item>
                        <ListGroup.Item style={this.gRightItem} className="" action href="#link3" onClick={this.handleChange}>
                            {this.optionsArray[2]}
                        </ListGroup.Item>
                    </ListGroup>
                    
                    <ListGroup horizontal="sm" className="my-2" key={2} style={this.gOuterRow}>
                        <ListGroup.Item style={this.gItem} className="" action href="#disabled" onClick={this.handleChange} disabled></ListGroup.Item>
                        <ListGroup.Item style={this.gItem} className="" action href="#link3" onClick={this.handleChange}>
                            {this.optionsArray[3]}
                        </ListGroup.Item>
                        <ListGroup.Item style={this.gItem} className="" action href="#disabled" onClick={this.handleChange} disabled></ListGroup.Item>
                    </ListGroup>
                   
                    </Container>
                    {
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                    }
                    {this.shuffleList}
                </div>
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