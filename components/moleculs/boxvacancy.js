import styles from '@/styles/card.module.css'

import { tandaPemisahTitik, date } from '@/utils/converter';


export const BoxVacancy = ({
  title,
  company_image_url,
  company_name,
  company_city,
  job_description,
  job_qualification, salary_min, salary_max, job_type,
  salary,
  tenure,
  updated_at
}) => {
  // const date = new Date(updated_at)

  const min = tandaPemisahTitik(salary_min) || null;
  const max = tandaPemisahTitik(salary_max) || null
  return (
    <div className={styles.card_container}>
      <div className={styles.card_header}>
        <section className={styles.card_title}>
          <img
            src={company_image_url}
            alt={company_name}
            className={styles.card_img}
          />
          <section>
            <h3>{title}</h3>
            <p>{company_name}</p>
          </section>
        </section>
        <section className={styles.card_loc}>
          <h4>{company_city}</h4>
          <p>{date(updated_at)}</p>
        </section>
      </div>
      <div>
        <section className={styles.sec_desc}>
          {job_description.map((point, idx) => (
            <p className={styles.desc} key={idx}>{point}</p>
          ))}
        </section>
        {/* <p >{job_description}</p> */}
        <p>{job_type}</p>
        <section>
          <p>${min} - ${max}USD</p>
          <p>{tenure}</p>
        </section>
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