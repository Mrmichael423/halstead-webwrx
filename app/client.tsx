'use client'
import {useState, useEffect} from 'react'
export default function Client({searchParams, data}: {searchParams: any, data:any}) {
  const [forecast, setForecast] = useState()   


  const dailyHighTemps = data.daily.temperature_2m_max
  const dailyLowTemps = data.daily.temperature_2m_min
  const days = data.daily.time;

  const getDayOfTheWeek = (day: string) => {
    const dateObject = new Date(day);
    // The getDay() method returns the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
    const dayOfWeek = dateObject.getDay() + 1;
    // You may want to convert the numeric representation of the day to a string
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return daysOfWeek[dayOfWeek] || 'Sunday';

  }

  useEffect(()=> {
    const SevenDayForecast = days.map((value:string, index:number) => ({
      days: value,
      highTemp: dailyHighTemps[index],
      lowTemp: dailyLowTemps[index]
    }))
    console.log('🚀 ~ file: client.tsx:29 ~ SevenDayForecast:', JSON.stringify(SevenDayForecast));
  
    setForecast(SevenDayForecast.slice(1))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])





  return (
    <section>
      <div>
        <p>Current weather for {searchParams.city}, {searchParams.region}</p>
        <p>Current Temp: {data.current.temperature_2m}</p>
        <p>Humidity: {data.current.relative_humidity_2m}</p>
        <p>Feels like: {data.current.apparent_temperature}</p>
        <p>High Temp: {data.daily.temperature_2m_max[0]}</p>
        <p>Low Temp: {data.daily.temperature_2m_min[0]}</p>
      </div>
      <div  className="flex min-h-screen flex-row items-center justify-between p-24">
        {forecast?.map((element:{ days: string, highTemp:string, lowTemp:string}, i:number) => {
          return (
          <div key={i}>
            <p>Day: {getDayOfTheWeek(element.days)}</p>
            <p>High Temp: {element.highTemp}</p>
            <p>Low Temp: {element.lowTemp}</p>
          </div>

          )
        })}
      </div>
    </section>
  )
}