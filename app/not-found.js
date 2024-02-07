async function getData() {
  const res = await fetch(`https://kounter.vercel.app/hit/${process.env.COUNT_ID}`, { cache: "no-store" })
  return res.json()
}

export default async function NotFound() {
  const data = await getData()
  return (
    <>
      <h1>Hit</h1>
      <p>The API has been hit {data.count} times</p>
    </>
  )
}
