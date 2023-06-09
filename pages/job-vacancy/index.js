import { SideBar, Vacancy } from '@/components'
import { getServerSideProps } from '../api/jobapi'
import styles from '../../styles/Home.module.css'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

export default function JobVacancyPage({data}) {
  const router = useRouter()
  const handleLogout = () =>{
    Cookies.remove('user', { path: '/', domain: 'localhost'  })
    Cookies.remove('email', { path: '/', domain: 'localhost' })
    Cookies.remove('token', { path: '/', domain: 'localhost' })
    router.push('/login')
  }
  return (
    <main className={styles.main}>
      <Vacancy data={data}/>
      <SideBar />
      <button onClick={handleLogout} type='button'>logout</button>
    </main>
  )
}
export { getServerSideProps }
