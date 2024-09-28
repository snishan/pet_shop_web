import React,{useEffect,useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../assest/css/cart.css"
import { petClothing, petFoodies } from "../helper/index";
import { Icon } from '@iconify/react';
import apiClient from "../Services/index"
import { urls } from '../urls/index';
import Plus from "../assest/images/icons/plus-icon.svg"
import Minus from "../assest/images/icons/minus-icon.svg"
import toast from 'react-hot-toast';

import img1 from "../assest/images/petClothing/item1.jpg"
import img2 from "../assest/images/petClothing/item2.jpg"
import img3 from "../assest/images/petClothing/item3.jpg"
import img4 from "../assest/images/petClothing/item4.jpg"
import img5 from "../assest/images/petClothing/item5.jpg"
import img6 from "../assest/images/petClothing/item6.jpg"


import img9 from "../assest/images/petFoods/item9.jpg"
import img10 from "../assest/images/petFoods/item10.jpg"
import img11 from "../assest/images/petFoods/item11.jpg"
import img12 from "../assest/images/petFoods/item12.jpg"
import img13 from "../assest/images/petFoods/item13.jpg"
import img14 from "../assest/images/petFoods/item14.jpg"
import img15 from "../assest/images/petFoods/item15.jpg"
import img16 from "../assest/images/petFoods/item16.jpg"

const imgList = [img1, img2, img3, img4, img5, img6,img9, img10, img11, img12, img13, img14, img15, img16]

const Cart = ({ showCart, handleCloseCart }) => {
    const loginStatus = localStorage.getItem('userLogin')
    const [cartData, setCartData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (loginStatus !== null) {
            var myObj = JSON.parse(loginStatus);
            getCart(myObj.id)
        }
    }, [showCart])

    useEffect(() => {
        if (cartData.length>0) {
            let totalPrice = 0;

            cartData.forEach(item => {
                const { count, product } = item;
                const itemPrice = count * product.price;
                totalPrice += itemPrice;
            });
            setTotalPrice(totalPrice)
        }
    }, [cartData])


     const  getCart=async (id)=>{
        const response = await apiClient.get(urls.getCartData + id);
        if (response.status == 200) {
           setCartData(response.data.data)
        } else {
            setCartData([])
        }
     }
    const handleChangeCount=(method,id,cartId)=>{
        updateProductCount(id,method,cartId)
    }
    const handleSave=(method,id)=>{
         
    }
    const updateProductCount = (productId, method,cartId) => {
        const updatedProducts = cartData.map(product => {
          if (product.productId === productId) {
            return { ...product, count: (method=='add'?product.count+1:product.count-1) };
          }
          return product;
        });
        setCartData(updatedProducts);
        let countValue=updatedProducts.filter((data)=>data.id==cartId)[0].count;
        updateData(cartId,productId,countValue)
       
      };

      const updateData=async (cartId,productId,countValue)=>{
        const params = {
            "count": countValue,
        };
        const response= await apiClient.put(urls.updateCartData+cartId+'/products/'+productId,params);
        if (response.status == 200) {
            toast.success("Product count successfully")
            var myObj = JSON.parse(loginStatus);
            getCart(myObj.id)
        } else {
            toast.success("Product count fail")
        }
      }

      const handleDelete=(id)=>{
        // deleteCartData
        deleteCart(id)
      }

      const  deleteCart=async (id)=>{
        const response = await apiClient.delete(urls.deleteCartData + id);
        if (response.status == 200) {
            toast.success("Product removed successfully")
            var myObj = JSON.parse(loginStatus);
            getCart(myObj.id)
        } else {
            toast.success("Product removed fail")
        }
     }

     const handleClickCheckout=()=>{
        toast.success("Your purchase is successful, we will confirm it via email.")
     }
    return (

        <Modal
            id="cart-form"
            size="lg"
            show={showCart}
            onHide={handleCloseCart}>
            <Modal.Header closeButton>
                <Modal.Title>My Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Availbale Stock</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartData.length==0?<tr>No Data Available</tr>:cartData.map((data,index)=>{
                           return (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td><img className='cart-img' src={imgList[index]} /></td>
                                <td>{data.product.name}</td>
                                <td>{data.product.count}</td>
                                <td><p className='count'>
                                    <img className={data.product.count==0?'plus-icon disable':'plus-icon'}  onClick={()=>data.product.count==0?null:handleChangeCount('add',data.productId,data.id)} src={Plus} alt='plus'/>
                                    {data.count}
                                    <img className={data.count==1?'minus-icon disable':'minus-icon'} onClick={()=>data.count==1?null:handleChangeCount('minus',data.productId,data.id)} src={Minus} alt='plus'/>
                                    </p>
                                </td>
                                <td>{data.product.price}</td>
                                <td><Icon className='delete-icon' onClick={()=>handleDelete(data.id)} icon="fluent:delete-28-regular" /></td>
                            </tr>)
                        })}
                        
                    </tbody>
                </table>
                {cartData.length==0?'':<><p className='total-balance'>Total Balance: <span>Rs. {totalPrice}</span></p></>}
            </Modal.Body>
            <Modal.Footer>
            {cartData.length==0?'':<div className="float-right">
                            <button type="button" onClick={()=>handleClickCheckout()} className="btn btn-lg btn-primary mt-2">Checkout</button>
                        </div>}
            </Modal.Footer>
        </Modal>

    );
};

export default Cart;
