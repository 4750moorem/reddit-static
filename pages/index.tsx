import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {subRedditRecords} from "../data/subReddit";
import {useEffect} from "react";
import {getSubRedditPost} from "../effect/reddit-api";

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

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
