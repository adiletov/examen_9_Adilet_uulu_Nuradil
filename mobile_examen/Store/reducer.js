import {CONTACTS, CONTACTS_ORDER_ERROR, CONTACTS_ORDER_REQUEST} from "./actionType";

const initialState = {
    contacts: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACTS_ORDER_REQUEST:
            return {...state, loading: action.boolean};
        case CONTACTS:
            return {...state, contacts: action.contacts};
        case CONTACTS_ORDER_ERROR:
            return state;
        default:
            return state
    }
};
export default reducer;