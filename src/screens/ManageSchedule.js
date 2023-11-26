import React, { useContext, useLayoutEffect } from "react";
import { StyleSheet,View } from 'react-native';

import { Fontisto } from '@expo/vector-icons';
import { MovementsContext } from "../course/movements-context";
import MovementForm from "../components/MangeMovements/MovementForm";
import { updateMovement, storeMovement, deleteMovement } from "../util/http";

const ManageSchedule=({route,navigation})=>{ 
    const movId= route.params?.movId; 
    const movementsCtx =useContext(MovementsContext)
    const isEditting =!!movId;

    const selectedMovement = movementsCtx.movements.find((mov) => mov.id === movId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditting ? "Detail Schedule" : "Add Exam Course",
        });
    },
    [navigation, isEditting]);

    const confirmHandler = async (expenseData) =>
    {
        if (isEditting){
            updateMovement(movId, expenseData);
            movementsCtx.updateMovement(movId,expenseData);
        }
        else{
            const id = await storeMovement(expenseData);
            movementsCtx.addMovement({...expenseData, id: id});
        }
            navigation.goBack();
    }

    const deleteHandler = async () =>
    {
        deleteMovement(movId);
        movementsCtx.deleteMovement(movId); 
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <MovementForm 
                onSubmit={confirmHandler}
                submitButtonLabel = {isEditting ? "Update" : "Add" } 
                defaultValues = {selectedMovement}
                />

            {isEditting && (
                <View style={styles.deleteContainer} >
                   <Fontisto 
                    name="trash" 
                    size={40} 
                    color="#2653AF" 
                    onPress={deleteHandler}/>
                </View>
            )}
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:"#FFC13D",
    },
    deleteContainer:{
        marginTop:15,
        paddingTop:15,
        borderTopColor:"#18288D",
        alignItems:"center",
    },
});

export default ManageSchedule;