import { Logout } from "@/utils/logout"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import styles from '@/styles/profile.module.css'

export const ProfilePanel = ({ name, image }) => {
    const router = useRouter()
    const handleLogout = () => Logout(router)
    const handleLogin = () => {
        router.push('/login')
    }
    const handlePassword = () => {
        router.push('/change-password')
    }
    return (
        <div className={styles.container}>
            <section className={styles.section1}>
                <img src={image === null ? './person.svg' : image} alt="profile-pict" className={styles.imgprofile} draggable='false' />
                <h4>{name}</h4>
                <p>
                    {
                        name === null ? "Login dulu" : "Fresh Graduate"
                    }
                </p>
            </section>
            <div className={styles.line}></div>
            {
                name === null ? <button onClick={handleLogin} className={styles.button}>Login</button> : <button onClick={handleLogout} className={styles.button}><img src="./seting.svg" />Setting</button>
            }
            
        </div>
    )
}