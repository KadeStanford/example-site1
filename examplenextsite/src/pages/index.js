import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import { Menu } from "@/components/Pages";

export default function Home() {
  return (
    <>
      <Head>
        <title>Liberty House Specialties</title>
        <meta
          name="description"
          content={
            "Liberty House, Circa 1868, housed the first general store in the Feliciana parishes. Standing tall, Liberty House still proudly serves the Feliciana parishes with the same dedication to excellent products, service, and long-term relationships with the members of our community."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <div className={styles.egiftcard}>
          <h1 className={styles.egiftcardTitle}>Ask about our Gift Cards!</h1>
        </div>

        <div className={styles.content}>
          {/* Show the menu by default on the home page */}
          <Menu />
        </div>
      </main>
    </>
  );
}
