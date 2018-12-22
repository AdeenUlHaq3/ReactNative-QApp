import React from 'react';
import { Modal, Text, View, Alert, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default class CompaniesScreen extends React.Component {
    state = {
        modalVisible: false,
        text: ''
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    static navigationOptions = {
        title: 'Companies',
        headerStyle: {
            backgroundColor: '#555',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        const { data } = this.state;
        return (
            <View>
                {
                    this.state.modalVisible
                    &&
                    <View style={{ marginTop: 22 }}>
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={(text) => this.setState({ text })}
                                value={this.state.text}
                            />
                        </Modal>
                    </View>
                }
                < TouchableOpacity onPress={() => {
                    this.setModalVisible(true);
                }} style={styles.fab}>
                    <Text style={styles.fabIcon}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        height: 60,
        backgroundColor: '#03A9F4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingTest: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    list: {
        margin: 5,
        backgroundColor: 'white',
        height: 80,
        justifyContent: 'space-around',
        paddingLeft: 10,
        elevation: 1
    },
    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: '#03A9F4',
        borderRadius: 30,
        elevation: 8
    },
    fabIcon: {
        fontSize: 40,
        color: 'white'
    }
});
