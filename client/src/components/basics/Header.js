import React from 'react'
import NavBar from './NavBar'

const Header = (props) => {

  console.log(props)

  const headerStyles ={
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  return (
    <header className="App-header" styles={headerStyles}>
        <h1>This is the Header</h1>
        <NavBar/>
    </header>
  )
}

export default Header