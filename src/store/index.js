import { legacy_createStore as createStore } from "redux";
import { INCREMENT, DECREMENT, TOGGLECOUNTER, INCREASE } from "../utils/counter";

const initState = {
    counter: 0,
    toggleCounter: false
}
const counterReducer = (state = initState, action) => {

    // switch (action.type) {
    //     case INCREMENT:
    //         return {
    //             ...state,
    //             counter: state.counter + 1
    //         }
    //     case DECREMENT:
    //         return {
    //             ...state,
    //             counter: state.counter - 1
    //         }
    //      case  TOGGLECOUNTER:
    //         return {
    //             ...state,
    //             toggleCounter: !state.toggleCounter
    //         } 
    //      case INCREASE:
    //         return {
    //             ...state,
    //             counter: state.counter + action.payload
    //         }   
    //      default:
    //         return state   
    // }


        if(action.type === INCREMENT) {
            return {
                ...state,
                // toggleCounter: state.toggleCounter,
                counter: state.counter + 1
            }
        }

        if(action.type === DECREMENT) {
            return {
                ...state,
                 // toggleCounter: state.toggleCounter,
                counter: state.counter - 1
            }
        }

        if(action.type === TOGGLECOUNTER) {
            return {
                ...state,
                // counter: state.counter,
                toggleCounter: !state.toggleCounter
            }
        }

        if(action.type === INCREASE) {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }

        return state
}

const store = createStore(counterReducer)

export default store