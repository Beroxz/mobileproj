import React from "react";
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import { getFormattedDate } from "../util/date";

const ScheduleList = ({data}) =>{
    const navigation = useNavigation();
    return <FlatList
    data= {data}
    keyExtractor = {(item)=>item.id}
    renderItem={({item}) => {
        return(

            <TouchableOpacity onPress={() => navigation.navigate("Manage", {movId:item.id})}>
            <View style={styles.movement}>
                <View style={styles.Container}>
                    <View style={styles.ConRow}>
                        <Text style={styles.text}>{getFormattedDate(item.date)}        </Text>
                        <Text style={styles.text}>{item.Starttime} - {item.OutOftime}</Text>
                    </View>
                    <View style={styles.ConRow}>
                    <Text style={styles.coursename}>{item.coursecode}          </Text>
                    <Text style={styles.coursename}>{item.coursename}</Text></View>
                </View>

                <View style={styles.examroomContainer}>
                    <Text style={styles.examroom}>{item.Examroom}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }}
    />;  
};

const styles = StyleSheet.create({
    movement:{
        flexDirection:"row",
        backgroundColor:"#ECA39D",
        padding:15,
        marginVertical:6,
        justifyContent:"space-between",
        elevation:3,
        borderRadius:6,
        shadowColor:"#ECA39D",
        shadowRadius:4,
        textShadowOffset:{width:1,height:1},
        shadowOpacity:0.4,
    },
    coursename:{
        paddingTop:10,
        color: "#18288D",
        fontSize:16,
        fontWeight:"bold"
    },

    text:{
        color: "#18288D",
        fontSize:16,
    },
    Container:{
        paddingHorizontal:12,
        paddingVertical:4,
        alignItems:"flex-start",
        justifyContent:"center",
        borderRadius:4,
        minWidth:80,
        maxWidth:280,
    },
    examroomContainer:{
        backgroundColor:"#fff",
        paddingHorizontal:12,
        paddingVertical:4,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:4,
        minWidth:80,
    },
    examroom:{
        fontWeight:"bold",
        color:"#18288D",
    },
    ConRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

export default ScheduleList;