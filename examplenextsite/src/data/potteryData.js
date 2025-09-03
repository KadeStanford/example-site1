// Structured data for Pottery Shoppe based on images under public/images/Pottery
// Includes helpers to parse filenames, pair bisque and glazed examples ("Painted" -> display as "Glazed"), and extract SKUs and dimensions

function encodePath(p) {
  return p.replace(/ /g, "%20");
}

function splitSkuAndTitle(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return { sku: "", title: name };
  // If first token looks like an SKU (letters/numbers/hyphen), take it
  const first = parts[0];
  if (/^[A-Za-z0-9-]+$/.test(first)) {
    return { sku: first, title: name.slice(first.length).trim() };
  }
  return { sku: "", title: name };
}

function extractDimensions(name) {
  const m = name.match(/\(([^)]*)\)/);
  return m ? m[1] : "";
}

function normalizeBase(name) {
  // remove extension
  let base = name.replace(/\.(jpe?g|png)$/i, "");
  // strip Painted/Glazed markers and trailing variants like (1) (2)
  base = base.replace(/\s*(Painted|Glazed)\b.*$/i, "");
  base = base.replace(/\s*\([^)]*\)\s*$/, ""); // strip trailing (dim) for pairing
  return base.trim();
}

function buildItemsFromFiles(folder, files) {
  const map = new Map();
  for (const file of files) {
    const isGlazed = /Painted|Glazed/i.test(file);
    const baseOriginal = normalizeBase(file);
    const key = baseOriginal.toLowerCase(); // case-insensitive pairing
    const entry = map.get(key) || {
      bisque: null,
      glazed: [],
      displayBase: null,
    };
    if (isGlazed) {
      entry.glazed.push(`${folder}/${file}`);
      if (!entry.displayBase) entry.displayBase = baseOriginal;
    } else {
      // prefer JPG/JPEG over PNG if multiple; keep first non-painted as bisque if not set
      if (!entry.bisque || /\.jpe?g$/i.test(file)) {
        entry.bisque = `${folder}/${file}`;
        // Prefer bisque name casing for display metadata
        entry.displayBase = baseOriginal;
      } else if (!entry.displayBase) {
        entry.displayBase = baseOriginal;
      }
    }
    map.set(key, entry);
  }

  const items = [];
  for (const [, imgs] of map.entries()) {
    const baseForMeta = imgs.displayBase || "";
    const dims = extractDimensions(baseForMeta);
    const { sku, title } = splitSkuAndTitle(baseForMeta);
    items.push({
      sku,
      title,
      dimensions: dims,
      bisque: encodePath(imgs.bisque || ""),
      glazed: imgs.glazed.map(encodePath),
    });
  }
  // stable sort by sku then title
  items.sort(
    (a, b) =>
      (a.sku || "").localeCompare(b.sku || "") || a.title.localeCompare(b.title)
  );
  return items;
}

// Ceramic Bisques categories
const CB_ROOT = "/images/Pottery/Ceramic%20Bisques/Ceramic%20Bisques";

const ASSORTED_FORMS_FILES = [
  "30616 Small Heart Bowl.jpeg",
  "31805 Robot Bank.jpeg",
  "32926 Rocket Bank.jpeg",
  "33424 Tiny-Tot-Hoppy-the-Frog.jpeg",
  "34378 Tiny-Tot-Gobble Painted.jpeg",
  "34378 Tiny-Tot-Gobble.jpeg",
  "35073 Ten Petal Flower Bank.jpeg",
  "38160 Large Fox Bank.jpeg",
  "44381 Footed Planter Painted.jpg",
  "44381 Footed Planter.png",
  "CCX835 Glam Kitty.jpg",
  "mb-1622 Ceramic Bisque Curly Mushroom.jpg",
  "mb-1623 Ceramic Bisque Ribbed Mushroom.jpg",
  "mb-1624 Ceramic Bisque Ribbed Mushroom.jpg",
  "mb-1629 Small Snail Planter Painted.jpg",
  "mb-1629 Small Snail Planter.jpg",
  "mb1489 Hedgehog Planter Painted (1).jpg",
  "mb1489 Hedgehog Planter Painted (2).jpg",
  "mb1489 Hedgehog Planter.jpg",
  "mb1537 Llama Container Painted.jpg",
  "mb1537 Llama Container.jpg",
];

