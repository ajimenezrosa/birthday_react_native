import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from  '../utils/firebase';


export default function ActionBar(props) {
    console.log(props);
    const { showList, setShowList } = props



    return (
        <View style={styles.viewfooter} >
            <View style={styles.viewClose}>
                <Text style={styles.text} 
                    onPress={() => firebase.auth().signOut()}
                >Cerrar Session</Text>
            </View>
            <View style={styles.viewAdd}>
                <Text style={styles.text} onPress={() => setShowList(!showList)} >
                    {showList ? "Nueva Fecha" : "Cancelar Fecha"}
                    
                    </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewfooter: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: "100%",
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30 ,  
        marginBottom: 20,
    },
    viewClose: {
        backgroundColor: "#820000",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 30,
        bottom: 15,
    },

    viewAdd: {
        backgroundColor: "#1ea1f2",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 30,
        bottom: 15,
    },
    text: {
        fontSize: 16,
        color: "#FFF",
        textAlign: 'center',

    },
});
