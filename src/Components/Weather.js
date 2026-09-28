import React, { Component } from 'react'

const Weather = (props) => {
    return (
        <div className='frmw1'>
            {
                props.country && <div>Country: <span>{props.country}</span></div>
            }
            {
                props.city && <div>City: <span>{props.city}</span></div>
            }
            {
                props.temp && <div>Temp: <span>{props.temp}</span></div>
            }
            {
                props.error && <div>Error: <span>{props.error}</span></div>
            }
        </div>
    )
}

export default Weather