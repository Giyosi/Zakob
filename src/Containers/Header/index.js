import React, { Component } from 'react'
import "./Header.css";
import Navbar from '../../Components/Navbar';



export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">   
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="mt-5 py-5 ">
                            <h5 className="">Hello,</h5>
                            <h1 className="fw-bold ">Adam Zakob</h1>
                            <h5 className="mb-5 mt-4">a freelance UX Designer</h5>
                            <button className="btn text-white px-5 rounded-pill">
                                Let's Talk
                            </button>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <img src="person1.png" alt="" className="person1 w-100" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
