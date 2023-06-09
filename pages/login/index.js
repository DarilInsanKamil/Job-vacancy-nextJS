import { useState } from "react"
import { useRouter } from "next/router"
import { handleChangeLogin, handleSubmitLogin } from '@/utils/form-login'
import styles from '@/styles/Login.module.css'
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()

  const [input, setInput] = useState({
    email: '',
    password: ''
  })
  const [open, setOpen] = useState(false)

  const handleFormChange = (event) => handleChangeLogin(event, input, setInput)
  const handleFormSubmit = (event) => handleSubmitLogin(event, input, router)

  return (
    <div className={styles.form_login_layout}>
      <form onSubmit={handleFormSubmit} className={styles.form_card}>
        <h2 className={styles.title}>Login here</h2>
        <p className={styles.instruction}>New user? <Link href='/register' className={styles.create_acc}>Create an account</Link></p>
        <div>
          <label>
            Email
          </label>
          <input type="email" placeholder="email" name="email" value={input.email} onChange={handleFormChange} required/>
          <label>
            Password
          </label>
          <section className={styles.password_field}>
            <input className={styles.password} type={open ? "password" : "text"} placeholder="password min 8 digit" name="password" value={input.password} onChange={handleFormChange} required />
            {
              open ? <img src="./fluent_eye-off.svg" onClick={() => setOpen(!open)} /> : <img src="./fluent_eye.svg" onClick={() => setOpen(!open)} />
            }
          </section>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}