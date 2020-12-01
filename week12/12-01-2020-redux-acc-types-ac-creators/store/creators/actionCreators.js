
import * as actionTypes from '../actions/actionTypes'


export const incrementCounter = () => {
    return {
         type: actionTypes.INCREMENT_COUNTER
     }
}

export const movieLoaded = (movies) => {

    return {
         type: actionTypes.MOVIES_FETCHED,
         payload: movies
        }
}


