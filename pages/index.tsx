import { Inter } from '@next/font/google'
import Info from '../component/Info'
import styles from '../styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Info style={styles.detail}></Info>
      </main>

    </>
  )
}
