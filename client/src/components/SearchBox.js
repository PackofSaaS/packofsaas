import React from 'react'

export default function SearchBox(props) {
    return (
        <div>
             <input type="text"
             className="textinput"
             value = {props.search}
             onChange={event => props.onChange(event.target.value)}
             />
        </div>
    )
}
