import { Cycle } from "./reducer";

export enum ActyonType {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED'
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActyonType.ADD_NEW_CYCLE,
    payload: {
      newCycle
    }
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActyonType.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActyonType.INTERRUPT_CURRENT_CYCLE,
  }
}