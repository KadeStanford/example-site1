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

      <div className="menuBox" id="HotChocolate">
        <h1 className="menuItemTitle">Hot Chocolate</h1>
        <div className="menuItemInfo">
          <p className="menuItemDesc">Regular or Mint</p>
          <p className="menuItemPrice">
            <span>12oz.</span>
            <span>...2.49</span>
          </p>
          <p className="menuItemDesc">
            Add-ins<br></br>
            Cinnamon Chips or Mini-Marshmellows
          </p>
        </div>
      </div>

      <div className="menuBox" id="Croissant">
        <h1 className="menuItemTitle">Croissant</h1>
        <div className="menuItemInfo">
          <p className="menuItemPrice" id="top">
            <span>Buttered</span>
            <span id="price">...2.95</span>
          </p>
          <p className="menuItemPrice">
            <span>Ham & Swiss</span>
            <span id="price">...5.95</span>
          </p>
          <p className="menuItemPrice">
            <span>Spinach & Feta</span>
            <span id="price">...5.95</span>
          </p>
          <p className="menuItemPrice">
            <span>Almond</span>
            <span id="price">...3.95</span>
          </p>
          <p className="menuItemPrice">
            <span>Chocolate</span>
            <span id="price">...3.75</span>
          </p>
        </div>
      </div>

      <div className="menuBox" id="Scones">
        <h1 className="menuItemTitle">Scones</h1>
        <div className="menuItemInfo">
          <p className="menuItemPrice">
            <span>Blueberry</span>
            <span id="price">...3.89</span>
          </p>
        </div>
      </div>

      <div className="menuBox" id="BSWCC">
        <h1 className="menuItemTitle">Brown Sugar Walnut Coffee Cake</h1>
        <div className="menuItemInfo">
          <p className="menuItemPrice">
            <span>By the slice</span>
            <span id="price">...3.59</span>
          </p>
        </div>
      </div>

      <div className="menuBox" id="CheeseDanish">
        <h1 className="menuItemTitle">Cheese Danish</h1>
        <div className="menuItemInfo">
          <p className="menuItemPrice">
            <span>Per Pastry</span>
            <span id="price">...3.75</span>
          </p>
        </div>
      </div>

      <div className="menuBox" id="RaspberryDanish">
        <h1 className="menuItemTitle">Raspberry Danish</h1>
        <div className="menuItemInfo">
          <p className="menuItemPrice">
            <span>Per Pastry</span>
            <span id="price">...3.75</span>
          </p>
        </div>
      </div>

      <div className="menuBox" id="MorningHarvestMuffin">
        <h1 className="menuItemTitle">Morning Harvest Muffin</h1>
        <div className="menuItemInfo">
          <p className="menuItemPrice">
            <span>Per Muffin</span>
            <span id="price">...3.39</span>
          </p>
        </div>
      </div>

      <div className="menuBox" id="ChocCookie">
        <h1 className="menuItemTitle">Extra Lg.Choc Chunk Cookie</h1>
        <div className="menuItemInfo">
          <p className="menuItemPrice">
            <span>Per Cookie</span>
            <span id="price">...3.69</span>
          </p>
        </div>
      </div>

      <div className="menuBox" id="Biscuits">
        <h1 className="menuItemTitle">Biscuits</h1>
        <div className="menuItemInfo">
          <p className="menuScroll">Large Buttermilk Biscuit w/ Butter</p>
          <p className="menuItemPrice" id="main">
            <span>Per Biscuit</span>
            <span id="price">...2.59</span>
          </p>
          <p className="menuItemDesc">
            <span>
              Add Preserves (Strawberry, Blackberry, Organic, Reduced Sugar
              Cherry Blueberry) ...0.59
            </span>
            <br></br>
            <span>Add Deer Sausage Patty ...1.99</span>
            <br></br>
            <span>Add Egg Bite* ...3.69</span>
          </p>
        </div>
      </div>

      <div className="menuBox" id="Bagels">
        <h1 className="menuItemTitle">Bagels</h1>
        <div className="menuItemInfo">
          {" "}
          <p className="menuScroll">Plain Bagel w/ Butter</p>
          <p className="menuItemPrice">
            <span>Per Bagel</span>
            <span id="price">...2.69</span>
          </p>
          <p className="menuItemDesc">
            <span>(Substitute Cinnamon Butter ...0.30)</span>
            <br></br>
            <span>
              Add Preserves (Strawberry, Blackberry, Organic, Reduced Sugar
              Cherry Blueberry) ...0.59
            </span>
            <br></br>
            <span>Add Deer Sausage Patty ...1.99</span>
            <br></br>
            <span>Add Egg Bite* ...3.69</span>
          </p>
        </div>
      </div>

      <div className="menuBox" id="EggBites">
        <h1 className="menuItemTitle">Egg Bites</h1>
        <div className="menuItemInfo">
          <p className="menuItemPrice">
            <span>Egg Bites (2 per order)</span>
            <span id="price">...6.59</span>
          </p>
          <p className="menuItemDesc">
            Flavor Options:<br></br> Ham & Cheese Chili Pepper<br></br>Spinach
            Feta <br></br>Prosciutto gruyere
          </p>
        </div>
      </div>

      <div className="menuBox" id="Oatmeal">
        <h1 className="menuItemTitle">Oatmeal</h1>
        <div className="menuItemInfo">
          <p className="menuItemPrice">
            <span>Per Bowl</span>
            <span id="price">...3.75</span>
          </p>
          <p className="menuItemPrice">
            <span>Add Chopped Pecans</span>
            <span id="price">...0.65</span>
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
