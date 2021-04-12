// import React, { Component } from 'react'
import Question from './Question'
// import {Redirect} from 'react-router-dom'
// import Form from 'react-bootstrap/Form'
// import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button'

class Quiz {

    constructor(numOfQuestions) {
        this.questions = new Array(numOfQuestions)
        for (let i = 0; i < numOfQuestions; ++i) {
            this.questions[i] = new Question()
        }
    }

}

export default Quiz