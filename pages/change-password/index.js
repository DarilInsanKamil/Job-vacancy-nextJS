import { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import Cookies from "js-cookie"

export default function ChangePasswordPage() {

    const router = useRouter()
    const [input, setInput] = useState({
        current_password: '',
        new_password: '',
        new_confirm_password: ''
    })

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setInput({
            ...input, [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const config = {
            headers: { Authorization: `Bearer ${Cookies.get('token')}` },
        }
        try {
            if (input.new_password === input.new_confirm_password) {
                const res = await axios.post('https://dev-example.sanbercloud.com/api/change-password', input, config)
                router.push('/job-vacancy')
            }
        } catch (err) {
            console.error(JSON.stringify(err))
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Masukan password sekarang" name="current_password" onChange={handleChange} value={input.current_password} />
            <input type="text" placeholder="Masukan password baru" name="new_password" onChange={handleChange} value={input.new_password} />
            <input type="text" placeholder="Konfirmasi password baru" name="new_confirm_password" onChange={handleChange} value={input.new_confirm_password} />
            <button type="submit">submit</button>
        </form>
    )
}