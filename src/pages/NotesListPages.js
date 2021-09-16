import React, { useState, useEffect } from 'react'
// import notes from '../assets/Data';
import ListItem from '../components/Listitem';

const NotesListPages = () => {

    let [notes, setNotes] = useState([])

    

    useEffect(()=>{
         getNotes();
    }, [])

    let getNotes = async() => { 
        let response = await fetch('http://127.0.0.1:8000/notes/');
        let data = await response.json();
        console.log("Data: ", data);
        setNotes(data);
    }

    return (
        <div className="notes">
            <div className="notes-header">
                <div className="notes-icon"> &#9782;</div>
                <h2 className="notes-title"> Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>

            <div className="notes-list">
                {notes.map((note, index) => (
                    <ListItem key={index} note={note}/>
                ))}
            </div>
        </div>
    )
}

export default NotesListPages