const BANKS_FILES = [
  "22702 Small Piggy Bank.jpeg",
  "26147 Smokin Hot Rod Bank.jpeg",
  "29852 Football-Bank.jpeg",
  "29853 Baseball Bank.jpeg",
];

const BOXES_FILES = [
  "21688 Ceramic Bisque Flower Trinket Box.jpeg",
  "C95800 Ceramic Bisque Pumpkin with Cutout.jpg",
];

const CHRISTMAS_FILES = [
  "31516 Heart Ornament.jpeg",
  "31517 Star Ornament.jpeg",
  "31519 Wreath Ornament.jpeg",
  "31521 Christmas Tree Ornament.jpeg",
  "31982 Snowflake Ornament.jpeg",
  "31983 Candy Cane Ornament.jpeg",
  "31984 Gingerbread Man Ornament.jpeg",
  "32848 Angel Ornament.jpeg",
  "34387 Dove Ornament.jpeg",
  "34396 Circle Picture Frame Ornament.jpeg",
  "45766 14inch Xmas Tree with Base.png",
  "C18470 Round Ball Ornament.png",
  "CCX3106 Perfect Print Ornament.jpg",
  "Example Kid's Ornament.jpg",
  "mb 1463 Vintage Elf Painted.jpg",
  "mb 1463 Vintage Elf.jpg",
  "mb1462 Jolly Christmas Tree Painted.jpg",
  "mb1462 Jolly Christmas Tree.jpg",
  "MB1473 Vintage Snowman Painted.jpg",
  "MB1473 Vintage Snowman.jpg",
  "MB1581 Small Wicker Tree.jpg",
  "MB1581 Wicker Trees All Sizes Painted.JPG",
  "MB1582 Medium Wicker Tree.jpg",
  "MB1583 Large Wicker Tree.jpg",
];

const CUPS_MUGS_FILES = [
  "21437 Ceramic Bisque 12 oz Mug.jpeg",
  "21452 Small Pet Food Dish.jpeg",
  "27156 Snack Mug with Spoon.jpeg",
  "35968 Mitten Ornament.jpeg",
  "35982 Cozy Sweater.jpeg",
  "35987 Reindeer Mug.jpeg",
  "35989 Santa Mug.jpeg",
  "38102 Fox Mug.jpeg",
  "CCX244 I Love Dad Mug.jpg",
  "CCX245 I Love Mom Mug.jpg",
  "CCX3134 Deer Mug.jpg",
  "CCX549 Assorted Flower Dishes (Set of 4).png",
  "mb-1560 Hobnail Mug Painted.jpg",
  "MB1455 Stemless Wine Tumbler.jpg",
];

const DINNERWARE_FILES = [
  "21425 Rimmed Pasta Bowl.jpeg",
  "21670 Rimmed Serving Bowl.jpeg",
  "21700 Rimmed Charger.jpeg",
  "35368 Small Handled Server.jpeg",
  "mb 101 Coupe Salad Plate Painted.jpg",
  "mb 101 Coupe Salad Plate.jpg",
  "MB102 Coupe Dinner Plate Painted.jpg",
  "MB102 Coupe Dinner Plate.jpg",
  "MB105 Rice Bowl.jpg",
  "MB1116 Casualware Dinner Plate Painted.jpg",
  "MB1116 Casualware Dinner Plate.jpg",
  "MB1307 Handled Platter Painted.jpg",
  "MB1307 Handled Platter.jpg",
  "MB1371 Dancing Teapot.jpg",
];

