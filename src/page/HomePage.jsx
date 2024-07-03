import React from 'react';
import "../css/home.css";
import homeimage from "../assets/Rectangle 5.png";
import { Plane } from 'lucide-react';
import { Package2 } from 'lucide-react';
import { Mails } from 'lucide-react';
import { Truck } from 'lucide-react';

const HomePage = () => {
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
        </div>
    )
}

export default HomePage