import React, { Component } from 'react'
import "./Clients.css";
import AllTitles from '../../Components/AllTitles'
import { FaMedium, FaMicrosoft, FaPuzzlePiece, FaShopify, FaSlack } from 'react-icons/fa';

export default class Clients extends Component {
    render() {
        return (
            <div className="container p-4">
                <AllTitles title="Big DealWith" subtitle="Clients" />
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-2 brand1 text-center py-3 m-2 border-0">
                        <FaSlack className="icon" />
                        <p className="mt-2 mb-0">Slack</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 brand2 text-center py-3 m-2 border-0">
                        <FaMedium className="icon" />
                        <p className="mt-2 mb-0">Slack</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 brand3 text-center py-3 m-2 border-0">
                        <FaMicrosoft className="icon" />
                        <p className="mt-2 mb-0">Slack</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 brand4 text-center py-3 m-2 border-0">
                        <FaPuzzlePiece className="icon" />
                        <p className="mt-2 mb-0">Slack</p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 brand5 text-center py-3 m-2 border-0">
                        <FaShopify className="icon" />
                        <p className="mt-2 mb-0">Slack</p>
                    </div>
                </div>
            </div>
        )
    }
}
