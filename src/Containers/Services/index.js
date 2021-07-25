import React, { Component } from 'react';
import { FaMobile, FaMobileAlt } from 'react-icons/fa';
import "./Services.css";
import AllTitles from '../../Components/AllTitles';


const data = [
    {
        name: "UX Research",
        text: "New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.",

    },
    {
        name: "UX Research",
        text: "",

    },
]

export default class Services extends Component {

    render() {
        return (
            <div className="container">
                <AllTitles title="What  actually I love to do" subtitle="Services" />
                <div className="row mt-5 mb-5">
                    <div className="col-md-6 col-lg-4 p-3 px-5">
                        <div className="d-flex">
                            <div className="bg-primary px-3 py-2 rounded-circle">
                                <FaMobileAlt className=" p-0 text-white" />
                            </div>
                            <h4 className="ms-3 mb-3">UX Research</h4>
                        </div>
                        <p className="mt-3">New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.</p>
                    </div>
                    <div className="col-md-6 col-lg-4 p-3 px-5">
                        <div className="d-flex">
                            <div className="bg-primary px-3 py-2 rounded-circle">
                                <FaMobileAlt className=" p-0 text-white" />
                            </div>
                            <h4 className="ms-3 mb-3">Brand Design</h4>
                        </div>
                        <p className="mt-3">New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.</p>
                    </div>
                    <div className="col-md-6 col-lg-4 p-3 px-5">
                        <div className="d-flex">
                            <div className="bg-primary px-3 py-2 rounded-circle">
                                <FaMobileAlt className=" p-0 text-white" />
                            </div>
                            <h4 className="ms-3 mb-3">Web Development</h4>
                        </div>
                        <p className="mt-3">New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.</p>
                    </div>


                </div>
            </div >
        )
    }
}