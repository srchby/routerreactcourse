import { Link, useLoaderData } from "react-router-dom"

export default function Database() {
    const database = useLoaderData
  return (
    <div className="database">
      {database.map(career => (
        <Link to='/' key={career.id}>
            <p>{career.title}</p>
        </Link>
      ))}
    </div>
  )
}

export const databaseLoader = async () => {
    const res = await fetch('http://localhost:3000/database')
    return  res.json()
}