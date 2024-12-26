
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from "../assets/NurseryIcon.png"
import { FaShoppingCart } from "react-icons/fa";
import Styless from "./Cart.module.css"

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const savedCartItems = localStorage.getItem("cartItems");
        const parsedItems = savedCartItems ? JSON.parse(savedCartItems) : [];
        const filteredItems = parsedItems.filter(item => item && typeof item === "object" && typeof item.price === "string");

        // Ensure each item has a quantity
        const updatedItems = filteredItems.map(item => ({ ...item, quantity: item.quantity || 1 }));
        setCartItems(updatedItems);

        // Calculate total quantity
        const totalQuantity = updatedItems.reduce((count, item) => count + item.quantity, 0);
        setCartCount(totalQuantity);
    }, []);

    function handleRemoveCart(plantId) {
        const UpdatedItems = cartItems.filter(item => item && item.id !== plantId);
        setCartItems(UpdatedItems);
        const totalQuantity = UpdatedItems.reduce((count, item) => count + item.quantity, 0);
        setCartCount(totalQuantity);
        localStorage.setItem("cartItems", JSON.stringify(UpdatedItems));
        localStorage.setItem("cartCount", JSON.stringify(totalQuantity));
    }


    function increaseQuantity(plantId) {
        const updatedItems = cartItems.map(item =>
            item.id === plantId ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
        setCartItems(updatedItems);
        const totalQuantity = updatedItems.reduce((count, item) => count + item.quantity, 0);
        setCartCount(totalQuantity);
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        localStorage.setItem("cartCount", JSON.stringify(totalQuantity));
    }

    function decreaseQuantity(plantId) {
        const updatedItems = cartItems
            .map(item =>
                item.id === plantId
                    ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 }
                    : item
            )
            .filter(item => item.quantity > 0); // Remove items with 0 quantity.

        setCartItems(updatedItems);
        const totalQuantity = updatedItems.reduce((count, item) => count + item.quantity, 0);
        setCartCount(totalQuantity);
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        localStorage.setItem("cartCount", JSON.stringify(totalQuantity));
    }



    function TotalAmount() {
        return cartItems.reduce((total, item) => {
            if (item && item.price) {
                const price = parseFloat(item.price.replace("$", "") || 0);
                return total + price * (item.quantity || 1); // Include quantity
            }
            return total;
        }, 0);
    }

    return (
        <div style={Styless.body}>
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
                    {/* <h1 className='font-bold text-4xl text-white'>Plants</h1> */}
                    <div className='relative text-4xl mx-3 cursor-pointer'>
                        <FaShoppingCart className='text-pink-600 hover:text-pink-500' />
                        <span
                            className='absolute text-lg font-semibold -right-1 left-3 -top-0 text-white'
                        >{cartCount}</span>
                    </div>
                </div>
            </div>
            {/* display product details */}
            <div className='mt-28 mb-10 mx-5 flex flex-col items-center justify-center'>
                <div className='grid grid-cols-1 gap-8 md:max-w-2xl'>
                    {
                        cartItems.length > 0 ? (
                            cartItems.filter(item => item).map((item) => (
                                <div className='flex bg-white gap-4 rounded-md hover:shadow-lg' key={item?.id || Math.random()}>

                                    <img
                                        src={item.image || "default-image.jpg"}
                                        alt={item.name || "default-name"}
                                        className='w-32 md:w-40 h-full block rounded-md hover:scale-105'
                                    />

                                    <div className='flex flex-col gap-2 mt-2 mb-2'>
                                        <p className='text-pink-500 font-semibold line-clamp-1 capitalize'><span className='text-gray-600'>name : </span>{item.name}</p>
                                        <p className='font-semibold text-green-500'><span className='text-gray-600'>Price : </span>{item.price}</p>
                                        <div className='flex mx-auto gap-5 items-center'>
                                            <button
                                                className='font-bold p-1 text-2xl rounded-full bg-blue-500 hover:scale-105'
                                                onClick={() => decreaseQuantity(item.id)}
                                            >-</button>
                                            <p className='font-semibold text-2xl text-green-600'>{item.quantity || 1}</p>
                                            <button
                                                onClick={() => increaseQuantity(item.id)}
                                                className='font-bold p-1 text-2xl rounded-full bg-blue-500 hover:scale-105'
                                            >+</button>
                                        </div>
                                        <p className='line-clamp-2 capitalize'> <span className='text-gray-600 font-semibold'>Description : </span>{item.description}</p>
                                        <button
                                            onClick={() => handleRemoveCart(item.id)}
                                            className='bg-red-600 w-20 self-center text-white rounded-xl p-1 hover:bg-red-500 hover:scale-105'>Delete</button>
                                    </div>
                                </div>)
                            )) : (
                            <p className='bg-white p-2 rounded-md font-bold text-red-600 text-xl'>Your Cart is Empty</p>
                        )
                    }
                </div>

                <div className='mt-2 flex justify-center flex-col items-center gap-3'>
                    {
                        cartCount > 0 ? (
                           <div className= 'max-w-96 p-2 font-bold text-xl'>
                             <p  className=' bg-green-600 text-white rounded-md flex p-2 items-center justify-center'
                                >
                                Total Amount is : <span className='text-red-600'> {TotalAmount()}$ </span>
                            </p>
                            <p className='p-2 mt-3 bg-green-600 text-white rounded-md flex items-center justify-center'>
                                checkout
                            </p>
                           </div>       
                        ) :
                            (
                                <p></p>
                            )
                    }
                    <Link to={"/product-list"}>
                        <button className='bg-blue-700 p-2 text-white font-semibold rounded-2xl hover:scale-105 hover:bg-blue-600'>Go Back</button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Cart
