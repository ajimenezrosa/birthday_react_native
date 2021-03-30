import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'

export default function LoginForm(props) {
    // console.log(props);
    const {changeForm} = props



    return (
        <View>
            <Text>LoginForm</Text>
            <TouchableOpacity>
                <Text style={styles.btnText} onPress={changeForm} >Registrate</Text>
            </TouchableOpacity>
                
        </View>
    )
}

const styles = StyleSheet.create({
    btnText: {
        color: "#FFF",
        fontSize: 20,
    },
})
