import React from 'react'
import "./Carousel.css"
function Carousel() {
    return (
        
                <div className="container">
                    {/* <br/> */}
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            {/* <!-- Indicators --> */}
                            {/* <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                <li data-target="#myCarousel" data-slide-to="3"></li>
                            </ol> */}

                            {/* <!-- Wrapper for slides --> */}
                            <div className="carousel-inner" role="listbox">

                                <div className="item ">
                            <img src="https://m.media-amazon.com/images/I/71MDYgQkFEL._SX3000_.jpg" alt="" />
                                        
                                </div>

                                <div className="item active">
                            <img src="https://m.media-amazon.com/images/I/61W7qUiSFkL._SX3000_.jpg" alt="" />
                                       
                                </div>

                                <div className="item">
                            <img src="https://m.media-amazon.com/images/I/61c2xoR88PL._SX3000_.jpg" alt="" />
                                        
                                </div>

                                <div className="item">
                            <img src="https://m.media-amazon.com/images/I/716eXTG+aJL._SX3000_.jpg" alt="" />
                                        <div className="carousel-caption">
                                            <h3>Flowers</h3>
                                            <p>Beautiful flowers in Kolymbari, Crete.</p>
                                        </div>
                                </div>
                        <div className="item">
                        <img src="https://m.media-amazon.com/images/I/71izqO++I8L._SX3000_.jpg" alt="" />
                            
                        </div>
                        <div className="item">
                            <img src="https://m.media-amazon.com/images/I/71NPKVrRU0L._SX3000_.jpg" alt="" />
                            
                        </div>
                        <div className="item">
                            <img src="https://m.media-amazon.com/images/I/71Xpt00HezL._SX3000_.jpg" alt="" />
                            
                        </div>
                            </div>

                {/* <!-- Left and right controls --> */}
               
                            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                </div>

       
    )
}

export default Carousel
