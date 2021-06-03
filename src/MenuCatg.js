import React from 'react';

const MenuCatg = ({ filterItem, catItem }) => {
    return (
        <>
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    {
                        catItem.map((currE, idx) => {
                            return <button key={idx} className="btn btn-warning" onClick={() => filterItem(currE)}>{currE}</button>
                        })
                    }
                    {/* <button className="btn btn-warning" onClick={() => filterItem('breakfast')}>Breakfast</button>
                    <button className="btn btn-warning" onClick={() => filterItem('lunch')}>Lunch</button>
                    <button className="btn btn-warning" onClick={() => filterItem('evening')}>Snacks</button>
                    <button className="btn btn-warning" onClick={() => filterItem('dinner')}>Dinner</button>
                    <button className="btn btn-warning" onClick={() => setitem(Menu)}>All</button> */}
                </div>
            </div>
        </>
    );
};

export default MenuCatg;