import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>Hi, This is Pranto Chakraborty</h1>
        <p className={styles.detail}>A passionate web developer. My core skill is based on React (frontend) and Laravel (backend) and I love to do most things using these technologies. I love to learn new technology, coding, play chess and cricket, travelling, listen to music, watch movies and tv series, and helps other. I graduated with a bachelor's degree in Computing from the University of Greenwich, in 2021. I am available for any kind of job opportunity that suits my interests.</p>
      </main>

    </>
  )
}
