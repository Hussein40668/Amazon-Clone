import {Type} from './actionType'

// initialize the state
export const initialState = {
basket: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case Type.ADD_TO_BASKET:
            return {
                ...state,
                basket:[...state.basket,action.item]
            }
        default:
            return state;
    }
    

}

