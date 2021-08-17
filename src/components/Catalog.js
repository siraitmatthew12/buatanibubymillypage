import React from 'react'
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderData'
import "./Catalog.css"

function Catalog() {
    return( 
    <div className="catalog-container">
        <div className="catalog-title">
            <h1>Just Keep Scrolling...</h1>
            <h3>You might end up finding the things you want</h3>
        </div>
        <ImageSlider slides={SliderData} className="slider"/>
        <div className="featured">
        <h1 className="catalog">Featured Products</h1>
        <h3 className="catalog-exp">Look at here for some explanation</h3>
        <div className="picall">
            <div className="pic12">
            <div className="pic2">
                    <h2>Cheese Cake</h2>
                    <p>Classic Cheese Cake with thick hair of cheese and the taste of sweet buttercream.<br></br> 475k | 20cm
                    <br></br>375k | 18cm.</p>
                </div>
                <div></div>
                <div className="pic1">
                    <img src="images/Cheesecakehigh.svg" alt="" />
                </div>
                
                
            </div>
            <div className="pic12">
                <div className="pic2">
                    <h2>Classic Bomboloni</h2>
                    <p>Classic Doughnuts with 4 different kinds of flavours and icing sugar on top.<br></br>
                    Price : 180k | 12 pcs.</p>
                </div>
                <div></div>
                <div className="pic1">
                    <img src="images/Doughnut.svg" alt="" />
                </div>
            </div>
            
            <div className="pic12">
            <div className="pic2">
                    <h2>Sweet Marble Cake</h2>
                    <p>Classic Marblecake 
                        with premium 
                        ingredients 
                        and valrhona chocolate.<br></br>Price : 275k.</p>
                </div>
                <div></div>
                <div className="pic1">
                    <img src="images/marble.svg" alt="" />
                </div>
                
                
            </div>
            <div className="pic12">
                <div className="pic2">
                    <h2>Maddy's Browniio</h2>
                    <p>Classic Brownies 
                        with premium 
                        ingredients 
                        and cute cups and sealing.
                        <br></br>Price : 70k | cup.</p>
                </div>
                <div></div>
                <div className="pic1">
                    <img src="images/Brownies.svg" alt="" />
                </div>
                </div>

                <div className="pic12">
                <div className="pic2">
                    <h2>London Fog</h2>
                    <p>Classic London Fog Cake with extra Hersheys or cherry on Top.
                    <br></br>Price : 800k.
                    </p>
                </div>
                <div></div>
                <div className="pic1">
                    <img src="images/londonfog1.svg" alt="" />
                </div>    
                </div>

                <div className="pic12">
                <div className="pic2">
                    <h2>Mango Coconut</h2>
                    <p>A perfect and delightful dessert as your freshner in hot or cold weather.
                    <br></br>Price : 85k | box.
                    </p>
                </div>
                <div></div>
                <div className="pic1">
                    <img src="images/mango1.svg" alt="" />
                </div>    
                </div>

                <div className="pic12">
                <div className="pic2">
                    <h2>Mocha Nougat</h2>
                    <p>Has the same size as cheese cake, but this contains more variation. You can choose between sprinkles only, half, or nut only.
                    <br></br>500k | 20cm
                    <br></br>400k | 18cm.
                    <br></br>*These price haven't include rum
                    </p>
                </div>
                <div></div>
                <div className="pic1">
                    <img src="images/nougat1.svg" alt="" />
                </div>    
                </div>
    
    </div>
    </div>
    </div>
        )
}

export default Catalog
