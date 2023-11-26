import { useContext,useEffect, useState } from "react";
import ScheduleOutput from "../components/ScheduleOutput";
import { MovementsContext } from "../course/movements-context";
import { fetchMovements } from '../util/http';
const ScheduleScreens =()=>{
    const [isFetching,setIsFetching]= useState(true)
    const movementsCtx = useContext(MovementsContext);
    useEffect (()=>
    {
        async function getMovement()
        { 
            setIsFetching(true)
    const movement = await fetchMovements(); 
        setIsFetching(false)
            movementsCtx.setMovement(movement)
        }
        getMovement()},[]
    )

    return <ScheduleOutput movements={movementsCtx.movements}/>;
}

export default ScheduleScreens;