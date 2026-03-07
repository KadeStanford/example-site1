import Head from "next/head";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";
import { Menu } from "@/components/Pages";

export default function MenuPage() {
  return (
    <>
      <Head>
        <title>Menu — Liberty House Specialties</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <Menu />
        </div>
      </main>
    </>
  );
}
