import React from 'react';
import { Alert, StyleSheet, TextInput } from 'react-native';
import { Container, View, Icon, Fab, Content, Form, Item, Input, Label } from 'native-base';
import Modal from 'react-native-modal';

export default class CompaniesScreen extends React.Component {
    state = {
        isModalVisible: false,
        text: ''
    };

    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    render() {
        return (
            <Container>
                <View style={{ flex: 1 }}>
                    <Fab
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={this._toggleModal}>
                        <Icon style={{}} name="person-add" />
                    </Fab>
                    {
                        this.state.isModalVisible
                        &&
                        <View style={{ marginTop: 22 }}>
                            <Modal
                                isVisible={this.state.isModalVisible}
                                backdropColor='white'
                                style={styles.modalContent}
                            >
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <View style={{
                                        width: 300,
                                        height: 300
                                    }}>
                                        <Form>
                                            <Item stackedLabel last>
                                                <Label>Username</Label>
                                                <Input />
                                            </Item>
                                            <Item stackedLabel last>
                                                <Label>Password</Label>
                                                <Input />
                                            </Item>
                                        </Form>
                                        <Fab
                                            style={{ backgroundColor: '#5067FF' }}
                                            position="bottomLeft"
                                            onPress={this._toggleModal}>
                                            <Icon name="close" />
                                        </Fab>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    }
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    modalContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
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
        color: 'black',
        backgroundColor: '#03A9F4',
        borderRadius: 30,
        elevation: 8
    },
    fabIcon: {
        fontSize: 40,
        color: '#000'
    }
});
