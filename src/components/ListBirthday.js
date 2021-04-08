import React ,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import AddBirthday from './AddBirthday';
import ActionBar from './ActionBar';


export default function ListBirthday() {
    const [showList, setShowList] = useState(true);


    return (
        
        <View style={styles.container}>
            {showList ? (
                <>
                <Text style={styles.text} >LIST</Text>
                <Text style={styles.text} >LIST</Text>
                <Text style={styles.text} >LIST</Text>
                <Text style={styles.text} >LIST</Text>
                <Text style={styles.text} >LIST</Text>
                <Text style={styles.text} >LIST</Text>
                <Text style={styles.text} >LIST</Text>
                <Text style={styles.text} >LIST</Text>
                <Text style={styles.text} >LIST</Text>
                <Text style={styles.text} >LIST</Text>
                <Text style={styles.text} >LIST</Text>
                </>
            ) : <AddBirthday  />
            }
            <ActionBar showList={showList}  setShowList={setShowList} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:  'center',
        height: "100%",
    },
    text: {
        fontSize: 16,
        color: "#FFF",
        textAlign: 'center',

    },
});
