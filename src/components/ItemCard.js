import React from 'react';
import "../assest/css/itemCard.css"
import { Icon } from '@iconify/react';

const ItemCard = ({status,imgUrl, name, starCount,price,id,ViewProduct ,count,addToCart }) => {
     // Create an array of length 'count'
  const paragraphs = new Array(starCount).fill(null);

    return (
        <div id='itemCard' className="swiper-slide">
            {status?<div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                {status}
            </div>:''}
            <div className="card position-relative">
                <a onClick={()=>ViewProduct(id)}><img src={imgUrl} className="img-fluid rounded-4" alt="image" /></a>
                <div className="card-body p-0">
                    <a onClick={()=>ViewProduct(id)}>
                        <h3 className="card-title pt-4 m-0">{name}</h3>
                    </a>
                    <div className="card-text">
                        <span className="rating secondary-font">
                            {paragraphs?.map(()=>{
                                return <Icon icon="clarity:star-solid"  />
                            })}
                           </span>

                        <h3 className="secondary-font price">Rs. {price}</h3>
                        <p>Available Product Count:<b>{ " "+count}</b></p>
                        <div className="d-flex flex-wrap mt-3">
                            <a onClick={()=>addToCart(id)} className="btn-cart me-3 px-4 pt-3 pb-3">
                                <h5 className="text-uppercase add-to-cart m-0">Add to Cart</h5>
                            </a>
                            <a href="#" className="btn-wishlist px-4 pt-3 ">
                                <Icon icon="fluent:heart-28-filled" className='fs-5' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
