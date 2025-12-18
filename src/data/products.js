export const categories = [
  {
    id: 1,
    name: "Mobiles & Tablets",
    catImg:`${process.env.PUBLIC_URL}/imgs/MobilesandTablets.png`,
    subCategories: ["Laptop", "Mobile", "Charger", "Grinder"],
  },
  {
    id: 2,
    name: "Fashion",
    catImg:`${process.env.PUBLIC_URL}/imgs/fashion.png`,
    subCategories: ["Men", "Women", "Kids"],
  },
  {
    id: 3,
    name: "Electronics",
     catImg:`${process.env.PUBLIC_URL}/imgs/electorinics.png`,
    subCategories: ["Furniture", "Appliances", "Decor"],
  },
  {
    id: 4,
    name: "TVs & Appliances",
     catImg:`${process.env.PUBLIC_URL}/imgs/tvandapplicance.jpg`,
    subCategories: ["Furniture", "Appliances", "Decor"],
  },
  {
    id: 5,
    name: "Home & Furniture",
    catImg:`${process.env.PUBLIC_URL}/imgs/furniture.png`,
    subCategories: ["Furniture", "Appliances", "Decor"],
  },
  {
    id: 6,
    name: "Grocery",
    catImg:`${process.env.PUBLIC_URL}/imgs/grocery.png`,
    subCategories: ["Furniture", "Appliances", "Decor"],
  },
  {
    id: 7,
    name: "Beauty, Foods",
    catImg:`${process.env.PUBLIC_URL}/imgs/beuti.png`,
    subCategories: ["Furniture", "Appliances", "Decor"],
  }
 
];

export const products = [
  {
    id: 1,
    name: "HP Laptop",
    price: 60000,
    category: "Electronics",
    subCategory: "Laptop",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "iPhone 15",
    price: 80000,
    category: "Electronics",
    subCategory: "Mobile",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Fast Charger",
    price: 1500,
    category: "Electronics",
    subCategory: "Charger",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Mixer Grinder",
    price: 4500,
    category: "Electronics",
    subCategory: "Grinder",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    name: "Men T-Shirt",
    price: 999,
    category: "Fashion",
    subCategory: "Men",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 6,
    name: "Women Dress",
    price: 1999,
    category: "Fashion",
    subCategory: "Women",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 7,
    name: "Sofa Set",
    price: 25000,
    category: "Home & Kitchen",
    subCategory: "Furniture",
    image: "https://via.placeholder.com/200",
  },
];
