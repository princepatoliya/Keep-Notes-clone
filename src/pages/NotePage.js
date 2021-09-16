import React, {useState, useEffect} from 'react'

import notes from '../assets/Data';
import {Link} from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/chevron-left.svg';

const NotePage = ({match, history}) => {
    let noteId = match.params.id;
    // let note = notes.find(note => Number(note.id) === Number(noteId));
    let [note, setNote] = useState(null);

    useEffect(() => {
        getNote();
    }, [noteId])

    let getNote = async() =>{
        let response = await fetch(`http://127.0.0.1:8000/notes/${noteId}/`);
        let data = await response.json();
        setNote(data);
    }

    let updateNote = async() => {
        await fetch(`http://127.0.0.1:8000/notes/${noteId}/`, {
            method: "PUT",
            headers:{
                "content" : "appliction/json",
            },
            body:JSON.stringify({ ...note, 'updated': new Date() })
        })
    }

    let handleSubmit = () => {
        updateNote();
        history.push('/');
    }

    return (
        <div className="note">

            <div className="notes-header">
                <div className="back-note-icon">
                    <Link to="/">
                        <ArrowLeft onClick={handleSubmit}/>
                    </Link>
                </div>
                <h1 className="note-title"> {note?.title}</h1>
            </div>

            <textarea onChange={(e) => {setNote({ ...note, 'body':e.target.value })} } value={note?.body}>
                
            </textarea>

        </div>
    )
}

export default NotePage
