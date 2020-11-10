import React from "react";
import Product from "./Product";

import bannerImg from "../images/amazon_banner.jpg";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={bannerImg} alt="" />
                <div className="home__row">
                    <Product
                        id="1"
                        title="Eloquent Javascript, 3rd Edition : A Modern Introduction to Programmings"
                        price={38.28}
                        image="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5932/9781593279509.jpg"
                        rating={4}
                    />
                    <Product
                        id="2"
                        title="JavaScript: The Good Parts"
                        price={23.28}
                        image="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5965/9780596517748.jpg"
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="3"
                        title="Clean Code : A Handbook of Agile Software Craftsmanship"
                        price={47.87}
                        image="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1323/9780132350884.jpg"
                        rating={5}
                    />
                    <Product
                        id="4"
                        title="Clean Architecture : A Craftsman's Guide to Software Structure and Design"
                        price={34.04}
                        image="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1344/9780134494166.jpg"
                        rating={4}
                    />
                    <Product
                        id="5"
                        title="Clean Coder, The : A Code of Conduct for Professional Programmers"
                        price={39.13}
                        image="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1370/9780137081073.jpg"
                        rating={2}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="6"
                        title="You Don't Know JS Yet : Full Collection"
                        price={129.99}
                        image="https://pbs.twimg.com/media/DYWNxpYVoAAMbyy.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
