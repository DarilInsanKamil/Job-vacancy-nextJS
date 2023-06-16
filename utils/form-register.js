import axios from "axios";

export const handleChangeRegister = (event, input, setInput) => {
    let name = event.target.name;
    let value = event.target.value;
    setInput({
        ...input, [name]: value
    })
}

export const handleSubmitRegister = async (event, input, setError, router ) => {
    event.preventDefault();
    try {
        const res = await axios.post(`https://dev-example.sanbercloud.com/api/register`, {
            name: input.name,
            image_url: input.image_url,
            email: input.email,
            password: input.password
        })
        router.push('/login')
    }
    catch (err) {
        console.error(JSON.stringify(err))
        setError(JSON.stringify(err))
    }
}