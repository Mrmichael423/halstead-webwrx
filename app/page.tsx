import Client from './client';

const fetchWeatherData = async (latitude: any, longitude: any): Promise<any> => {
  if(latitude && longitude) {

    const res = await fetch(`https://api.open-meteo.com/v1/gfs?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,rain,snowfall&hourly=temperature_2m&temperature_unit=fahrenheit`);
    return res.json()

  }
}

export default async function Home({searchParams}: {searchParams: any}) {
  const data = await fetchWeatherData(searchParams.latitude, searchParams.longitude)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Client searchParams={searchParams} data={data}/>
    </main>
  )
}
