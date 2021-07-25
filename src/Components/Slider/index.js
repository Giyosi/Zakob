
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./Slider.css";


// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper/core';
import { FaQuoteLeft } from "react-icons/fa";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);


const data = [
    {
        com:"Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
        img:"https://www.theglobeandmail.com/resizer/a1tsouRgbsPGVK8OvdFYJqxNhEo=/4415x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/5HSZVXDII5BRRHH4S6KE4WZ7RE.jpg",
        name:"Donald Trump",
        job:"President"
    },
    {
        com:"Dollar sit amet consectetur adipisicing elit. Officia repudiandae quod dolor quam provident explicabo tempora maxime quo velit esse? At possimus dolor dolore sit, corporis dicta porro iusto! Omnis!",
        img:"https://api.time.com/wp-content/uploads/2019/12/time-person-of-the-year-joe-biden-portrait.jpg",
        name:"Joe Biden",
        job:"President"
    },
    {
        com:"Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
        img:"https://sun9-62.userapi.com/s/v1/if1/AaqNeUStszEOYmTZLfSyi7RnOOairQ2mIaWL3A5f84oQ_ihdT1saoilgFtQDZnssKTrdpCKR.jpg?size=200x0&quality=96&crop=3,56,712,712&ava=1",
        name:"Elmurod Haqnazarov",
        job:"Bloger"
    },
    {
        com:"Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCNCz1irsT0PPcjBWAqwwVT6rS9cDOd_dhGFhyGTQNtMnV-aoyYDIBmfYkryRwJiLiEY&usqp=CAU",
        name:"Keanu Reeves",
        job:"Actor"
    },
]

export default function Slider() {



    return (
        <>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true} loopFillGroupWithBlank={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true
            }} pagination={true} className="mySwiper">
                {
                    data.map((person, index) => {
                        return (<SwiperSlide className="p-3 rounded">
                            <FaQuoteLeft className="icon d-flex justify-content-center align-items-center " />
                            <p className="text-center my-5">{person.com}</p>
                            <img src={person.img} alt="" className="rounded" />
                            <p className="fw-bold mb-0 text-center mt-3">{person.name}</p>
                            <p className="text-center">{person.job}</p>
                            
                        </SwiperSlide>)
                    })
                }


            </Swiper>
        </>
    )
}