import { React} from "react";
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const Button = ({children,mode,stlye,onPress}) =>{
    return(
        <View style={stlye}>
         <TouchableOpacity onPress={onPress}>
            <View style={[style.button,mode ==='flat' && style.flat]}> 
                <Text style={[style.buttonText,mode ==='flat'&& stlye.flatText]}> 
                {children}</Text>
            </View>
        </TouchableOpacity>
        </View>
    );
};
const style=StyleSheet.create({
    button: {
        marginTop:15,
        borderRadius:4,
        padding:8,
        backgroundColor:"#2653AF",
    },
    buttonText:{
        color:"#fff",
        textAlign:"center",
    },
    flat:{
        backgroundColor:"transparent",
    },
    flatText:{
        color:"#fff",
    },
})

export default Button;