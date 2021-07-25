import React, { Component } from 'react';
import { FaArrowRight, FaBasketballBall, FaInstagram, FaLinkedin } from 'react-icons/fa';
import AllTitles from '../../Components/AllTitles';
import "./Contact.css";

export default class Contact extends Component {
    render() {
        return (
            <div className="container py-5">
                <AllTitles title="Let me know if you want to talk about a potential collaboration.I'm available for freelance work." subtitle="Contact Me" exp="infoname@mail.com 👉" />
                <input type="text" placeholder="What’s your name?" className="input-group form-control-lg border-0 border-bottom mb-3" />
                <input type="text" placeholder="Your email" className="input-group form-control-lg border-0 border-bottom mb-3" />
                <input type="text" placeholder="Tell me about your project?" className="input-group form-control-lg border-0 border-bottom mb-3" />
                <div className="d-flex justify-content-between">
                    <button className="btn text-white rounded-pill px-4 py-2 mt-3">Get a Quote</button>
                    <div className="">
                        <FaArrowRight className="iconca" />
                    </div>
                </div>
                <h1 className="fw-bold text-center">Let’s be Friends</h1>
                <div className=" text-center">
                    <FaBasketballBall className="icons me-2" />
                    <FaInstagram className="icons me-2" />
                    <FaLinkedin className="icons me-2" />
                </div>
            </div>
        )
    }
}
