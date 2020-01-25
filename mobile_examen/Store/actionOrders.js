import {CONTACTS, CONTACTS_ORDER_ERROR, CONTACTS_ORDER_REQUEST} from "./actionType";
import axiosApi from "../axiosApi";


export const ordersContacts = (contacts) => ({type: CONTACTS, contacts});
export const ordersContactsRequest = (boolean) => ({type: CONTACTS_ORDER_REQUEST, boolean});
export const ordersContactError = () => ({type: CONTACTS_ORDER_ERROR});

export const getContacts = () => {
    return async (dispatch) => {
        try{
            dispatch(ordersContactsRequest(false));
            const res = await axiosApi.get('/contacts.json');
            dispatch(ordersContacts(res.data));
            dispatch(ordersContactsRequest(true));
        }catch (e) {
            dispatch(ordersContactError())
        }
    }
};