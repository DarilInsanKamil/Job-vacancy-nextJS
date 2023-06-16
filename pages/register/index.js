import { useState } from "react";
import { useRouter } from "next/router";
import { handleChangeRegister, handleSubmitRegister } from "@/utils/form-register";
import styles from '@/styles/Register.module.css'
import Link from "next/link";

export default function RegisterPage() {
    const router = useRouter();
    const [open, setOpen] = useState(true)
    const [error, setError] = useState('')
    const [input, setInput] = useState({
        name: '',
        image_url: '',
        email: '',
        password: ''
    })
    const handleFormChange = (event) => handleChangeRegister(event, input, setInput)
    const handleFormSubmit = (event) => handleSubmitRegister(event, input, setError, router)
    const idx = input.password;
    return (
        <div className={styles.form_register_layout}>
            <form onSubmit={handleFormSubmit} className={styles.form_card}>
                <h2 className={styles.title}>Register here</h2>
                <p className={styles.instruction}>Already have an account? <Link href='/login' className={styles.create_acc}>Sign in</Link></p>
                <div className={styles.form_field}>
                    {
                        error != '' ? <section className={styles.error_field}>
                            <p>Incorrect username or password.</p>
                        </section> : <></>
                    }

                    <label className={styles.label_field}>
                        Name
                    </label>
                    <input className={styles.default_field} type="name" name="name" value={input.name} onChange={handleFormChange} required />

                    <section className={styles.image_field}>
                        <label className={styles.label_field}>
                            Image link
                        </label>
                        <img src={input.image_url} className={styles.image} alt="preview" />
                        <input className={styles.default_field} type="text" name="image_url" value={input.image_url} onChange={handleFormChange} required />
                    </section>

                    <label className={styles.label_field}>
                        Email
                    </label>
                    <input className={styles.default_field} type="email" name="email" value={input.email} onChange={handleFormChange} required />

                    <label className={styles.label_field}>
                        Password
                    </label>

                    <section className={styles.password_field}>
                        <input className={styles.password} type={open ? "password" : "text"} name="password" value={input.password} onChange={handleFormChange} autoComplete="off" required />
                        {
                            open ? <img src="./fluent_eye.svg" onClick={() => setOpen(!open)} /> : <img src="./fluent_eye-off.svg" onClick={() => setOpen(!open)} />
                        }
                    </section>
                    <div style={{ width: idx.length < 2 ? "0px" : "0px" && idx.length < 6 ? "100px" : "100px" && idx.length < 8 ? "200px" : "200px" && idx.length < 10 ? '400px' : '400px' && idx.length < 12 ? '466px' : '466px' }}>
                    </div>
                    {/* <p className={styles.instruction}>Minimum length is 8 characters</p> */}
                    <button type="submit" className={styles.button_register}>Register</button>
                    <p className={styles.terms}>By signing in you accept the <Link href="/" className={styles.create_acc}>By clicking Register or registering through a third party you accept the Terms of Use and acknowledge the Privacy Policy and Cookie Policy</Link></p>
                </div>
            </form>
        </div>
    )
}