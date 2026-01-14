import { Image, View, Text, StyleSheet } from 'react-native';

export default function DetailedUser({route, navigation}) {

    return (
        <View style={styles.container}>
            <Image 
                source={{uri : route.params.img}}
                style={styles.image}
            />
            <Text style={styles.name_text}>{route.params.name} {route.params.surname}</Text>
            <Text style={styles.undertext}>{route.params.gender} {route.params.age}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'top', 
        alignItems: 'center'
    }, 
    image: {
        width: 200, 
        height: 200,
        marginTop: 10 
    }, 
    name_text: {
        fontSize: 28, 
        marginTop: 5
    },
    undertext: {
        fontSize: 24, 
        fontStyle: 'italic', 
        marginTop: 5
    }

})