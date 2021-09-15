import React from 'react'
import notes from '../assets/Data';
import ListItem from '../components/Listitem';

const NotesListPages = () => {
    return (
        <div classsName="notes">
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
