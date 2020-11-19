import { createStore } from "redux"

// ACTIONS

const BUY_CAKE = "BUY_CAKE"

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}

// STATE

const initialState = {
    numOfCakes: 10
}

// REDUCER

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

// STORE

 export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

console.log("Initial state", store.getState())
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()