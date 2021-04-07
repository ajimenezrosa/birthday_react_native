import React , {useState} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity , TextInput} from 'react-native'
import { validateEmail } from  '../utils/validations';
import firebase from '../utils/firebase';

export default function LoginForm(props) {
    // console.log(props);
    const {changeForm} = props
    const [formData, setFormData] = useState(defaultValue());
    const [formError, setFormError] = useState({})

    const login = () => {
        let errors ={};
        if(!formData.email || !formData.password){
            if(!formData.email) errors.email = true;
            if(!formData.password) errors.password = true;
            console.log("ERROR 1")
        } else if(!validateEmail(formData.email)) {
            errors.email = true;
            console.log("ERROR 2")
        } else {
            firebase.auth()
                .signInWithEmailAndPassword(formData.email, formData.password)
                .then(() => {
                    console.log("Ok");
                })
                .catch(() => {
                    setFormError({
                        email: true,
                        password: true,
                    })
                })
        }
        setFormError(errors);
    };

    const onChange = (e, type) => {
            setFormData({...formData, [type]: e.nativeEvent.text})
    }

    return (
        <>
            
            <TextInput 
                    style={[styles.input , formError.email && styles.error]}
                    placeholder="Correo Electronico"
                    placeholderTextColor="#969696"
                    onChange={(e) => onChange(e, "email")}
                    />
            <TextInput 
                    style={[styles.input , formError.email && styles.error]}
                    placeholder="Contrasena"
                    placeholderTextColor="#969696"
                    secureTextEntry={true}
                    onChange={onChange}
                    onChange={(e) => onChange(e, "password")}
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


function defaultValue() {
    return{
        email: "",
        password: "",
    }
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
