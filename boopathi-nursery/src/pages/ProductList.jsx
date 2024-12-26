import React, { useState } from 'react'
import styles from "./Productlist.module.css"
import Icon from "../assets/NurseryIcon.png"
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const plantImages = Object.values(
  import.meta.glob("../assets/products/*.{png,jpg,jpeg,svg}", { eager: true })
);

const AllPlantList = [
  {
    aritificialPlants: {
      plant1: {
        name: "MUNDEYA Plastic Artificial Garlands Hanging Leaves",
        price: "5$",
        description: "MUNDEYA Plastic Artificial Garlands Hanging Leaves Greenery Vine Lights Creeper Plants For Home Decor Main Door Wall Balcony Office Decoration Party."
      },
      plant2: {
        name: "SATYAM KRAFT 1 Bunch Artificial Babys Breath",
        price: "5$",
        description: "SATYAM KRAFT 1 Bunch Artificial Babys Breath Gypsophila Flower Bunch Decorative Items for Home, Living Room Table, Christmas, Plants, for Wedding."
      },
      plant3: {
        name: "VRB Dec Tm Artificial Greenery Ferns Plants",
        price: "5$",
        description: "You can use this artificial greenery garland vine leaves for wall decoration; home decoration; for door god photos and to decorate both indoor and outdoor."
      }
    },
    indoorPlants: {
      plant1: {
        name: "Ugaoo Aglaonema Pink Beauty Plant",
        price: "5$",
        description: "If you are a first time gardener looking for an easy one, Aglaonema Pink Beauty is the plant for you. Also called the Chinese Evergreen."
      },
      plant2: {
        name: "Live Snake Plant | Good Luck Snake Plant pack of 3 | Snake Plant Indoor Live Plant",
        price: "5$",
        description: `★【SNACK PLANTS】Snack plant is an excellent indoor plant due to its ability ot survive in low light
      ★【PLANT GROW】Easy to grow and most popular indoor plant.`
      },
      plant3: {
        name: "Peperomia rotundifolia - Trailing Jade Plant",
        price: "5$",
        description: "Commonly known as Trailing Jade or Jade Necklace. This Peperomia has small, round, plump leaves which develop into soft trailing stems."
      },
      plant4: {
        name: "Peace Lily Plant",
        price: "5$",
        description: "Peace Lily Plant For your Living Space Buy Peace lily plant online With Soil & Pot"
      },
      plant5: {
        name: "Lush Green Money Plant",
        price: "5$",
        description: "Buy Lush Green Money Plant | Online Store Plant Orbit"
      },
    },
    outdoorPlants: {
      plant1: {
        name: "Alpinia zerumbet varigata",
        price: "5$",
        description: "Alpinia zerumbet varigata commonly known as Variegated Shell Ginger"
      },
      plant2: {
        name: "Front Porch Flower Pots",
        price: "5$",
        description: "Traditional subjects for topiary have usually been evergreens to retain a permanent feature throughout the seasons."
      },
      plant3: {
        name: " Geraniums",
        price: "5$",
        description: "Geraniums can withstand scorching summers with low watering. They keep going from strength to strength in most gardens."
      },
      plant4: {
        name: "Japanese Sago Palm (Cycas revoluta)",
        price: "5$",
        description: "The Japanese Sago Palm is a beautiful addition to any indoor plant collection or outdoor garden and, despite its name, is not actually considered a palm."
      },
      plant5: {
        name: "Rose Baby Pink Plant",
        price: "5$",
        description: "Rose a rose is a woody perennial of the genus Rosa, within the family Rosaceae. There are over 100 species and thousands of cultivars."
      },
      plant6: {
        name: "Rose (Yellow) - Plant",
        price: "5$",
        description: "Roses are special plants to express feelings. Their stems are usually prickly and their glossy, green leaves have toothed edges."
      },
      plant7: {
        name: "Arabian Jasmine / Gundu Malli (Jasminum sambac)",
        price: "5$",
        description: "This item: Arabian Jasmine / Gundu Malli (Jasminum sambac) Highly Fragrant Flowering Live Plant."
      },
      plant8: {
        name: "Mogra (Jasminum sambac )",
        price: "5$",
        description: "Jasminum sambac is a small shrub which The shrub produces charming little star-shaped white blooms. The flowers are exceptionally fragrant."
      },
      plant9: {
        name: "Kapebonavista Apple",
        price: "5$",
        description: "An apple is a round, edible fruit produced by an apple tree (Malus spp., among them the domestic or orchard apple; Malus domestica)."
      },
      plant10: {
        name: "Guava tree plant",
        price: "5$",
        description: "Guava tree plant Choose a sunny spot with well-draining soil. Plant the sapling at the same depth as the root ball."
      },
      plant11: {
        name: "Jamun tree (Syzygium cumini), Naval tree",
        price: "5$",
        description: "Jamun fruit(Naval Maram)thrives well under waterlogged and salinity conditions as well but these plants do not like very heavy and light sandy soils."
      },
    },
    waterPlants: {
      plant1: {
        name: "Peace Lily",
        price: "5$",
        description: "Popular for its ability to purify the air, it grows well in low light and needs little maintenance."
      },
      plant2: {
        name: "Anubias",
        price: "5$",
        description: "Anubias is a tough, low-maintenance plant with large leaves that give fish a place to relax and give your aquarium a hint of greenery."
      },
      plant3: {
        name: "Pinterest/Instructables",
        price: "5$",
        description: "There are many ways you can decorate indoor water plants. Take a clear glass jar or vase, add pebbles or shells, and have a mini aquatic garden."
      },
      plant4: {
        name: "Pinterest",
        price: "5$",
        description: "There are many ways you can decorate indoor water plants. Take a clear glass jar or vase, add pebbles or shells, and have a mini aquatic garden."
      },
      plant5: {
        name: "lotus",
        price: "5$",
        description: "Pond plants not only look good and provide habitat for insects and wildlife. They also help oxygenate the water and absorb nutrients from the water to help keep it healthy."
      },
      plant6: {
        name: "lotus",
        price: "5$",
        description: "Pond plants not only look good and provide habitat for insects and wildlife. They also help oxygenate the water and absorb nutrients from the water to help keep it healthy."
      },
    }
  }
];

