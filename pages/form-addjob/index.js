import axios from "axios";
import { useState } from "react"
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { handleChangeFromAddJob, handleSubmitFromAddJob } from "@/utils/form-add-job";

export default function FormJobVacancy() {
    const router = useRouter()
    const [input, setInput] = useState({
        title: '',
        job_description: '',
        job_qualification: '',
        job_type: '',
        job_tenure: '',
        job_status: '',
        company_name: '',
        company_image_url: '',
        company_city: '',
        salary_min: '',
        salary_max: ''
    })

    const handleChange = (event) => handleChangeFromAddJob(event, setInput)
    const handleSubmit = (event) => handleSubmitFromAddJob(event,input, router, setInput)
    
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" onChange={handleChange} name="title" value={input.title} />
            <input type="text" placeholder="jod desc" onChange={handleChange} name="job_description" value={input.job_description} />
            <input type="text" placeholder="job qual" onChange={handleChange} name="job_qualification" value={input.job_qualification} />
            <input type="text" placeholder="job type" onChange={handleChange} name="job_type" value={input.job_type} />
            <input type="text" placeholder="job tenure" onChange={handleChange} name="job_tenure" value={input.job_tenure} />
            <input type="text" placeholder="job status" onChange={handleChange} name="job_status" value={input.job_status} />
            <input type="text" placeholder="company name" onChange={handleChange} name="company_name" value={input.company_name} />
            <input type="text" placeholder="com image" onChange={handleChange} name="company_image_url" value={input.company_image_url} />
            <input type="text" placeholder="com city" onChange={handleChange} name="company_city" value={input.company_city} />
            <input type="text" placeholder="salary min" onChange={handleChange} name="salary_min" value={input.salary_min} />
            <input type="text" placeholder="salary max" onChange={handleChange} name="salary_max" value={input.salary_max} />
            <button type="submit">submit</button>
        </form>
    )
}

