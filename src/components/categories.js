import React from 'react';
import bowlFoodIcon from '@iconify-icons/ph/bowl-food';
import birdIcon from '@iconify-icons/ph/bird';
import dogIcon from '@iconify-icons/ph/dog';
import fishIcon from '@iconify-icons/ph/fish';
import catIcon from '@iconify-icons/ph/cat';
import { Icon } from '@iconify/react';

const Categories = () => {
  return (
    <section id="categories">
    <div className="container my-3 py-5">
      <div className="row my-5">
        <div className="col text-center">
          <a href="#" className="categories-item iconify-icon">
            <Icon className="category-icon" icon={bowlFoodIcon} />
            <h5>Foodies</h5>
          </a>
        </div>
        <div className="col text-center">
          <a href="#" className="categories-item">
            <Icon className="category-icon" icon={birdIcon} />
            <h5>Bird Shop</h5>
          </a>
        </div>
        <div className="col text-center">
          <a href="#" className="categories-item">
            <Icon className="category-icon" icon={dogIcon} />
            <h5>Dog Shop</h5>
          </a>
        </div>
        <div className="col text-center">
          <a href="#" className="categories-item">
            <Icon className="category-icon" icon={fishIcon} />
            <h5>Fish Shop</h5>
          </a>
        </div>
        <div className="col text-center">
          <a href="#" className="categories-item">
            <Icon className="category-icon" icon={catIcon} />
            <h5>Cat Shop</h5>
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Categories;
