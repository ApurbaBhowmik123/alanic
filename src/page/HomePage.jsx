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


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
                <div className="col-1">
                    <p>FEATURED <span>MEN’S WEAR</span></p>
                </div>
                <div className="col-span-5 relative">
                    <strong className="text-4xl">MEN’S COLLECTION</strong>
                    <hr className="gridtext absolute" />
                    <div className="gap-2">
                        <Carousel responsive={responsive} className="mt-8">
                            {
                                caraImageData.map((item, index) => (
                                    <div key={index} className="caro-image">
                                        <img src={item.image} />
                                        <p>{item.name}</p>
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