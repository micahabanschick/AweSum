import React from 'react'
// import {Link} from 'react-router-dom'

const Footer = (props) => {

  console.log(props)

  const footerStyles ={
    display: 'flex',
    position: 'absolute',
    bottom: '0',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  return (
    <footer className="App-footer" styles={footerStyles}>
        <div>
            This is the footer
        </div>
    </footer>
  )
}

export default Footer