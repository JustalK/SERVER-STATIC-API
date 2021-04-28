import Head from 'next/head'
import styles from '@src/styles/Home.module.scss'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Static App - justalk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Static App - justalk</h1>
      </main>

      <footer className={styles.footer}>
        ***
      </footer>
    </div>
  )
}
