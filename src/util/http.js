import axios from "axios";
const BACKEND_URL ="https://mobilep-1d94f-default-rtdb.asia-southeast1.firebasedatabase.app/";

export async function storeMovement(expenseData){
  const response = await axios.post(BACKEND_URL+`/expenses.json`,expenseData);
  const id = response.data.name;
  return id
}
export async function fetchMovements(){ 
  const response =  await axios.get(BACKEND_URL+`/expenses.json`)
  const movements =[];

  for(const key in response.data) {
        const movementObj = {
            id:key,
            date: new Date(response.data[key].date),
            coursecode: response.data[key].coursecode,
            Examroom: response.data[key].Examroom,
            Starttime: response.data[key].Starttime,
            OutOftime: response.data[key].OutOftime,
            coursename: response.data[key].coursename,
        };
        movements.push(movementObj);
    }
       return movements; 
}
export function updateMovement(id,expenseData){
    return axios.put(BACKEND_URL+`/expenses/${id}.json`,expenseData)
}

export function deleteMovement(id){
    return axios.delete(BACKEND_URL+`/expenses/${id}.json`)
}