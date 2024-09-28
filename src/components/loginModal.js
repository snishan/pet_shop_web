import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../assest/css/login.css"
import Logo from "../assest/images/pet-shop-icon.png"
import apiClient from "../Services/index"
import { urls } from '../urls';
import toast from 'react-hot-toast';




const Login = ({ show, handleClose }) => {
    const [usename, setUsename] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const handleUsername = (val) => {
        setUsename(val)
    }


    const handlePassword = (val) => {
        setPassword(val)
    }

    const getLoginData = async () => {
        const newErrors = {};
        if (usename=='') {
            newErrors.username = 'Username is required';
        }
        if (password=='') {
            newErrors.password = 'Passwords is required';
        }
        setErrors(newErrors)
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        try {
            const params = {
                "username": usename,
                "password": password
            };
            const response = await apiClient.post(urls.logIn, params);
            toast.success("Login successfully")
            localStorage.setItem('userLogin', JSON.stringify(response.data?.data))
            handleClose()
            window.location.reload();
            
        } catch (error) {
            localStorage.removeItem('userLogin')
            toast.error("Invalied Username or Password")

        }
    };

    return (

        <Modal
            id="login-form"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-6 offset-md-3">

                        <div className="card">

                            <form className="card-body">

                                <div className="text-center">
                                    <img src={Logo} className="img-fluid profile-image-pic  my-3"
                                        width="200px" alt="profile" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" value={usename} required={true} className="form-control" id="Username" onChange={(e) => handleUsername(e.target.value)} aria-describedby="emailHelp"
                                        placeholder="User Name" />
                                         {errors.username && <div className="text-danger">{errors.username}</div>}
                                </div>
                                <div className="mb-3">
                                    <input type="password" required={true} value={password} className="form-control" id="password" onChange={(e) => handlePassword(e.target.value)} placeholder="password" />
                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                </div>
                                <div className="text-center">
                                    <button type="button" onClick={() => getLoginData()} className="btn btn-color px-5 mb-5 w-100">Login</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </Modal.Body>
        </Modal>

    );
};

export default Login;
