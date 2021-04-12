import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

class PagesContainer extends Component {
    render() {
        return (
            <Container className="App-container">
                <Header className="App-header"/>
                <Main className="App-main"/>
                <Footer className="App-footer"/>
            </Container>
        )
    }
}

export default PagesContainer