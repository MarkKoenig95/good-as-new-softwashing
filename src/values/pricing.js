const contactText = "Contact for a free quote";

const roofWash3StoryText =
  "Due to the increased risk and specialized equipment needed, " +
  "a free in person quote is necessary for third story roof washes.";

const roofWashSpecialMaterialText =
  "This roof material requires extra care and slightly " +
  "different cleaning processes to ensure no damage is done. " +
  "Please contact us for a free quote personalized to your specific situation.";

const houseWashSpecialMaterialText =
  "Cedar shakes require extra care and slightly different " +
  "cleaning processes to ensure no damage is done. " +
  "Please contact us for a free quote personalized to your specific situation.";

export const houseWashPriceTable = {
  titles: ["One Story", "Two Story", "Three Story"],
  sf500: [250, 300, 350],
  sf1000: [350, 400, 450],
  sf1500: [400, 500, 550],
  sf2000: [450, 500, 550],
  sf2500: [500, 550, 600],
  sf3000: [550, 600, 650],
  sf4000: [contactText, contactText, contactText],
};

export const houseWashMaterials = [
  { name: "Vynil", message: null },
  { name: "Aluminum", message: null },
  { name: "Brick", message: null },
  { name: "Stone", message: null },
  {
    name: "Cedar",
    message: houseWashSpecialMaterialText,
  },
];

export const roofWashMaterials = [
  { name: "Asphalt", message: null },
  { name: "Cedar", message: roofWashSpecialMaterialText },
  { name: "Slate", message: roofWashSpecialMaterialText },
  { name: "Metal", message: roofWashSpecialMaterialText },
];

export const roofWashPriceTable = {
  titles: ["One Story", "Two Story"],
  sf500: [300, 400, roofWash3StoryText],
  sf1000: [400, 500, roofWash3StoryText],
  sf1500: [500, 600, roofWash3StoryText],
  sf2000: [600, 700, roofWash3StoryText],
  sf2500: [700, 800, roofWash3StoryText],
  sf3000: [800, 900, roofWash3StoryText],
  sf4000: [contactText, contactText, roofWash3StoryText],
};
