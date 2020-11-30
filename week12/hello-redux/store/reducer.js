
// reducer is the only person who can update the global state 
// reducer takes in current state and an action and then returns the NEW state

const initialState = {
    counter: 100, 
    username: "JohnDoe"
}

const reducer = (state = initialState, action) => {

    if(action.type == 'INCREMENT_COUNTER') {
        return {
            ...state, 
            counter: state.counter + 1 
        }
    } else if(action.type == 'ADD_COUNTER') {
        return {
            ...state, 
            counter: state.counter + action.payload
        }
    }

    return state 
}

export default reducer 