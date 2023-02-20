import useCounter from "./store/counter.store"

export function handleUpdateCounter() {
  useCounter.getState().onIncrementDraft()
}