const FACETED_FILES = [
  "mb-1538 Faceted Unicorn Painted.jpg",
  "mb-1538 Faceted Unicorn.jpg",
  "mb-1548 Faceted T-Rex Painted.jpg",
  "mb-1548 Faceted T-Rex.jpg",
  "mb-1563 Owl Facetini Painted.jpg",
  "mb-1563 Owl Facetini.jpg",
  "mb-1565 Bunny Facetini Painted.jpg",
  "mb-1565 Bunny Facetini.jpg",
  "mb-1566 Fawn Facetini Painted.jpg",
  "mb-1566 Fawn Facetini.jpg",
  "mb-1566 Fox Facetini Painted.jpg",
  "mb-1566 Fox Facetini.jpg",
  "mb-1604 Monkey Facetini Painted.jpg",
  "mb-1604 Monkey Facetini.jpg",
  "mb1497 Faceted Tree Painted.jpg",
  "mb1497 Faceted Tree.jpg",
  "MB1633 Giraffe Facetini Painted.jpg",
  "MB1633 Giraffe Facetini.jpg",
  "mb1637 Elephant Facetini Painted.jpg",
  "MB1637 Elephant Facetini.jpg",
  "MB1638 Lion Facetini Painted.jpg",
  "MB1638 Lion Facetini.jpg",
  "sb137-sample3.jpg",
];

const STONEWARE_FILES = [
  "sb110 Dessert Bowl Painted.jpg",
  "sb110 Dessert Bowl.jpg",
  "sb137 Honeycomb Mug Painted.jpg",
  "sb137 Honeycomb Mug.jpg",
  "SB150 Fluted Oval Platter (15L x 10.25W x 1H ).jpg",
  "SB151 Fluted Dinner Plate (11.25L x 11.25W x 1H ).jpg",
  "SB151 Fluted Dinner Plate Painted.jpg",
  "SB152 Fluted Salad Plate (8.5L x 8.5W x 1H ).jpg",
  "SB152 Fluted Salad Plate Painted.jpg",
  "SB153 Fluted Large Bowl (9L x 8.75W x 2.25H).jpg",
  "SB153 Fluted Large Bowl Painted.jpg",
  "SB154 Fluted Small Bowl (6.5L x 6.5W x 2.75H ).jpg",
  "SB154 Fluted Small Bowl Painted.jpg",
  "sb155 Rounded Bud Vase (4.25L x 4.25W x 4.5H ).jpg",
  "sb155 Rounded Bud Vase Painted.jpg",
  "sb157 Curvy Vase (3.25L x 3.25W x 7.5H ).jpg",
  "sb157 Curvy Vase Painted.jpg",
  "sb159 Fluted Cup.jpg",
  "sb160 Large Vintage Mixing Bowl (11.25L x 11.25W x 5.75H).jpg",
  "sb161 Medium Vintage Mixing Bowl (9.75L x 9.75W x 5H).jpg",
  "sb161 Medium Vintage Mixing Bowl Painted.jpg",
  "sb162 Small Vintage Mixing Bowl (8L x 8W x 4.25H).jpg",
  "sb162 Small Vintage Mixing Bowl Painted.jpg",
];

