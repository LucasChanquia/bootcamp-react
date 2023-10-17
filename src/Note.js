export const Note = ({ content, date, important})=>{
  const importante = important.toString() 
  return (
      <li>
      <p>{content}</p>
      
      <small>
       {date}
      </small>

      <p>Important: {importante}</p>
      
    </li>
    )
  }

 