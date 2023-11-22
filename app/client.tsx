'use client'

export default function Client({searchParams, data}: {searchParams: any, data:any}) {  
  return (
    <section>
      <p>{JSON.stringify(data)}</p>
      <p>{searchParams.country}</p>
      <p>{searchParams.region}</p>
      <p>{searchParams.city}</p>
    </section>
  )
}