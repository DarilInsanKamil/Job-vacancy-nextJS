import { useState } from "react"

export const CheckBox = ({label, ...rest}) => {
    const [checked, setChecked] = useState(false)
    const handleChange = (e) => {
        setChecked(e.target.checked)
    }
    return (
        <>
        <input type="checkbox" checked={checked} onChange={handleChange}{...rest}/>
        <label>{label}</label>
        </>
    ) 
}