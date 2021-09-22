import React from 'react'

import {Link} from 'react-router-dom';

const Listitem = ({note}) => {
    return (
        <div>
            <Link to={`/note/${note.id}`}>
                <div className="notes-list-item">
                    <h2>{note.title}</h2> 
                    <h3>{note.body}</h3>
                </div>
            </Link>
        </div>
    )
}

export default Listitem