import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  console.log(props)

  const navStyle = {
    color: 'rgb(190,255,90)',
    textDecoration: 'none',
    display: 'inline-block'
  }

  return (
    <nav className="App-nav">
        <div>
            <Link className="nav-item" style={navStyle} to='#'>Wecome</Link>
            <Link className="nav-item" style={navStyle} to='#'>Signup/Signin</Link>
        </div>
    </nav>
  )
}

export default NavBar