export const potteryCategories = [
  {
    key: "Assorted Forms",
    items: buildItemsFromFiles(
      `${CB_ROOT}/Assorted%20Forms`,
      ASSORTED_FORMS_FILES
    ).filter((it) => !/\bbank\b/i.test(it.title)),
  },
  {
    key: "Banks",
    items: [
      ...buildItemsFromFiles(`${CB_ROOT}/Banks`, BANKS_FILES),
      ...buildItemsFromFiles(
        `${CB_ROOT}/Assorted%20Forms`,
        ASSORTED_FORMS_FILES
      ).filter((it) => /\bbank\b/i.test(it.title)),
    ].sort(
      (a, b) =>
        (a.sku || "").localeCompare(b.sku || "") ||
        a.title.localeCompare(b.title)
    ),
  },
  {
    key: "Boxes",
    items: buildItemsFromFiles(`${CB_ROOT}/Boxes`, BOXES_FILES),
  },
  {
    key: "Christmas",
    items: (() => {
      const items = buildItemsFromFiles(
        `${CB_ROOT}/Christmas`,
        CHRISTMAS_FILES
      );

      // 1) Wicker Trees: Attach the "All Sizes" glazed image to each size
      const allSizes = items.find((it) =>
        /Wicker Trees All Sizes/i.test(it.title)
      );
      const allSizesGlaze =
        allSizes && allSizes.glazed && allSizes.glazed.length > 0
          ? allSizes.glazed[0]
          : null;
      let tweaked = items.map((it) => {
        if (
          /Wicker Tree/i.test(it.title) &&
          /(Small|Medium|Large)/i.test(it.title) &&
          allSizesGlaze
        ) {
          const existing = Array.isArray(it.glazed) ? it.glazed : [];
          const nextGlazed = existing.includes(allSizesGlaze)
            ? existing
            : [...existing, allSizesGlaze];
          return { ...it, glazed: nextGlazed };
        }
        return it;
      });
      // Remove the standalone "Wicker Trees All Sizes" entry if present
      tweaked = tweaked.filter(
        (it) => !/Wicker Trees All Sizes/i.test(it.title)
      );

      // 2) Pair Round Ball Ornament bisque with Example Kid's Ornament as glazed
      const isKids = (it) => /kid'?s\s+ornament/i.test(`${it.sku} ${it.title}`);
      const kids = items.find(isKids);
      const kidsImg = kids ? kids.glazed?.[0] || kids.bisque || null : null;
      tweaked = tweaked.map((it) => {
        const isRoundBall = /round\s+ball\s+ornament/i.test(
          `${it.sku} ${it.title}`
        );
        if (isRoundBall && kidsImg) {
          const existing = Array.isArray(it.glazed) ? it.glazed : [];
          const nextGlazed = existing.includes(kidsImg)
            ? existing
            : [...existing, kidsImg];
          return { ...it, glazed: nextGlazed };
        }
        return it;
      });
      // Remove the standalone Example Kid's Ornament entry if present (match by its original title)
      const kidsTitle = kids?.title || null;
      tweaked = tweaked.filter((it) =>
        kidsTitle ? it.title !== kidsTitle : true
      );

      // Keep stable sort by sku then title
      tweaked.sort(
        (a, b) =>
          (a.sku || "").localeCompare(b.sku || "") ||
          a.title.localeCompare(b.title)
      );

      // Place Round Ball Ornament right after Large Wicker Tree (MB1583)
      const idxRound = tweaked.findIndex((it) =>
        /round\s+ball\s+ornament/i.test(`${it.sku} ${it.title}`)
      );
      const idxLargeTree = tweaked.findIndex((it) =>
        /large\s+wicker\s+tree/i.test(`${it.sku} ${it.title}`)
      );
      if (idxRound !== -1 && idxLargeTree !== -1) {
        const [roundItem] = tweaked.splice(idxRound, 1);
        const insertAt =
          idxLargeTree < tweaked.length ? idxLargeTree + 1 : tweaked.length;
        tweaked.splice(insertAt, 0, roundItem);
      }
      return tweaked;
    })(),
  },
  {
    key: "Cups & Mugs",
    items: buildItemsFromFiles(`${CB_ROOT}/Cups%20and%20Mugs`, CUPS_MUGS_FILES),
  },
  {
    key: "Dinnerware",
    items: buildItemsFromFiles(`${CB_ROOT}/Dinnerware`, DINNERWARE_FILES),
  },
  {
    key: "Faceted",
    items: buildItemsFromFiles(
      `${CB_ROOT}/Faceted%20Ceramic%20Bisque`,
      FACETED_FILES
    ).filter((it) => (it.sku || "").toLowerCase() !== "sb137-sample3"),
  },
  {
    key: "Stoneware",
    items: buildItemsFromFiles(`${CB_ROOT}/Stoneware`, STONEWARE_FILES),
  },
];

