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
            <span>Black/Hibiscus/Matcha</span>
            <span>(16oz) ...2.39</span>
          </p>
          <span id="New">*NEW!!* Try our Matcha Lattes!</span>
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
          <p className="menuItemDesc">(Oct - Mar)</p>
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
            <span>Spinach & Feta*</span>
            <span id="limited">(Fri & Sat only!)*</span>
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
          <div className="menuItemList">
            <ul>
              <li>
                Add Preserves<br></br> (Strawberry, Blackberry, Organic, Reduced
                Sugar Cherry Blueberry) ...0.59
              </li>
              <li>Add Deer Sausage/Bacon ...1.99</li>
              <li>
                Add Cheese <br></br>(Pepperjack, Gouda/Gruyere/Cheddar mix, and
                Real American Cheese) ...0.59
              </li>
              <li>Add Egg Bite* ...3.69</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="menuBox" id="Bagels">
        <h1 className="menuItemTitle">Bagels</h1>
        <div className="menuItemInfo">
          {" "}
          <p className="menuScroll">
            featuring flavors from New Yorker Bagels rotated weekly!
          </p>
          <p className="menuItemPrice">
            <span>Per Bagel</span>
            <span id="price">...2.69</span>
          </p>
          <div className="menuItemList">
            <ul>
              <li>Substitute Cinnamon Butter ...0.30</li>
              <li>
                Add Preserves<br></br> (Strawberry, Blackberry, Organic, Reduced
                Sugar Cherry Blueberry) ...0.59
              </li>
              <li>Add Deer Sausage/Bacon ...1.99</li>
              <li>Add Cream Cheese ...0.99</li>
              <li>
                Add Cheese <br></br>(Pepperjack, Gouda/Gruyere/Cheddar mix, and
                Real American Cheese) ...0.59
              </li>
              <li>Add Egg Bite* ...3.69</li>
            </ul>
          </div>
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
            Flavor Options:<br></br> Mushroom & Swiss<br></br>Prosciutto gruyere
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
          <p className="aboutText">
            <span>Ask about our layered oatmeal and toppings</span>
          </p>
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutTextContainer">
          <div className="hoursContainer">
            <h1 className="aboutTitle">Morning Hours</h1>
            <p className="aboutText">
              <span>Tues - Fri</span>
              <br></br>
              <span>6 AM - 12 PM</span>
            </p>
            <p className="aboutText">
              <span>Sat</span>
              <br></br>
              <span>7 AM - 12 PM</span>
            </p>
          </div>
          <div className="hoursContainer">
            <h1 className="aboutTitle">Evening Hours</h1>
            <p className="aboutText">
              <span>Thur - Sat</span>
              <br></br>
              <span>3:30 PM - 7:30 PM</span>
            </p>
          </div>
          <div className="hoursContainer">
            <h1 className="aboutTitle">Closed</h1>
            <p className="aboutText">
              <span>Sun/Mon</span>
            </p>
          </div>
        </div>
        <div className="aboutTextContainer">
          <h1 className="aboutTitle">About Us</h1>
          <p className="aboutText" id="big">
            We are a breakfast specialty cafe serving freshly made breakfast
            items, freshly ground hot brewed coffee and specialty iced coffees.
            We are also an evening scoop shop proudly serving The Chocolate
            Shoppe&#39;s super premium ice cream with over 30 flavors available
            to our customers. Come wake up in the morning to your favorite brew
            and chill out with us in the evenings with gourmet desserts and ice
            cream like no other!
            <br></br> <br></br>Liberty House, Circa 1868, housed the first
            general store in the Feliciana parishes. Standing tall, Liberty
            House still proudly serves the Feliciana parishes with the same
            dedication to excellent products, service, and long-term
            relationships with the members of our community. <br></br>
            <br></br>Thank you for allowing us to be a part of your day!
          </p>
        </div>

        <div className="aboutTextContainer">
          <h1 className="aboutTitle">Contact Us</h1>

          <p className="aboutText">
            <span>Phone: (225) 683-9342</span>
            <br></br>
            <span>Address: 11652 Liberty Street, Clinton, LA</span>
          </p>
        </div>

        <div className="aboutTextContainer">
          <h1 className="aboutTitle">Website Created By:</h1>
          <p className="aboutText">
            <span>Kade Stanford | Stanford Development Solutions</span>
            <br></br>
            <a href="https://stanforddev.vercel.app/">
              Click here to view my website!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

