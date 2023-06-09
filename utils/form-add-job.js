import axios from "axios";
import Cookies from "js-cookie";

export const handleChangeFromAddJob = (event, setInput) => {
    let name = event.target.name;
    let value = event.target.value;
    setInput((prevInput) => ({
        ...prevInput,
        [name]: value
    }));
}

export const handleSubmitFromAddJob = async (event, input, router, setInput) => {
    event.preventDefault();
    const config = {
        headers: { Authorization: `Bearer ${Cookies.get('token')}` },
    };
    try {
        const res = await axios.post(`https://dev-example.sanbercloud.com/api/job-vacancy`, input, config)
        const data = res.data
        setInput({
            title: data.title,
            job_description: data.job_description,
            job_qualification: data.job_qualification,
            job_type: data.job_type,
            job_tenure: data.job_tenure,
            job_status: data.job_status,
            company_name: data.company_name,
            company_image_url: data.company_image_url,
            company_city: data.company_city,
            salary_min: data.salary_min,
            salary_max: data.salary_max
        })
        router.push('/job-vacancy')
    } catch (err) {
        console.error(JSON.stringify(err))
    }
}