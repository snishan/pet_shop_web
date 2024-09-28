import React from 'react';
import "../assest/css/serviceSection.css"
import { Icon } from '@iconify/react';

const ServiceSection = () => {
    return (
        <section id="service">
            <div class="container py-5 my-5">
                <div class="row g-md-5 pt-4">
                    <div class="col-md-4 my-3">
                        <div class="card">
                            <div>
                                <Icon className='service-icon' icon="la:shopping-cart" />
                            </div>
                            <h3 class="card-title py-2 m-0">Free Delivery</h3>
                            <div class="card-text">
                                <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 my-3">
                        <div class="card">
                            <div>
                                <Icon className='service-icon' icon="la:tag" />
                            </div>
                            <h3 class="card-title py-2 m-0">Daily Offer</h3>
                            <div class="card-text">
                                <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 my-3">
                        <div class="card">
                            <div>
                                <Icon className='service-icon' icon="la:award" />
                            </div>
                            <h3 class="card-title py-2 m-0">Quality guarantee</h3>
                            <div class="card-text">
                                <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ServiceSection;
