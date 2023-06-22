import { Vacancy, ProfilePanel, HeaderBar, FooterBar } from '@/components'
import { getServerSideProps } from '../../utils/get-all-data'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import { Logout } from '@/utils/logout'
export default function JobVacancyPage({ data, name, image }) {
  const router = useRouter()

  const handleClick = (e) => {
    let id = parseInt(e.currentTarget.value);
    console.log('id: ', id)
  }
  const handleLogout = () => Logout(router)
  return (
    <>
      <header>
        <HeaderBar />
      </header>
      <main className={styles.container}>
        <section className={styles.sideBar}>
          <section>
            <ProfilePanel name={name} image={image} />
          </section>
          <form className={styles.filterBar}>
            <h4>Filter</h4>
            <br></br>
            <h5>Job Type</h5>
            <input type="checkbox" id="type4" name="type4" value="Remote" />
            <label htmlFor="type4"> Remote</label><br></br>
            <input type="checkbox" id="type5" name="type5" value="Intern" />
            <label htmlFor="type5"> Intern</label><br></br>
            <input type="checkbox" id="type1" name="type1" value="Part time" />
            <label htmlFor="type1"> Part time</label><br></br>
            <input type="checkbox" id="type2" name="type2" value="Fulltime" />
            <label htmlFor="type2"> Fulltime</label><br></br>
            <input type="checkbox" id="type3" name="type3" value="Contract" />
            <label htmlFor="type3"> Contract</label><br></br>
            <br></br>

            <h5>Experience</h5>
            <input type="checkbox" id="exp1" name="exp1" value="Junior" />
            <label htmlFor="type3"> Kurang dari setahun</label><br></br>
            <input type="checkbox" id="exp1" name="exp1" value="Middle" />
            <label htmlFor="type3"> 1 - 3 tahun</label><br></br>
            <input type="checkbox" id="exp1" name="exp1" value="Senior" />
            <label htmlFor="type3"> 3 - 5 tahun</label><br></br>
            <input type="checkbox" id="exp1" name="exp1" value="Expert" />
            <label htmlFor="type3"> 5 - 10 tahun</label><br></br>
            <br></br>
            <button>Cari</button>

          </form>
        </section>
        <section className={styles.main}>
          <Vacancy data={data} />
        </section>
      </main>
      <footer>
        <FooterBar />
      </footer>
    </>
  )
}
export { getServerSideProps }
