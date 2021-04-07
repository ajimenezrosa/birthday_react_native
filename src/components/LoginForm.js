import React , {useState} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity , TextInput} from 'react-native'
import { validateEmail } from  '../utils/validations';
import firebase from '../utils/firebase';

export default function LoginForm(props) {
    // console.log(props);
    const {changeForm} = props

    const login = () => {
        console.log("Inicando Session");
    }

    return (
        <>
            
            <TextInput 
                    style={styles.input}
                    placeholder="Correo Electronico"
                    placeholderTextColor="#969696"
            />
            <TextInput 
                    style={styles.input}
                    placeholder="Contrasena"
                    placeholderTextColor="#969696"
                    secureTextEntry={true}
            />

            <TouchableOpacity onPress={login} >
                <Text style={styles.btnText} >Iniciar Session</Text>
            </TouchableOpacity>

            <View style={styles.register}>
                <TouchableOpacity>
                    <Text style={styles.btnText} onPress={changeForm} >Registrate</Text>
                </TouchableOpacity>
            </View>

                
        </>
    )
}

const styles = StyleSheet.create({
    btnText: {
        color: "#FFF",
        fontSize: 20,

    },
    input: {
        height: 45,
        color: "#FFF",
        width: "90%",
        marginBottom: 25,
        backgroundColor: "#1e3040",
        paddingHorizontal: 20, 
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 2,
        borderColor: "#1e3040",
    },
    register: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 15,
    },
    error: {
        borderColor: "#940c0c",
    },
})
