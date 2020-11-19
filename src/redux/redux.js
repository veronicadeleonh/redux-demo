import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux"
import logger from 'redux-logger'
// import { createLogger } from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
 
// ACTIONS

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: "First redux action"
    }
}

// STATE

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// REDUCER

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}



const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

// COMBINE REDUCERS

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})


// STORE

 export const store = createStore(
    rootReducer,
  //  initialCakeState,
  //  initialIceCreamState,
    applyMiddleware(logger)
 //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    
console.log("Initial state", store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()