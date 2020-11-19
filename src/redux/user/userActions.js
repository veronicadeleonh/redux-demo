// import { applyMiddleare, createStore } from "redux"
// import thunk from "redux-thunk"
// import axios from "axios"

// const initialState = {
//     loading: false,
//     users: [],
//     error: ""
// }

// const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
// const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
// const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

// const fetchUsersRequest = () => {
//     return {
//         type: FETCH_USERS_REQUEST
//     }
// }

// const fetchUsersSuccess = () => {
//     return {
//         type: FETCH_USERS_SUCCESS,
//         payload: users
//     }
// }

// const fetchUsersFailure = () => {
//     return {
//         type: FETCH_USERS_FAILURE,
//         payload: error
//     }
// }

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case FETCH_USERS_REQUEST:
//             return {
//                 ...state,
//                 loading: true
//             }
//         case FETCH_USERS_SUCCESS:
//             return {
//                 loading: false,
//                 users: action.payload,
//                 error: ""
//             }
//         case FETCH_USERS_FAILURE:
//             return {
//                 loading: false,
//                 users: [],
//                 error: action.payload
//             }
//     }
// }

// export const fetchUsers = () => {
//     return (dispatch) => {

//         dispatch(fetchUsersRequest())

//         axios
//             .get("https://jsonplaceholder.typicode.com/users")
//             .then(response => {
//                 //response.data
//                 const users = response.data.map(user => user.id)
//                 dispatch(fetchUsersSuccess(users))
//             })
//             .catch(error => {
//                 //error.message
//                 dispatch(fetchUsersFailure(error.message))
//             })
//     } 
// }


// export const store = createStore(reducer, applyMiddleare(thunk))
// store.subscribe(() => { console.lof(store.getstate())})
// store.dispatch(fetchUsers())