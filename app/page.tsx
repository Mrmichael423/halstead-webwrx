import Client from './client';
import { Suspense } from 'react';

const fetchWeatherData = async (latitude: string, longitude:  string): Promise<any> => {
  if(latitude && longitude) {

    const res = await fetch(`https://api.open-meteo.com/v1/gfs?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=America%2FNew_York`);
    return res.json()

  }
}

export default async function Home({searchParams}: {searchParams: any}) {
  const data = await fetchWeatherData(searchParams.latitude, searchParams.longitude)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Suspense fallback={<p>Loading feed...</p>}> */}
        <Client searchParams={searchParams} data={data}/>
      {/* </Suspense> */}
    </main>
  )
}
