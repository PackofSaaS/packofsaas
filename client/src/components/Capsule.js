import React, {useState} from 'react'

export default function Capsule(props) {

    const [className, setClassName] = useState("capsule-style")

    const onMouseOver = () => {
        setClassName("capsule-style-hover")
    }

    const onMouseLeave = () => {
        setClassName("capsule-style")
    }

    
    return (
        <div className={className} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            {props.data}
        </div>
    )
}
