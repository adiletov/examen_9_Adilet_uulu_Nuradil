import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView,TouchableOpacity,Image,Modal,Button} from "react-native";
import {getContacts} from "../../Store/actionOrders";
import {connect} from "react-redux";

class ContactBook extends Component {
    state={
        modal: false,
        key: null,
    };
    componentDidMount() {
        this.props.getContacts();
    }
    controlModal=(boolean, key)=>{
        this.setState({modal: boolean, key})
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Contacts</Text>
                <ScrollView>
                {this.props.contacts && Object.keys(this.props.contacts).map(key=> <View key={key}>
                    <TouchableOpacity
                        style={styles.list}
                        onPress={()=> this.controlModal(true, key)}
                    >
                        <Image
                            style={{width: 100, height: 100}}
                            source={{url: this.props.contacts[key].photo}}
                        />
                        <Text>{this.props.contacts[key].name}</Text>
                    </TouchableOpacity>
                    <View>
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modal}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <View style={{marginTop: 22}}>
                                <View>
                                    {this.props.contacts && this.state.key ?  <View>
                                        <Image
                                            style={{width: 200, height: 200}}
                                            source={{url: this.props.contacts[this.state.key].photo}}
                                        />
                                        <Text>{this.props.contacts[this.state.key].name}</Text>
                                        <Text>{this.props.contacts[this.state.key].phone}</Text>
                                        <Text>{this.props.contacts[this.state.key].email}</Text>
                                    </View> : null}
                                    <Button
                                        title="Назад"
                                        onPress={() => this.controlModal(false)}
                                    />
                                </View>
                            </View>
                        </Modal>
                    </View>
                </View>)}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30,
    },
    list:{
        margin: 3,
        padding: 10,
        width:'100%',
        backgroundColor: '#ffffff'
    }
});


const mapStateToProps = state => ({
    contacts : state.contacts
});
const mapDispatchToProps = dispatch => ({
   getContacts: ()=> dispatch(getContacts())
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactBook);