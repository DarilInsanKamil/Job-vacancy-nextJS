import { useState } from "react"

export const InputComp = ({ ...rest }) => {
    const [input, setInput] = useState('')
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <input type="text" onChange={handleChange} value={input} {...rest} />
    )
}