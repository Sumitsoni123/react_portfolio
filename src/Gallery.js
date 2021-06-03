import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Menu from './Menu';
import Card from './Card';
import MenuCatg from './MenuCatg';

const allCategory = ['All', ...new Set(Menu.map((ele) => ele.category))];
//console.log(allCategory);

const Gallery = () => {
    const [item, setitem] = useState(Menu);
    const [catItem, setcatItem] = useState(allCategory);

    const filterItem = (catg) => {
        if (catg === 'all') {
            setitem(Menu);
            return;
        }

        const data = Menu.filter((currItem) => {
            return catg === currItem.category;
        });
        setitem(data);
    };
    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Food</h1>
            <hr />

            <MenuCatg filterItem={filterItem} catItem={catItem} />

            <div className="mt-5 menu-items container-fluid">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="my-5 row">
                            {
                                item.map((elem) => {
                                    const { id, name, image, description, price } = elem;

                                    return <Card
                                        key={id}
                                        name={name}
                                        src={image}
                                        description={description}
                                        price={price}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Gallery;
