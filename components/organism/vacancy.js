import { BoxVacancy } from "../moleculs"

export const Vacancy = ({ data }) => {
    return (
        <>
            {
                data.map((res, idx) => (
                    <BoxVacancy
                        key={idx}
                        company_image_url={res.company_image_url}
                        title={res.title}
                        company_name={res.company_name}
                        company_city={res.company_city}
                        tenure={res.job_tenure}
                        salary_min={res.salary_min}
                        salary_max={res.salary_max}
                        updated_at={res.updated_at}
                        job_description={res.job_description.split('\n')}
                        job_type={res.job_type}
                        job_status={res.job_status}
                    />
                ))
            }
        </>
    )
}