import React from 'react'

import notes from '../assets/Data';

const NotePage = ({match}) => {

    const styleObj ={
        color: "red",
    }

    let noteId = match.params.id;

    let note = notes.find(note => Number(note.id) === Number(noteId));

    return (
        <div>
            <h4>Note: {noteId}</h4>
            <h3>{note?.body}</h3>
        </div>
    )
}

export default NotePage
