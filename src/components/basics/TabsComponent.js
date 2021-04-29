import React from 'react'
import { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import QuizOrbit from '../quizes/QuizOrbit'
import QuizForm from '../quizes/QuizForm'

const TabsComponent = (props) => {

    const [key, setKey] = useState('home');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Overview" className="App-tabs-overview">
            <h2 style={{color: 'white'}} >Click 'Orbit' or 'Form' to start the quiz!</h2>
        </Tab>
        <Tab eventKey="orbit" title="Orbit" className="App-tabs-orbit">
          <QuizOrbit />
        </Tab>
        <Tab eventKey="form" title="Form" className="App-tabs-form">
          <QuizForm />
        </Tab>
      </Tabs>
    );
  }
  
  export default TabsComponent