// Glazes
const GJ_ROOT =
  "/images/Pottery/Glazes%20(Part%202)/Glazes%20(Part%202)/Jungle%20Gems";
const SC_ROOT =
  "/images/Pottery/Glazes%20(Part%203)/Glazes%20(Part%201)/Stroke%20&%20Coat";
const EL_ROOT =
  "/images/Pottery/Glazes%20(Part%203)/Glazes%20(Part%201)/Elemental%20and%20Elemental%20Chunkies";

const JUNGLE_GEMS_FILES = [
  "cg-1000 Mardi Gras.jpg",
  "cg-1001 Gogh Iris.jpg",
  "cg-1002 Day Lily.jpg",
  "cg-1003 Peach Party.jpg",
  "cg-1004 Berry Tart.jpg",
  "cg-1005 Maroon Lagoon.jpg",
  "cg-1006 Purple Reign.jpg",
  "cg-1007 Blueberry Bubblegum.jpg",
  "cg-1008 Blue Guppy.jpg",
  "cg-1009 Cherry Limeade.jpg",
  "cg-707 Woodland Fantasy.jpg",
  "cg-713 Peacock Green.jpg",
  "cg-716 Pagoda Green.jpg",
  "cg-717 Pistachio.jpg",
  "cg-718 Blue Caprice.jpg",
  "cg-722 Seawind.jpg",
  "cg-750 Noel.jpg",
  "cg-753 Sassy Orange.jpg",
  "cg-756 Firecracker.jpg",
  "cg-779 Black Opal.jpg",
  "cg-780 Mystic Jade.jpg",
  "cg-783 Strawberry Sundae.jpg",
  "cg-785 Royal Fantasy.jpg",
  "cg-786 Obsidian.jpg",
  "cg-788 Dutch Enamelware.jpg",
  "cg-795 Yadro Print.jpg",
  "cg-798 Black Iris.jpg",
  "cg-954 Wildfire.jpg",
  "cg-958 Lagoon Blue.jpg",
  "cg-962 Blue Azure.jpg",
  "cg-963 Lemon Lime.jpg",
  "cg-964 Kaleidoscope.jpg",
  "cg-965 Mocha Marble.jpg",
  "cg-968 Peppermint Twist.jpg",
  "cg-969 Floral Fantasy.jpg",
  "cg-970 Masquerade.jpg",
  "cg-972 Dragon's Breath.jpg",
  "cg-974 Bloomin' Blue.jpg",
  "cg-977 Ink Spots.jpg",
  "cg-979 Meadow.jpg",
  "cg-981 Fruity Freckles.jpg",
  "cg-982 Mixed Melon.jpg",
  "cg-983 Koi Pond.jpg",
  "cg-984 Ladybug.jpg",
  "cg-985 Monet's Pond.jpg",
  "cg-987 Tree Frog.jpg",
  "cg-990 Starry Night.jpg",
  "cg-991 Mountain Moss.jpg",
  "cg-997 Seafoam.jpg",
  "cg-998 Pink Pixie.jpg",
  "cg-999 Jazz Notes.jpg",
  "cg1010 Periwinkle Sky.jpg",
  "cg1011 Frosted Berries.jpg",
  "cg1012 Haystack.jpg",
  "cg1013 Papaya.jpg",
  "cg1014 Pink Plum.jpg",
  "cg1015 Cloverfield.jpg",
  "cg1016 Asteroid.jpg",
  "s-2701 Peacock Eyes.jpg",
  "s-2702 Northern Lights.jpg",
  "s-2704 Plum Jelly.jpg",
  "s-2708 Oriental Carmel.jpg",
  "s-2709 Cappuccino Mint.jpg",
  "s-2711 Tahiti Grape.jpg",
  "s-2712 Monsoon Seas.jpg",
  "s-2714 Herb Garden.jpg",
  "s-2715 Spotted Kiwi.jpg",
  "s-2716 Celestial Blue.jpg",
  "s-2718 Cosmic Black.jpg",
  "s-2723 Grape Divine.jpg",
  "s-2724 Lotus Blossom.jpg",
  "s-2725 Safari.jpg",
  "s-2726 Cheetah.jpg",
  "s-2727 Poppy Fields.jpg",
  "s-2729 Citrus Splash.jpg",
  "s-2731 Kaboom.jpg",
];

