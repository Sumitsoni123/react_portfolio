import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-3">
                <div className="row Item-inside">
                    {/*for img */}
                    <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img src={props.src} alt="mypic" className="img-fluid" />
                    </div>

                    {/* menu item description */}
                    <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                            <h1>{props.name}</h1>
                            <p>{props.description}</p>
                        </div>
                        <div className="menu-price-book">
                            <div className="price-book-divide d-flex justify-content-between">
                                <h2>{props.price}</h2>
                                <a href="#">
                                    <button className="btn btn-primary">Order</button>
                                </a>
                            </div>
                            <p>* Prices may vary on selected date.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;