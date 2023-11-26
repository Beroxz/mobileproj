import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";

const MovementForm = ({
    onSubmit,
    submitButtonLabel,
    defaultValues}) => {
    const [input, setInput] = useState({
        date:{ value:defaultValues? getFormattedDate(defaultValues.date): '',isValid:true},
        coursecode: {value:defaultValues? defaultValues.coursecode: '',isValid:true},
        Examroom: {value:defaultValues? defaultValues.Examroom: '',isValid:true},
        Starttime:{ value:defaultValues? defaultValues.Starttime: '',isValid:true},
        OutOftime: {value:defaultValues? defaultValues.OutOftime: '',isValid:true},
        coursename: {value:defaultValues? defaultValues.coursename: '',isValid:true},
    });

    const inputChangeHandler =(inputIdentifier,enteredValue)=>
     {setInput((currentInputValues)=>{
            return{
             ...currentInputValues,
             [inputIdentifier]: {value: enteredValue,isValid: true}
             };
         })
    };

    const submitHandler = () => {
        const expenseData = { 
            date: new Date(input.date.value),
            coursecode: input.coursecode.value,
            Examroom: input.Examroom.value,
            Starttime: input.Starttime.value,
            OutOftime: input.OutOftime.value,
            coursename: input.coursename.value
        }

        const dateIsValid = expenseData.date.toString() !== "Invalid Date";
        const coursecodeIsValid = expenseData.coursecode.trim().length > 0;
        const ExamroomIsValid = expenseData.Examroom.trim().length > 0;
        const StarttimeIsValid = expenseData.Starttime.trim().length > 0;
        const OutOftimeIsValid = expenseData.OutOftime.trim().length > 0;
        const coursenameIsValid = expenseData.coursename.trim().length > 0;
        
        if(!dateIsValid || !coursecodeIsValid  || !ExamroomIsValid || !StarttimeIsValid || !OutOftimeIsValid || !coursenameIsValid){
            //Alert.alert("Invalid Input","Please correct your input values");
            setInput((currentInputs)=>{
                return{
                    date:{value:currentInputs.date.value,isValid: dateIsValid},
                    coursecode:{value:currentInputs.coursecode.value,isValid: coursecodeIsValid},
                    Examroom:{value:currentInputs.Examroom.value,isValid: ExamroomIsValid},
                    Starttime:{value:currentInputs.Starttime.value,isValid: StarttimeIsValid},
                    OutOftime:{value:currentInputs.OutOftime.value,isValid: OutOftimeIsValid},
                    coursename:{value:currentInputs.coursename.value,isValid: coursenameIsValid},
                }
            })
            return;
        }
    
        onSubmit(expenseData)
    };
     const formIsInvalid=
     !input.date.isValid || !input.coursecode.isValid  || !input.Examroom.isValid || !input.Starttime.isValid || !input.OutOftime.isValid || !input.coursename.isValid;
    return(
        <View style={styles.vvi}>
        <View style={styles.form}>
           <Text style={styles.title}>Your Exam Schedule</Text>
            <View style={styles.inputsRow}>
                <Input 
                    style={styles.rowInput}
                    label="Course Code"
                    textInputConfig ={{
                    keyboardType: "decimal-pad",
                    onChangeText: inputChangeHandler.bind(this, "coursecode"),
                    maxLength: 8 ,
                    value: input.coursecode.value,
                    }}/>

               <Input 
                    style={styles.rowInput}
                    label="Exam Room" 
                    textInputConfig = {{  
                    onChangeText: inputChangeHandler.bind(this, "Examroom"),
                    value: input.Examroom.value,
                    }}/>

            </View>
                <Input 
                    label="Course Name" 
                    textInputConfig ={{  
                    onChangeText: inputChangeHandler.bind(this, "coursename"),
                    value: input.coursename.value,
                    }}/>

            <View style={styles.inputsRow}>
                <Input 
                    label="Date" 
                    textInputConfig ={{ 
                    keyboardType: "decimal-pad",
                    placeholder: "YYYY-MM-DD ", 
                    maxLength: 10 , 
                    onChangeText: inputChangeHandler.bind(this, "date"),
                    value: input.date.value,
                    }}/>
            </View>
            <View style={styles.inputsRow}>
                <Input 
                    style={styles.rowInput}
                    label="Start" 
                    textInputConfig ={{ 
                    keyboardType: "decimal-pad",
                    placeholder: "00.00", 
                    maxLength: 5 , 
                    onChangeText: inputChangeHandler.bind(this, "Starttime"),
                    value: input.Starttime.value,
                    }}/>
                <Input 
                    style={styles.rowInput}
                    label="Out Of"
                    textInputConfig ={{ 
                    keyboardType: "decimal-pad",
                    placeholder: "00.00", 
                    maxLength: 5 , 
                    onChangeText: inputChangeHandler.bind(this, "OutOftime"),
                    value: input.OutOftime.value,
                    }}/>
            </View>
            {formIsInvalid&&(<Text style={styles.Error}>Invalid Invalid</Text>)}

            <View style={styles.buttons}>  
                <Button stlye={styles.button} onPress={submitHandler}>
                    {submitButtonLabel} 
                </Button>  
            </View>
            </View>
            </View>
    );
};

const styles = StyleSheet.create({
    form: {
        marginTop: 15,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#18288D",
        marginVertical: 24,
        textAlign: "center",
    },
    inputsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rowInput: {
        flex: 1,
    },
    buttons:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    button:{
        paddingVertical:20,
        minWidth:120,
        marginHorizontal:8,
    },
    vvi:{
        backgroundColor:"#F7AFBB",
        marginTop: 20,
        padding: 16,
        borderRadius: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width:1, height:1},
        shadowOpacity: 0.35,
        shadowRadius: 4,
    }
})
export default MovementForm;