import React from 'react';
import "../css/home.css";
import homeimage from "../assets/Rectangle 5.png";
import { Plane } from 'lucide-react';
import { Package2 } from 'lucide-react';
import { Mails } from 'lucide-react';
import { Truck } from 'lucide-react';
import image1 from '../assets/Rectangle 154.png';
import image2 from '../assets/Rectangle 156.png';
import image3 from '../assets/Rectangle 157.png';
import image4 from '../assets/Rectangle 158.png';
import caro1 from '../assets/Rectangle 136.png';
import caro2 from '../assets/Rectangle 51.png';
import caro3 from '../assets/Rectangle 50.png';
import caro4 from '../assets/Rectangle 49.png';
import caro5 from '../assets/Rectangle 48.png';
import caro6 from '../assets/Rectangle 138.png';
import caro7 from '../assets/Rectangle 139.png';
import caro8 from '../assets/Rectangle 142.png';
import caro9 from '../assets/Rectangle 143.png';
import women1 from '../assets/Rectangle 145.png'
import women2 from '../assets/Rectangle 144.png'
import women3 from '../assets/Rectangle 146.png'
import women4 from '../assets/Rectangle 147.png'
import women5 from '../assets/Rectangle 148.png'
import women6 from '../assets/Rectangle 29.png'
import women7 from '../assets/Rectangle 30.png'
import gym1 from '../assets/Rectangle 58.png'
import gym2 from '../assets/Rectangle 59.png'
import gym3 from '../assets/Rectangle 60.png'
import gym4 from '../assets/Rectangle 61.png'
import gym5 from '../assets/Rectangle 61 (1).png'





import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { MoveRight } from 'lucide-react';
import { MoveLeft } from 'lucide-react';


