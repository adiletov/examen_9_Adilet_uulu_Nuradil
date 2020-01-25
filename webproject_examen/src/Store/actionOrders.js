import {ADD_CONTACTS, ORDER_CONTACT_ERROR, ORDER_CONTACT_REQUEST} from "./actionType";
import axiosApi from "../axiosApi";


export const getContacts = contacts => ({type: ADD_CONTACTS, contacts});
export const orderContactRequest = (boolean) => ({type: ORDER_CONTACT_REQUEST, boolean});
export const orderContactError = () => ({type: ORDER_CONTACT_ERROR});



export const addContact = (contact) => {
    return async (dispatch) => {
        try{
            dispatch(orderContactRequest(false));
            await axiosApi.post('/contacts.json', contact);
            dispatch(orderContactRequest(true));
        }catch (e) {
            dispatch(orderContactError())
        }
    }
};

export const getOrdersContact = () => {
    return async (dispatch) => {
        try{
            dispatch(orderContactRequest(false));
            const res = await axiosApi.get('/contacts.json');
            dispatch(orderContactRequest(true));
            dispatch(getContacts(res.data));
        }catch (e) {
            dispatch(orderContactError())
        }
    }
};

export const putContact = (key, newEditedContact) => {
    return async (dispatch) => {
        try{
            await axiosApi.put('/contacts/' + key + '.json', newEditedContact);
            dispatch(getOrdersContact());
        }catch (e) {
            dispatch(orderContactError())
        }
    }
};
export const deleteContact = (key) => {
    return async (dispatch) => {
        try{
            dispatch(orderContactRequest(false));
                await axiosApi.delete('/contacts/' + key + '.json');
            dispatch(orderContactRequest(true));
            dispatch(getOrdersContact());
        }catch (e) {
            dispatch(orderContactError())
        }
    }
};

