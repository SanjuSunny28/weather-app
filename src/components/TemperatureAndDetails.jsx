import React from 'react'
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { GiWindTurbine } from "react-icons/gi";
import { BsFillSunFill,BsSunriseFill,BsSunsetFill } from "react-icons/bs"; 
import { WiSunset } from "react-icons/wi"; 
import { formatToLocalTime, iconUrlFromCode } from '../services/WeatherServices';



const TemperatureAndDetails = ({weather:{details,icon,temp,temp_min,temp_max,
    sunrise,sunset,speed,humidity,feels_like,timezone
}}) => {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>  
            <p>{details}</p>
        </div>

        <div className='flex items-center justify-between text-white py-3'>
            <img 
                src={iconUrlFromCode(icon)}
                alt=""
                className='w-20'
            />
            <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
            
            <div className='flex flex-col space-y-2'>

                <div className='flex font-light text-sm items-center justify-center'>
                    <CiTempHigh size={18} className='mr-1'/>
                    Real Feel:
                    <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <WiHumidity size={18} className='mr-1'/>
                    Humidity:
                    <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <GiWindTurbine size={18} className='mr-1'/>
                    Wind:
                    <span className='font-medium ml-1'>{`${speed.toFixed()} km/hr`}</span>
                </div>

            </div>



        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <BsFillSunFill/>
            <p className='font-light'>Rise:
                <span className='font-medium ml-1'>
                    {formatToLocalTime(sunrise ,timezone ,"hh:mm a")}
                </span>
            </p>
            <p className='font-light'>|</p>

            <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <WiSunset/>
            <p className='font-light'>Set:
                <span className='font-medium ml-1'>
                {formatToLocalTime(sunset ,timezone ,"hh:mm a")}
                </span>
            </p>
            <p className='font-light'>|</p>

        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <BsSunriseFill/>
            <p className='font-light'>High:
                <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span>
            </p>
            <p className='font-light'>|</p>

        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <BsSunsetFill/>
            <p className='font-light'>Low:
                <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span>
            </p>
            

        </div>
        </div>

        


    </div>
  )
}

export default TemperatureAndDetails