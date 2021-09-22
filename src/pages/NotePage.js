import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/chevron-left.svg';

const NotePage = ({match, history}) => {
    let noteId = match.params.id;
    let [note, setNote] = useState(null);

    useEffect(() => {
        getNote();
    }, [noteId])

    let getNote = async() =>{
        if(noteId === "new"){
            return
        }
    
        let response = await fetch(`http://localhost:8000/notes/${noteId}`);
        let data = await response.json();
        setNote(data);
    }

    let createNote = async() => {
        await fetch(`http://localhost:8000/notes/`, {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({ ...note, 'updated': new Date() })
        })
    }

    let updateNote = async() => {
        await fetch(`http://localhost:8000/notes/${noteId}`, {
            method: "PUT",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({ ...note, 'updated': new Date() })
        })
    }

    let deleteNote = async() => {
        await fetch(`http://localhost:8000/notes/${noteId}`, {
            method: "DELETE",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(note)
        })
        // console.log("Deleteeeeeeeeeeeeee")
        history.push('/')
    }

    let handleSubmit = () => {

        if(noteId !== 'new' && !note.body){ 
            console.log("DeleteNote Successfully.")
            deleteNote();
        }
        else if(noteId !== 'new'){
            console.log("UpdateNote Successfully.")
            updateNote();
        }
        else if(noteId === 'new' && note !== null){
            console.log("CreateNote Successfully.")
            createNote();
        }     
        history.push('/');
    }

    return (
        <div className="note">

            <div className="note-header">
                <div className="back-note-icon">
                    <Link to="/">
                        <ArrowLeft onClick={handleSubmit} />
                    </Link>
                </div>
                <h1 className="note-title"></h1>
                
                {noteId !== "new" ? (
                    <button onClick={deleteNote}>DELETE</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}
                
            </div>

            <textarea onChange={(e) => {setNote({ ...note, 'body': e.target.value })} } value={note?.body}>
                
            </textarea>

        </div>
    )
}

export default NotePage
