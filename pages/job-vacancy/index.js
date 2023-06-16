import { Vacancy, ProfilePanel } from '@/components'
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
      <main className={styles.container}>
        <div className={styles.main}>
        <Vacancy data={data} />
        </div>
      </main>
      <section>
        <ProfilePanel name={name} image={image} />
      </section>
      <footer>
        <button onClick={handleLogout} type='button'>logout</button>
      </footer>
    </>
  )
}
export { getServerSideProps }
