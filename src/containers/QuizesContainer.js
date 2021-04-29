import React, { Component } from 'react'
import TabsComponent from '../components/basics/TabsComponent'
// import Container from 'react-bootstrap/Container'
// import Header from '../components/Header'
// import Main from '../components/Main'
// import Footer from '../components/Footer'

class QuizesContainer extends Component {
    render() {
        return (
            <div className="App-quizes-container">
                <TabsComponent/>
            </div>
        )
    }
}
                    
export default QuizesContainer