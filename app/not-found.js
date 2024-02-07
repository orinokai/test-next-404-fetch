async function getData() {
  console.log('fetching data')
  const res = await fetch(`https://eoeucbdwqdt3ttl.m.pipedream.net`, { next: { revalidate: 60 } })
  return res.json()
}

export default async function NotFound() {
  console.log('rendering not found')
  const data = await getData()
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>{data[0].quote}</p>
    </div>
  )
}
