import React, { Component } from 'react';
import AllTitles from '../../Components/AllTitles';
import "./Portfolio.css";


export default class Portfolio extends Component {
    render() {
        return (<div className="port">
            <div className="container">
                <AllTitles title="All Creative Projects" subtitle="Portfolio" exp="Explore more 👉" />
                <div className="row">
                    <div className="col-md-6">
                        <img src="portfolio1.png" alt="" className="w-100" />
                    </div>
                    <div className="col-md-6">
                        <img src="portfolio2.png" alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
