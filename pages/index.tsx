import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {subRedditRecords} from "../data/SubReddit";


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Static React</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Static <a href="https://www.reddit.com/">Reddit!</a>
        </h1>

        <p className={styles.description}>
          Fastest reddit in the world!
        </p>

        <div className={styles.grid}>
          <Link href={`/static/${subRedditRecords.programminghumor.slug}`} passHref>
            <a href="/" className={styles.card}>
              <h3>{subRedditRecords.programminghumor.displayName} &rarr;</h3>
              <p></p>
            </a>
          </Link>

          <Link href={`/static/${subRedditRecords.webdev.slug}`} passHref>
            <a href="/" className={styles.card}>
              <h3>{subRedditRecords.webdev.displayName} &rarr;</h3>
              <p></p>
            </a>
          </Link>

          <Link href={`/static/${subRedditRecords.Frontend.slug}`} passHref>
            <a href="/" className={styles.card}>
              <h3>{subRedditRecords.Frontend.displayName} &rarr;</h3>
              <p></p>
            </a>
          </Link>

          <Link href={`/static/${subRedditRecords.Kotlin.slug}`} passHref>
            <a href="/" className={styles.card}>
              <h3>{subRedditRecords.Kotlin.displayName} &rarr;</h3>
              <p></p>
            </a>
          </Link>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="Href"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/cartoon-turtle.jpeg" alt="turtle" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
