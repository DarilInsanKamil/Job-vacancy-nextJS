import styles from '@/styles/card.module.css'

import { tandaPemisahTitik, date } from '@/utils/converter';
import { useState } from 'react';


export const BoxVacancy = ({
  title,
  company_image_url,
  company_name,
  company_city,
  job_status,
  job_description,
  job_qualification, salary_min, salary_max, job_type,
  salary,
  tenure,
  updated_at
}) => {
  const [click, setClick] = useState(false)

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
            <p>{company_name} {job_status == 1 ? "• aktif merekrut" : " "}</p>
          </section>
        </section>
        <section className={styles.card_loc}>
          <h4><img src="./location.svg" alt="icon-location" /> {company_city}</h4>
          <p>{date(updated_at)}</p>
        </section>
      </div>
      <div>
        <section className={styles.sec_desc}>
          {job_description.map((point, idx) => (
            <p className={styles.desc} key={idx}>{point}</p>
          ))}
        </section>
        <ul className={styles.list_container}>
          <section className={styles.list_view}>
            <li className={styles.salary}>IDR{min} - IDR{max}</li>
            <li className={styles.type}>{job_type}</li>
            <li className={styles.tenure}>{tenure}</li>
          </section>
          <button className={styles.bookmark} onClick={() => setClick(!click)}>
            {
              click ? <img src='./bookmark-fill.svg' alt="bookmark-icon" /> : <img src='./bookmark.svg' alt="bookmark-icon" />
            }
          </button>
        </ul>
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