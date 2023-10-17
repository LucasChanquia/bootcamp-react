import axios from "axios"
import URL from './urlBase'

export const createNotes = ({content, date, important}) =>{
    return axios.post(URL, {content, date, important})
    .then(response => {
      const {data} = response
      return data
    })
}

