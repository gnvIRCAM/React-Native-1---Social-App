import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function  SingleUser(props){

    return (
        <TouchableOpacity 
            onPress={() => 
                props.navigation.navigate('Detailed', 
                    {
                        img: props.large, 
                        name: props.name, 
                        surname: props.surname,
                        gender: props.gender,
                        age: props.age 
                    })
                }
            style={styles.single}>
            <Image 
                source={{uri : props.thumbnail}}
                style={{width: 60, height: 60}}
            />
            <Text style={styles.text}>{props.name} {props.surname}</Text>
        </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    single: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom: 5
    },
    text: {
        fontSize: 18, 
        marginLeft: 10
    }
})