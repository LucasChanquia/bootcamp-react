import "./App.css";
import { Note } from "./Note.js";
import { useState, useEffect } from "react";
import {getAllNotes} from './service/notes/getAllNotes'
import { createNotes } from "./service/notes/createNote";

function App() {
  const [notes, setNotes] = useState();
  const [newNote, setNewNote] = useState("");

  useEffect(()=>{
    getAllNotes()
    .then(notes =>{
      setNotes(notes)
    })
  },[])


  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteToAddState = {
      
      content: newNote,
      date: new Date().toISOString(),
 
    };

    createNotes(noteToAddState)
    .then(note =>{
      setNotes(prevNotes => prevNotes.concat(note))
      setNewNote("");
    })
   


    
    //setNotes([...notes, noteToAddState]);

  };

  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {notes?.map((note) => {
          return <Note key={note.id} {...note} />;
        })}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear Nota</button>
      </form>
    </div>
  );
}

export default App;
