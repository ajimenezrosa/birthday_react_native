import React, {useState}  from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput  } from 'react-native'
import  { validateEmail } from '../utils/validations';

export default function RegisterForm(props) {
    const {changeForm} = props;
    const [formData, setFormData] = useState(defaultValues());
    const [formError, setFormError] = useState({})

    const  register = () => {

        let error = {}
        if(!formData.email || !formData.password || !formData.repetPassword){
            if(!formData.email) error.email = true;
            if(!formData.password) error.password = true;
            if(!formData.repetPassword) error.repetPassword = true;
        } else if(!validateEmail(formData.email)){
                error.email = true;
        } else if(formData.password !== formData.repetPassword){
                    error.password = true;
                    error.repetPassword = true;
                } else if(formData.password.length < 6){
            error.password = true;
            error.repetPassword = true;
        } else {
            console.log("Formulario Correcto!");
        }

        setFormError(error);
    }


    return (
        <>
            <TextInput 
                style={[styles.input, formError.email && styles.error]}
                placeholder="Correo electronico"
                placeholderTextColor="#969696"
                onChange={(e) => setFormData({...formData, email: e.nativeEvent.text})}
                
                />
            <TextInput 
                style={[styles.input , formError.password && styles.error]}
                placeholder="Contrasena"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={(e) => setFormData({...formData, password: e.nativeEvent.text})}
                
                />
            <TextInput 
                style={[styles.input , formError.repetPassword && styles.error]}
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
    error: {
        borderColor: "#940c0c",
    },

})
