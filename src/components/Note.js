import React, {useState, useEffect, useRef} from "react";

export default function Note(props) {    
    const textareaEl = useRef(null);
    const smallEl = useRef(null);
    const [description, setDescription] = useState(''); 
    
    // useEffect(() => {
    //     let tagsArrOfSearch = props.tags.split(' ');
    //     let tagsArrOfNote = smallEl.current.innerHTML.split(' ');
    //     let hasMatchingTags = false;
    //     for (let tagOfNote of tagsArrOfNote) {
    //         if (tagsArrOfSearch.includes(tagOfNote)) hasMatchingTags = true;
    //     }
    //     if (hasMatchingTags === false) return null;
    // },)

    function removeNote(e) {
        e.target.parentNode.parentNode.remove();
    }

    function showDescription() {
        textareaEl.current.classList.toggle('hidden');
    }

    function handleChange(e) {
        setDescription(e.target.value);

        let words = e.target.value.split(' ');
        let arrOfTags = [];
        for (let word of words) {
            if (word[0] === '#') {
                arrOfTags.push(word);
            }
        }
        smallEl.current.innerHTML = arrOfTags.join(' ');
    }

    return (
        <li className="list-group-item note" onClick={showDescription} key={props.id}>
            <div className="note-title">
                <div>
                    <span>{props.title}</span>             
                    <small ref={smallEl}></small> {/* this is for displaying tags */}
                </div>            

                <button type="button"
                    className="btn btn-danger btn-sm"
                    onClick={removeNote}>
                    &times;
                </button>
            </div>

            <textarea 
                value={description}
                onChange={handleChange}
                className="hidden mt-4"
                onClick={() => {textareaEl.current.classList.toggle('hidden')}}
                ref={textareaEl}
            />
        </li>
    )
}