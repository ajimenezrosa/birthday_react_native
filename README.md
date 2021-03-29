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


