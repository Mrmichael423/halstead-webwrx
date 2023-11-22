import Client from './client';

const fetchWeatherData = async (latitude: any, longitude: any): Promise<any> => {
  if(latitude && longitude) {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}`);
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
