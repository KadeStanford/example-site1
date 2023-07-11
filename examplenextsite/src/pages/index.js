import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("");

  const handleAboutButtonClick = () => {
    setCurrentPage("about");
  };

  const handleMenuButtonClick = () => {
    setCurrentPage("menu");
  };

  const handleEventButtonClick = () => {
    setCurrentPage("events");
  };

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
      <main className="main">
        <div className="image-container1">
          <img id="house" src="/images/house11.png" alt="house"></img>
          <div className="menu-top">
            <div id="title">Liberty House Specialties</div>
            <div id="location">11652 Liberty Street, Clinton LA</div>

            <div id="toprow">
              <a id="about" onClick={handleAboutButtonClick}>
                About Us
              </a>
              <a id="menu" onClick={handleMenuButtonClick}>
                Our Menu
              </a>

              <a id="events" onClick={handleEventButtonClick}>
                Events
              </a>

              <a id="call" href="tel:+12256839342">
                Call in your order
              </a>
            </div>

            <div id="egiftcardnote">Ask about our E-GiftCards!</div>
          </div>
        </div>

        <div
          id="images"
          style={{
            opacity: currentPage == "" || currentPage === "menu" ? 1 : 0,
            visibility:
              currentPage == "" || currentPage === "menu"
                ? "visible"
                : "hidden",
            height: currentPage == "" || currentPage === "menu" ? "10%" : "0%",
            transition:
              "height 0.5s ease-in-out, opacity 0.1s ease-in-out, visibility 0.5s ease-in-out",
          }}
        >
          <div className="image-container">
            <img id="coffeeimage" src="/images/coffee.png" alt="Coffee" />
            <div className="menu-content">
              <div id="menucoffeeheader">Liberty House Special Brew</div>
              <div id="menucoffee" style={{ overflowY: "scroll" }}>
                <p id="coffee">Scroll here to see our flavors!</p>

                <li className="coffeelisttwelve">
                  <div id="hot">Hot</div>
                  <ul className="coffeelist subtwelvehot">
                    <li>
                      (12oz.)
                      <br /> ...2.95
                    </li>
                  </ul>
                  <ul className="subtwelvecold">
                    <li>
                      (16oz) <br /> ...3.95
                    </li>
                  </ul>
                </li>
                <li className="coffeelistsix">
                  <div id="iced">Iced**</div>
                  <ul className="subsixhot">
                    <li>
                      (12oz.)
                      <br /> ...3.45
                    </li>
                  </ul>
                  <ul className="subsixcold">
                    <li>
                      (16oz.) <br /> ...4.45
                    </li>
                  </ul>
                </li>
                <div id="milknote">
                  <div id="stroop">
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
                      </div>
                    </div>
                  </div>
                  <br />
                  <div id="icednote">
                    **Iced coffee can be served with condensed milk. Yum!
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="image-container">
            <img
              id="stroopimage"
              src="/images/stroop.png"
              alt="Stroopwafel"
            ></img>
            <div className="menu-content">
              <div id="stroopheader">Stroopwafel</div>
              <div id="menustroop">
                <li id="stroopprice">
                  <div id="wholestroop">
                    <div id="perstroop">Per cookie</div>
                    <div id="sp">...1.15</div>
                  </div>
                </li>
                <div id="stroopnote">
                  *Stroopwafel hails from the Netherlands. It is a crispy,
                  buttery, caramel-filled, thin waffle cookie. <br></br>Set it
                  on top of your hot coffee and enjoy what happens next!
                </div>
              </div>
            </div>
          </div>

          <div className="image-container">
            <img id="teaimage" src="/images/tea.png" alt="Tea"></img>
            <div className="menu-content">
              <div className="tealist">
                Premium,<br></br> Organic Iced Tea
              </div>
              <div className="menutea">
                <li id="teasix">
                  <div id="teatype">Black/Hibiscus/Mixed (16oz.) </div>
                  <div id="teaprice">...2.39 </div>
                </li>
              </div>
            </div>
          </div>

          <div className="image-container">
            <img
              id="orangeimage"
              src="/images/orange.png"
              alt="Orange Juice"
            ></img>
            <div className="menu-content">
              <div id="orangeheader">Orange Juice</div>
              <div id="menuorange">
                <li id="orangeprice">
                  <div id="wholeorange">
                    <div id="glass">By the bottle</div>
                    <div id="op">...1.89</div>
                  </div>
                </li>
              </div>
            </div>
          </div>

          <div className="image-container">
            <img
              id="hotchocimage"
              src="/images/hotchoc.png"
              alt="Hot Chocolate"
            ></img>
            <div className="menu-content">
              <div id="hotchocheader">Hot Chocolate</div>{" "}
              <div id="limited">(Oct. - Mar)</div>
              <div id="menuhotchoc">
                <div id="regormint">Regular or Mint</div>{" "}
                <li id="hotchocprice">
                  <div id="addins">
                    Add-ins:<br></br>Cinnamon Chips or Mini-Marshmellows
                  </div>
                  <div id="wholehotchoc">
                    <div id="glasshotchoc">12oz.</div>
                    <div id="hcp">...2.49</div>
                  </div>
                </li>
              </div>
            </div>
          </div>

          <div className="image-container">
            <img
              id="croissantimage"
              src="/images/croissant.png"
              alt="Croissant"
            ></img>
            <div className="menu-content">
              <div id="croissantheader">Croissants</div>
              <div id="menucroissant">
                <div id="croissantflavors">
                  <li id="buttered">
                    <div id="croissantflavor">Buttered</div>
                    <div id="cp1">...2.95</div>
                  </li>
                  <li id="ham">
                    <div id="croissantflavor">Ham and Swiss</div>
                    <div id="cp2">...5.95</div>
                  </li>
                  <li id="spinach">
                    <div id="croissantflavor">Spinach and Feta</div>
                    <div id="cp5">...5.95</div>
                  </li>
                  <li id="almond">
                    <div id="croissantflavor">Almond</div>
                    <div id="cp3">...3.95</div>
                  </li>
                  <li id="chocolate">
                    <div id="croissantflavor">Chocolate</div>
                    <div id="cp4">...3.75</div>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div className="image-container">
            <img
              id="blueberryimage"
              src="/images/blueberry.png"
              alt="Scone"
            ></img>
            <div className="menu-content">
              <div id="scones">Scones</div>
              <div id="menuscone">
                <li id="sconeprice">
                  <div id="blueberry">Blueberry</div>
                  <div id="bp">...3.89</div>
                </li>
              </div>
            </div>
          </div>

          <div className="image-container">
            <img id="brownimage" src="/images/brown.png" alt="Brown"></img>
            <div className="menu-content">
              <div id="brownsugarcakeheader">
                Brown Sugar Walnut<br></br>Coffee Cake
              </div>
              <div id="menubrownsugarcake">
                {" "}
                <li id="cakeprice">
                  <div id="slice">Per Slice</div>
                  <div id="sliceprice">...3.59</div>
                </li>{" "}
              </div>
            </div>
          </div>

          <div className="image-container">
            <img
              id="cheesedanishimage"
              src="/images/cheesedanish.png"
              alt="Cheese Danish"
            ></img>
            <div className="menu-content">
              <div id="cheesedanishheader">Cheese Danish</div>
              <div id="menucheesedanish">
                {" "}
                <li id="cheesedanishprice">
                  <div id="slicecheese">Per Pastry</div>
                  <div id="slicepricecheese">...3.75</div>
                </li>{" "}
              </div>
            </div>
          </div>

          <div className="image-container">
            <img
              id="raspberrydanishimage"
              src="/images/raspberrydanish.png"
              alt="Raspberry Danish"
            ></img>
            <div className="menu-content">
              <div id="raspberrydanishheader">Raspberry Danish</div>
              <div id="menuraspberrydanish">
                {" "}
                <li id="raspberrydanishprice">
                  <div id="sliceraspberry">Per Pastry</div>
                  <div id="slicepriceraspberry">...3.75</div>
                </li>{" "}
              </div>
            </div>
          </div>

          <div className="image-container">
            <img
              id="raspberrydanishimage"
              src="/images/muffin.JPG"
              alt="Muffin"
            ></img>
            <div className="menu-content">
              <div id="raspberrydanishheader">Morning Harvest Muffin</div>
              <div id="menuraspberrydanish">
                {" "}
                <li id="raspberrydanishprice">
                  <div id="sliceraspberry">Per Muffin</div>
                  <div id="slicepriceraspberry">...3.39</div>
                </li>{" "}
              </div>
            </div>
          </div>

          <div className="image-container">
            <img
              id="raspberrydanishimage"
              src="/images/cookie.png"
              alt="cookie"
            ></img>
            <div className="menu-content">
              <div id="raspberrydanishheader">Extra Lg. Choc Chunk Cookie</div>
              <div id="menuraspberrydanish">
                {" "}
                <li id="raspberrydanishprice">
                  <div id="sliceraspberry">Per Cookie</div>
                  <div id="slicepriceraspberry">...3.69</div>
                </li>{" "}
              </div>
            </div>
          </div>

          <div className="image-container">
            <img
              id="biscuitimage"
              src="/images/biscuit.jpg"
              alt="Biscuit"
            ></img>
            <div className="menu-content">
              <div id="biscuitheader">Biscuits</div>
              <div id="menubiscuit">
                {" "}
                <li id="biscuitprice">
                  <div id="biscuitprice1">
                    Large Buttermilk Biscuit w/ Butter
                  </div>
                  <div id="biscuitprice2">...2.59</div>
                </li>{" "}
                <li id="fixings">
                  Add Preserves (Strawberry, Blackberry, Organic, Reduced Sugar
                  Cherry Blueberry) ...0.59<br></br>Add Deer Sausage Patty
                  ...1.99
                  <br></br>Add Egg Bite* ...3.69
                </li>
              </div>
            </div>
          </div>

          <div className="image-container">
            <img id="bagelimage" src="/images/bagel.png" alt="Bagel"></img>
            <div className="menu-content">
              <div id="bagelheader">Bagels</div>
              <div id="menubagel">
                {" "}
                <li id="bagelprice">
                  <div id="bagelprice1">
                    Plain Bagel w/ Butter<br></br>
                  </div>
                  <div id="bagelprice2">...2.69</div>
                </li>{" "}
                <li id="fixings2">
                  (Substitute Cinnamon Butter ...0.30) <br></br>Add Preserves
                  (Strawberry, Blackberry, Organic, Reduced Sugar Cherry
                  Blueberry) ...0.59<br></br>Add Deer Sausage Patty ...1.99
                  <br></br>Add Cream Cheese ...0.99<br></br>Add Egg Bite*
                  ...3.69
                </li>
              </div>
            </div>
          </div>

          <div className="image-container">
            <img id="eggimage" src="/images/egg.png" alt="Egg"></img>
            <div className="menu-content">
              <div id="eggheader">Egg Bites</div>
              <div id="menuegg">
                {" "}
                <li id="eggprice">
                  <div id="eggprice1">Egg Bite* (2 per order)</div>
                  <div id="eggprice2">...6.59</div>
                </li>{" "}
                <li id="eggfixings">
                  *Options: 1. Ham and Cheddar Chili Pepper,
                  <br></br>2. Prosciutto gruyere, 3. Spinach Feta
                </li>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img
              id="oatmealimage"
              src="/images/oatmeal.jpg"
              alt="Oatmeal"
            ></img>
            <div className="menu-content">
              <div id="oatmealheader">Oatmeal</div>{" "}
              <div id="oatmealflavors">Brown Sugar or Maple</div>
              <div id="menuoatmeal">
                {" "}
                <li id="oatmealprice">
                  <div id="oatmealprice1">Per Bowl</div>
                  <div id="oatmealprice2">...3.75</div>
                </li>{" "}
                <div id="pecans">*Add Chopped Pecans</div>
                <div id="pecanprice">...0.65</div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="aboutus"
          style={{
            opacity: currentPage === "about" ? 1 : 0,
            visibility: currentPage === "about" ? "visible" : "hidden",
            height: currentPage == "" || currentPage === "about" ? "10%" : "0%",
            transition:
              "height 0.5s ease-in-out, opacity 0.1s ease-in-out, visibility 0.1s ease-in-out",
          }}
        >
          <h1 id="aboutblurb">
            <div id="textblurb">
              Morning Hours: <br></br>Tues-Fri - 6AM to 12PM <br></br>Sat - 7AM
              to 12PM
              <br></br>
              <br></br>
              Evening Hours: <br></br>Thur - Sat - 3:30PM to 7:30PM
              <br></br>
              <br></br>
              <br></br> Sun/Mon - Closed <br></br>
              <br></br>
              <div id="drivethrunote">Drive-Thru Only</div>
              <br></br>
              <br></br>11652 Liberty Street<br></br>
              Clinton, LA 70722
              <br></br>
              <text>(225) 683-9342</text>
              <br></br>
              <br></br>
              About us:
              <br></br>
              We are a breakfast specialty cafe serving freshly made breakfast
              items, freshly ground hot brewed coffee and specialty iced
              coffees. We are also an evening scoop shop proudly serving The
              Chocolate Shoppe&#39s super premium ice cream with over 30 flavors
              available to our customers. Come wake up in the morning to your
              favorite brew and chill out with us in the evenings with gourmet
              desserts and ice cream like no other!
              <br></br> <br></br>Liberty House, Circa 1868, housed the first
              general store in the Feliciana parishes. Standing tall, Liberty
              House still proudly serves the Feliciana parishes with the same
              dedication to excellent products, service, and long-term
              relationships with the members of our community. <br></br>
              <br></br>Thank you for allowing us to be a part of your day!
              <p id="devCredit">
                Website created by Kade Stanford:{" "}
                <a href="https://stanforddev.vercel.app" target="_blank">
                  Click here to visit my website!
                </a>
              </p>
            </div>
          </h1>
        </div>

        <div
          id="eventpage"
          style={{
            opacity: currentPage === "events" ? 1 : 0,
            visibility: currentPage === "events" ? "visible" : "hidden",
            height:
              currentPage == "" || currentPage === "events" ? "10%" : "0%",
            transition:
              "height 0.5s ease-in-out, opacity 0.1s ease-in-out, visibility 0.1s ease-in-out",
          }}
        >
          <div className="event-container">
            <img
              id="icecreamnight"
              src="/images/icecream.png"
              alt="Ice Cream Nights Event"
            ></img>
            <div className="event-content">
              <div id="icecreamheader">Ice Cream Nights</div>
              <div id="menuicecream">
                <div id="icecreamdate">
                  Starting July 27th, every Thur, Fri, & Sat from 3:30 to 7:30!
                </div>
                <img id="icecreamlogo" src="/chocLogo.png"></img>
                <div id="icecreamtext">
                  Enjoy an assortment of over 30 super premium flavors of ice
                  cream including sugar free and dairy free options for
                  Chocolate Shoppe Ice Cream!
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
