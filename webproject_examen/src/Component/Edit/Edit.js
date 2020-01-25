import React, {Component} from 'react';
import {connect} from "react-redux";
import {putContact} from "../../Store/actionOrders";
import './Edit.css';

class Edit extends Component {
    state={
        name: '',
        phone: '',
        email: '',
        photo: '',
    };
    getValueEditInput= (e) => {
        this.setState({[e.target.name] : e.target.value})
    };
    componentDidMount() {
        const id  = this.props.match.params.id;
        if (this.props.contacts){
            const contacts = this.props.contacts[id];
            this.setState({name: contacts.name, phone:contacts.phone, email: contacts.email, photo: contacts.photo })
        }else{
            this.props.history.replace('/')
        }
    }


    putContactEdit=()=>{
        const id  = this.props.match.params.id;
        const newEditedContact = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            photo: this.state.photo
        };
        this.props.putContact(id, newEditedContact);
        this.props.history.replace('/')
    };
    render() {
        return (
            <div className="editBlock">
                <input name="name" value={this.state.name} type="text" onChange={this.getValueEditInput}/>
                <input name="phone" value={this.state.phone} type="number" onChange={this.getValueEditInput}/>
                <input name="email" value={this.state.email} type="email" onChange={this.getValueEditInput}/>
                <input name="photo" value={this.state.photo} type="text" onChange={this.getValueEditInput}/>
                Photo preview : <img src={this.state.photo} alt={this.state.name}/>
                <button onClick={()=>this.putContactEdit()}>Edit &#10004;</button>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    contacts: state.contacts,
});
const mapDispatchToProps = dispatch => ({
    putContact: (key, newEditedContact) => dispatch(putContact(key, newEditedContact))
});
export default connect(mapStateToProps, mapDispatchToProps) (Edit);