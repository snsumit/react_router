import { getData } from "../services/GetDataApi"

export const getDataFromApi = async ()=>{
 
  try {
    const data = await getData();
    return data;
     
  } catch (error) {
    console.log(error)
  }




} 