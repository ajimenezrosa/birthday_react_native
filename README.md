# Birthday Raeact Native Documentation.
![](https://blog.crowdbotics.com/content/images/2020/05/React-Native-Featured-Image-3.png)

<!-- 
hacer listado de de commit en git por codigo
git log --pretty=format:"%h - %an, %ar : %s" 

-->


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

#### en nuestro codigo del formulario **App.js** colocaremos lo siguiente.

~~~javascript
    <StatusBar  barStyle='light-content' />
    <SafeAreaView style={styles.background}>
        { user ? <Text>Estas Logueado</Text> : <Auth/>}
    </SafeAreaView>
    </>
~~~
### Notas
##### **StatusBar** lo colocamos para que nuestro estatus bar sea visible debido a los colores asignados  a nuestro entorno las barras de estados se ven en color oscuro y esto nos presenta un efecto no deseado.
##### como podemos ver hacemos una estructura de desicion simple para poder desplegar en nuestro codigo diferentes pantallas de acuerdo a una desicion.
  ~~~javaScript
      { user ? <Text>Estas Logeado<Text> : <Auth />}
  ~~~
      - si user es positivo se ejecutara lo que esta despues del signo ?
      - en caso contrario se ejecutara lo que esta despues del simbolo :

# 



## Nota Sobre Codigo React-Native

por que pongo un doble i Conercial. **&&**?
si la estructura de decision que realizaremos es simple es decir solo tiene un if utilizamos **&&**
~~~javascript
formError.email && styles.error
~~~

pero en caso de que la structura de dicision tenga un **else** incluido utilizariamos un **?** para el **if** y un **:** para el **else**.
~~~javascript
{isLogin ? <LoginForm changeForm={changeForm} /> : <RegisterForm changeForm={changeForm} /> }
~~~


## Muchas veces es importante realizar las validaciones en nuestras aplicaciones ya sean Moviles, Web , de Escritorio. 
#####  Esto es sumamanete importante pues nos permite guardar datos sanos y asegurarnos de que algunos datos sensibles se guardaran de una forma mas o menos segura o integra.

####  Para este caso tenenos las validaciones de Correos Electronicos. Esto puede ser un dolor de cabeza.  

#### Como me aseguro que el correo electronico que estan guardando en nuestras bases de datos es correcto. o por lo menos tiene un formato correcto.

#### Anexamos un funcion de javascript que podria ser util para estos casos
~~~javascript
export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
~~~


#### luego debemos Importar la funcion en el lugar donde se utilizara.

~~~javascript
import  { validateEmail } from '../utils/validations';
~~~
solo le pasamos un email y esta funciones retorna **true** en caso que sea valido o **false** en caso que sea invalido


# Registrarse en Firebase desde la app.

#### para esto importaremos nuestra clase de firebase que ya tenemos creada.

~~~javascript
import firebase from '../utils/firebase';
~~~
#### Luego procederemos a utilizarla de la siguiente forma.
~~~javascript
            firebase.auth().createUserWithEmailAndPassword(formData.email , formData.password)
            .then(() => {
                console.log("Cuenta Creada")
            }).catch(() => {
                setFormError({

                    email: true ,
                    password: true,
                    repetPassword: true,
                });
            });
~~~            

# 
### Tambien tenemos que hacer un formulario de logout.
#### Esto seria una forma de hacer logout de la base de datos **Firebase** 

 
~~~javascript
function Logout() {

  const Logout = () => {
    firebase.auth().signOut();
  }

  return(
    <View>
        <Text>Estas Logeado</Text>
        <Button title="Cerrar Session" onPress={Logout} />
    </View>
  )
}
~~~

# Formulario de Login

#### Ahora es necesario pintar nuestro formulario de login
#### el mismo esta repesentado con el codigo que mostramos a continuacion, 

~~~javascript
        <>
            
            <TextInput 
                    style={styles.input}
                    placeholder="Correo Electronico"
                    placeholderTextColor="#969696"
                    onChange={(e) => onChange(e, "email")}
                    />
            <TextInput 
                    style={styles.input}
                    placeholder="Contrasena"
                    placeholderTextColor="#969696"
                    secureTextEntry={true}
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

~~~


#### Esto representa otra manera de hacer las cosas
#### creamos la funcion **onChange** la cual disparamos en el codigo presentado anteriormente 

~~~javascript
    const onChange = (e, type) => {
            setFormData({...formData, [type]: e.nativeEvent.text})
    }
~~~
#### A esta la pasamos un estado y un tipo. el cual se coloca entre corchetes por ser dinamico.  De pasar el **type** sin los corchetes tomaria el nombre type en vez de su valor.

####  Y lo consumimos de la siguinte forma
~~~javascript
       <TextInput 
          style={styles.input}
          placeholder="Contrasena"
          placeholderTextColor="#969696"
          secureTextEntry={true}
          onChange={(e) => onChange(e, "password")}
            />
~~~
#### Como podemos es mucho mas simple y facil de ejecutar que el ejemplo anterior.
# 

## Validar el formulario de Login 
#### para esto utilizarmos un **useState** y crearemos una funcion llamador login
~~~javascript
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
            console.log("Ok");
        }
        setFormError(errors);
    };

    const onChange = (e, type) => {
            setFormData({...formData, [type]: e.nativeEvent.text})
    }
~~~

conste codigo validaremos nuestro formulario de login.


<!-- 
nada debajo de esta linea
git log --pretty=format:"%h - %an, %ar : %s" -->