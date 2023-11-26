import React from "react";
import { StyleSheet, Text, View,Image } from 'react-native';

import ScheduleList from "./ScheduleList";

const ScheduleOutput=({movements}) => {
    return(
        <View style={styles.container}>
            <ScheduleList data={movements}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:24,
        backgroundColor:"#FFC13D",
    },
});

export default ScheduleOutput;