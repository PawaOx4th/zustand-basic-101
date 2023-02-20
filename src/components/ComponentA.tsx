import React from "react"
import useCounter from "../store/counter.store"

function ComponentA() {
  const { counter: counterState, onIncrement } = useCounter()
  return (
    <div>
      <h1>{counterState}</h1>
      <button type="button" onClick={(e) => onIncrement()}>
        Increment
      </button>
    </div>
  )
}

export default ComponentA
