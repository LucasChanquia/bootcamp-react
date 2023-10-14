import axios from "axios"

export const getAllNotes = () =>{
    return axios("https://jsonplaceholder.typicode.com/posts",)
    .then(response => {
      const {data} = response
      return data
    })
}