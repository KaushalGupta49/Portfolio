"use client"
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Mousewheel, Pagination, Navigation } from 'swiper/modules';

export default function Carousel(props) {
    const getCerticates = (item, index) => {
        return (
          <SwiperSlide key={index} className='mb-5 mt-10'>
            <a href={item.url}>
              <Image
                height={500}
                quality={90}
                src={item.img}
                alt='certificate'
                className='mx-auto'
              />
            </a>
          </SwiperSlide>
        );
    };

    return (
        <Swiper
            mousewheel={props.mousewheel}
            direction={'horizontal'}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            centeredSlides={true}
            navigation={true}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }}
            pagination={{
                dynamicBullets: true,
                clickable: true,
            }}
            modules={[Autoplay, Mousewheel, Pagination, Navigation]}
            className="mySwiper"
        >
            {props.certificates.map(getCerticates)}
        </Swiper>
    );
}
