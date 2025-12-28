import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerTextContainer}>
        <h1 className={styles.headerTitle}>Liberty House Specialties</h1>
        <h2 className={styles.headerSubtitle}>
          11652 Liberty Street, Clinton LA
        </h2>
      </div>

      <div className={styles.buttonBox}>
        <Link href="/about">
          <button className={styles.button}>About Us</button>
        </Link>
        <Link href="/menu">
          <button className={styles.button}>Our Menu</button>
        </Link>
        {/* <Link href="/events">
          <button className={styles.button}>Pottery</button>
        </Link> */}
        <Link href="/icecream">
          <button className={styles.button}>Ice Cream</button>
        </Link>
        <button className={styles.button}>
          <a id="call" href="tel:+12256839342">
            Call in your order!
          </a>
        </button>
      </div>
    </div>
  );
}
