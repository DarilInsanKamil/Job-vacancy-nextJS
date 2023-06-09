import axios from "axios"
import Cookies from "js-cookie"

export const handleChange = (event, input, setInput) => {
    let name = event.target.name
    let value = event.target.value
    setInput({
        ...input, [name]: value
    })
}
export const handleSubmit = async (event, input, router) => {
    event.preventDefault()
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