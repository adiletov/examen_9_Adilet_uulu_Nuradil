import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from "./Store/reducer";
import ContactBook from "./Component/ContactBook/ContactBook";

const store = createStore(reducer, applyMiddleware(thunk));


export default function App() {
  return (
    <Provider store={store}>
        <ContactBook/>
    </Provider>
  );
}


