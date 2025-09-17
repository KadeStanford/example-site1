import { useState, useEffect } from "react";
import {
  potteryCategories,
  glazeSwatches,
  examples,
  brushesAndTools,
} from "@/data/potteryData";
import styles from "@/styles/Home.module.css";

export function Menu() {
  return (
    <>
      <div className="menuBox" id="Smoothies">
        <h1 className="menuItemTitle">
          Smoothie Shoppe Menu<br></br>Create Your Own
        </h1>
        <div className="menuItemInfo">
          <p id="sizeOptions">Size Options</p>
          <div className="SmoothieSizes">
            <span>Smoothies - 16oz / 20oz</span>
            <span>Smoothie Bowls - 16oz</span>
          </div>
          <div className="menuChoices">
            <p id="fruit">Fruit Choices</p>
            <div className="fruitChoice">
              <ul>
                <li>Strawberry</li>
                <li>Raspberry</li>
                <li>Blueberry</li>
                <li>Banana</li>
                <li>Pineapple</li>
              </ul>
              <ul>
                <li>Peach</li>
                <li>Pear</li>
                <li>Orange</li>
                <li>Dates</li>
                <li>Avocado</li>
              </ul>
            </div>
            <p id="super">Super Fruit Choices</p>
            <div className="superfruitChoice">
              <ul>
                <li>Dragon Fruit (Pitaya)</li>
                <li>Acai Berry</li>
                <li>Passion Fruit</li>
              </ul>
              <ul>
                <li>Jack Fruit</li>
                <li>Mango</li>
                <li>Plaintains</li>
              </ul>
            </div>
            <div className="veggieChoice">
              <p id="super">Veggie Choices</p>
              <ul>
                <li>Spinach</li>
                <li>Rainbow Chard</li>
                <li>Kale</li>
              </ul>
            </div>

            <p>Protein Choices</p>
            <div className="proteinChoice">
              <ul className="proteinList">
                <li>Almond Butter</li>
                <li>Peanut Butter</li>
                <li>Sun Butter (Sunflower Seeds)</li>
                <li>Low Sugar Vanilla Yogurt (2 gm Sugar, Natural Vanilla)</li>
                <li> Gluten-Free Sprouted Oats</li>
              </ul>
            </div>
            <p> Smoothie Bowl Fruit Toppings</p>
            <div className="SmoothieBowlFruitToppings">
              <ul className="proteinList">
                <li>Banana</li>
                <li>Strawberry</li>
                <li>Blueberry</li>
                <li>Mango</li>
                <li>Pineapple</li>
              </ul>
            </div>
            <p> Smoothie Bowl Toppings</p>
            <div className="SmoothieBowlFruitToppings">
              <ul className="proteinList">
                <li>
                  Coconut Flakes <br></br>(Naturally Sweet, Unsulphured)
                </li>
                <li>
                  Goji Berries<br></br> (Fruity and Tangy. Good Source of Fiber
                  and Iron)
                </li>
              </ul>
            </div>
            <p> Keto Granola</p>
            <div className="KetoGranola">
              <ul className="proteinList">
                <li>Banana Nut</li>
                <li>Coconut Cashew</li>
              </ul>
            </div>
            <p>Grain-Free Granola</p>
            <div className="GrainFreeGranola">
              <ul className="proteinList">
                <li>Dark Chocolate ALmond</li>
              </ul>
            </div>
            <p>Whole-Grain Probiotic Granola</p>
            <div className="ProbioticGranola">
              <ul className="proteinList">
                <li>(A Blend of Whole grains, Almonds, & Quinoa)</li>
              </ul>
            </div>
            <p>Non-Dairy Options</p>
            <div className="NonDairyOptions">
              <ul className="proteinList">
                <li>Almond Milk</li>
                <li>Oat Milk</li>
                <li>Coconut Milk</li>
                <li>Coconut Water</li>
                <li>Orange/Apple Juice</li>
              </ul>
            </div>
            <p>Add-ins</p>
            <div className="NonDairyOptions">
              <ul className="proteinList">
                <li>FLax Seed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="menuBox" id="HouseSpecialties">
        <h1 className="menuItemTitle">
          Smoothie Shoppe Menu<br></br>House Specialties
        </h1>
        <div className="menuItemInfo">
          <p id="SmoothieName">Banana Almond Bowl</p>
          <p>
            Banana, Almond Butter, Low-Sugar Yogurt, Almond Milk, Honey or
            Dates, Flax Seed. Topped with Almonds, Banana and Honey
          </p>

          <p id="SmoothieName">Tropical Sunrise 2-Layer Smoothie</p>
          <p>1st Layer: Banana, Low-Sugar Yogurt, Mango, Orange, Almond Milk</p>
          <p>2nd Layer: Mixed Berries, Yogurt & Honey</p>

          <p id="SmoothieName">
            Chocolate (Cacao) Smoothie OR Bowl (*Add Espresso)
          </p>
          <p>
            Banana, Almond Butter, Coconut Milk or Almond Milk, Cacao (Organic
            Unsweet Chocolate), Flax Seeds, Dates
          </p>
          <p>
            Topped with Grain-Free Dark Chocolate Granola, Almond, and Banana
          </p>

          <p id="SmoothieName">Green Smoothie (*Add Matcha Tea)</p>
          <p>
            Spinach, Rainbow Chard, Kale, Avocado, Pineapple, Banana, Pear,
            Honey
          </p>

          <p id="SmoothieName">Pitaya (Dragon Fruit) Smoothie Bowl</p>
          <p>Dragon Fruit, Passion Fruit, Banana, Strawberry</p>
          <p>Topped with Mango, Coconut Flakes, and Goji Berries</p>

          <p id="SmoothieName">Jackfruit Smoothie or Bowl</p>
          <p>Jackfruit, Banana, Pineapple, Coconut Milk, and Honey</p>
          <p>Topped with Pineapple, Granola, and Honey</p>

          <p id="SmoothieName">Passion Fruit Smoothie or Bowl</p>
          <p>
            Passion fruit, Dragon fruit, Banana and almond milk topped with
            fresh fruit
          </p>

          <p id="SmoothieName">Acai Bowl</p>
          <p>Acai Berries, Banana, Strawberry or Mixed Berries, Honey</p>
          <p>Topped with Strawberry, Banana, & Goji Berries</p>

          <p id="SmoothieName">Immunity Smoothie or Bowl</p>
          <p>Dragon Fruit, Passion Fruit, and Mango</p>
          <p>(Your choice of Toppings)</p>

          <p id="SmoothieName">Mixed Fruit Smoothie</p>
          <p>Strawberry, Banana, Peaches, Pineapple, & Jack Fruit</p>
        </div>
      </div>
      <div className="menuBox" id="Coffee">
        <h1 className="menuItemTitle">
          Hand Crafted and Blended Specialty Coffee
        </h1>
        <div className="menuItemInfo">
          <p className="menuScroll">Scroll here to see our flavors!</p>

          <p className="menuItemPrice" id="">
            <span id="">Drip Coffee</span>
            <span>(12oz.) (16oz.) (20oz.)</span>
          </p>
          <p className="menuItemPrice" id="">
            <span>Iced Coffee</span> <span id="">(12oz.) (16oz.) (20oz.)</span>
          </p>
          <p className="menuItemPrice" id="">
            <span id="">
              Hot Latte<br></br>Cappuccino
            </span>{" "}
            <span id="">(12oz.) (16oz.) (20oz.)</span>
          </p>
          <p className="menuItemPrice" id="">
            <span id="coffeecenter">
              Iced Latte<br></br>Macchiato
            </span>{" "}
            <span>(16oz.) (20oz.)</span>
          </p>
          <p className="menuItemPrice" id="">
            <span id="coffeecenter">Frappe</span> <span>(16oz.) (20oz.)</span>
          </p>

          <p className="menuItemPrice" id="xpresso">
            <span id="xpressotitle">Add an extra Espresso Shot!</span>{" "}
            <span id="xpressoprice"> </span>
          </p>

          <div className="menuItemDesc">
            <div id="coffeeflavors">
              Coffee Flavors:
              <br />
              Regular or Sugar-Free *
              <div id="flavorNames">
                <div id="flavorList">
                  <li>
                    Vanilla <span id="sugarfree">*</span>{" "}
                  </li>
                  <li>
                    French Vanilla <span id="sugarfree">*</span>
                  </li>
                  <li>
                    Mocha <span id="sugarfree">*</span>
                  </li>
                  <li>Caramel</li>
                  <li>
                    White Chocolate <span id="sugarfree">*</span>
                  </li>
                  <li>Almond</li>
                  <li>Pumpkin Spice</li>
                  <li>Butter Pecan</li>
                  <li>Macadamia Nut</li>
                  <li>Butter Cookie</li>
                </div>
                <div id="flavorList">
                  <li>
                    Hazelnut <span id="sugarfree">*</span>
                  </li>
                  Peppermint
                  <li>
                    Peppermint <span id="sugarfree">*</span>
                  </li>
                  <li>Coconut</li>
                  <li>Cinnamon Bun</li>
                  <li>Almond Bliss</li>
                  <li>Wedding Cake</li>
                  <li>Toffee Nut</li>
                  <li>Pistachio Cream</li>
                  <li>Irish Cream</li>
                  <li>Lavender</li>
                </div>
                <p>Your choice of milk or dairy-free alternatives</p>
                <p id="coffeenote">
                  **Iced coffee can be served with condensed milk. Yum!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menuBox" id="Stroopwafel">
        <h1 className="menuItemTitle">Stroopwafel</h1>
        <div className="menuItemInfo">
          <p className="menuItemDesc">
            *Stroopwafel hails from the Netherlands. It is a crispy, buttery,
            caramel-filled, thin waffle cookie.<br></br> Set it on top of your
            hot coffee and enjoy what happens next!
          </p>
        </div>
      </div>
      <div className="menuBox" id="PotatoRoasti">
        <h1 className="menuItemTitle">Potato Roasti</h1>
      </div>
      <div className="menuBox" id="bagelshoppe">
        <h1 className="menuItemTitle">The Bagel Shoppe</h1>
        <div className="menuItemInfo">
          <p id="sizeOptions">Bagel Options (Rotated Weekly)</p>
          <div className="bagelOptions">
            <ul>
              <li>Plain</li>
              <li>Blueberry</li>
              <li>Everything</li>
              <li>French Toast</li>
              <li id="wwe">Jalapeno Red Pepper</li>
              <li>Kalamata Olive</li>
              <li>Apple Cinnamon</li>
              <li id="wwe">Cranberry Energy</li>
              <li>Quinoa Multigrain</li>
            </ul>
            <ul>
              <li>Sesame</li>
              <li>Marble Rye</li>
              <li>Whole Wheat</li>
              <li id="wwe">Whole Wheat Everything</li>
              <li>Pumpernickel</li>
              <li>Poppy Seed</li>
              <li id="wwe2">Christmas Bagel (seasonal)</li>
              <li>Bialys</li>
            </ul>
          </div>

          <div className="menuChoices">
            <p id="fruit">Cream Cheese</p>
            <div className="fruitChoice">
              <ul>
                <li>Regular</li>
                <li>Low Fat</li>
                <li>Blueberry</li>
                <li>Strawberry</li>
              </ul>
              <ul>
                <li>Honey Pecan</li>
                <li>Onion Chive</li>
                <li>Greek</li>
              </ul>
            </div>

            <p id="super">Goat Cheese</p>

            <p>Dairy-Free Fromage Cheese</p>
            <div className="proteinChoice">
              <ul className="proteinList">
                <li>Tomato Herb</li>
                <li>Honey Pecan</li>
                <li>Balsamic Fig</li>
              </ul>
            </div>
            <p>Sliced Cheese</p>
            <div className="SmoothieBowlFruitToppings">
              <ul className="proteinList">
                <li>White American</li>
                <li>Pepper Jack</li>
                <li>Smoked Provalone</li>
                <li>Fresh Mozzarella Cheese</li>
              </ul>
            </div>
            <p>Eggs</p>
            <div className="SmoothieBowlFruitToppings">
              <ul className="proteinList">
                <li>Poached</li>
                <li>Mini Omelet</li>
              </ul>
            </div>
            <p>Meats</p>
            <div className="KetoGranola">
              <ul className="proteinList">
                <li>Bacon</li>
                <li>Deer Sausage</li>
                <li>Ham (thinly sliced and grilled)</li>
                <li>Salmon (Lox)</li>
              </ul>
            </div>

            <p>Infused Olive Oil/Balsamic Vinegar Drizzle</p>
            <div className="GrainFreeGranola">
              <ul className="proteinList">
                <li>Assorted FLavors</li>
              </ul>
            </div>

            <p>Avocado</p>

            <p>Tomato (Fresh)</p>

            <p>Jams and Jellies</p>
            <div className="NonDairyOptions">
              <ul className="proteinList">
                <li>Strawberry</li>
                <li>Blackberry</li>
                <li>Fig</li>
                <li>Orange Marmalade</li>
                <li>Pepper Jelly</li>
                <li>Onion Bacon Jam</li>
                <li>Chili Bacon Jam</li>
                <li>Low Sugar Blueberry Cherry</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="menuBox" id="dairyfreecheese">
        <h1 className="menuItemTitle">Dairy-Free Fromage Cheese</h1>
        <div className="menuItemInfo">
          <div className="proteinChoice">
            <ul className="proteinList">
              <li>Tomato Herb</li>
              <li>Honey Pistachio</li>
              <li>Balsamic Fig</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="menuBox" id="cinnamonroll">
        <h1 className="menuItemTitle">Cinnamon Rolls</h1>
        <div className="menuItemInfo">
          <h2 className="menuItemPrice">Regular or Gluten-Free</h2>
          <br></br>
          <h2 className="menuItemPrice">Flavors</h2>

          <div className="flavorBox">
            <p className="menuItemPrice">Blueberry Cobbler</p>
            <img
              id="cinnaImg"
              src="/images/blueberrycobbler.png"
              alt="Blueberry Cobbler"
            />
          </div>
          <div className="flavorBox">
            <p className="menuItemPrice">Butter Pecan</p>
            <img
              id="cinnaImg"
              src="/images/butterpecan.jpg"
              alt="Butter Pecan"
            />
          </div>
          <div className="flavorBox">
            <p className="menuItemPrice">Caramel Apple</p>
            <img
              id="cinnaImg"
              src="/images/caramelapple.jpg"
              alt="Caramel Apple"
            />
          </div>
          <div className="flavorBox">
            <p className="menuItemPrice">Cherry Almond</p>
            <img
              id="cinnaImg"
              src="/images/cherryalmond.jpg"
              alt="Cherry Almond"
            />
          </div>
          <div className="flavorBox">
            <p className="menuItemPrice">Cinnamon Cream</p>
            <img
              id="cinnaImg"
              src="/images/cinnamoncream.jpg"
              alt="cinnamonCream"
            />
          </div>
          <div className="flavorBox">
            <p className="menuItemPrice">Maple Bacon Overload</p>
            <img id="cinnaImg" src="/images/maplebacon.jpg" alt="Maple Bacon" />
          </div>
          <div className="flavorBox">
            <p className="menuItemPrice">White Chocolate Caramel</p>
            <img
              id="cinnaImg"
              src="/images/whitechocolatecaramel.jpg"
              alt="White Chocolate Caramel"
            />
          </div>
          <div className="flavorBox">
            <p className="menuItemPrice">CinnaBits</p>
            <img id="cinnaImg" src="/images/cinnabits.png" alt="CinnaBits" />
          </div>
        </div>
      </div>
      <div className="menuBox" id="CheeseDanish">
        <h1 className="menuItemTitle">Jarritos Sparkling Fruit Drinks</h1>
      </div>
      <div className="menuBox" id="Tea">
        <h1 className="menuItemTitle">Premium Organic Iced Tea</h1>
        <div className="menuItemInfo">
          <p className="menuItemPrice">
            <span>Black/Hibiscus/Matcha</span>
            <span>(16oz) (20oz) </span>
          </p>
          <span id="New">*NEW!!* Try our Matcha Lattes!</span>
        </div>
      </div>
      <div className="menuBox" id="OrangeJuice">
        <h1 className="menuItemTitle">Juice</h1>
        <div className="menuItemInfo">
          <span className="menuItemPrice" id="Fruit">
            Orange or Apple
          </span>
          <p className="menuItemPrice">
            <span></span>
            <span></span>
          </p>
        </div>
      </div>
      <div className="menuBox" id="Milk">
        <h1 className="menuItemTitle">Milk</h1>
        <div className="menuItemInfo">
          <span className="menuItemPrice">
            Regular<br></br>Chocolate
          </span>
        </div>
      </div>
      <div className="menuBox" id="HotChocolate">
        <h1 className="menuItemTitle">Hot Chocolate</h1>
        <div className="menuItemInfo">
          <p className="menuItemDesc">(Oct - Mar)</p>
          <p className="menuItemPrice">
            <span>12oz. / 16oz.</span>
          </p>

          <div className="menuItemDesc">
            <div id="coffeeflavors">
              Hot Chocolate Flavors:
              <br />
              <div id="flavorNames">
                <div id="flavorList">
                  <li>Milk Chocolate</li>
                  <li>Dark Chocolate</li>
                  <li>Cinnamon Spice (Mexican Hot Chocolate)</li>
                  <li>Peppermint</li>
                  <li>White Chocolate</li>
                </div>
                Seasonal Flavors:
                <div id="flavorList">
                  <li>
                    White or dark hot chocolate infused with Pumpkin Spice
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menuBox" id="Scones">
        <h1 className="menuItemTitle">Scones</h1>
        <div className="menuItemInfo">
          <p className="menuItemPrice">
            <span>Blueberry</span>
          </p>
        </div>
      </div>
      <div className="menuBox" id="GFPastries">
        <h1 className="menuItemTitle">Gluten Free Pastries</h1>
        <div className="menuItemInfo">
          <div>
            <p className="menuItemPrice">
              <span>Chocolate Espresso Brownie</span>
            </p>
            <p className="menuItemPrice">
              <span>Peanut Butter Blondie Brownie</span>
            </p>
          </div>
          <div>
            <p className="menuItemPrice">
              <span>Lemon Bar</span>
            </p>
            <p className="menuItemPrice">
              <span>Apple Pie Bar</span>
            </p>
            <p className="menuItemPrice">
              <span>Cinnamon Roll</span>
            </p>
          </div>
        </div>
      </div>
      <div className="menuBox" id="MorningHarvestMuffin">
        <h1 className="menuItemTitle">Morning Harvest Muffin</h1>
      </div>
      <div className="menuBox" id="Biscuits">
        <h1 className="menuItemTitle">Biscuits</h1>
        <div className="menuItemInfo">
          <p className="menuScroll">Large Buttermilk Biscuit w/ Butter</p>

          <div className="menuItemList">
            <ul>
              <li>
                Add Preserves<br></br> (Strawberry, Blackberry, Organic, Reduced
                Sugar Cherry Blueberry, Fig, Pepper Jelly)
              </li>
              <li>Add Deer Sausage/Bacon</li>
              <li>
                Add Cheese <br></br>(Pepperjack and Real White American Cheese)
              </li>
              <li>Add Egg Bite*</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="menuBox" id="EggBites">
        <h1 className="menuItemTitle">Egg Bites</h1>
      </div>
    </>
  );
}

