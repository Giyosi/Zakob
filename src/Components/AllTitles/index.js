import React, { Component } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import "./AllTitles.css";


export default class AllTitles extends Component {

    // constructor(props) {
    //     super(props);

    //     console.log(props);

    //     this.state = props;
    // }

    render() {
        return (
            <div className="container my-5 ">
                <p className="ptext">{this.props.subtitle}</p>
                <div className="chiziq mt-2 mb-3"></div>
                <div className="d-flex justify-content-between">
                    <h2 className="fw-bold">{this.props.title}</h2>
                    <div className="">
                        <h5 className="me-3">{this.props.exp}</h5>
                    </div>
                </div>
            </div>
        )
    }
}
