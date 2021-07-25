import React, { Component } from 'react';
import "./Testimonials.css";
import AllTitles from "../../Components/AllTitles";
import Slider from '../../Components/Slider';




export default class Testimonials extends Component {
    render() {
        return (
            <div className="container mb-5">
                <AllTitles title="What People Says" subtitle="Testimonials" />
                <Slider />
            </div>
        )
    }
}
