import React from 'react'
import './Services.css'
import Services_Data from '../../assest/Services_data'
import arrow_icon from "../../assest/arrow-icon.png";


const Services=()=> {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
        </div>
        <div className="services-container">
            {Services_Data.map((services,index)=>{
                return <div key={index} className="services-formate">
                    <h3>{services.s_no}</h3>
                    <h2>{services.s_name}</h2>
                    <p>{services.s_desc}</p>
                    <div className='services-readmore'>
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services