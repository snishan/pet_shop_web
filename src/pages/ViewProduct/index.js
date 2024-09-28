import React, { useState, useEffect } from "react";
import "../../assest/css/viewProduct.css"
import { petClothing, petFoodies } from "../../helper/index";
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Header from "../../components/header";
import apiClient from "../../Services/index"
import { urls } from '../../urls/index';
import { Images } from "../../helper/index";
import toast from 'react-hot-toast';


const ViewProduct = () => {
    const { id, type } = useParams();
    const loginStatus = localStorage.getItem('userLogin')

    const [formData, setFormData] = useState({})

    const handleAddCard = async () => {
        if (loginStatus !== null) {
            var myObj = JSON.parse(loginStatus);
            const response = await apiClient.post(urls.addToCart + myObj.id + '/products/' + id);
            if (response.status == 200) {
                toast.success("Product added successfully")
                getProduct()
            } else {
                toast.success("Product added faild")
            }
        } else {
            toast.success("Please login to the system")
        }

    }

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const response = await apiClient.get(urls.getProduct + id);
        if (response.status == 200) {
            setFormData(response.data.data)

        } else {
            setFormData({})
        }
    }

    useEffect(() => {

        // if (type == 'clothing') {
        //     const selectedProduct = petClothing.find((data) => data.id == id)
        //     setFormData(selectedProduct)
        // }else{
        //     const selectedProduct = petFoodies.find((data) => data.id == id)
        //     setFormData(selectedProduct)
        // }
    }, [id, type])
    const paragraphs = new Array(formData?.starCount ?? 1).fill(null);

    return (
        <>

            <div className="view-products-wapper">
                <Header />
                <div className="container view-products card">
                    <div className="row">
                        <div className="col-4">
                            <img className="product-img" src={Images.filter((data) => data.name == formData.imgUrl)[0]?.url} alt="img" />
                        </div>
                        <div className="col-8">
                            <h2>{formData.name}</h2>
                            <p>{formData?.content}</p>
                            <h4>Rs. {formData.price}</h4>
                            <p>Available Count:<b>{" " + formData.count}</b></p>
                            <span className="rating secondary-font">
                                {paragraphs?.map(() => {
                                    return <Icon icon="clarity:star-solid" />
                                })}
                            </span>
                            <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                                <h5 onClick={() => handleAddCard()} className="text-uppercase add-to-cart m-0">Add to Cart</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewProduct;