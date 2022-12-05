import React from "react";

export default function Note(props) {
    return (
        <li className="list-group-item note" key={props.id}>
            <div>
                <span>{props.title}</span>             
                <small></small>   
            </div>            

            <button type="button" className="btn btn-danger btn-sm">&times;</button>
        </li>
    )
}