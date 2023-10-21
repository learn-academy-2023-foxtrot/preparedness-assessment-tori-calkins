import React, {useState} from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [personName, setPersonName] = useState("") //manages and updates the state
  const namePassed = (nameOfPerson) => { // passes the name of the person as the parameter of the useState hook
    setPersonName(nameOfPerson.target.value) // set the persons name from the input and targets each name as the input gets changed.
  }

  const reset = () => {
    setPersonName("") //makes empty 
  }

  return (
    <body><div className="entire-content">
      <h1 className="header">Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label className="label-text" for="name">Enter your name: </Label>
          <Input id="inputfield" value={personName} onChange={namePassed} /> {/* onChange is a event handler function that will make activate the event to happen everytime the name/value is changed */}
        </div>
        <div className="buttons">
          <Button id="reset-button" onClick={reset}>Reset</Button> {/* activates the reset function and use the setPersonName to make blank again */}
          <ModalComponent personName={personName} /> {/* this is the prop being passed to the ModalComponent.js file and on that file will use props.personName. the personName is the value put in the inputfield */}
        </div>
      </div>
    </div>
    </body>
  )
}

export default App
