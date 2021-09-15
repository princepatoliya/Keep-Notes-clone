import React from 'react'

import {Link} from 'react-router-dom';

import NotePage from '../pages/NotePage';

const Listitem = ({note}) => {
    let body = note.body.substring(0,60) + "...";

    return (
        <div>
            <Link to={`/note/${note.id}`}>
                <div className="notes-list-item">
                    <h3><h2>{note.title}</h2> {body}</h3>
                </div>
            </Link>
        </div>
    )
}

export default Listitem