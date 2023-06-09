import Link from 'next/link'
export default function Home() {
const API_LOGIN = process.env.MAIN_API_URL
console.log(API_LOGIN)
  return (
    <main>
      <Link href="/job-vacancy">job vacancy</Link>
    </main>
  )
}
