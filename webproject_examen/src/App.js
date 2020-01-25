import React from 'react';
import './App.css';
import Layout from "./Component/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import Contacts from "./Component/Contacts/Contacts";
import AddContact from "./Component/AddContact/AddContact";
import Edit from "./Component/Edit/Edit";

function App() {
  return (
    <div className="App">
        <Layout>
            <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route path="/addContact" component={AddContact}/>
                <Route path="/edit/:id" component={Edit}/>
            </Switch>
        </Layout>
    </div>
  );
}

export default App;
