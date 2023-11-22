'use client'

export default function Client({name, region, city }) {
  console.log('🚀 ~ file: client.tsx:4 ~ city:', city);
  console.log('🚀 ~ file: client.tsx:4 ~ region:', region);
  console.log('🚀 ~ file: client.tsx:4 ~ name:', name);
  
  return (
    <section>
      <p>{name}</p>
      <p>{region}</p>
      <p>{city}</p>
    </section>
  )
}