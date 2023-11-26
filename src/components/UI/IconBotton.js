import {React} from "react";
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const IconButton = ({name,size,color,onPress}) =>{
    return(
        <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
        <FontAwesome5 name={name} size={size} color={color} />
        </View>
        </TouchableOpacity>
    );
};
const styles= StyleSheet.create({
    buttonContainer:{
        borderRadius:24,
        padding:6,
        marginHorizontal:8,
        marginVertical:2,

    }
});

export default IconButton;