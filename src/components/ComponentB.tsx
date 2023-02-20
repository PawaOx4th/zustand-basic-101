import React from "react"
import { shallow } from "zustand/shallow"

import useCounter from "../store/counter.store"

type Props = {}

function ComponentB({}: Props) {
  // const conterTarState = useCounter((state) => state.conterTar)
  const { conterTar, counterDraft } = useCounter()
  console.log("🍉 is render :")
  return (
    <div>
      <h2
        style={{
          color: "pink",
        }}
      >
        <strong>conterTar : {conterTar}</strong>
        <strong>counterDraft : {counterDraft}</strong>
      </h2>
    </div>
  )
}

export default ComponentB
