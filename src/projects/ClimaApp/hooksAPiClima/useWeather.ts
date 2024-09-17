import axios from 'axios'
// import {object, string, number, InferOutput, parse } from 'valibot'
import { SearchTypes } from '../types'
import {z} from 'zod'
import { useMemo, useState } from 'react'



//Type Ward o Assertion
// function isWeatherResponse( weather : unknown): weather is Weather {
//     return (
//         Boolean(weather) &&
//         typeof weather === 'object' && 
//         typeof(weather as Weather).name ===  'string' &&
//         typeof(weather as Weather).main.temp === 'number' &&
//         typeof(weather as Weather).main.temp_max === 'number'&&
//         typeof(weather as Weather).main.temp_min === 'number'
//     )
// }

//Zod
const Weather = z.object({
    name : z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number(),
    })  
})

export type Weather = z.infer<typeof Weather>


//Valibot
// const WeatherSchema = object({
//     name: string(),
//     main: object({
//         temp: number(),
//         temp_max: number(),
//         temp_min: number()
//     })
// })

// type Weather = InferOutput<typeof WeatherSchema>




export default function useWeather()  {

    const [weather, setWeather] = useState<Weather>({
        name:'',
        main: {
            temp: 0,
            temp_max:0,
            temp_min:0
        }
    });

    const [loading, setLoading]  = useState(false);
    const fetchWeather = async (search : SearchTypes) => {
        const apId = import.meta.env.VITE_API_KEY
        setLoading(true)
        try {
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apId}`
            const {data} = await axios(geoUrl)
            const lat = data[0].lat
            const lon = data[0].lon

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apId}`
            
            //Type wards 
          
            // console.log(weatherResult.temp)
            // console.log(weatherResult.name)
            // const result = isWeatherResponse(weatherResult)
            // console.log(result)
            // if(result){
            //     console.log(weatherResult.name)
            // } else {
            //     console.log('Respuest mal formada')
            // }

          
            const { data : weatherResult } = await axios(weatherUrl)
            //Zod
            const result = Weather.safeParse(weatherResult)
            if(result.success) {
                setWeather(result.data)
            }

            //Valibot
            // const result = parse(WeatherSchema, weatherResult)
            // if(result){
            //     console.log(result.name)
            // }

            
        } catch (error) {
            console.log(error, 'hubo este error en el fetch')
        } finally {
            setLoading(false)
        }
    }

    const hasWeatherData = useMemo(() => weather.name, [weather])

    return {
        weather,
        fetchWeather,
        hasWeatherData,
        loading
    }
}