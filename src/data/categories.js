export const categories = [
  {
    id: 1,
    name: "Electronics",
    catUrl: "electronics-store",
    catImg: `${process.env.PUBLIC_URL}/imgs/MobilesandTablets.png`,
    subCategories: [
      {
        name: "Mobiles",
        brands: ["Apple", "Samsung", "OnePlus", "Oppo", "Vivo"]
      },
      {
        name: "Mobile Accessories",
        brands: ["Boat", "JBL", "Portronics"]
      },
      {
        name: "Wearable Smart Device",
        brands: ["Apple", "Noise", "Boat"]
      },
      {
        name: "Speakers",
        brands: ["JBL", "Boat", "Sony"]
      },
      {
        name: "Cameras",
        brands: ["Canon", "Nikon", "Sony"]
      }
    ]
  },

  {
    id: 2,
    name: "Fashion",
    catUrl: "fashion-store",
    catImg: `${process.env.PUBLIC_URL}/imgs/fashion.png`,
    subCategories: [
      {
        name: "Men",
        brands: ["Nike", "Adidas", "Puma"]
      },
      {
        name: "Women",
        brands: ["Zara", "H&M", "Biba"]
      },
      {
        name: "Kids",
        brands: ["Hopscotch", "FirstCry"]
      }
    ]
  },

  {
    id: 3,
    name: "TVs & Appliances",
    catUrl: "tv-and-appliances-store",
    catImg: `${process.env.PUBLIC_URL}/imgs/tvandapplicance.jpg`,
    subCategories: [
      {
        name: "Television",
        brands: ["Samsung", "LG", "Sony"]
      },
      {
        name: "Washing Machine",
        brands: ["LG", "IFB", "Whirlpool"]
      },
      {
        name: "Refrigerators",
        brands: ["Samsung", "LG", "Godrej"]
      }
    ]
  },

  {
    id: 4,
    name: "Home & Furniture",
    catUrl: "home-and-furniture-store",
    catImg: `${process.env.PUBLIC_URL}/imgs/furniture.png`,
    subCategories: [
      {
        name: "Furniture",
        brands: ["Urban Ladder", "Nilkamal"]
      },
      {
        name: "Home Decor",
        brands: ["Home Centre", "Pepperfry"]
      }
    ]
  },

  {
    id: 5,
    name: "Beauty & Health",
    catUrl: "beauty-health-store",
    catImg: `${process.env.PUBLIC_URL}/imgs/beuti.png`,
    subCategories: [
      {
        name: "Makeup",
        brands: ["Lakme", "Maybelline"]
      },
      {
        name: "Hair Care",
        brands: ["Mamaearth", "WOW"]
      }
    ]
  }
];
