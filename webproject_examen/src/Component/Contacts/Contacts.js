import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteContact, getOrdersContact} from "../../Store/actionOrders";
import {Modal, ModalFooter, ModalHeader, Spinner} from "reactstrap";
import {NavLink} from "react-router-dom";
import './Contact.css';

class Contacts extends Component {
    state={
      modal: false,
        key: null,
    };
    componentDidMount() {
        this.props.getContacts()
    }
    controlModal=(boolean,key)=>{
        this.setState({modal: boolean, key: key});
    };
    closeModal=(e)=>{
        e.preventDefault();
        this.setState({modal: false})
    };

    deleteCon = () => {
        this.props.deleteContact(this.state.key);
        this.setState({modal: false, key: null})
    };
    render() {
        return (
            <div className="contacts">
                {this.props.loading ? this.props.contacts && Object.keys(this.props.contacts).map(key=>
                    <div className="contactBlock" onClick={()=>this.controlModal(true, key)} key={key}>
                    <img src={this.props.contacts[key].photo} alt={this.props.contacts[key].name}/>
                    <p>{this.props.contacts[key].name}</p>

                        {this.state.key ?
                            <Modal isOpen={this.state.modal}>
                            <div >
                                <ModalHeader>
                                    <button onClick={(event)=> this.closeModal(event)}>&#10008;</button>
                                </ModalHeader>
                                <div className="modalInfo">
                                    <img src={this.props.contacts[this.state.key].photo} alt=""/>
                                    <h3>{this.props.contacts[this.state.key].name}</h3>
                                    <p>{this.props.contacts[this.state.key].email}</p>
                                    <p>&#9742; {this.props.contacts[this.state.key].phone}</p>
                                </div>
                                <ModalFooter>
                                    <NavLink to={`/edit/${this.state.key}`}>Edit</NavLink>
                                    <button onClick={()=>this.deleteCon()}>Delete</button>
                                </ModalFooter>

                            </div>
                            </Modal>
                            :null
                        }
                </div>) : <div className="spinnerBlock"><div className="spinner"><Spinner style={{ width: '6rem', height: '6rem', color: '#ccc' }} /></div> </div>}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    contacts: state.contacts,
    loading: state.loading
});
const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(getOrdersContact()),
    deleteContact: (key)=> dispatch(deleteContact(key))
}) ;
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);