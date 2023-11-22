import Client from './client';

const fetchWeatherData = async (lat: any, lon: any): Promise<any> => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e507ab1b58139c0750cc3127632434b4`)
  return res.json()
}

export default async function Home({searchParams}: {searchParams: any}) {
  const data = await fetchWeatherData(searchParams.latitude, searchParams.longitude)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Client searchParams={searchParams} data={data}/>
    </main>
  )
}
