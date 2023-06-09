import axios from "axios";
import Cookies from "js-cookie";


export const handleChangeLogin = (event, input, setInput) => {
    let name = event.target.name;
    let value = event.target.value;

    setInput({
        ...input, [name]: value
    })
}

export const handleSubmitLogin = async (event, input, router) => {
    event.preventDefault();
    try {
        const res = await axios.post("https://dev-example.sanbercloud.com/api/login", {
            email: input.email,
            password: input.password
        })
    const user = res.data.user;
    const token = res.data.token;
    Cookies.set('user', user.name, { expires: 1 / 48 });
    Cookies.set('email', user.email, { expires: 1 / 48 });
    Cookies.set('token', token, { expires: 1 / 48 });
    router.push('/job-vacancy');

} catch (err) {
    console.error(JSON.stringify(err))
}
}