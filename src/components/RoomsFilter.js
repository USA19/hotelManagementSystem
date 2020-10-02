import React,{useContext} from 'react';
import {RoomContext} from '../context';
import Title from './Title';
// get all unique values
const getUnique=(items,value)=>{
    return[...new Set(items.map(item=>item[value]))];
}

export default function RoomsFilter({rooms}) {
    const context=useContext(RoomContext);
    const{
        handleChange,
        type,capacity,
        price,minPrice,maxPrice,
        minSize,maxSize,
        breakfast,pets
    }=context;


    // get unique type
    let  types=getUnique(rooms,'type');

    // add all

    types=['all',...types];

    // map to jsx
    types=types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    });
    //capacity
    let people =getUnique(rooms,'capacity');
    people=people.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })


    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        className="form-control"
                        onChange={handleChange}
                        value={type}
                    >
                    {types}
                    </select>
                </div>

                {/* guests */}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        className="form-control"
                        onChange={handleChange}
                        value={capacity}
                    >
                    {people}
                    </select>
                </div>
                {/* price Slider */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" max={maxPrice} min={minPrice} name="price" id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>

                {/* Room-----size */}
                <div className="form-group">
                    <label htmlFor="size">size</label>
                    <div className="size-inputs">
                        <input type="number" name="min-size" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                        <input type="number" name="max-size" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                    </div>
                </div>


            {/* extras */}

            <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                        
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                        
                    </div>
                </div>
            </form>
        </section>
    )
}
