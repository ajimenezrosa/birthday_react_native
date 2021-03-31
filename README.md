# Birthday Raeact Native Documentation.
![](https://blog.crowdbotics.com/content/images/2020/05/React-Native-Featured-Image-3.png)

# Instalacion de base de datos Firebase.
para esto hacemos lo siguiente

~~~npm
yarn add firebase@~7.9.0
~~~

instalamos esta version debido a que es la que tiene la compativilidad con firebase.

luego de esto desde la misma pagina de firebase colocamos la variable de conexion de firebase
![](https://miro.medium.com/max/2732/1*p-6HGenMcxcObSKu_Tsd7A.png)

luego de esto creamos un nuevo fichero. en la ruta **src\utils\firebase.js**
en el mismo copiamos la variable var e inicializamos la base de datos tal como se muetra en la pagina

~~~javascript
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",

  export default  firebase.initializeApp(firebaseConfig);
};
~~~

importamos firebase tal como se muestra al inicio del codigo mostrado.

cambiamos lo que es ***var*** por ***const*** y colocamos la inicializacional y la exportacion final del codigo 

#
## Crearemos un nuevo archivo para los registros de formularios , el mismo se ve al momento de la siguiente forma.

#### debemos tener en cuenta que estos mismos formularios seran modificados en nuestros codigo en la medida que estemos trabajando en el.

~~~javascript
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

~~~