function Events() {
  return (
    <>
      <div className="eventsBox" id="IceCream">
        <h1 className="eventsTitle">Ice Cream Evenings</h1>
        <div className="eventsTextContainer">
          <p className="eventsText" id="date">
            <span>
              Starting July 29th, every Thur, Fri, & Sat from 3:30 to 7:30!
            </span>
          </p>
          <img
            src="/chocLogo.png"
            alt="Chocolate Shoppe Logo"
            className="logoImage"
          />
          <p className="eventsText" id="main">
            <span>
              Enjoy an assortment of over 30 super premium ice cream flavors
              including sugar free and dairy free options from Chocolate Shoppe
              Ice Cream!
              <br></br>
              Mix and match with our gourmet cakes and cookies!
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

function SeasonalFlavors() {
  return (
    <>
      <h1 className="iceCreamTitleTop">Flavors of the Season</h1>
      <img src="/images/cone.svg" alt="cone" className="coneImage" />
      <p className="iceCreamDescTop">
        Carrying nearly 30 flavors of gourmet, super premium ice cream, we offer
        a ready selection of flavors at any time, rotated seasonally to
        continually offer you something new and fun! Be sure to check out the
        <span className="yellowText"> All Flavors </span> tab to see our full
        selection. Not all flavors last long, so we hope to see you soon!
      </p>

      <div className="iceCreamBoxOrganizer">
        <div className="iceCreamBox">
          <img
            style={{
              width: "60%",
            }}
            src="/cream/zanzibar.png"
            alt="Zanzibar"
          />
          <p className="iceCreamText">Zanzibar Chocolate</p>
          <p className="iceCreamDesc">
            Award-winning, deep dark chocolate made with three kinds of cocoa
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "58%",
            }}
            src="/cream/serious.png"
            alt="This $&@! Just Got Serious"
          />
          <p className="iceCreamText">This $&@! Just Got Serious</p>
          <p className="iceCreamDesc">
            Salted caramel ice cream with a sea salt fudge ripple and roasted
            cashews
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "60%",
            }}
            src="/cream/birthdaycake.png"
            alt="Birthday Cake"
          />
          <p className="iceCreamText">Birthday Cake</p>
          <p className="iceCreamDesc">
            This party in a pint is topped off with festive swirls of blue
            buttercream frosting and bursts of colorful confetti sprinkles
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "55%",
            }}
            src="/cream/mintavalanche.png"
            alt="Mint Avalanche"
          />
          <p className="iceCreamText">Mint Avalanche</p>
          <p className="iceCreamDesc">
            Mint ice cream loaded with Andes® Candies, Grasshopper® cookies, and
            chocolate fudge
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/heapsoflove.png"
            alt="Heaps of Love"
          />
          <p className="iceCreamText">Heaps of Love</p>
          <p className="iceCreamDesc">
            Vanilla ice cream packed with Oreos®, brownies, cookie dough,
            pecans, caramel and chocolate swirls
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/kitty.png"
            alt="Kitty Kitty Bang Bang"
          />
          <p className="iceCreamText">Kitty Kitty Bang Bang</p>
          <p className="iceCreamDesc">
            Cheesecake ice cream mixed with raspberry sauce, Oreos® and
            chocolate chunks
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/fatelvis.png"
            alt="Fat Elvis"
          />
          <p className="iceCreamText">Fat Elvis</p>
          <p className="iceCreamDesc">
            Banana ice cream all shook up with salty peanut butter and chocolate
            chips
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/coconutalmond.png"
            alt="Coconut Almond Bliss"
          />
          <p className="iceCreamText">Coconut Almond Bliss</p>
          <p className="iceCreamDesc">
            Coconut ice cream with chocolate flakes and roasted almonds
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/blueberrycheesecake.png"
            alt="Blueberry Cheesecake"
          />
          <p className="iceCreamText">Blueberry Cheesecake</p>
          <p className="iceCreamDesc">
            Delectably smooth cheesecake ice cream topped off with a tangy
            blueberry ripple and soft cheesecake chunks.
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/cakebatterfudge.png"
            alt="Cake Batter Fudge"
          />
          <p className="iceCreamText">Cake Batter Fudge</p>
          <p className="iceCreamDesc">
            Cake batter-base, thick chocolate frosting swirls and lush brownie
            pieces
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/blackberrylemonbar.png"
            alt="Blackberry Lemon Bar"
          />
          <p className="iceCreamText">Blackberry Lemon Bar</p>
          <p className="iceCreamDesc">
            Lemon ice cream folded with pound cake and blackberry sauce
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/pistachionut.png"
            alt="Pistachio Nut"
          />
          <p className="iceCreamText">Pistachio Nut</p>
          <p className="iceCreamDesc">
            Irresistible almond-flavored ice cream churned with crisp pistachio
            nuts
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/smore.png"
            alt="S&#39;more to Love"
          />
          <p className="iceCreamText">S&#39;more to Love</p>
          <p className="iceCreamDesc">
            Crushed graham cracker ice cream with melty layers of chocolate and
            marshmallow.
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/mycoconutromance.png"
            alt="My Coconut Romance"
          />
          <p className="iceCreamText">My Coconut Romance</p>
          <p className="iceCreamDesc">
            Chocolate coconut ice cream folded with Coconut Dream cookies and
            gooey caramel.
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/vanilla.png"
            alt="Old Fashioned Vanilla"
          />
          <p className="iceCreamText">Old Fashioned Vanilla</p>
          <p className="iceCreamDesc">
            An award-winning and all-natural classic vanilla ice cream made with
            Wisconsin cream, cane sugar and pure vanilla.
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/cherrychocolatechip.png"
            alt="Cherry Chocolate Chip"
          />
          <p className="iceCreamText">Cherry Chocolate Chip</p>
          <p className="iceCreamDesc">
            Sweet vanilla ice cream loaded with big, red cherries and
            melt-in-your-mouth chocolate chips.
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/strawberry.png"
            alt="Strawberry"
          />
          <p className="iceCreamText">Strawberry</p>
          <p className="iceCreamDesc">
            Award-winning and deliciously fresh strawberry ice cream loaded to
            the brim with real, whole strawberries.
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/peanutbuttercup.png"
            alt="Peanut Butter Cup"
          />
          <p className="iceCreamText">Peanut Butter Cup</p>
          <p className="iceCreamDesc">
            Smooth chocolate ice cream brimming with mouthwatering peanut butter
            ripples and rich peanut butter cups.
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/halleyscomet.png"
            alt="Halley&#39;s Comet®"
          />
          <p className="iceCreamText">Halley&#39;s Comet®</p>
          <p className="iceCreamDesc">
            A perfect trio of flavors with rich milk chocolate and vanilla ice
            creams swirled with caramel ribbons and caramel truffles.
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/bourbonpecanpie.png"
            alt="Bourbon Pecan Pie"
          />
          <p className="iceCreamText">Bourbon Pecan Pie</p>
          <p className="iceCreamDesc">
            Smooth bourbon ice cream swirled with a sea salt chocolate fudge
            ripple and roasted pecans.
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/ultimateoreo.png"
            alt="Ultimate Oreo"
          />
          <p className="iceCreamText">Ultimate Oreo</p>
          <p className="iceCreamDesc">
            Scrumptious Oreo® crumb ice cream packed with boat-loads of whole
            Oreo® cookies.
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/vanillaoat.png"
            alt="Vanilla Oat Cream"
          />
          <h1 className="iceCreamText">Vanilla Oat Cream</h1>
          <p className="iceCreamDesc">
            Indulgently creamy non-dairy frozen dessert blended with oat milk
            and vanilla.
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/pomegranate.png"
            alt="Pomegranate Swirl"
          />
          <p className="iceCreamText">Pomegranate Swirl</p>
          <p className="iceCreamDesc">
            Creamy, no-sugar-added vanilla ice cream brimming with delicious,
            no-sugar-added blueberry and pomegranate ripples.
          </p>
        </div>
        <div className="iceCreamBox">
          <img
            style={{
              width: "57%",
            }}
            src="/cream/caramelcashew.png"
            alt="Cashews & Caramel"
          />
          <p className="iceCreamText">Cashews & Caramel</p>
          <p className="iceCreamDesc">
            Creamy, no-sugar-added vanilla ice cream rippled with gooey,
            sugar-free caramel and loaded with real cashews.
          </p>
        </div>
      </div>
    </>
  );
}

