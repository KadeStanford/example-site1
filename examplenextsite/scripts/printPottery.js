const path = require("path");
const data = require(path.join(
  __dirname,
  "..",
  "src",
  "data",
  "potteryData.js"
));

if (!data || !data.potteryCategories) {
  console.error("potteryCategories not found in potteryData.js");
  process.exit(1);
}

function findCategory(key) {
  return data.potteryCategories.find((c) => c.key === key);
}

["Dinnerware", "Stoneware", "Assorted Forms"].forEach((cat) => {
  const c = findCategory(cat);
  console.log("\nCategory:", cat);
  if (!c) {
    console.log(" - not found");
    return;
  }
  const items = c.items;
  console.log(" Items:", items.length);
  items.slice(0, 40).forEach((it) => {
    console.log(
      ` - ${it.sku} | ${it.title} | bisque:${it.bisque || ""} | glazed:${
        (it.glazed || []).length
      }`
    );
  });
});
