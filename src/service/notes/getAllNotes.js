import axios from "axios"
import URL from './urlBase'
export const getAllNotes = () =>{
    return axios(URL)
    .then(response => {
      const {data} = response
      return data
    })
}