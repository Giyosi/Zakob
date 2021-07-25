import React, { Component } from 'react';
import AllTitles from '../../Components/AllTitles';
import "./Blog.css";


export default class Blog extends Component {
    render() {
        return (
            <div className="container mt-5 py-5">
                <div className="row d-flex ">
                    <div className="col-md-6 col-lg-3">
                        <p className="ptext">Blog</p>
                        <div className="chiziq mt-2 mb-3"></div>
                        <div className="d-flex justify-content-between">
                            <h2 className="fw-bold">Get News Feeds</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 car">
                        <img src="Rectangle1.png" alt="" className="w-100 background" />
                        <p className="my-4 ptext">20 June/2020</p>
                        <p className="fw-bold">Technology is evolving rapidly. New devices and applications.</p>
                    </div>
                    <div className="col-md-6 col-lg-3 px-2 mb-1">
                        <div className="d-flex text">
                            <img src="Rectangle2.png" alt="" className="card" />
                            <div className="p-3 text-area text-white">
                                <p>20 June/2020</p>
                                <h5 className="fw-bold">New devices and applications come to the market.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 px-2 mt-1">
                        <div className="d-flex  text">
                            <img src="Rectangle3.png" alt="" className="card" />
                            <div className="p-3 text-area text-white">
                                <p className="">20 June/2020</p>
                                <h5 className="fw-bold">Every day providing solutions to problems.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
