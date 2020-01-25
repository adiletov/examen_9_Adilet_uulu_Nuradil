import React, {Component} from 'react';
import {connect} from "react-redux";
import './AddContact.css';
import {addContact} from "../../Store/actionOrders";

class AddContact extends Component {
    state={
      name: '',
      phone: '',
      email: '',
      photo: '',
    };

    getValueInput=(e)=>{
        this.setState({[e.target.name] : e.target.value});
    };
    backToContacts = () => {
        this.props.history.replace('/')
    };

    createNewContact = () => {
        const newContact = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            photo: this.state.photo
        };
        this.props.addContact(newContact)
    };

    render() {
        return (
            <div className="contactAddBlock">
                <h4>Add new contact</h4>
                <input name="name" type="text" onChange={this.getValueInput}/>
                <input name="phone" type="number" onChange={this.getValueInput}/>
                <input name="email" type="email" onChange={this.getValueInput}/>
                <input name="photo" type="text" onChange={this.getValueInput}/>
                Photo preview : <img src={this.state.photo} alt={this.state.name}/>
                <button onClick={()=>this.createNewContact()}>Save</button>
                <button onClick={()=>this.backToContacts()}>Bact to contacts</button>
            </div>
        );
    }
}
const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
    addContact: (contact) => dispatch(addContact(contact))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddContact);