import Head from "next/head";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";
import { Events } from "@/components/Pages";

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>The Pottery Shoppe — Liberty House Specialties</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <Events />
        </div>
      </main>
    </>
  );
}
