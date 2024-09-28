import React from 'react';
import "../assest/css/footer.css"
import { Icon } from '@iconify/react';
import PetIcon from "../assest/images/pet-shop-icon.png"

const Footer = () => {
    return (
        <div className='footer-wapper container row'>
            <div className='col-4'>
                <div class="footer-menu">
                <img id="logo" src={PetIcon} alt="site-logo" width="80px" height="80px" />
                <p>Discover a menagerie of furry, feathered, and scaly friends at our pet emporium. Find joy in playful companions and premium supplies for your beloved pets.</p>
                </div>

            </div>
            <div className='col-4'>
                <div class="footer-menu">
                    <h3>Quick Links</h3>
                    <ul class="menu-list list-unstyled">
                        <li class="menu-item">
                            <a href="#" class="nav-link">Home</a>
                        </li>
                        <li class="menu-item">
                            <a href="#" class="nav-link">About us</a>
                        </li>
                        <li class="menu-item">
                            <a href="#" class="nav-link">Offer </a>
                        </li>
                        <li class="menu-item">
                            <a href="#" class="nav-link">Services</a>
                        </li>
                        <li class="menu-item">
                            <a href="#" class="nav-link">Conatct Us</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-4'>
                <div>
                    <h3>Our Newsletter</h3>
                    <p class="blog-paragraph fs-6">Subscribe to our newsletter to get updates about our grand offers.</p>
                    <div class="search-bar border rounded-pill border-dark-subtle px-2">
                        <form class="text-center d-flex align-items-center" action="" method="">
                            <input type="text" class="form-control border-0 bg-transparent" placeholder="Enter your email here" />
                            <Icon className='send-icon' icon={"tabler:location-filled"} />
                        </form>
                    </div>
                </div>
            </div>
            <p className='footer-copy-right'>2024 All Rights Reserved</p>
        </div>
    );
};

export default Footer;
