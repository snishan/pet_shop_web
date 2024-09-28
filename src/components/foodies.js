import React, { useEffect, useState } from 'react';
import { petFoodies } from "../helper";
import { Row, Col } from "react-bootstrap";
import ItemCard from "../components/ItemCard";
import { useNavigate } from 'react-router-dom';
import apiClient from "../Services/index"
import { urls } from '../urls';
import toast from 'react-hot-toast';


import img9 from "../assest/images/petFoods/item9.jpg"
import img10 from "../assest/images/petFoods/item10.jpg"
import img11 from "../assest/images/petFoods/item11.jpg"
import img12 from "../assest/images/petFoods/item12.jpg"
import img13 from "../assest/images/petFoods/item13.jpg"
import img14 from "../assest/images/petFoods/item14.jpg"
import img15 from "../assest/images/petFoods/item15.jpg"
import img16 from "../assest/images/petFoods/item16.jpg"


const imgList = [img9, img10, img11, img12, img13, img14, img15, img16]

const Foodies = () => {
  const loginStatus = localStorage.getItem('userLogin')
  const navigate = useNavigate();
  const [products, setProducts] = useState([])
  const ViewProduct = (id) => {
    navigate(`/view-product/${id}/foods`);
  }

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await apiClient.get(urls.getProducts);
    if (response.status == 200) {
      setProducts(response.data.data)
    }
  }

  const addToCart=(id)=>{
    handleAddCard(id)
  }

  const handleAddCard = async (id) => {
    if (loginStatus !== null) {
        var myObj = JSON.parse(loginStatus);
        const response = await apiClient.post(urls.addToCart + myObj.id + '/products/' + id);
        if (response.status == 200) {
            toast.success("Product added successfully")
            getProducts()
        } else {
            toast.success("Product added faild")
        }
    } else {
        toast.success("Please login to the system")
    }

}

  return (

    <section id="foodies" class="my-5 overflow-hidden">
      <div class="container pb-5">

        <div class="section-header d-md-flex justify-content-between align-items-center mb-3">
          <h2 class="display-3 fw-normal">Pet Foodies</h2>

        </div>
        <div>
          <Row>
            {products.filter((data) => data.category == 'Food').map((data, index) => {
              return (
                <Col key={data?.id} sm={4}>
                  <ItemCard
                    status={data.status}
                    imgUrl={imgList[index]}
                    name={data.name}
                    starCount={data.starCount}
                    price={data.price}
                    id={data.id}
                    ViewProduct={ViewProduct}
                    count={data.count}
                    addToCart={addToCart}
                  />
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Foodies;