const HomePage = () => {
    const imageData = [
        {
            "image": image1,
            "name": "RUNNING"
        },
        {
            "image": image2,
            "name": "JACKETS"
        },
        {
            "image": image3,
            "name": "T-SHIRTS"
        },
        {
            "image": image4,
            "name": "TROUSERS"
        },
        {
            "image": image1,
            "name": "JERSEY"
        },

    ];
    const caraImageData = [
        {
            "image": caro1,
            "name": "shirt"
        },
        {
            "image": caro2,
            "name": "jeans"
        },
        {
            "image": caro3,
            "name": "kurta"
        },
        {
            "image": caro4,
            "name": "ganji"
        },
        {
            "image": caro5,
            "name": "jacket"
        },
        {
            "image": caro2,
            "name": "shirt"
        },
        {
            "image": caro5,
            "name": "kurta"
        }
    ]
    const womenImageData = [
        {
            "image": women1,
            "name": "shirt"
        },
        {
            "image": women2,
            "name": "jeans"
        },
        {
            "image": women3,
            "name": "kurta"
        },
        {
            "image": women4,
            "name": "ganji"
        },
        {
            "image": women5,
            "name": "jacket"
        },
        {
            "image": women3,
            "name": "shirt"
        },
        {
            "image": women5,
            "name": "kurta"
        }
    ]
    const GymImageData = [
        {
            "image": gym1,
            "name": "shirt"
        },
        {
            "image": gym2,
            "name": "jeans"
        },
        {
            "image": gym3,
            "name": "kurta"
        },
        {
            "image": gym4,
            "name": "ganji"
        },
        {
            "image": gym5,
            "name": "jacket"
        },
        {
            "image": gym2,
            "name": "shirt"
        },
        {
            "image": gym5,
            "name": "kurta"
        }
    ]
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="">
            <div className="section">
                <div className="home-image">
                    <img src={homeimage} />
                    <div className="home-title text-white">
                        <p>WE MAKE CLOTHES </p>
                        <h3 className="text-6xl font-bold home-main-title-1">Private Label Clothing
                            Manufacturer</h3>
                        <span className="home-main-title-2">We generate magnificent, supreme bulk clothing items </span>
                        <button className="home-button mt-4">Shop Collections</button>
                        <div className="home-border-box">
                            <div className="flex justify-center home-border-margin">
                                <div className="flex home-icon">
                                    <span> <Plane /></span>
                                    <div className="home-border-title">
                                        <p className="home-flex-start">Shipping Worldwide </p>
                                        <span className="home-flex-start">Quick shipping offered all around the world</span>
                                    </div>

                                </div>
                                <hr className="custom-hr" />

                                <div className="flex home-icon">
                                    <span>  <Package2 /></span>
                                    <div className="home-border-title">
                                        <p className="home-flex-start">Low MOQ</p>
                                        <span className="home-flex-start">Achievable MOQ on bulk orders</span>
                                    </div>
                                </div>
                                <hr className="custom-hr" />
                                <div className="flex home-icon">
                                    <span> <Truck /></span>
                                    <div className="home-border-title">
                                        <p className="home-flex-start">Huge Catalog</p>
                                        <span className="home-flex-start">Our never-ending catalog has huge variety</span>
                                    </div>
                                </div>
                                <hr className="custom-hr" />
                                <div className="flex home-icon">
                                    <span><Mails /></span>
                                    <div className="home-border-title">
                                        <p className="home-flex-start">Strong Customer Support</p>
                                        <span className="home-flex-start">A round-the-clock-available support team</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div className="section mt-32">
                <div className="flex justify-center">
                    <p className="font-bold text-4xl">TOP CATEGORY</p>
                </div>
                <div className="flex mt-8 home-image-div">
                    {
                        imageData.map((item, index) => (
                            <div key={index} className="home-image-hover">
                                <img src={item.image} />
                                <strong className="home-image-text text-white text-4xl">{item.name}</strong>
                            </div>

                        ))
                    }
                </div>
            </div>
            <div className="section grid grid-cols-6 gap-2 mt-16">
                <div className="col-1 home-rotate-main">
                    <p className="flex flex-col home-rotate text-4xl font-bold">FEATURED <span className="text-6xl home-span">MEN’S WEAR</span></p>
                </div>
                <div className="col-span-5 relative">
                    <div className="flex">
                        <strong className="text-4xl">MEN’S COLLECTION</strong>
                        <hr className="gridtext absolute" />
                        <div className="flex">
                            <MoveRight />
                            1-3
                            <MoveLeft />
                        </div>
                    </div>

                    <div className="gap-2">
                        <Carousel responsive={responsive} className="mt-8">
                            {
                                caraImageData.map((item, index) => (
                                    <div key={index} className="caro-image">
                                        <img src={item.image} />
                                        <p className="flex justify-center font-bold">{item.name}</p>
                                    </div>
                                ))
                            }

                        </Carousel>
                    </div>
                </div>


            </div>
            <div className="section grid grid-cols-2 mt-20 gap-2">
                <div className="col-1">
                    <div className="image-main-1  grid gap-2">
                        <div className="grid grid-cols-2 gap-2">
                            <img src={caro6} />
                            <img src={caro7} />
                        </div>
                        <img src={caro9} />
                    </div>
                </div>
                <div className="col-2">
                    <div className="image-main-2">
                        <img src={caro8} />
                    </div>
                </div>
            </div>
            <div className="section grid grid-cols-6 gap-2 mt-16">
                <div className="col-1 home-rotate-main">
                    <p className="flex flex-col home-rotate text-4xl font-bold">DAILY DEALS <span className="text-6xl home-span">FLASH SALE</span></p>
                </div>
                <div className="col-span-5 relative">
                    <div className="flex">
                        <strong className="text-4xl">WOMEN’S COLLECTION</strong>
                        <hr className="gridtext absolute" />
                        <div className="flex">
                            <MoveRight />
                            1-3
                            <MoveLeft />
                        </div>
                    </div>

                    <div className="gap-2">
                        <Carousel responsive={responsive} className="mt-8">
                            {
                                womenImageData.map((item, index) => (
                                    <div key={index} className="caro-image">
                                        <img src={item.image} />
                                        <p className="flex justify-center font-bold">{item.name}</p>
                                    </div>
                                ))
                            }

                        </Carousel>
                    </div>

                </div>


            </div>
            <div className="grid grid-cols-2 mt-12">
                <div className="col-1">
                    <img src={women6} />


                </div>
                <div className="col-2">
                    <img src={women7} />
                </div>
            </div>
            <div className="section grid grid-cols-6 gap-2 mt-16">
                <div className="col-1 home-rotate-main">
                    <p className="flex flex-col home-rotate text-4xl font-bold">IT'S TIME FOR <span className="text-6xl home-span">WORK OUT</span></p>
                </div>
                <div className="col-span-5 relative">
                    <div className="flex">
                        <strong className="text-4xl">GYM & FITNESS</strong>
                        <hr className="gridtext absolute" />
                        <div className="flex">
                            <MoveRight />
                            1-3
                            <MoveLeft />
                        </div>
                    </div>

                    <div className="gap-2">
                        <Carousel responsive={responsive} className="mt-8">
                            {
                                GymImageData.map((item, index) => (
                                    <div key={index} className="caro-image">
                                        <img src={item.image} />
                                        <p className="flex justify-center font-bold">{item.name}</p>
                                    </div>
                                ))
                            }

                        </Carousel>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default HomePage