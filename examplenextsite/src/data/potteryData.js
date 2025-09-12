// Structured data for Pottery Shoppe based on images under public/images/Pottery
// Includes helpers to parse filenames, pair bisque and glazed examples ("Painted" -> display as "Glazed"), and extract SKUs and dimensions

function encodePath(p) {
  // Encode each path segment safely without double-encoding existing percent
  // escapes. For example "/images/Brushes%20and%20Tools/file name.jpg"
  // should become "/images/Brushes%20and%20Tools/file%20name.jpg" and not
  // double-encode the % as %25.
  if (typeof p !== "string") return p;
  const leading = p.startsWith("/") ? "/" : "";
  const parts = p.split("/");
  const encoded = parts
    .map((seg) => {
      if (!seg) return "";
      try {
        // decode first to normalize any existing %XX sequences, then re-encode
        const decoded = decodeURIComponent(seg);
        return encodeURIComponent(decoded);
      } catch (e) {
        // If decoding fails, fall back to encoding the raw segment
        return encodeURIComponent(seg);
      }
    })
    .join("/");
  // If original had leading slash, ensure it remains.
  return leading + encoded.replace(/^\//, "");
}

function splitSkuAndTitle(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return { sku: "", title: name };
  // If first token looks like an SKU (letters/numbers/hyphen), take it
  const first = parts[0];
  // Only treat the first token as an SKU when it contains a digit (e.g. SB103,
  // MB1115). This avoids classifying words like "Example" or "Round" as SKUs.
  if (/[0-9]/.test(first) && /^[A-Za-z0-9-]+$/.test(first)) {
    // normalize letter prefixes: if the prefix is exactly two letters, uppercase it
    // e.g., sb137 -> SB137, md-123 -> MD-123; leave longer alpha prefixes as-is
    let sku = first;
    const m = first.match(/^([A-Za-z]{1,})(.*)$/);
    if (m) {
      const letters = m[1];
      const rest = m[2] || "";
      if (/^[A-Za-z]{2}$/.test(letters)) {
        sku = `${letters.toUpperCase()}${rest}`;
      } else {
        // preserve original casing for other prefixes but normalize common hyphen spacing
        sku = `${letters}${rest}`;
      }
    }
    // Normalize variant suffixes for grouping: treat SB103-P as SB103
    const normalized = sku.replace(/-([A-Za-z])$/i, (m, g1) => {
      // only strip single-letter suffixes like -P, -G commonly used for variants
      return "";
    });
    return { sku: normalized, title: name.slice(first.length).trim() };
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
  // strip Painted/Glazed/Example markers and trailing variants like (1) (2)
  base = base.replace(/\s*(Painted|Glazed|Example|Unglazed)\b.*$/i, "");
  base = base.replace(/\s*\([^)]*\)\s*$/, ""); // strip trailing (dim) for pairing
  return base.trim();
}

function buildItemsFromFiles(folder, files) {
  const map = new Map();
  for (const file of files) {
    // Allow files to be either plain filenames (e.g. "MB1115 ...jpg") or
    // full public paths (e.g. "/images/Additional Ceramics/Dinnerware/MB1115 ...jpg").
    const hasDir = /[\\/]/.test(file);
    const fileBasename = hasDir ? file.replace(/^.*[\\/]/, "") : file;
    // treat files labeled Painted, Glazed, or Example as glazed examples
    const isGlazed = /Painted|Glazed|Example/i.test(fileBasename);
    // Build two variants:
    // - pairingBase: stripped of parenthetical dims so bisque/glazed pair even if one has dims
    // - displayBase: preserves parenthetical dims for showing in the UI
    const baseNoExt = fileBasename.replace(/\.(jpe?g|png)$/i, "");
    const baseNoPaint = baseNoExt
      .replace(/\s*(Painted|Glazed|Example|Unglazed)\b.*$/i, "")
      .trim();
    const pairingBase = baseNoPaint.replace(/\s*\([^)]*\)\s*$/, "").trim();
    const displayBase = baseNoPaint.trim();
    // Normalize the leading SKU for pairing so variants like SB103 and SB103-P
    // collapse to the same key. Use splitSkuAndTitle which already strips -P.
    const { sku: pairingSku, title: pairingTitle } =
      splitSkuAndTitle(pairingBase);
    const key = `${(pairingSku || "").toLowerCase()}|${(
      pairingTitle || ""
    ).toLowerCase()}`;
    const entry = map.get(key) || {
      bisque: null,
      glazed: [],
      displayBase: null,
    };
    if (isGlazed) {
      // If file provided a full path, use it as-is; otherwise prepend the folder
      const path = hasDir
        ? file.startsWith("/")
          ? file
          : `/${file}`
        : `${folder}/${file}`;
      entry.glazed.push(path);
      if (!entry.displayBase) entry.displayBase = displayBase;
    } else {
      // prefer JPG/JPEG over PNG if multiple; keep first non-painted as bisque if not set
      if (!entry.bisque || /\.jpe?g$/i.test(file)) {
        const path = hasDir
          ? file.startsWith("/")
            ? file
            : `/${file}`
          : `${folder}/${file}`;
        entry.bisque = path;
        // Prefer bisque name casing for display metadata, preserve dimensions
        entry.displayBase = displayBase;
      } else if (!entry.displayBase) {
        entry.displayBase = displayBase;
      }
    }
    map.set(key, entry);
  }

  const items = [];
  for (const [, imgs] of map.entries()) {
    const baseForMeta = imgs.displayBase || "";
    const dims = extractDimensions(baseForMeta);
    const { sku, title: rawTitle } = splitSkuAndTitle(baseForMeta);
    // If dimensions were detected in the filename (e.g. "(8 x 6)") and the
    // raw title doesn't already include them, append them for display.
    const dimsText = dims ? `(${dims})` : "";
    const title =
      dims && !rawTitle.includes(`(${dims})`) && rawTitle
        ? `${rawTitle} ${dimsText}`
        : rawTitle;
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
  "/images/Additional Ceramics/Assorted Forms/29206 Rimmed Butter Dish.jpeg",
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
  "mb-1560 Hobnail Mug.png",
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
  // Additional Dinnerware from Additional Ceramics/Dinnerware
  "/images/Additional Ceramics/Dinnerware/MB1113 Casualware Cereal-Dessert Bowl (1.75 x 6.5).jpg",
  "/images/Additional Ceramics/Dinnerware/MB1114 Casualware Serving Bowl (2.25 x 8.5).jpg",
  "/images/Additional Ceramics/Dinnerware/MB1115 Casualware Salad Plate (8 Inch Dia.).jpg",
  "/images/Additional Ceramics/Dinnerware/Round Spoon Rest (5.25 inch Dia).png",
  "/images/Additional Ceramics/Dinnerware/SB102 Casserole Dish (9 x 9).jpg",
  "/images/Additional Ceramics/Dinnerware/SB141 Wide Rim Soup Bowl (9.5 x 9.5 x 2 ).jpg",
];

const FACETED_FILES = [
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
  // Added explicit files present in public/images/.../Faceted Ceramic Bisque
  "MB1574 Bee Facetini.jpg",
  "MB1574 Bee Facetini Example.JPG",
  "MB1639 Faceted Unicorn.jpg",
  "MB1639 Faceted Unicorn Example.jpg",
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
  // Additional Stoneware from Additional Ceramics/Stoneware
  "/images/Additional Ceramics/Stoneware/CXS114 Stoneware Round Charcuterie Server.png",
  "/images/Additional Ceramics/Stoneware/Large Nesting Bowl (8.5 x 6.5).jpg",
  "/images/Additional Ceramics/Stoneware/Medium Nesting Bowl (7.5 x 5.75).jpg",
  "/images/Additional Ceramics/Stoneware/Modern Bowl (7 x 3).jpg",
  "/images/Additional Ceramics/Stoneware/SB101-E Pie Plate.jpg",
  "/images/Additional Ceramics/Stoneware/SB102 Casserole Dish Unglazed (9 x 9).jpg",
  "/images/Additional Ceramics/Stoneware/SB103 Wavy Mug.jpg",
  "/images/Additional Ceramics/Stoneware/SB103-P Wavy Mug Glazed (5.5 x 4.25).jpg",
  "/images/Additional Ceramics/Stoneware/SB138 Joe Mug (5.5  x 3.75 x 3.75).jpg",
  "/images/Additional Ceramics/Stoneware/SB138 Joe Mug Glazed.jpg",
  "/images/Additional Ceramics/Stoneware/SB142 Loaf Pan (10.5 x 5.25 x 3).jpg",
  "/images/Additional Ceramics/Stoneware/Small Nesting Bowl (6.5 x 5).jpg",
];

export const potteryCategories = [
  {
    key: "Assorted Forms",
    // Combine the base assorted forms with Banks and Boxes so all are shown together
    items: [
      ...buildItemsFromFiles(
        `${CB_ROOT}/Assorted%20Forms`,
        ASSORTED_FORMS_FILES
      ),
      ...buildItemsFromFiles(`${CB_ROOT}/Banks`, BANKS_FILES),
      ...buildItemsFromFiles(`${CB_ROOT}/Boxes`, BOXES_FILES),
    ],
  },
  // Banks and Boxes merged into Assorted Forms per request
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
      // Try to find the explicit Example Kid's Ornament entry; if not present,
      // fallback to any item with "kid" in the title (robust to small filename variants).
      let kids =
        items.find(isKids) || items.find((it) => /\bkid\b/i.test(it.title));
      let kidsImg = kids ? kids.glazed?.[0] || kids.bisque || null : null;
      // Extra fallback: sometimes the example shows up as a glazed-only item and
      // may not be discoverable by the above; try scanning for any item whose
      // glazed or bisque path contains "kid" as a last resort.
      if (!kidsImg) {
        const maybe = items.find((it) => {
          const paths = [...(it.glazed || []), it.bisque || ""].join(" ");
          return /kid/i.test(paths);
        });
        if (maybe) {
          kids = maybe;
          kidsImg = maybe.glazed?.[0] || maybe.bisque || null;
        }
      }
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
      // Remove any leftover example/kid items. Some filenames use "Example Kid's Ornament"
      // or similar; remove entries whose title or image paths contain 'kid' or
      // that explicitly match 'example kid'. This avoids leaving a blank lone card.
      tweaked = tweaked.filter((it) => {
        const title = (it.title || "").toLowerCase();
        const bisquePath = (it.bisque || "").toLowerCase();
        const glazedPaths = (it.glazed || []).join(" ").toLowerCase();
        // Remove the explicit "Example Kid's Ornament" entry if present
        if (/^example\s*kid'?s?\s*ornament$/i.test(title)) return false;
        // Also remove items that only contain a single image and that image path
        // contains 'kid' (likely the orphan example). Do not remove items that
        // legitimately include 'kid' in their names but have multiple images.
        const totalImages = (it.glazed || []).length + (it.bisque ? 1 : 0);
        if (
          totalImages === 1 &&
          (bisquePath.includes("kid") || glazedPaths.includes("kid"))
        ) {
          return false;
        }
        return true;
      });

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

// Additional resources added by user
const ADDL_GLAZES_ROOT = "/images/Additional%20Glazes%20Categories";
const BRUSHES_ROOT = "/images/Brushes%20and%20Tools";
const EXAMPLES_ROOT = "/images/Examples";

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

// SPECKLED stroke & coat files live in a nested Glazes folder provided by the user
const SPECKLED_ROOT =
  "/images/Pottery/Glazes%20(Part%201)/Glazes%20(Part%203)/Speckled%20Stroke%20&%20Coat";
const SPECKLED_STROKE_COAT_FILES = [
  "sp-201 Speckled Pink-A-Boo.jpg",
  "sp-206 Speckled Sunkissed.jpg",
  "sp-209 Speckled Jaded.jpg",
  "sp-210 Speckled Teal Next Time.jpg",
  "sp-211 Speckled Blue Yonder.jpg",
  "sp-212 Speckled Moody Blue.jpg",
  "sp-213 Speckled Grapel.jpg",
  "sp-215 Speckled Tuxedo.jpg",
  "sp-216 Speckled Cotton Tail.jpg",
  "sp-226 Speckled Green Thumb.jpg",
  "sp-227 Speckled Sour Apple.jpg",
  "sp-231 Speckled The Blues.jpg",
  "sp-245 Speckled My Blue Heaven.jpg",
  "sp-253 Speckled Purple Haze.jpg",
  "sp-254 Speckled Vanilla Dip.jpg",
  "sp-260 Speckled Silver Lining.jpg",
  "sp-270 Speckled Pink-A-Dot.jpg",
  "sp-274 Speckled Hot Tamale.jpg",
  "sp-275 Speckled Orange-A-Peel.jpg",
  "sp-288 Speckled Tu Tu Tango.jpg",
];

// Additional Glaze categories (user-supplied)
const FOUNDATIONS_FILES = [
  "fn-01 White.jpg",
  "fn-02 Yellow.jpg",
  "fn-03 Orange.jpg",
  "fn-04 Red.jpg",
  "fn-05 Pink.jpg",
  "fn-055 Bubblegum.jpg",
  "fn-056 Heather.jpg",
  "fn-057 Periwinkle.jpg",
  "fn-058 Green Apple.jpg",
  "fn-059 Cashmere.jpg",
  "fn-06 Blue.jpg",
  "fn-060 Mushroom.jpg",
  "fn-07 Green.jpg",
  "fn-08 Brown.jpg",
  "fn-09 Black.jpg",
  "fn-10 Tree Green.jpg",
  "fn-11 Light Blue.jpg",
  "fn-12 Lavender.jpg",
  "fn-13 Light Yellow.jpg",
  "fn-14 Antique White.jpg",
  "fn-15 Brick Red.jpg",
  "fn-16 Harvest Orange.jpg",
  "fn-17 Purple.jpg",
  "fn-18 Bright Blue.jpg",
  "fn-19 Dark Blue.jpg",
  "fn-20 Medium Green.jpg",
  "fn-201 Golden Clear.jpg",
  "fn-202 Yadro.jpg",
  "fn-205 Saddle Tan.jpg",
  "fn-209 Floral Pink.jpg",
  "fn-21 Olive Green.jpg",
  "fn-211 Sheer Blue.jpg",
  "fn-212 Blue Diamond.jpg",
  "fn-213 Saffire Blue.jpg",
  "fn-214 Pastel Jade.jpg",
  "fn-216 Sea Glass.jpg",
  "fn-22 Tan.jpg",
  "fn-220 Sooty Grey.jpg",
  "fn-221 Milk Glass White.jpg",
  "fn-23 Cinnamon.jpg",
  "fn-230 Poppy.jpg",
  "fn-231 Clearly Jade.jpg",
  "fn-232 Sun Yellow.jpg",
  "fn-233 Ruby Red.jpg",
  "FN-234 Royal Purple.jpg",
  "FN-235 Celadon.jpg",
  "FN-236 Miami Pink.jpg",
  "fn-24 Gray.jpg",
  "fn-25 Raspberry Whip.jpg",
  "fn-27 Glade Green.jpg",
  "fn-28 Wisteria Purple.jpg",
  "fn-29 Rich Chocolate.jpg",
  "fn-301 Marshmallow White.jpg",
  "fn-302 Ivory Cream.jpg",
  "fn-304  Black Velvet.jpg",
  "fn-31 Corn Flower Blue.jpg",
  "fn-32 Canton Jade.jpg",
  "fn-33 Mediterranean Teal.jpg",
  "fn-34 Big Sky Blue.jpg",
  "fn-35 Deep Red.jpg",
  "fn-36 Grape.jpg",
  "fn-37 Chartreuse.jpg",
  "fn-38 Sand.jpg",
  "fn-39 Light Gray.jpg",
  "fn-40 Pumpkin.jpg",
  "fn-41 Medium Blue.jpg",
  "fn-42 Teal Blue.jpg",
  "fn-43 Bright Jade.jpg",
  "fn-44 Yellow-Orange.jpg",
  "fn-45 Taupe.jpg",
  "fn-46 Sage.jpg",
  "fn-47 Light Pink.jpg",
  "fn-48 Bright Pink.jpg",
  "fn-49 Flamingo.jpg",
  "fn-51 Strawberry.jpg",
  "fn-52 Tangerine.jpg",
  "fn-53 Mint.jpg",
  "fn-54 Pistachio.jpg",
  "fn061 Ivory Speck.jpg",
];

const PCF_FILES = [
  "PCF-18 Honeydew.jpg",
  "PCF-19 Cirrus Flow.jpg",
  "PCF-3 Midnight Run.jpg",
  "PCF-54 Flux Blossom.jpg",
  "PCF-74 River Birch.jpg",
  "PCF-75 Moss Mist.jpg",
];

// Brushes & Tools filenames discovered in the folder
const BRUSHES_AND_TOOLS_FILES = [
  "ac219 Designer Bottle with Writer Tip (3-Pack).jpg",
  "bk601 Deluxe Beginner Kit.jpg",
  "Eye of the Tiger Angles Set C.jpg",
  "Eye of the Tiger Fan # 6.jpg",
  "Eye of the Tiger Filbert Set D.jpg",
  "Eye of the Tiger Glaze #1.jpg",
  "Eye of the Tiger Rounds Set B.jpg",
  "Eye of the Tiger Shader Set A.jpg",
  "Eye of the Tiger Shader Set E.jpg",
];

// Examples for the background collage (user-supplied)
const EXAMPLES_FILES = [
  "MB1633 Giraffe Facetini Painted.jpg",
  "Optional (2).png",
  "Optional.png",
  "0209408a089f7edf2e2faaa6e9eb7139.jpg",
  "Example 1.webp",
  "Example 2.png",
  "image1.png",
  "mb-1604 Monkey Facetini Painted.jpg",
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

// (previous placeholder removed; actual SPECKLED_STROKE_COAT_FILES are defined further above)

function toGlazeObj(root, f) {
  const base = f.replace(/\.(jpe?g|png)$/i, "");
  const [code, ...rest] = base.split(" ");
  const color = rest.join(" ").trim();
  // Normalize two-letter alphabetic prefixes on the code (e.g., 'cg-1000' stays,
  // but if someone used 'cg1000' this will uppercase a 2-letter prefix segment).
  let normalizedCode = code;
  const cm = code.match(/^([A-Za-z]{2})(.*)$/);
  if (cm) {
    normalizedCode = `${cm[1].toUpperCase()}${cm[2] || ""}`;
  }
  const displayName = `${normalizedCode}${color ? ` ${color}` : ""}`;
  return {
    code: normalizedCode,
    name: displayName, // full "code color" for display (with normalized code)
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
  // renamed to Elements & Element Chunkies
  elements: ELEMENTAL_FILES.map((f) => toGlazeObj(EL_ROOT, f)).sort(
    sortByColorThenCode
  ),
  speckledStrokeCoat: SPECKLED_STROKE_COAT_FILES.map((f) =>
    toGlazeObj(SPECKLED_ROOT, f)
  ).sort(sortByColorThenCode),
  foundations: FOUNDATIONS_FILES.map((f) =>
    toGlazeObj(`${ADDL_GLAZES_ROOT}/Foundations`, f)
  ).sort(sortByColorThenCode),
  pottersChoiceFlux: PCF_FILES.map((f) =>
    toGlazeObj(`${ADDL_GLAZES_ROOT}/Potter's Choice Flux`, f)
  ).sort(sortByColorThenCode),
  // any additional glazes from the user-provided folder (if you add filenames)
  additional: [],
};

// Export examples for the collage and brushes/tools for the Tools column
export const examples = EXAMPLES_FILES.map((f) =>
  encodePath(`${EXAMPLES_ROOT}/${f}`)
);
// Export brushes and tools as objects with src and name so we can render labels
export const brushesAndTools = BRUSHES_AND_TOOLS_FILES.map((f) => {
  const base = f.replace(/\.(jpe?g|png)$/i, "");
  return {
    src: encodePath(`${BRUSHES_ROOT}/${f}`),
    name: base,
  };
});

export default { potteryCategories, glazeSwatches, examples, brushesAndTools };
