import React from 'react';
//import '../../../../bower_components/Swiper/dist/css/swiper.min.css';
import Swiper from '../../../../bower_components/Swiper/dist/js/swiper.jquery.umd.min.js';
import './carousel.scss';

export default class Carousel extends React.Component {
    constructor() {
        super();
        this.swiper = null;

    }

    componentDidMount() {
        this.swiper = new Swiper('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            // Disable preloading of all images
            preloadImages: false,
            // Enable lazy loading
            lazyLoading: true
        });
    }

    componentWillUnmount() {
        this.swiper.destroy();
    }

    render() {
        return (
            <div className="shopup_carousel">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            {/*Required swiper-lazy class and image source specified in data-src attribute*/}
                            <img data-src="http://lorempixel.com/1600/1200/nature/1" className="swiper-lazy"/>
                            {/*  Preloader image  */}
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                        <div className="swiper-slide">
                            <img data-src="http://lorempixel.com/1600/1200/nature/2" className="swiper-lazy"/>

                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                        <div className="swiper-slide">
                            <img data-src="http://lorempixel.com/1600/1200/nature/3" className="swiper-lazy"/>

                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                        <div className="swiper-slide">
                            <img data-src="http://lorempixel.com/1600/1200/nature/4" className="swiper-lazy"/>

                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                        <div className="swiper-slide">
                            <img data-src="http://lorempixel.com/1600/1200/nature/5" className="swiper-lazy"/>

                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                        <div className="swiper-slide">
                            <img data-src="http://lorempixel.com/1600/1200/nature/6" className="swiper-lazy"/>

                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>

                    </div>
                    {/* Add Pagination */}
                    <div className="swiper-pagination swiper-pagination-white"></div>
                    {/* Navigation */}
                    <div className="swiper-button-next swiper-button-white"></div>
                    <div className="swiper-button-prev swiper-button-white"></div>
                </div>
            </div>
        );
    }
}