export function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutTextContainer">
          <div className="hoursContainer">
            <h1 className="aboutTitle">Morning Hours</h1>
            <p className="aboutText">
              <span>Tues - Sat</span>
              <br></br>
              <span>7:00 AM - 11:00 AM</span>
            </p>
          </div>
          <div className="hoursContainer">
            <h1 className="aboutTitle">Evening Hours</h1>
            <p className="aboutText">
              <span>Thur & Fri</span>
              <br></br>
              <span>3:00 PM - 7:30 PM</span>
            </p>
            <p className="aboutText">
              <span>Sat</span>
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
            We are a full-service coffee shop and specialty breakfast cafe
            serving freshly made breakfast and brunch items as well as freshly
            ground specialty and drip coffees. We are also an evening scoop shop
            proudly serving The Chocolate Shoppe&#39;s super premium ice cream
            with over 30 flavors available to our customers. Come wake up in the
            morning to your favorite brew and chill out with us in the evenings
            with gourmet desserts and ice cream like no other!
            <br></br> <br></br>Liberty House, Circa 1868, housed the first
            general store in the Feliciana parishesS. Standing tall, Liberty
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
            <a href="https://www.stanforddevsolutions.com/">
              Click here to view my website!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export function Events() {
  const [viewer, setViewer] = useState({ open: false, src: "", alt: "" });
  // Category selection using real items (no pagination; show all)
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeGlazeTab, setActiveGlazeTab] = useState("jungleGems");

  const activeCategory = potteryCategories[activeCategoryIndex];
  const itemsToRender = activeCategory?.items || [];
  const withGlazeItems = itemsToRender.filter(
    (it) => it.glazed && it.glazed.length > 0
  );
  const bisqueOnlyItems = itemsToRender.filter(
    (it) => !it.glazed || it.glazed.length === 0
  );

  // Close on ESC and lock scroll when viewer is open
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setViewer((v) => ({ ...v, open: false }));
    };
    if (viewer.open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [viewer.open]);

  return (
    <>
      <div className={styles.eventsBox} id="PotteryShoppe">
        <div
          className={`${styles.eventsTextContainer} ${styles.potteryContainer}`}
        >
          <div className={styles.potteryHeaderBox}>
            <h1 className={styles.eventsTitle}>The Pottery Shoppe</h1>
            <p
              className={`${styles.eventsText} ${styles.potterySubtitle}`}
              style={{ marginTop: 0, marginBottom: 8, fontStyle: "italic" }}
            >
              The Work of Our Hands
            </p>
            {/* Background image is now handled in CSS (potteryHeaderBox) */}
            <p className={`${styles.eventsText} ${styles.potteryLead}`}>
              Welcome to "The Pottery Shoppe" at Liberty House Specialties where
              you can have fun, get creative and make memories!
            </p>
            <ol
              className={styles.potterySubtext}
              style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}
            >
              <li>Choose your ready-to-paint bisque form</li>
              <li>Choose your paints, glazes, and tools</li>
              <li>Call us for pricing and ordering (225-683-9342)</li>
              <li>
                Pick up and start enjoying a fulfilling pottery painting
                experience
                <br />
                right at home, creating fun and functional art pieces!
              </li>
            </ol>
            {/* Center Order & Pickup text if present */}
            {/* Order/pickup call-to-action removed per request */}
          </div>

          <div className={styles.potteryOverview}>
            <div className={styles.potteryColumn}>
              <h2 className={styles.potteryTitle}>
                Ceramic Forms (Ready-to-Paint)
              </h2>

              {/* Category tabs */}
              <div
                className={styles.pagination}
                style={{ justifyContent: "center", flexWrap: "wrap" }}
              >
                {potteryCategories.map((cat, idx) => (
                  <button
                    key={cat.key}
                    className={styles.paginationButton}
                    onClick={() => {
                      setActiveCategoryIndex(idx);
                    }}
                    style={{
                      background:
                        idx === activeCategoryIndex
                          ? "#f8c359"
                          : "rgb(61,60,51)",
                      color: idx === activeCategoryIndex ? "#000" : "#f8c359",
                    }}
                  >
                    {cat.key}
                  </button>
                ))}
              </div>

              {/* Grid A: Bisque-only items */}
              <div className={styles.itemGrid}>
                {bisqueOnlyItems.map((item, i) => {
                  const hasGlaze = false;
                  return (
                    <div
                      className={`${styles.itemCard} ${styles.bisqueOnly}`}
                      key={`${item.sku || item.title}-bisque-${i}`}
                    >
                      <img
                        src={item.bisque || "/images/placeholder.png"}
                        alt={`${item.title} (Bisque)`}
                        className={`${styles.bisqueImg} ${styles.clickable}`}
                        style={{
                          width: 90,
                          height: 90,
                          objectFit: "cover",
                          display: "block",
                        }}
                        onClick={() =>
                          setViewer({
                            open: true,
                            src: item.bisque || "/images/placeholder.png",
                            alt: `${item.title} (Bisque)`,
                          })
                        }
                      />
                      <p className={styles.itemTitle}>
                        {item.sku ? `${item.sku} ` : ""}
                        {item.title}
                      </p>
                      {/* dimensions shown in title parentheses; removed separate meta line */}
                    </div>
                  );
                })}
              </div>

              {/* Divider visible only when both groups have content */}
              {bisqueOnlyItems.length > 0 && withGlazeItems.length > 0 ? (
                <div className={styles.sectionDivider} aria-hidden="true" />
              ) : null}

              {/* Grid B: Items that have glazed examples */}
              <div className={styles.itemGrid}>
                {withGlazeItems.map((item, i) => {
                  const hasGlaze = item.glazed && item.glazed.length > 0;
                  // If bisque is missing or equals the placeholder, use the first glazed
                  // image as the main image so the card shows only one image.
                  const placeholder = "/images/placeholder.png";
                  const mainSrc =
                    item.bisque && item.bisque !== placeholder
                      ? item.bisque
                      : hasGlaze
                      ? item.glazed[0]
                      : placeholder;
                  const mainAlt =
                    mainSrc === item.bisque || !hasGlaze
                      ? `${item.title} (Bisque)`
                      : `${item.title} (Example)`;

                  return (
                    <div
                      className={`${styles.itemCard} ${
                        hasGlaze ? styles.hasGlaze : styles.bisqueOnly
                      }`}
                      key={`${item.sku || item.title}-glaze-${i}`}
                    >
                      <img
                        src={mainSrc || placeholder}
                        alt={mainAlt}
                        className={`${styles.bisqueImg} ${styles.clickable}`}
                        style={{
                          width: 90,
                          height: 90,
                          objectFit: "cover",
                          display: "block",
                        }}
                        onClick={() =>
                          setViewer({
                            open: true,
                            src: mainSrc || placeholder,
                            alt: mainAlt,
                          })
                        }
                      />
                      <p className={styles.itemTitle}>
                        {item.sku ? `${item.sku} ` : ""}
                        {item.title}
                      </p>
                      {/* dimensions shown in title parentheses; removed separate meta line */}
                      {hasGlaze &&
                        item.glazed[0] &&
                        mainSrc !== item.glazed[0] && (
                          <div
                            style={{
                              display: "flex",
                              gap: 6,
                              marginTop: 8,
                              flexWrap: "wrap",
                              justifyContent: "center",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={item.glazed[0]}
                                alt={`${item.title} (Example)`}
                                className={`${styles.glazeThumb} ${styles.clickable}`}
                                style={{
                                  width: 90,
                                  height: 90,
                                  objectFit: "cover",
                                  display: "block",
                                }}
                                onClick={() =>
                                  setViewer({
                                    open: true,
                                    src: item.glazed[0],
                                    alt: `${item.title} (Example)`,
                                  })
                                }
                              />
                              <span className={styles.badge}>Example</span>
                            </div>
                          </div>
                        )}
                    </div>
                  );
                })}
              </div>

              {/* Pagination removed: all items are shown */}
            </div>

            {/* Glazes with tabs */}
            <div className={styles.potteryColumn}>
              <h2>Glazes & Paints</h2>
              <div className={styles.glazeTabs}>
                {[
                  { key: "jungleGems", label: "Jungle Gems" },
                  { key: "strokeCoat", label: "Stroke & Coat" },
                  {
                    key: "speckledStrokeCoat",
                    label: "Speckled Stroke & Coat",
                  },
                  { key: "elements", label: "Elements & Element Chunkies" },
                  { key: "foundations", label: "Foundations" },
                  { key: "pottersChoiceFlux", label: "Potter's Choice Flux" },
                ].map((t) => (
                  <button
                    key={t.key}
                    className={styles.paginationButton}
                    onClick={() => setActiveGlazeTab(t.key)}
                    style={{
                      margin: 4,
                      background:
                        activeGlazeTab === t.key ? "#f8c359" : "#3d3c33",
                      color: activeGlazeTab === t.key ? "#000" : "#f8c359",
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className={styles.itemGrid}>
                {(glazeSwatches[activeGlazeTab] || []).map((g) => (
                  <div
                    className={`${styles.itemCard} ${styles.glazeItemCard}`}
                    key={g.src}
                  >
                    <img
                      src={g.src}
                      alt={g.name}
                      className={`${styles.productPlaceholder} ${styles.clickable}`}
                      onClick={() =>
                        setViewer({
                          open: true,
                          src: g.src,
                          alt: g.name,
                          type: "image",
                        })
                      }
                    />
                    <p style={{ fontSize: "0.82rem" }}>{g.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Brushes moved below Glazes */}
            <div className={styles.potteryColumn}>
              <h2>Tools & Brushes</h2>
              <div className={styles.itemGrid}>
                {(brushesAndTools && brushesAndTools.length > 0
                  ? // produce a new array where Eye of the Tiger items are grouped and
                    // sorted by their trailing letter/number, and non-Eye items keep order
                    (() => {
                      const eyeItems = [];
                      const otherItems = [];
                      (brushesAndTools || []).forEach((b) => {
                        if (/^Eye of the Tiger/i.test(b.name || "")) {
                          eyeItems.push(b);
                        } else {
                          otherItems.push(b);
                        }
                      });
                      // sort Eye items by last letter/number after the final word (A, B, C, D, E, 6, etc.)
                      eyeItems.sort((a, b) => {
                        const trailing = (s) => {
                          const m = (s || "").match(/([A-Za-z0-9])\s*$/);
                          if (m) return m[1].toUpperCase();
                          // fallback: last char of string
                          return (s || "").slice(-1).toUpperCase();
                        };
                        const ta = trailing(a.name);
                        const tb = trailing(b.name);
                        // put letters A-Z before numbers
                        const isNum = (c) => /[0-9]/.test(c);
                        if (isNum(ta) !== isNum(tb)) return isNum(ta) ? 1 : -1;
                        return ta.localeCompare(tb, undefined, {
                          sensitivity: "base",
                        });
                      });
                      return [...otherItems, ...eyeItems];
                    })()
                  : [
                      { src: "/images/placeholder.png", name: "Placeholder" },
                      { src: "/images/placeholder.png", name: "Placeholder" },
                    ]
                ).map((tool, idx) => {
                  // Always render images for tools (including Eye of the Tiger items).
                  return (
                    <div
                      className={`${styles.itemCard} ${styles.toolItemCard}`}
                      key={idx}
                    >
                      <img
                        src={tool.src}
                        alt={tool.name || `Tool ${idx + 1}`}
                        className={`${styles.productPlaceholder} ${styles.clickable}`}
                        onClick={() =>
                          setViewer({
                            open: true,
                            src: tool.src,
                            alt: tool.name || `Tool ${idx + 1}`,
                            type: "tool",
                          })
                        }
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/images/placeholder.png";
                        }}
                      />
                      <p>{tool.name || `Tool #${idx + 1}`}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Removed duplicate expanded Glazes column - single tabbed Glazes section above is used */}
          </div>

          {/* Project Guides section removed per request */}

          {/* Removed footer note per request */}
        </div>
      </div>
      {/* FAQ section appended per request */}
      <div className={styles.potteryColumn} style={{ marginTop: 18 }}>
        <h2 className={styles.faqTitle}>Frequently asked questions</h2>
        <div style={{ textAlign: "center", maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <p
              className={styles.faqQuestion}
              style={{
                color: "#f8c359",
                fontSize: "1.8rem",
                fontWeight: 700,
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
              }}
            >
              <strong>Q:</strong> how long will it take to fire my item?
            </p>
            <p
              className={styles.faqAnswer}
              style={{
                color: "#ffffff",
                fontSize: "1.45rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
              }}
            >
              <strong>A:</strong> kilns must be full in order to fire. firing
              time is based on the number of items to fire. after firing, the
              kilns must cool down before opening so please allow 3-14 days for
              your item to be ready for pick-up.
            </p>

            <p
              className={styles.faqQuestion}
              style={{
                color: "#f8c359",
                fontSize: "1.6rem",
                fontWeight: 700,
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
              }}
            >
              <strong>Q:</strong> what if i have never worked with ceramics
              before and need technical help?
            </p>
            <p
              className={styles.faqAnswer}
              style={{
                color: "#ffffff",
                fontSize: "1.45rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
              }}
            >
              <strong>A:</strong> we are here to help! call us tuesday-saturday,
              11am-4pm with technical or creative questions and we will be happy
              to assist.
            </p>

            <p
              className={styles.faqQuestion}
              style={{
                color: "#f8c359",
                fontSize: "1.6rem",
                fontWeight: 700,
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
              }}
            >
              <strong>Q:</strong> what if i want to purchase items as a gift?
            </p>
            <p
              className={styles.faqAnswer}
              style={{
                color: "#ffffff",
                fontSize: "1.45rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
              }}
            >
              <strong>A:</strong> we will put together a gift box with the
              item(s) of your choosing. your recipient simply completes the
              item(s) and drops them off for final firing, which is included in
              gift packages.
            </p>

            <p
              className={styles.faqQuestion}
              style={{
                color: "#f8c359",
                fontSize: "1.6rem",
                fontWeight: 700,
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
              }}
            >
              <strong>Q:</strong> do you supply schools and community art
              projects?
            </p>
            <p
              className={styles.faqAnswer}
              style={{
                color: "#ffffff",
                fontSize: "1.45rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
              }}
            >
              <strong>A:</strong> yes — we can provide bulk orders and supplies.
            </p>
          </div>
        </div>
      </div>
      {viewer.open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={viewer.alt || "Image viewer"}
          className={styles.lightboxOverlay}
          onClick={() => setViewer((v) => ({ ...v, open: false }))}
        >
          <img
            src={viewer.src}
            alt={viewer.alt}
            className={
              viewer.type === "tool"
                ? styles.lightboxImageTool
                : styles.lightboxImage
            }
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className={styles.lightboxClose}
            aria-label="Close"
            onClick={() => setViewer((v) => ({ ...v, open: false }))}
          >
            ×
          </button>
        </div>
      ) : null}
    </>
  );
}

function SeasonalFlavors() {
  const flavorsWithDescriptions = [
    {
      flavor: "Banana Cream Pie",
      description:
        "Your favorite comfort food now on a cone! Banana ice cream churned with a marshmallow ripple and real Nilla Wafers.",
    },
    {
      flavor: "Birthday Cake",
      description:
        "This party in a pint is topped off with festive swirls of blue buttercream frosting and bursts of colorful confetti sprinkles.",
    },
    {
      flavor: "Blackberry Lemon Bar",
      description:
        "Lemon ice cream folded with pound cake and blackberry sauce.",
    },
    {
      flavor: "Blueberry Cheesecake",
      description:
        "Delectably smooth cheesecake ice cream topped off with a tangy blueberry ripple and soft cheesecake chunks.",
    },
    {
      flavor: "Bourbon Pecan Pie",
      description:
        "Smooth bourbon ice cream swirled with a sea salt chocolate fudge ripple and roasted pecans.",
    },
    {
      flavor: "Brownie Cascade",
      description:
        "Classic, creamy chocolate ice cream exploding with brownie pieces, caramel cups and a sweet fudge ripple.",
    },
    {
      flavor: "Butter Pecan",
      description:
        "Buttery pecan ice cream with boat-loads of crispy, lightly roasted and salted pecans.",
    },
    {
      flavor: "Caramel Chaos",
      description:
        "Sweet caramel ice cream packed with chocolate-covered caramel cups and swirls of gooey caramel.",
    },
    {
      flavor: "Cashews & Caramel",
      description:
        "Creamy, no-sugar-added vanilla ice cream rippled with gooey, sugar-free caramel and loaded with real cashews.",
    },
    {
      flavor: "Cherry Chocolate Chip",
      description:
        "Sweet vanilla ice cream loaded with big, red cherries and melt-in-your-mouth chocolate chips.",
    },
    {
      flavor: "Chocolate",
      description:
        "All-natural, classic chocolate ice cream made with real, rich cocoas.",
    },
    {
      flavor: "Coconut Almond Bliss",
      description:
        "Coconut ice cream with chocolate flakes and roasted almonds.",
    },
    {
      flavor: "Cookie Dough",
      description:
        "Sweet cookie-flavored ice cream with heaps of soft chocolate chip cookie dough chunks and tons of rich chocolate chips.",
    },
    {
      flavor: "Cotton Candy Twist",
      description:
        "Blue and pink cotton candy ice creams spun together for that whimsical carnival sensation!",
    },
    {
      flavor: "Electric Watermelon",
      description:
        "Refreshing watermelon Italian ice with a jolt of sour to leave you feeling electric.",
    },
    {
      flavor: "Fat Elvis",
      description:
        "Banana ice cream all shook up with salty peanut butter and chocolate chips.",
    },
    {
      flavor: "Gumball",
      description:
        "Bubblegum glow up! Nostalgic gumball ice cream folded with pink, edible bubblegum-esque pieces.",
    },
    {
      flavor: "Halley's Comet®",
      description:
        "A perfect trio of flavors with rich milk chocolate and vanilla ice creams swirled with caramel ribbons and caramel truffles.",
    },
    {
      flavor: "Heaps of Love",
      description:
        "Vanilla ice cream packed with Oreos®, brownies, cookie dough, pecans, caramel and chocolate swirls.",
    },
    {
      flavor: "Kitty Kitty Bang Bang",
      description:
        "Cheesecake ice cream mixed with raspberry sauce, Oreos® and chocolate chunks.",
    },
    {
      flavor: "Lemon Poppy Seed",
      description:
        "All-natural, fresh and bright lemon ice cream speckled with poppy seeds.",
    },
    {
      flavor: "Malt Amore",
      description:
        "Old-style malted milk ice cream packed with rich, malt flavor, soft chocolate chips and ripples of sweet, chocolate fudge.",
    },
    {
      flavor: "Mint Avalanche",
      description:
        "Mint ice cream loaded with Andes® Candies, Grasshopper® cookies, and chocolate fudge.",
    },
    {
      flavor: "Munchie Madness",
      description:
        "Sweet cake batter ice cream swirled with a salted caramel ripple and brimming with Oreos, M&M pieces and peanut butter cups.",
    },
    {
      flavor: "Old Fashioned Vanilla",
      description:
        "An award-winning and all-natural classic vanilla ice cream made with Wisconsin cream, cane sugar and pure vanilla.",
    },
    {
      flavor: "Party Animal",
      description:
        "Sugar cookie ice cream blended with pink and white frosted animal cookies and rainbow sprinkles.",
    },
    {
      flavor: "Peach",
      description:
        "Fresh peach ice cream packed with real peaches to celebrate the warm spring weather, available for a limited time only.",
    },
    {
      flavor: "Peanut Butter Cup",
      description:
        "Smooth chocolate ice cream brimming with mouthwatering peanut butter ripples and rich peanut butter cups.",
    },
    {
      flavor: "Peppermint",
      description:
        "Crisp, peppermint ice cream made with boat-loads of peppermint candies and bursting with candy cane flavor in every bite.",
    },
    {
      flavor: "Pistachio Nut",
      description:
        "Irresistible almond-flavored ice cream churned with crisp pistachio nuts.",
    },
    {
      flavor: "Rocky Road",
      description:
        "Swirls of rich, chocolate and fluffy marshmallow ice creams and topped off with chocolate-covered almonds.",
    },
    {
      flavor: "S'more to Love",
      description:
        "Crushed graham cracker ice cream with melty layers of chocolate and marshmallow.",
    },
    {
      flavor: "Sticks & Stones®",
      description:
        "Soft cookie dough chunks, crunchy chocolate covered pretzels, and a gooey salted caramel ripple all swirled into our rich chocolate ice cream.",
    },
    {
      flavor: "Strawberry",
      description:
        "Award-winning and deliciously fresh strawberry ice cream loaded to the brim with real, whole strawberries.",
    },
    {
      flavor: "Strawberry Cheesecake",
      description:
        "Cheesecake ice cream swirled with a strawberry ripple and loads of gooey cheesecake pieces.",
    },
    {
      flavor: "Strawberry Hibiscus",
      description:
        "Fresh strawberry puree balanced with infused hibiscus, and blended into vegan italian ice.",
    },
    {
      flavor: "Strawberry Ripple NSA",
      description:
        "Creamy, no-sugar-added vanilla ice cream swirled with sweet and tangy strawberry ribbons.",
    },
    {
      flavor: "Super Human",
      description:
        "Meet your new kryptonite… Cherry, Blue Moon and Vanilla ice creams combine forces to bring you one super scoop!",
    },
    {
      flavor: "This $&@! Just Got Serious",
      description:
        "Salted caramel ice cream with a sea salt fudge ripple and roasted cashews.",
    },
    {
      flavor: "Ube Chai",
      description:
        "This scrumptious blend features ube (sweet purple yam) ice cream with hints of coconut swirled with spiced chai ice cream.",
    },
    {
      flavor: "Ultimate Oreo",
      description:
        "Scrumptious Oreo® crumb ice cream packed with boat-loads of whole Oreo® cookies.",
    },
    {
      flavor: "Ultimate Oreo Oat Cream",
      description:
        "Oreo crumb non-dairy frozen dessert packed with whole Oreos.",
    },
    {
      flavor: "Vanilla Chocolate Chip Oat Cream",
      description:
        "Classic vanilla non-dairy frozen dessert made with delicious, semi-sweet chocolate chips.",
    },
    {
      flavor: "Vanilla Frozen Custard",
      description:
        "Sweet, classic and all-natural custard made with Wisconsin cream, cane sugar, egg yolks and pure vanilla.",
    },
    {
      flavor: "Yippee Skippee®",
      description:
        "Creamy peanut butter ice cream loaded with salted caramel ripples, soft brownie chunks and crispy chocolate-covered pretzels.",
    },
    {
      flavor: "Zanzibar Chocolate",
      description:
        "Award-winning, deep dark chocolate made with three kinds of cocoa.",
    },
    {
      flavor: "Zoreo",
      description:
        "Fudge-like Zanzibar® Chocolate ice cream swirled with gooey marshmallow, Oreos and bittersweet chocolate chunks.",
    },
  ];

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

      <div id="IceMiscOrganizer">
        <div className="menuBox" id="Cones">
          <h1 className="menuItemTitle">Cones</h1>
          <div className="menuItemInfo">
            <p className="menuItemPrice">
              <span>Chocolate Chip Cone</span>
            </p>
            <p className="menuItemPrice">
              <span>Sprinkle Cone</span>
            </p>
            <p className="menuItemPrice">
              <span>Pretzel Cone</span>
            </p>
            <p className="menuItemPrice">
              <span>Chocolate Cookie Cone</span>
            </p>
            <p className="menuItemPrice">
              <span>Waffle Cone</span>
            </p>
          </div>
        </div>

        <div className="menuBox" id="Balls">
          <h1 className="menuItemTitle">Cake Balls</h1>
          <div className="menuItemInfo">
            <p className="menuItemPrice">
              <span>Assorted Flavors</span>
            </p>
          </div>
        </div>

        <div className="menuBox" id="Shakes">
          <h1 className="menuItemTitle">Shakes</h1>
          <div className="menuItemInfo">
            <p className="menuItemPrice">
              <span id="milkshake">Milkshake</span>
            </p>
          </div>
        </div>
      </div>

      <div className="iceCreamBoxOrganizer">
        {flavorsWithDescriptions.map((flavorObj, index) => (
          <div className="iceCreamBox" key={index}>
            <img
              style={{ width: "60%" }}
              src={`/cream/${flavorObj.flavor
                .toLowerCase()
                .replace(/\s+/g, "")}.png`}
              alt={flavorObj.flavor}
            />
            <p className="iceCreamText">{flavorObj.flavor}</p>
            <p className="iceCreamDesc">{flavorObj.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export function AllFlavors() {
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

export function IceCream() {
  const [currentTab, setCurrentTab] = useState("seasonal");

  const handleSeasonalButtonClick = () => setCurrentTab("seasonal");
  const handleAllButtonClick = () => setCurrentTab("all");

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
