import React, {useState}  from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput  } from 'react-native'

export default function RegisterForm(props) {
    const {changeForm} = props;
    const [formData, setFormData] = useState(defaultValues());

    const  register = () => {
        console.log(register);
        console.log(formData);
    }


    return (
        <>
            <TextInput 
                style={styles.input}
                placeholder="Correo electronico"
                placeholderTextColor="#969696"
                onChange={(e) => setFormData({...formData, email: e.nativeEvent.text})}
                
                />
            <TextInput 
                style={styles.input}
                placeholder="Contrasena"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={(e) => setFormData({...formData, password: e.nativeEvent.text})}
                
                />
            <TextInput 
                style={styles.input}
                placeholder="Repetir Contrasena"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={(e) => setFormData({...formData, repetPassword: e.nativeEvent.text})}
            />
            <TouchableOpacity onPress={register} >
                <Text style={styles.btnText}  >Registrarse</Text>
            </TouchableOpacity>

            <View style={styles.login}>
            <TouchableOpacity onPress={changeForm} >
                <Text style={styles.btnText}  >Inicia Sesion</Text>
            </TouchableOpacity>
            </View>


        </>
    )
}


function defaultValues() {
    return(
        {
            email: '',
            password: '',
            repetPassword: '',
        }
    );
}

const styles = StyleSheet.create({
    btnText: {
        color: "#FFF",
        fontSize: 20,
    },
    input: {
        height: 45,
        color: "#FFF",
        width: "80%",
        marginBottom: 25,
        backgroundColor: "#1e3040",
        paddingHorizontal: 20, 
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 2,
        borderColor: "#1e3040",
    },
    login: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 15,
    },
})