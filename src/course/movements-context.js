import { createContext,useReducer} from "react";

export const MovementsContext = createContext({
    movements:[],
    setMovement: (movements) => {},
    addMovement:({coursecode,coursename,date,Starttime,OutOftime,Examroom}) => {},
    updateMovement:(id,{coursecode,coursename,date,Starttime,OutOftime,Examroom}) =>{},
    deleteMovement :(id) => {},
})

const movementsReducer = (state,action) =>{
switch(action.type) {
    case"SET":
        return action.payload;

    case"ADD":
        const id = action.payload.id;
        return [{...action.payload,id:id},...state];

    case"UPDATE":
        const movIndex = state.findIndex(mov => mov.id === action.payload.id); //index
        const updatableMov = state[movIndex]; //old mov
        const updatedMov = {...updatableMov, ...action.payload.data}; //update mov
        const updatedMovs = [...state]; //call old arr (movs)
        updatedMovs[movIndex] = updatedMov; //replace arr[index] = new mov
        return updatedMovs;

    case"DELETE":
      return  state.filter((mov) => mov.id !== action.payload); 
    default:
        return state;
    }
};

const MovmentsContextProvider  = ({children}) =>{
    const [movementsState,dispatch] = useReducer( movementsReducer,[] );

    const setMovement=(movements)=>{
        dispatch({type:"SET",payload:movements})}

    const addMovement = (movementsData) => {
        dispatch({type:"ADD",payload:movementsData})}

    const updateMovement = (id,movementsData) => {
        dispatch({type:"UPDATE",payload:{id:id,data:movementsData}})}

    const deleteMovement = (id) => {
        dispatch({type:"DELETE",payload:id})}

    const value ={
        movements: movementsState,
        setMovement:setMovement,
        addMovement:addMovement,
        updateMovement: updateMovement,
        deleteMovement: deleteMovement,
    }

    return(
        <MovementsContext.Provider value={value}>
            {children}
        </MovementsContext.Provider>
    )
}

export default MovmentsContextProvider;