import React from 'react'

import {Link} from 'react-router-dom';

const Listitem = ({note}) => {

    let getDate = (note) => {
        return new Date(note.updated).toLocaleDateString();
    }

    let getTitle = (note) =>{
        let title = note.body.split('\n')[0];

        if (title.length > 45){
            title = title.slice(0, 45);
        }
        return title
    }

    
    let getContent = (note) => {
        let content = note.body.replaceAll("\n", " ")
        
        content = content.replaceAll(getTitle(note), "");
        
        if (content.length > 45){
            return content.slice(0, 45);
        }
        else{
            return content;
        }
    }

    return (
        <div>
            <Link to={`/note/${note.id}`}>
                <div className="notes-list-item">
                    <h3>{getTitle(note)}</h3>
                    <p><span>{getDate(note)}</span>{getContent(note)}</p>
                </div>
            </Link>
        </div>
    )
}

export default Listitem