import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import useCounter from "./store/counter.store"
import ComponentA from "./components/ComponentA"
import ComponentB from "./components/ComponentB"
import { handleUpdateCounter } from "./utils"

function App() {
  return (
    <div className="App">
      <button onClick={() => handleUpdateCounter()}>increment on App</button>
      <hr />
      <ComponentA />
      <hr />
      <ComponentB />
    </div>
  )
}

export default App
