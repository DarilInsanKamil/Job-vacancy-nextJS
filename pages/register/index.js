import { useState } from "react";
import { useRouter } from "next/router";
import { handleChangeRegister, handleSubmitRegister } from "@/utils/form-register";

export default function RegisterPage() {
    const router = useRouter();
    const [input, setInput] = useState({
        name: '',
        image_url: '',
        email: '',
        password: ''
    })
    const handleFormChange = (event) => handleChangeRegister(event, input, setInput)
    const handleFormSubmit = (event) => handleSubmitRegister(event, input, router)

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="name" name="name" value={input.name} onChange={handleFormChange} />
            <input type="text" placeholder="image link" name="image_url" value={input.image_url} onChange={handleFormChange} />
            <input type="text" placeholder="email" name="email" value={input.email} onChange={handleFormChange} />
            <input type="text" placeholder="password min 8 digit" name="password" value={input.password} onChange={handleFormChange} />
            <button type="submit">Register</button>
        </form>
    )
}