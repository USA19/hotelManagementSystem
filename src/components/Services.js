import React, { Component } from 'react';
import Title from './Title';
import {FaBeer,FaShuttleVan,FaHiking,FaCocktail} from 'react-icons/fa';

export class Services extends Component {
    state={
        services:[
            {
                icons:<FaCocktail/>,
                title:'free cocktails',
                info:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used',
            },
            {
                icons:<FaHiking/>,
                title:'Endless Hiking',
                info:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used',
            },
            {
                icons:<FaShuttleVan/>,
                title:'free Shuttle Services',
                info:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used',
            },
            {
                icons:<FaBeer/>,
                title:'Strongest Beer',
                info:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used',
            }
        ]
    }
    render() {
        return (
            <section className="services">
            <Title title="services"/>
            <div className="services-center">
                {
                    this.state.services.map( (service,index)=>{
                        return( <article key={index} className="service">
                        <span>{service.icons}</span>
                        <h6>{service.title}</h6>
                        <p>{service.info}</p>
                        </article>
                        )
                    })
                }
            </div>
            </section>
        )
    }
}