const STROKE_COAT_FILES = [
  "sc-01 Pink-A-Boo.jpg",
  "sc-02 Melon-Choly.jpg",
  "sc-03 Wine About It.jpg",
  "sc-05 Tiger Tail.jpg",
  "sc-058 501 Blues.jpg",
  "sc-06 Sunkissed.jpg",
  "sc-07 Leapin' Lizard.jpg",
  "sc-08 Just Froggy.jpg",
  "sc-09 Jaded.jpg",
  "sc-10 Teal Next Time.jpg",
  "SC-100 Makin Me Blush.jpg",
  "SC-101 Spruce It Up.jpg",
  "SC-102 Just Peachy.jpg",
  "SC-103 Lavendear.jpg",
  "SC-104 Grape Expectations.jpg",
  "sc-11 Blue Yonder.jpg",
  "sc-12 Moody Blue.jpg",
  "sc-13 Grapel.jpg",
  "sc-14 Java Bean.jpg",
  "sc-15 Tuxedo.jpg",
  "sc-16 Cotton Tail.jpg",
  "sc-17 Cheeky Pinky.jpg",
  "sc-18 Rosey Posey.jpg",
  "sc-20 Cashew Later.jpg",
  "sc-23 Jack O'Lantern.jpg",
  "sc-24 Dandelion.jpg",
  "sc-25 Crackerjack Brown.jpg",
  "sc-26 Green Thumb.jpg",
  "sc-27 Sour Apple.jpg",
  "sc-28 Blue Isle.jpg",
  "sc-29 Blue Grass.jpg",
  "sc-30 Blue Dawn.jpg",
  "sc-31 The Blues.jpg",
  "sc-32 Bluebeard.jpg",
  "sc-33 Fruit of the Vine.jpg",
  "sc-34 Down to Earth.jpg",
  "sc-35 Gray Hare.jpg",
  "sc-36 Irish Luck.jpg",
  "sc-37 Ivory Tower.jpg",
  "sc-39 Army Surplus.jpg",
  "sc-40 Blueberry Hill.jpg",
  "sc-41 Brown Cow.jpg",
  "sc-42 Butter Me Up.jpg",
  "sc-43 Lettuce Alone.jpg",
  "sc-45 My Blue Heaven.jpg",
  "sc-46 Rawhide.jpg",
  "sc-48 Camel Back.jpg",
  "sc-50 Orange Ya Happy.jpg",
  "sc-51 Poo Bear.jpg",
  "sc-52 Toad-ily Green.jpg",
  "sc-53 Purple Haze.jpg",
  "sc-54 Vanilla Dip.jpg",
  "sc-55 Yella Bout It.jpg",
  "sc-60 Silver Lining.jpg",
  "sc-65 Peri-Twinkle.jpg",
  "sc-70 Pink-A-Dot.jpg",
  "sc-71 Purple-Licious.jpg",
  "sc-72 Grape Jelly.jpg",
  "sc-73 Candy Apple Red.jpg",
  "sc-74 Hot Tomale.jpg",
  "sc-75 Orange-A-Peel.jpg",
  "sc-76 Cara-Bein Blue.jpg",
  "sc-77 Glo-Worm.jpg",
  "sc-78 Lime Light.jpg",
  "sc-79 It's Sage.jpg",
  "sc-80 Basketball.jpg",
  "sc-81 Cinnamon Stix.jpg",
  "sc-83 Tip Taupe.jpg",
  "sc-85 Orkid.jpg",
  "sc-86 Old Lace.jpg",
  "sc-87 Ruby Slippers.jpg",
  "sc-88 Tu Tu Tango.jpg",
  "sc-89 Cutie Pie Coral.jpg",
  "sc-90 Elephant Ears.jpg",
  "sc-91 Seabreeze.jpg",
  "sc-92 Cafe Ole.jpg",
  "sc-93 Honeydew List.jpg",
  "sc-95 Pinkie Swear.jpg",
  "sc-96 Aqu-Ward.jpg",
  "sc-97 Cant-Elope.jpg",
  "sc-98 Slime Time.jpg",
  "sc-99 Char-Ming.jpg",
];

