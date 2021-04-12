import React from 'react'
import {Link} from 'react-router-dom'

const Footer = (props) => {

  console.log(props)

  const navStyle = {
    color: 'rgb(190,255,90)',
    textDecoration: 'none'
  }

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
            <Link className="nav-item" style={navStyle} to='#'>Wecome</Link>
            <Link className="nav-item" style={navStyle} to='#'>Signup/Signin</Link>
        </div>
    </footer>
  )
}

export default Footer