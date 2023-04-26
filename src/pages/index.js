import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [aboutButtonClicked, setAboutButtonClicked] = useState(false);
  const [menuButtonClicked, setMenuButtonClicked] = useState(false);

  const handleAboutButtonClick = () => {
    setAboutButtonClicked(true);
    setMenuButtonClicked(false);
  };

  const handleMenuButtonClick = () => {
    setMenuButtonClicked(true);
    setAboutButtonClicked(false);
  };

  return (
    <>
      <Head>
        <title>Liberty House Specialties</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        id="images"
        style={{
          opacity: aboutButtonClicked && !menuButtonClicked ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <Image
          id="coffeeimage"
          src="/images/coffee.jpg"
          alt=""
          width={367}
          height={250}
        ></Image>
      </div>
      <div id="headertext">
  <h1 id="title">Liberty House Specialties</h1>
  <h2 id="location">11652 Liberty Street, Clinton LA</h2>
  <button id="about" onClick={handleAboutButtonClick}>
    About Us
  </button>
  <button id="menu" onClick={handleMenuButtonClick}>
    Our Menu
  </button>
    <button id="call">
      Call Us
    </button>
</div>
      <div id="menucontents" style={{
          opacity: aboutButtonClicked && !menuButtonClicked ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}>
        <div id="menucoffee"><h1 id="menucoffeeheader">Liberty House Special Brew:</h1>
        <li className="coffeelisttwelve">12oz.<ul className="subtwelvehot">(Hot) ...2.95</ul><ul className="subtwelvecold">(Iced)** ...3.35</ul> </li> <li className="coffeelistsix">16oz. <ul className="subsixhot">(Hot) ...3.95</ul><ul className="subsixcold">(Iced)** ...4.25</ul></li></div>
      </div>
    </>
  );
}
