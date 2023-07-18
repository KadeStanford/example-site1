import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";

function Menu() {
  return (
    <>
      <div className="menuBox" id="Coffee">
        <h1 className="menuItemTitle">Liberty House Special Brew</h1>
        <div className="menuItemInfo">
          <p className="menuScroll">Scroll here to see our flavors!</p>
          <p className="menuItemPrice" id="hot">
            <span>Hot</span> <span>(12oz.) ...2.95</span>
            <span>(16oz) ...3.95</span>
          </p>
          <p className="menuItemPrice" id="cold">
            <span>Iced**</span> <span>(12oz.) ...3.45</span>
            <span>(16oz) ...4.45</span>
          </p>
          <div className="menuItemDesc">
            <div id="coffeeflavors">
              Coffee Flavors:
              <br />
              Regular or Sugar-Free *
              <div id="flavorNames">
                <div id="flavorList">
                  <li>Vanilla * </li>
                  <li>French Vanilla </li>
                  <li>Mocha</li>
                  <li>Caramel</li>
                  <li>White Chocolate</li>
                  <li>Almond</li>
                </div>
                <div id="flavorList">
                  <li>Hazelnut *</li>
                  <li>Peppermint</li>
                  <li>Coconut</li>
                  <li>Cinnamon Bun</li>
                  <li>Almond Bliss</li>
                  <li>Wedding Cake</li>
                </div>
                <p>**Iced coffee can be served with condensed milk. Yum!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="menuBox" id="Stroopwafel">
        <h1 className="menuItemTitle">Stroopwafel</h1>
        <div className="menuItemInfo">
          <p className="menuItemPrice">
            <span>Per Cookie</span> <span>...1.15</span>
          </p>
          <p className="menuItemDesc">
            *Stroopwafel hails from the Netherlands. It is a crispy, buttery,
            caramel-filled, thin waffle cookie.<br></br> Set it on top of your
            hot coffee and enjoy what happens next!
          </p>
        </div>
      </div>

      <div className="menuBox" id="Tea">
        <h1 className="menuItemTitle">Premium Organic Iced Tea</h1>
        <div className="menuItemInfo">
          <p className="menuItemPrice">
            <span>Black/Hibiscus/Mixed</span>
            <span>(16oz) ...2.39</span>
          </p>
        </div>
      </div>

      <div className="menuBox" id="OrangeJuice">
        <h1 className="menuItemTitle">Orange Juice</h1>
        <div className="menuItemInfo">
          <p className="menuItemPrice">
            <span>By the bottle</span>
            <span>...1.89</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Liberty House Specialties</title>
        <meta
          name="description"
          content="Liberty House, Circa 1868, housed the
            first general store in the Feliciana parishes. Standing tall,
            Liberty House still proudly serves the Feliciana parishes with the
            same dedication to excellent products, service, and long-term
            relationships with the members of our community."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerTextContainer}>
            <h1 className={styles.headerTitle}>Liberty House Specialties</h1>
            <h2 className={styles.headerSubtitle}>
              11652 Liberty Street, Clinton LA
            </h2>
          </div>

          <div className={styles.buttonBox}>
            <button className={styles.button}>About Us</button>
            <button className={styles.button}>Our Menu</button>
            <button className={styles.button}>Events</button>
            <button className={styles.button}>Call in your order!</button>
          </div>
        </div>
        <div className={styles.content}>
          <Menu />
        </div>
      </main>
    </>
  );
}
