import React, { Component } from 'react'
// import Container from 'react-bootstrap/Container'
import Header from '../components/basics/Header'
import Main from '../components/basics/Main'
import Footer from '../components/basics/Footer'

class PagesContainer extends Component {
    render() {
        return (
            <div className="App-pages-container">
                <Header className="App-header"/>
                <Main className="App-main"/>
                <Footer className="App-footer"/>
            </div>
        )
    }
}

export default PagesContainer