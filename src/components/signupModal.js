import React, { useState ,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../assest/css/login.css"
import Logo from "../assest/images/pet-shop-icon.png"
import apiClient from "../Services/index"
import { urls } from '../urls';
import toast from 'react-hot-toast';

const SignUp = ({ showSignUp, handleCloseSignUp }) => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        retypePassword: ''
    });
    const [errors, setErrors] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        retypePassword: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    useEffect(() => {
        setFormData({
            fname: '',
            lname: '',
            email: '',
            phone: '',
            username: '',
            password: '',
            retypePassword: ''
        })
        setErrors({
            fname: '',
            lname: '',
            email: '',
            phone: '',
            username: '',
            password: '',
            retypePassword: ''
        })
    }, [showSignUp])
    

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // Perform validation
        const newErrors = {};
        if (!formData.fname) {
            newErrors.fname = 'First name is required';
        }
        if (!formData.lname) {
            newErrors.lname = 'Last name is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Invalid phone number format';
        }
        if (!formData.username) {
            newErrors.username = 'Username is required';
        }
        // Password match validation
        if (formData.password !== formData.retypePassword) {
            newErrors.password = 'Passwords do not match';
            newErrors.retypePassword = 'Passwords do not match';
        }

        // Update errors state
        setErrors(newErrors);

        // If there are errors, stop form submission
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        const params={
            "name": formData.fname +" "+ formData.lname,
            "address":formData.email,
            "contactNo": formData.phone,
            "userType": "Buyer",
            "username": formData.username,
            "password": formData.password
        }

        try {
            const response = await apiClient.post(urls.register, params);
        if (response.data.code==200) {
            toast.success("Register successfully")
            setFormData({
                fname: '',
                lname: '',
                email: '',
                phone: '',
                username: '',
                password: '',
                retypePassword: ''
            })
            handleCloseSignUp()
        }
        } catch (error) {
             toast.error(error.response.data?.message)
        }

       
    };
    const validateEmail = (email) => {
        // Regular expression for validating email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validatePhone = (phone) => {
        // Regular expression for validating phone number
        const phonePattern = /^[0-9]{10}$/;
        return phonePattern.test(phone);
    };
    return (

        <Modal
            id="login-form"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={showSignUp}
            onHide={handleCloseSignUp}>
            <Modal.Header closeButton>
                <Modal.Title>Create Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-8 offset-md-2">

                        <div className="card">

                            <form className="card-body">

                                <div className="text-center">
                                    <img src={Logo} className="img-fluid profile-image-pic  my-3"
                                        width="200px" alt="profile" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="fname" value={formData.fname} onChange={handleChange} placeholder="First Name" />
                                    {errors.fname && <div className="text-danger">{errors.fname}</div>}
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="lname" value={formData.lname} onChange={handleChange} placeholder="Last Name" />
                                    {errors.lname && <div className="text-danger">{errors.lname}</div>}
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
                                    {errors.phone && <div className="text-danger">{errors.phone}</div>}
                                </div>
                                <div className="mb-3">
                                    <input type="text" autoComplete='false' className="form-control" id="username" value={formData.username} onChange={handleChange} placeholder="User Name" />
                                    {errors.username && <div className="text-danger">{errors.username}</div>}
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" id="retypePassword" value={formData.retypePassword} onChange={handleChange} placeholder="Retype Password" />
                                    {errors.retypePassword && <div className="text-danger">{errors.retypePassword}</div>}
                                </div>
                                <div className="text-center">
                                    <button type="button" onClick={() => handleSubmit()} className="btn btn-color px-5 mb-5 w-100">Create Account</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </Modal.Body>

        </Modal>

    );
};

export default SignUp;
