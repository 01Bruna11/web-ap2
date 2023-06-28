import React from 'react'

const Temperatura = () => {

    const celsiusParaFarenheit = (c) => {
        return (c*9 + 180) / 5
    }
    
    const FarenheitParaCelsius = (f) => {
        return (f*5 - 180) / 9
    }
    
    const kelvin = (k) => {
        return {
            celsius: k - 273.15,
            farenheit: celsiusParaFarenheit(k - 273.15)
        }
    }

    return (
        <div>
            <h1>Temperatura</h1>
            <h1>Celsius para Farenheit: {celsiusParaFarenheit(20)}</h1>
            <h1>Farenheit para Celsius: {FarenheitParaCelsius(68)}</h1>
            <h1>Kelvin para Celsius e Farenheit: {kelvin(273.15).celsius} e {kelvin(273.15).farenheit}</h1>
        </div>
    )
}

export default Temperatura