function AllFlavors() {
  return (
    <>
      <h1 className="iceCreamTitleTop">All Flavors</h1>
      <img src="/images/cone.svg" alt="cone" className="coneImage" />

      <p className="iceCreamDescTop">
        With over 100 flavors in our ice cream rotation, there is something to
        please every palate. We proudly serve award-winning,{" "}
        <span className="yellowText">super-premium</span> ice cream from The
        Chocolate Shoppe Ice Cream Company in Madison, Wisconsin, a five-time LA
        International Dairy Competition Gold Medalist.
        <br></br>
        <br></br>
        What is <span className="yellowText">“super-premium” </span>ice cream?
        It&#39;s ice cream that doesn&#39;t skimp on cream and butterfat and
        isn&#39;t “puffed up” with air. The result? A decadent, creamy, and
        deliciously satisfying product you won&#39;t find in stores. Come try it
        out and see for yourself!
      </p>
      <div className="iceCreamBoxOrganizerCol">
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Banana Cream Pie</h1>
          <p className="iceCreamDescRow">
            Your favorite comfort food now on a cone! Banana ice cream churned
            with a marshmallow ripple and real Nilla Wafers®.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Birthday Cake</h1>
          <p className="iceCreamDescRow">
            This party in a pint is topped off with festive swirls of blue
            buttercream frosting and bursts of colorful confetti sprinkles.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Black Cherry</h1>
          <p className="iceCreamDescRow">
            Simply sweet black cherry ice cream with boat-loads of whole black
            cherries.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Black Cherry Oat Cream</h1>
          <p className="iceCreamDescRow">
            Delectably sweet black cherry non-dairy frozen dessert bursting with
            whole black cherries.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Black Licorice</h1>
          <p className="iceCreamDescRow">
            Rich, creamy, and luxurious black licorice flavor balanced with the
            right amount of sweetness.This flavor isn&#39;t for the masses, but
            if black licorice is your thing, it&#39;s a cult favorite you cannot
            miss.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Black Walnut</h1>
          <p className="iceCreamDescRow">
            Classic black walnut ice cream folded with crunchy walnuts.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Blackberry Lemon Bar</h1>
          <p className="iceCreamDescRow">
            Fresh lemon ice cream folded with pound cake pieces and swirls of
            blackberry sauce.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Blue Moon</h1>
          <p className="iceCreamDescRow">
            Just like the milk in the bottom of a Fruit Loops bowl, this tasty
            ice cream has a sweet Fruit Loops taste and a wacky blue color.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Blue Moon Oat Cream</h1>
          <p className="iceCreamDescRow">
            Just like the milk in the bottom of a Fruit Loops bowl, this tasty
            ice cream has a sweet Fruit Loops taste and a wacky blue color. Made
            with vegan oat cream.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Blueberry Cheesecake</h1>
          <p className="iceCreamDescRow">
            Delectably smooth cheesecake ice cream topped off with a tangy
            blueberry ripple and soft cheesecake chunks.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Bourbon Pecan Pie</h1>
          <p className="iceCreamDescRow">
            Smooth bourbon ice cream swirled with a sea salt chocolate fudge
            ripple and roasted pecans.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Brownie Cascade</h1>
          <p className="iceCreamDescRow">
            Classic, creamy chocolate ice cream exploding with brownie pieces,
            caramel cups and a sweet fudge ripple.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Butter Pecan</h1>
          <p className="iceCreamDescRow">
            Buttery pecan ice cream with boat-loads of crispy, lightly roasted
            and salted pecans.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Cake Batter Fudge</h1>
          <p className="iceCreamDescRow">
            With a scrumptious cake batter-base, thick chocolate frosting swirls
            and brownie chunks, this ice cream settles all arguments over the
            mixing spoon!
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Cappuccino Break</h1>
          <p className="iceCreamDescRow">
            Crisp coffee-infused ice cream churned with chocolate-covered toffee
            and candy-coated almonds.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Caramel Apple Pie</h1>
          <p className="iceCreamDescRow">
            Spicy cinnamon ice cream mixed with chunks of real apples, crispy
            cinnamon shortbread pieces and a thick caramel ripple, available for
            a limited time only.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Caramel Chaos</h1>
          <p className="iceCreamDescRow">
            Sweet caramel ice cream packed with chocolate-covered caramel cups
            and swirls of gooey caramel.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Carrot Cake</h1>
          <p className="iceCreamDescRow">
            Spiced carrot cake ice cream loaded with chunks of cake, roasted
            pecans and a swirl of cream cheese frosting.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Carrot Mango Italian Ice</h1>
          <p className="iceCreamDescRow">
            Non-dairy, non-fat and bursting with sweet, tangy flavor with real
            carrot (yes, we said carrot!) and fruit juices.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Cashews & Caramel</h1>
          <p className="iceCreamDescRow">
            Creamy, no-sugar-added vanilla ice cream rippled with gooey,
            sugar-free caramel and loaded with real cashews.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Cherry Chocolate Chip</h1>
          <p className="iceCreamDescRow">
            Sweet vanilla ice cream loaded with big, red cherries and
            melt-in-your-mouth chocolate chips.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Chocolate</h1>
          <p className="iceCreamDescRow">
            All-natural, classic chocolate ice cream made with real, rich
            cocoas.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Cinnamon Stick</h1>
          <p className="iceCreamDescRow">
            Our all natural, tantalizing spicy-yet-smooth cinnamon flavored ice
            cream.
          </p>
        </div>{" "}
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Coconut</h1>
          <p className="iceCreamDescRow">
            Smooth, sweet, creamy and infused with coconut goodness.
          </p>
        </div>{" "}
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Coconut Almond Bliss</h1>
          <p className="iceCreamDescRow">
            Tropical coconut ice cream with tons of melt-in-your-mouth chocolate
            flakes and crispy almond pieces.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Cotton Candy Twist</h1>
          <p className="iceCreamDescRow">
            Blue and pink cotton candy ice creams spun together for that
            whimsical carnival sensation!
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Door County Cherry</h1>
          <p className="iceCreamDescRow">
            All-natural vanilla ice cream loaded with tart Door County cherries
            from Sister Bay, Wisconsin.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Dutch Maid Vanilla</h1>
          <p className="iceCreamDescRow">
            Sweet, classic and all-natural made with Wisconsin cream, cane sugar
            and pure vanilla.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Egg Nog</h1>
          <p className="iceCreamDescRow">
            A holiday favorite! Decadently smooth ice cream brimming with
            traditional eggnog flavor, available for a limited time only.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Electric Watermelon</h1>
          <p className="iceCreamDescRow">
            Refreshing watermelon Italian ice with a jolt of sour to leave you
            feeling electric.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Espresso</h1>
          <p className="iceCreamDescRow">
            An all-natural ice cream blended with crisp coffee extracts and
            sweet cream.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Espresso Oreo</h1>
          <p className="iceCreamDescRow">
            Crisp coffee-infused ice cream loaded with heaps of sweet Oreos.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Exhausted Parent®</h1>
          <p className="iceCreamDescRow">
            Bourbon-spiked espresso ice cream swirled with bittersweet chocolate
            chunks.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Fat Elvis</h1>
          <p className="iceCreamDescRow">
            Sweet banana ice cream all shook up with a salty peanut butter
            ripple and rich chocolate chips.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Gumball</h1>
          <p className="iceCreamDescRow">
            Bubblegum glow up! Nostalgic gumball ice cream folded with pink,
            edible bubblegum-esque pieces.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Halley&#39;s Comet®</h1>
          <p className="iceCreamDescRow">
            A perfect trio of flavors with rich milk chocolate and vanilla ice
            creams swirled with caramel ribbons and caramel truffles.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Heaps of Love</h1>
          <p className="iceCreamDescRow">
            Anything and everything you can want! Oreos, brownies, cookie dough,
            pecans, caramel and chocolate ripples all packed into vanilla ice
            cream.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Iced Latte-Da®</h1>
          <p className="iceCreamDescRow">
            Fantastic Wisconsin-made caffeinated espresso ice cream with fudge
            swirls and chocolate chunks.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Key Lime Pie</h1>
          <p className="iceCreamDescRow">
            Can you say pucker up? You will after this southern pie flavor made
            with tart lime ice cream, sour lime candies and graham cracker
            pieces, available for a limited time only.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Kitty Kitty Bang Bang</h1>
          <p className="iceCreamDescRow">
            Irresistibly smooth cheesecake ice cream mixed with a sweet
            raspberry ripple, Oreo cookies and soft chocolate chunks.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Lemon Italian Ice</h1>
          <p className="iceCreamDescRow">
            Non-dairy, non-fat tart lemon Italian ice, for any hot mid-summer
            day.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Lemon Meringue</h1>
          <p className="iceCreamDescRow">
            Fresh lemon and fluffy marshmallow ice creams swirled together with
            a tart lemon ripple, available for a limited time only.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Lemon Poppy Seed</h1>
          <p className="iceCreamDescRow">
            All-natural, fresh and bright lemon ice cream speckled with poppy
            seeds.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">London Fog</h1>
          <p className="iceCreamDescRow">
            Creamy and smooth Earl Grey tea latte reimagined as your new
            favorite ice cream.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Mackinac Island Fudge</h1>
          <p className="iceCreamDescRow">
            Sweet vanilla ice cream with a melt-in-your-mouth chocolate fudge
            ripple and chunks of rich chocolate fudge.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Malt Amore</h1>
          <p className="iceCreamDescRow">
            Old-style malted milk ice cream packed with rich, malt flavor, soft
            chocolate chips and ripples of sweet, chocolate fudge.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Maple Nut</h1>
          <p className="iceCreamDescRow">
            Heavenly sweet maple ice cream brimming with fresh, crunchy walnuts.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Matcha Green Tea</h1>
          <p className="iceCreamDescRow">
            A Zen-inspiring treat of sweet cream infused with green tea
            extracts.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Mint Avalanche</h1>
          <p className="iceCreamDescRow">
            A mint lover&#39;s paradise! Fresh mint ice cream loaded with Andes®
            Candies and Grasshopper® cookies spun off with a chocolate fudge
            swirl.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Mint Chip</h1>
          <p className="iceCreamDescRow">
            Classic, fresh mint ice cream loaded with melt-in-your-mouth, rich
            chocolate flakes.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Mint Oreo Oat Cream</h1>
          <p className="iceCreamDescRow">
            Vegan mint oat cream packed with whole Oreo cookies.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Moose Tracks®</h1>
          <p className="iceCreamDescRow">
            Sweet vanilla ice cream packed with mini chocolate peanut butter
            cups and swirls of melt-in-your-mouth chocolate fudge.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Munchie Madness</h1>
          <p className="iceCreamDescRow">
            Sweet cake batter ice cream swirled with a salted caramel ripple and
            brimming with Oreos, M&M pieces and peanut butter cups.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">My Coconut Romance</h1>
          <p className="iceCreamDescRow">
            Chocolate coconut ice cream folded with Coconut Dream cookies and
            gooey caramel.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Old Fashioned Vanilla</h1>
          <p className="iceCreamDescRow">
            An award-winning and all-natural classic vanilla ice cream made with
            Wisconsin cream, cane sugar and pure vanilla.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Orange Sherbet</h1>
          <p className="iceCreamDescRow">
            Refreshing sherbet bursting with orange flavor.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Party Animal</h1>
          <p className="iceCreamDescRow">
            Sugar cookie ice cream blended with pink and white frosted animal
            cookies and rainbow sprinkles
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Passion Fruit Italian Ice</h1>
          <p className="iceCreamDescRow">
            Tart and refreshing passion fruit juice blended with our signature
            Italian ice. Vegan, all-natural, and 100% crave-worthy on a sunny,
            summer day.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">PB Hearts Chocolate®</h1>
          <p className="iceCreamDescRow">
            Creamy peanut butter ice cream swirled with a smooth chocolate
            ripple and kissed with peanut butter cups.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Peach</h1>
          <p className="iceCreamDescRow">
            Fresh peach ice cream packed with real peaches to celebrate the warm
            spring weather, available for a limited time only.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Peanut Buddy Oat Cream</h1>
          <p className="iceCreamDescRow">
            Salty peanut butter vegan oat cream spun with chocolate flakes.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Peanut Butter Cookie Dough</h1>
          <p className="iceCreamDescRow">
            Vanilla ice cream loaded with soft cookie dough chunks, rich
            chocolate flakes, and a thick peanut butter ripple.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Peanut Butter Cup</h1>
          <p className="iceCreamDescRow">
            Smooth chocolate ice cream brimming with mouthwatering peanut butter
            ripples and rich peanut butter cups.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Peppermint Stick</h1>
          <p className="iceCreamDescRow">
            Crisp, peppermint ice cream made with boat-loads of peppermint
            candies and bursting with candy cane flavor in every bite.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Pistachio Nut</h1>
          <p className="iceCreamDescRow">
            Irresistible almond-flavored ice cream churned with crisp pistachio
            nuts.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Pomegranate Swirl</h1>
          <p className="iceCreamDescRow">
            Creamy, no-sugar-added vanilla ice cream brimming with delicious,
            no-sugar-added blueberry and pomegranate ripples.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Praline Pecan</h1>
          <p className="iceCreamDescRow">
            Buttery maple ice cream topped with a gooey caramel ripple and loads
            of crunchy, candy-coated pecans.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Pumpkin</h1>
          <p className="iceCreamDescRow">
            Smooth, spiced pumpkin ice cream flavored with pumpkin puree.
            Available for a limited time only.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Rainbow Sherbet</h1>
          <p className="iceCreamDescRow">
            Orange, Lime, and Raspberry flavored sherbets classically swirled
            together.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Raspberry Lemon Italian Ice</h1>
          <p className="iceCreamDescRow">
            Non-dairy, non-fat sweet raspberry and tart lemon Italian ices
            swirled together for an irresistibly refreshing treat.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Raspberry Rhapsody</h1>
          <p className="iceCreamDescRow">
            Black raspberry ice cream swirled with a sweet raspberry ripple and
            heavenly chocolate covered raspberry cups.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Raspberry Sherbet</h1>
          <p className="iceCreamDescRow">
            Sweet and refreshing raspberry-flavored sherbet.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Rhubarb Crumble</h1>
          <p className="iceCreamDescRow">
            Sweet, cream cheese frosting ice cream, spun with a bright rhubarb
            jam and a buttery shortbread crumble.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Rocky Road</h1>
          <p className="iceCreamDescRow">
            Swirls of rich, chocolate and fluffy marshmallow ice creams and
            topped off with chocolate-covered almonds.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Root Beer Float</h1>
          <p className="iceCreamDescRow">
            Creamy vanilla ice cream swirled with crisp root beer Italian ice
            for a bold new twist on an old favorite, available for a limited
            time only.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">S&#39;more to Love</h1>
          <p className="iceCreamDescRow">
            Crushed graham cracker ice cream with melty layers of chocolate and
            marshmallow.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Salted Caramel</h1>
          <p className="iceCreamDescRow">
            A tantalizing blend of sweet, rich caramel and mouth-watering sea
            salt.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Sticks & Stones®</h1>
          <p className="iceCreamDescRow">
            Soft cookie dough chunks, crunchy chocolate covered pretzels, and a
            gooey salted caramel ripple all swirled into our rich chocolate ice
            cream.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Strawberry</h1>
          <p className="iceCreamDescRow">
            Award-winning and deliciously fresh strawberry ice cream loaded to
            the brim with real, whole strawberries.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Strawberry Cheesecake</h1>
          <p className="iceCreamDescRow">
            Cheesecake ice cream swirled with a strawberry ripple and loads of
            gooey cheesecake pieces.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Strawberry Hibiscus Italian Ice</h1>
          <p className="iceCreamDescRow">
            Fresh strawberry puree balanced with infused hibiscus, and blended
            into vegan italian ice.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Strawberry Ripple</h1>
          <p className="iceCreamDescRow">
            Creamy, no-sugar-added vanilla ice cream swirled with sweet and
            tangy strawberry ribbons.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Super Human</h1>
          <p className="iceCreamDescRow">
            Meet your new kryptonite… Cherry, Blue Moon and Vanilla ice creams
            combine forces to bring you one super scoop!
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">This $&@! Just Got Serious®</h1>
          <p className="iceCreamDescRow">
            Award-winning, smooth salted caramel ice cream brimming with rich
            sea salt fudge and salted cashews.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Turtle</h1>
          <p className="iceCreamDescRow">
            Classic vanilla ice cream with swirls of rich chocolate fudge, gooey
            caramel and lightly roasted and salted pecans.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Ultimate Oreo</h1>
          <p className="iceCreamDescRow">
            Scrumptious Oreo crumb ice cream packed with boat-loads of whole
            Oreo cookies.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Ultimate Oreo Oat Cream</h1>
          <p className="iceCreamDescRow">
            Oreo crumb non-dairy frozen dessert packed with whole Oreos.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Vanilla Bean</h1>
          <p className="iceCreamDescRow">
            Sweet, classic and all-natural ice cream made with Wisconsin cream,
            cane sugar, pure vanilla extracts and vanilla bean flecks.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Vanilla Chocolate Chip Oat Cream</h1>
          <p className="iceCreamDescRow">
            Classic vanilla non-dairy frozen dessert made with delicious,
            semi-sweet chocolate chips.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Vanilla Custard</h1>
          <p className="iceCreamDescRow">
            Sweet, classic and all-natural custard made with Wisconsin cream,
            cane sugar, egg yolks and pure vanilla.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Vanilla Oat Cream</h1>
          <p className="iceCreamDescRow">
            Indulgently creamy non-dairy frozen dessert blended with oat milk
            and vanilla.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Witches&#39; Brew</h1>
          <p className="iceCreamDescRow">
            Brewed espresso and spiced pumpkin ice creams swirled together to
            put a spell on you in every scoop, available for a limited time
            only.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Yippee Skippee®</h1>
          <p className="iceCreamDescRow">
            Creamy peanut butter ice cream loaded with salted caramel ripples,
            soft brownie chunks and crispy chocolate-covered pretzels.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Zanzibar® Chocolate</h1>
          <p className="iceCreamDescRow">
            All-natural and award-winning chocolate ice cream made with three
            kinds of cocoa for a rich, fudge brownie taste.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Zanzimint®</h1>
          <p className="iceCreamDescRow">
            Zanzibar® chocolate ice cream swirled with crisp mint ice cream.
          </p>
        </div>
        <div className="iceCreamBoxRow">
          <h1 className="iceCreamTitle">Zoreo</h1>
          <p className="iceCreamDescRow">
            Zanzibar® chocolate ice cream swirled with crisp mint ice cream.
          </p>
        </div>
      </div>
    </>
  );
}

