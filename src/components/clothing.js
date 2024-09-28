import React,{ useEffect, useState }  from 'react';
import { petClothing } from "../helper";
import { Row, Col } from "react-bootstrap";
import ItemCard from "../components/ItemCard";
import { useNavigate } from 'react-router-dom';
import apiClient from "../Services/index"
import { urls } from '../urls';
import toast from 'react-hot-toast';

import img1 from "../assest/images/petClothing/item1.jpg"
import img2 from "../assest/images/petClothing/item2.jpg"
import img3 from "../assest/images/petClothing/item3.jpg"
import img4 from "../assest/images/petClothing/item4.jpg"
import img5 from "../assest/images/petClothing/item5.jpg"
import img6 from "../assest/images/petClothing/item6.jpg"

const imgList = [img1, img2, img3, img4, img5, img6]

const Clothing = () => {
    const loginStatus = localStorage.getItem('userLogin')
    const navigate = useNavigate();
    const [products, setProducts] = useState([])
    const ViewProduct=(id)=>{
        navigate(`/view-product/${id}/clothing`);
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
        <section id="clothing" class="my-5 overflow-hidden">
            <div class="container pb-5">

                <div class="section-header d-md-flex justify-content-between align-items-center mb-3">
                    <h2 class="display-3 fw-normal">Pet Clothing</h2>

                </div>
                <div>
                    <Row>
                    {products.filter((data) => data.category !== 'Food').map((data,index) => {
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

export default Clothing;
