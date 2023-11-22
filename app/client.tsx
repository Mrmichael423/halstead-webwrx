'use client'

export default function Client({searchParams}: {searchParams: any}) {  
  return (
    <section>
      <p>{searchParams.country}</p>
      <p>{searchParams.region}</p>
      <p>{searchParams.city}</p>
    </section>
  )
}