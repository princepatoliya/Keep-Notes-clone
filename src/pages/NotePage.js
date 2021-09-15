import React from 'react'

import notes from '../assets/Data';
import {Link} from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/chevron-left.svg';

const NotePage = ({match}) => {
    let noteId = match.params.id;

    let note = notes.find(note => Number(note.id) === Number(noteId));

    return (
        <div className="note">

            <div className="notes-header">
                <div className="back-note-icon">
                    <Link to="/">
                        <ArrowLeft />
                    </Link>
                </div>
                <h2 className="note-title"> {note?.title}</h2>
            </div>

            <textarea value={note?.body}>
                
            </textarea>

        </div>
    )
}

export default NotePage
