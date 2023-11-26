import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = ({label, textInputConfig, style,invalid}) => {
    const inputStyles = [styles.input]

    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline)
    }
    if(invalid){
        inputStyles.push(styles.invalidInput);
    }

    return(
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label,invalid && styles.invalidLabel]}>
                {label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer : {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    inputStyles : {},
    input: {
        padding:5,
        paddingLeft:10,
        backgroundColor : "#fff",
        color: "black",
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: "top",

    },
    label : {
        fontSize: 18,
        color: "black",
        marginBottom: 4,
    },
})

export default Input;