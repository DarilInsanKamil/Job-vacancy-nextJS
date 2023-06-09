export const BoxVacancy = ({
  title,
  company_image_url,
  company_name,
  company_city,
  job_description,
  job_qualification, salary_min, salary_max, job_type,
  salary,
  tenure,
}) => {
  return (
    <div>
      <img
        src={company_image_url}
        alt={company_name}
        width={50}
        height={"fit-content"}
      />
      <div>
        <h3>{title}</h3>
        <p>{company_name}</p>
      </div>
      <div>
        <p>{job_description}</p>
        <p>{job_qualification}</p>
        <p>{job_type}</p>
        <p>{salary_min}</p>
        <p>{salary_max}</p>
        <p>{company_city}</p>
        <p>{salary}</p>
        <p>{tenure}</p>
      </div>
    </div>
  );
};


// title : string, Contoh value -> FrontendDeveloper
// job_description : string, Contoh value ->  Melakukan implementasi tampilan web dll
// job_qualification : string, Contoh value -> Harus bisa React dll
// job_type : string, Contoh value -> onSite/work from home/hybird
// job_tenure : string, Contoh value -> kontrak, magang dll
// job_status : integer,  Contoh value -> 0 dan 1. 0 untuk Ditutup, 1 untuk Dibuka
// company_name : string, Contoh value -> Google
// company_image_url : string, Contoh value -> Bisa cari di google atau www.istockphoto.com dengan keyword company logo, klik kanan pada gambar lalu copy image address
// company_city : string, Contoh value -> Jakarta
// salary_min : integer, Contoh value -> 9000000
// salary_max : integer, Contoh value -> 10000000