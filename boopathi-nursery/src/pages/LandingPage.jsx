import React, { useEffect } from 'react'
import BackgroundImg from "../assets/background1.jpg"
import {Link} from 'react-router-dom'
import styles from "./Landingpage.module.css"

const LandingPage = () => {
    const bodyImg = document.body
    bodyImg.style.backgroundImage = `url(${BackgroundImg})`
    bodyImg.style.backdropFilter = "blur(10px)"

    useEffect(()=>{
        
    },[])

    return (
        <div className='sm:h-screen flex items-center justify-center' style={styles.body}>

            <div className='flex text-center justify-center items-center gap-10 mx-5'>

                <div className='flex flex-col text-white items-center gap-3'>
                    <div className='md:w-52 text-2xl font-bold '>Welcome To Boopathi Nursery</div>
                    <p className='font-semibold'>Live with nature</p>
                    <Link to={"/product-list"}>
                    <button
                        className='bg-pink-700 text-white font-bold text-lg rounded-md w-40 h-10 hover:bg-pink-600'
                        >
                        Get Started</button>
                    </Link>
                </div>

                <div className='md:mt-0 mt-10 font-semibold text-white'>
                    <p>
                        Welcome to Boopathi Nursery 🌷! <br />
                        Boopathi Nursery is your one-stop destination for all things gardening. 
                        Whether you are a seasoned horticulturist or just starting your green journey, 
                        we offer a wide selection of premium-quality plants, seeds, and gardening 
                        supplies to meet your needs.
                    </p>
                    <br />
                    <p>
                    Our specialty includes ornamental plants that beautify your spaces, medicinal plants 
                    for natural remedies, and fruit-bearing plants to add a touch of freshness to your garden. 
                    At Boopathi Nursery, we are dedicated to promoting greenery and sustainability through 
                    our carefully nurtured offerings.
                    </p>
                    <br />
                    <p>
                    With personalized care tips and expert advice, we aim to make gardening a 
                    fulfilling experience for every enthusiast. From vibrant flowers to lush greenery, 
                    we help you create a thriving garden that reflects your passion for nature.
                    </p>
                    <br />
                    <p className='md:mb-0 mb-10'>
                    Visit Boopathi Nursery today to explore our collection and cultivate your love for plants. 
                    Together, let's grow a greener tomorrow!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage