import React ,{useState} from 'react'
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import firebase from '../utils/firebase';
import 'firebase/firestore';

firebase.firestore().settings({experimentalForceLongPolling: true});
const db = firebase.firestore(firebase);

export default function AddBirthday(props) {
    const { user , setShowList } = props;
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [formData, setFormData] = useState({});
    const [formError, setFormError] = useState({});

    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    }

    const handlerConfirm = (date) => {
        const dateBirt = date;
        dateBirt.setHours(0);
        dateBirt.setMinutes(0);
        dateBirt.setSeconds(0);
        console.log(dateBirt);
        setFormData({...formData , dateBirt});
        hideDatePicker();
    }

    const showDatePiker = () => {
        setIsDatePickerVisible(true)
    }

    const onChange = (e , type) => {
        setFormData({...formData, [type]: e.nativeEvent.text});
    }

    const onSubmit = () => {
        let errors = {};

        if(!formData.name || !formData.lastname || !formData.dateBirt){
            if(!formData.name) errors.name = true;
            if(!formData.lastname) errors.lastname = true;
            if(!formData.dateBirt) errors.dateBirt = true;
        } else {

           const data = formData;
           data.dateBirt.setYear(0);

           db.collection(user.uid)
                .add(data)
                .then(() => {
                    setShowList(true);
                })
                .catch(() => {
                    setFormError({name: true , lastname: true, dateBirt: true});
                })

            console.log(data);
           // console.log("ok");
        }
 
        setFormError(errors);
    };

    return (
        <>
            <View style={styles.container} >
                <TextInput style={[styles.input , formError.name && styles.errors]}
                    placeholder="Nombre"
                    placeholderTextColor="#969696"
                    onChange={(e) => onChange(e, "name")}
                    
                    />
                <TextInput style={[styles.input , formError.lastname && styles.errors]}
                    placeholder="Apellidos"
                    placeholderTextColor="#969696"
                    onChange={(e) => onChange(e, "lastname")}

                />
                <View style={[styles.input, styles.datepicker , formError.dateBirt && styles.errors]}>
                    <Text style={formData.dateBirt ? styles.textDate : styles.textDate2 }

                            onPress={showDatePiker}
                    >{formData.dateBirt 
                        ? moment(formData.dateBirt).format('LL')
                        : "Fecha de Nacimiento" 
                    } </Text>


                </View>
           <View>
                <TouchableOpacity onPress={onSubmit}>
                    <Text style={styles.AddButton}>Crear Cumpleanos</Text>
                </TouchableOpacity>
            </View>


            </View>
            <DateTimePickerModal 
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handlerConfirm}
                onCancel={hideDatePicker}
            />

 

        </>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: "#FFF",
        textAlign: 'center',

    },
    container: {
        height: "100%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 50,
        color: "#fff",
        width: " 80%",
        marginBottom: 25,
        backgroundColor: "#1e3040"   ,
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#1e3040",



    },
    datepicker: {
        justifyContent: 'center'
    },
    textDate: {
        color: "#FFF",
        fontSize: 18,
    },
    textDate2: {
        color: "#969696",
        fontSize: 18,
    },
    AddButton: {
        fontSize: 18,
        color: "#FFF",
    },
    errors: {
        borderColor: "#940c0c",
    },

})
