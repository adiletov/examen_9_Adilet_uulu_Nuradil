import {ORDER_CONTACT_REQUEST, ADD_CONTACTS, ORDER_CONTACT_ERROR} from "./actionType";

const initialState = {
    loading: false,
    contacts: null,
};

const reducer = (state = initialState, action)=> {
    switch (action.type) {
        case ORDER_CONTACT_REQUEST:
            return {...state, loading: action.boolean};
        case ADD_CONTACTS:
            return {...state,contacts: action.contacts};
        case ORDER_CONTACT_ERROR:
            return state;
        default:
            return state
    }
};

export default reducer;