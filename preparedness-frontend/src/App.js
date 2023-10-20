import React, {useState} from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [personName, setPersonName] = useState("")
  const namePassed = (nameOfPerson) => { // passes the name of the person as the parameter of the useState hook
    setPersonName(nameOfPerson.target.value) // set the persons name from the input and targets each name as the input gets changed.
  }

  const reset = () => {
    setPersonName("")
  }

  return (
    <body><div className="entire-content">
      <h1 className="header">Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name: </Label>
          <Input value={personName} onChange={namePassed}  />
        </div>
        <Button onClick={reset}>Reset</Button>
        <ModalComponent personName={personName} /> 
      </div>
    </div>
    </body>
  )
}

export default App
