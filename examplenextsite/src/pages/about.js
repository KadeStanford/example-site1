import Head from "next/head";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";
import { About } from "@/components/Pages";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — Liberty House Specialties</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <About />
        </div>
      </main>
    </>
  );
}
