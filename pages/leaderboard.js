import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Leaderboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>swolidity | swol leaderboard</title>
        <meta name="description" content="swol leaderboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <h3>your swol is not swol</h3>
        </div>
      </main>
    </div>
  );
}
