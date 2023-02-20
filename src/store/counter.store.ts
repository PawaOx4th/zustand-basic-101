import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

type CounterType = {
  counter: number
  conterTar: number
  counterDraft: number
  onIncrement: () => void
  onIncrementDraft: () => void
  onDecrement: () => void
}

const useCounter = create<CounterType>()(
  devtools(
    persist(
      (set) => ({
        counter: 0,
        conterTar: 2,
        counterDraft: 0,
        onIncrementDraft: () => {
          set((state) => ({ counterDraft: state.counterDraft + 1 }))
        },
        onIncrement: () => {
          set(
            (state) => {
              return {
                counter: state.counter + 1,
              }
            },
            false,
            "onIncrement"
          )
        },
        onDecrement: () => {
          set((state) => ({ counter: state.counter - 1 }), false, "onDecrement")
        },
      }),
      {
        name: "counter",
      }
    ),
    { store: "counterStore" }
  )
)

export default useCounter
