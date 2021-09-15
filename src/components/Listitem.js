import React from 'react'

import {Link} from 'react-router-dom';

import NotePage from '../pages/NotePage';

const Listitem = ({note}) => {

    return (
        <div>
            <h3>
                <Link to={`/note/${note.id}`}>
                    {note.body}
                </Link>
            </h3>
        </div>
    )
}

export default Listitem