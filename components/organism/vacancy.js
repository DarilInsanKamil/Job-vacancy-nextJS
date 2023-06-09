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
                        salary={res.salary}
                        tenure={res.tenure}
                        salary_min={res.salary_min}
                        salary_max={res.salary_max}             
                    />
                ))
            }
        </>
    )
}