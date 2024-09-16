import axios from 'axios'
import { SearchTypes } from '../types'


export default function useWeather()  {

    

    const fetchWeather = async (search : SearchTypes) => {

        const apId = import.meta.env.VITE_API_KEY
        
        try {
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apId}`
            const {data} = await axios(geoUrl)
            const lat = data[0].lat
            const lon = data[0].lon

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apId}`
            
            const { data : weatherResult } = await axios(weatherUrl)
            console.log(weatherResult)

            
        } catch (error) {
            console.log(error, 'hubo este error en el fetch')
        }
    }


    return {
        fetchWeather
    }
}