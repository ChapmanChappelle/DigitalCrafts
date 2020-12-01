
import * as actionTypes from './actions/actionTypes'

const initialState = {
    counter: 99, 
    movies: [], 
    username: 'JohnDoe'
}

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case actionTypes.INCREMENT_COUNTER: 
            return {
                ...state, 
                counter: state.counter + 1
            }
        case actionTypes.MOVIES_FETCHED:
            return {
                ...state, 
                movies: action.payload 
            }
        default: 
            return state 
    }

    /*
    if(action.type == actionTypes.INCREMENT_COUNTER) {
        return {
            ...state,
            counter: state.counter + 1 
        }
    } else if(action.type == actionTypes.MOVIES_FETCHED) {
        return {
            ...state, 
            movies: action.payload 
        }
    }

    return state  */
}

export default reducer