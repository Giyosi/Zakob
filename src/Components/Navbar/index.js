import React, { Component } from 'react'
import "./Navbar.css";
import { FaBars, FaFontAwesome, FaFonticons, } from "react-icons/fa";


export default class Navbar extends Component {

    state = { hideHeader: true }

    toggleHeader = () => {
        this.setState((state) => {
            console.log(state);
            return { hideHeader: !state.hideHeader }
        })
    }

    render() {
        return (
            <div>
                <div className="container py-3 mt-3 d-flex flex-wrap justify-content-between">
                    <div className="d-lg-flex align-items-center ">
                        <img src="logo.svg" className="logo" alt="" />
                        <ul className="d-none d-lg-flex  mb-0 mx-5" >
                            <li><a href="" className="text-dark fw-bold me-5">About</a></li>
                            <li><a href="" className="text-dark fw-bold me-5">Services</a></li>
                            <li><a href="" className="text-dark fw-bold me-5">Works</a></li>
                            <li><a href="" className="text-dark fw-bold me-5">Blog</a></li>
                        </ul>
                    </div>
                    <div className="d-block  d-lg-none d-flex justify-content-end">
                        <button className="btn bars border-0 rounded-circle bg-light shadow px-3 py-2" onClick={this.toggleHeader}>
                            <FaBars className="" />
                        </button>
                    </div>
                    <div className={`w-100 ${this.state.hideHeader && "hide-header"  || ""}`}>
                        <ul className="d-block d-lg-none text-center mt-4" >
                            <li className="my-4"><a href="" className="text-dark fw-bold">About</a></li>
                            <li className="my-4"><a href="" className="text-dark fw-bold">Services</a></li>
                            <li className="my-4"><a href="" className="text-dark fw-bold">Works</a></li>
                            <li className="my-4"><a href="" className="text-dark fw-bold">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
