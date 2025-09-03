import Head from "next/head";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";
import { IceCream } from "@/components/Pages";

export default function IceCreamPage() {
  return (
    <>
      <Head>
        <title>Ice Cream — Liberty House Specialties</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <IceCream />
        </div>
      </main>
    </>
  );
}
