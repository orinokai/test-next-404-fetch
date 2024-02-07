async function getData() {
  const res = await fetch(`https://strangerthings-quotes.vercel.app/api/quotes`)
  return res.json()
}

const dynamic = 'force-dynamic'

export default async function Page() {
  const data = await getData()

  return (
    <>
      <h1>
        Hello, Statically Rendered Server Component
      </h1>
      <dl>
        <dt>Quote</dt>
        <dd>{data[0].quote}</dd>
        <dt>Time</dt>
        <dd>{Date.now()}</dd>
      </dl>
    </>
  )
}