const ELEMENTAL_FILES = [
  "el-101 Oyster Shell.jpg",
  "el-103 Sea Spray.jpg",
  "el-106 Tidal Pool.jpg",
  "el-107 Amber Ash.jpg",
  "el-113 Spanish Moss.jpg",
  "el-117 Waterfall.jpg",
  "el-118 Blue Grotto.jpg",
  "el-119 Burnished Steel.jpg",
  "el-120 Black Ice.jpg",
  "el-121 Copper Adventurine.jpg",
  "el-122 Malachite.jpg",
  "el-123 Patina.jpg",
  "el-124 Stormy Blue.jpg",
  "el-125 Sahara Sands.jpg",
  "el-127 Rose Granite.jpg",
  "el-128 Wheat.jpg",
  "el-129 Slate.jpg",
  "el-130 Sea Green.jpg",
  "el-131 Turtle Shell.jpg",
  "el-132 Rust Red.jpg",
  "el-133 Autumn.jpg",
  "el-134 Mirror Blue.jpg",
  "el-135 Rare Earth.jpg",
  "el-136 Lapis Lagoon.jpg",
  "el-137 Black Adventurine.jpg",
  "el-140 Toasted Almond.jpg",
  "el-142 Grass.jpg",
  "el-143 Cactus Flower.jpg",
  "el-144 Dark Amethyst.jpg",
  "el-145 Ginger Root.jpg",
  "el-146 Rain Cloud.jpg",
  "el-149 Lavender Flower.jpg",
  "el-152-Denim Blue.jpg",
  "el-153-Caribbean Blue.jpg",
  "el-155 Holiday Green.jpg",
  "el-156 Bluegrass.jpg",
  "el-158 Pine Needles.jpg",
  "el-159 Emerald Green.jpg",
  "el-160 Foliage Green.jpg",
  "el-161 Bottle Green.jpg",
  "el-207 Gold Mine.jpg",
  "el-208 Moss Creek.jpg",
  "el-209 Night Sky.jpg",
  "el-211 Volcanic Glow.jpg",
  "el-212 Spotted Walnut.jpg",
  "fn-218 Green Sapphire.jpg",
  "fn-219 Lustre Green.jpg",
];

function toGlazeObj(root, f) {
  const base = f.replace(/\.(jpe?g|png)$/i, "");
  const [code, ...rest] = base.split(" ");
  const color = rest.join(" ").trim();
  return {
    code,
    name: base, // keep full "code color" for display
    color, // use color part for sorting
    src: encodePath(`${root}/${f}`),
  };
}

function sortByColorThenCode(a, b) {
  const byColor = (a.color || "").localeCompare(b.color || "", undefined, {
    sensitivity: "base",
  });
  if (byColor !== 0) return byColor;
  return (a.code || "").localeCompare(b.code || "", undefined, {
    sensitivity: "base",
  });
}

export const glazeSwatches = {
  jungleGems: JUNGLE_GEMS_FILES.map((f) => toGlazeObj(GJ_ROOT, f)).sort(
    sortByColorThenCode
  ),
  strokeCoat: STROKE_COAT_FILES.map((f) => toGlazeObj(SC_ROOT, f)).sort(
    sortByColorThenCode
  ),
  elemental: ELEMENTAL_FILES.map((f) => toGlazeObj(EL_ROOT, f)).sort(
    sortByColorThenCode
  ),
};

export default { potteryCategories, glazeSwatches };
