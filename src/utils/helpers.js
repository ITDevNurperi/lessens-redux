import { DECREMENT, INCREASE, INCREMENT, TOGGLECOUNTER } from "./counter"

export const increment = () => {
    return {type: INCREMENT}
}

export const decrement = () => {
    return {type: DECREMENT}
}

export const increase = (payload) => {
    return {type: INCREASE, payload: payload}
}

export const toggleCounter = () => {
    return {type: TOGGLECOUNTER}
}