const GetList = AllPlantList.flatMap(plant => Object.values(plant))

const ExtractPlantList = GetList.flatMap(plant => Object.values(plant))

const PlantName = ExtractPlantList.map(plant => plant.name)

const PlantPrice = ExtractPlantList.map(plant => plant.price)

const Plantdescription = ExtractPlantList.map(plant => plant.description)

const PlantData = plantImages.map((image, index) => ({
  id: index + 1,
  name: PlantName[index] || `Plant ${index + 1}`,
  price: PlantPrice[index] || "5$",
  description: Plantdescription[index] || "It is a Good plant for the house...",
  image: image.default || "Currently not available",
})).filter(plant => plant.name && plant.image);


const ProductList = () => {

  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("cartCount");
    return savedCount ? JSON.parse(savedCount) : 0;
  })
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    try {
      const parsed = JSON.parse(savedCartItems);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return []
    }
  });

  const [searchQuery, setSearchQuery] = useState("");

  
const filteredPlants = PlantData.filter(plant => {
  const query = searchQuery.toLowerCase();
  return (
    plant.name.toLowerCase().includes(query) ||
    plant.description.toLowerCase().includes(query) // Optionally search in description
  );
});

  function handleAddToCartButton(plant) {
    setCartItems((preveItems) => {
      const updatedItems = [...preveItems, plant];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });

    setCount((preveCount) => {
      const updatedCount = preveCount + 1;
      localStorage.setItem("cartCount", JSON.stringify(updatedCount));
      return updatedCount;
    })

  }

  const isInCart = (plant) => {
    return cartItems.some((item) => item?.id === plant)
  };

  return (
    <div style={styles.body}>
      {/* nav bar */}
      <div className='bg-green-500 fixed w-full z-40 top-0'>
        <div className='flex items-center justify-between p-4'>
          <Link to={"/"}>
            <div className='flex gap-2 items-center justify-center'>
              <img src={Icon} className='rounded-full w-16 cursor-pointer' />
              <div className='hidden md:flex flex-col items-center text-white'>
                <p className='font-bold text-lg'>Boopathi Nursery</p>
                <p className='font-semibold'>Live with nature</p>
              </div>
            </div>
          </Link>
          <h1 className='font-bold text-4xl text-white'>Plants</h1>
          <Link to={"/cart"}>
            <div className='relative text-4xl mx-3 cursor-pointer'>
              <FaShoppingCart className='text-pink-600 hover:text-pink-500' />
              <span
                className='absolute text-lg font-semibold right-3 left-3 -top-0 text-white'
              >{count}</span>
            </div>
          </Link>
        </div>
      </div>
      {/* search bar */}
      <div className='mt-28 flex justify-center'>
        <input
          type="text"
          className='w-1/2 rounded-xl border-none h-10 p-2'
          placeholder='Search your Products here...!'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* product list */}

      <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 mt-10 gap-4 mx-4 mb-10'>
        {
          filteredPlants.map((plant) => (
            <div key={plant.id} className='bg-white rounded-md hover:shadow-xl'>
              <div className='flex justify-end items-end'>
                <p className='bg-red-600 text-white flex w-20 h-9 items-center justify-center rounded-sm shadow-lg'>Sale</p>
              </div>

              <div className='flex p-5 flex-col items-center justify-center'>
                <p className='line-clamp-2 font-semibold text-pink-600'>{plant.name}</p>
                <img src={plant.image} alt={plant.name}
                  className='w-full h-44 rounded-md block m-2 capitalize hover:scale-105 ' />
                <p className='text-green-600 font-bold'><span className='font-semibold text-slate-700'>Price : </span> {plant.price}</p>
                <p className='line-clamp-2 md:line-clamp-3 capitalize'><span className='font-semibold text-slate-700'>Description : </span> {plant.description}</p>
                <button
                  onClick={() => handleAddToCartButton(plant)}
                  disabled={isInCart(plant.id)}
                  className={` rounded-md p-1 text-white font-semibold mt-5 hover:scale-105 ${isInCart(plant.id) ? "bg-gray-500 cursor-not-allowed" : "bg-red-600 hover:bg-red-500"}`}

                >{isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}</button>
              </div>
            </div>
          ))
        }
      </div>

      <div>

      </div>

    </div>
  )
}

export default ProductList