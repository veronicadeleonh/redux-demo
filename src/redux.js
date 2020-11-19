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

const reducer = (state = inistialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}