function IceCream() {
  const [currentTab, setCurrentTab] = useState("seasonal");

  const handleSeasonalButtonClick = () => {
    setCurrentTab("seasonal");
  };

  const handleAllButtonClick = () => {
    setCurrentTab("all");
  };

  return (
    <>
      <div className="iceCreamContainer">
        <div className="iceCreamButtonContainer">
          <button
            className="iceCreamButton"
            onClick={handleSeasonalButtonClick}
          >
            Flavors of the Season<br></br>
            <span className="iceCreamButtonSpan">Current flavor selection</span>
          </button>
          <button className="iceCreamButton" onClick={handleAllButtonClick}>
            All Flavors
          </button>
        </div>
        <div className="iceCreamSeasonal">
          {currentTab === "seasonal" ? <SeasonalFlavors /> : null}
          {currentTab === "all" ? <AllFlavors /> : null}
        </div>
      </div>
    </>
  );
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState("menu");

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
            <button
              className={styles.button}
              onClick={() => setCurrentPage("about")}
            >
              About Us
            </button>
            <button
              className={styles.button}
              onClick={() => setCurrentPage("menu")}
            >
              Our Menu
            </button>
            <button
              className={styles.button}
              onClick={() => setCurrentPage("events")}
            >
              Events
            </button>
            <button
              className={styles.button}
              onClick={() => setCurrentPage("iceCream")}
            >
              Ice Cream
            </button>
            <button className={styles.button}>
              <a id="call" href="tel:+12256839342">
                Call in your order!
              </a>
            </button>
          </div>
        </div>
        <div className={styles.egiftcard}>
          <h1 className={styles.egiftcardTitle}>Ask about our E-Gift Cards!</h1>
        </div>
        <div className={styles.content}>
          {currentPage === "menu" ? <Menu /> : null}
          {currentPage === "about" ? <About /> : null}
          {currentPage === "events" ? <Events /> : null}
          {currentPage === "iceCream" ? <IceCream /> : null}
        </div>
      </main>
    </>
  );
}
