import { useParams } from "react-router-dom"

export default function Tutorial() {
    const { Tutorial } = useParams()
    
    return (
        <div className="tutorials">
            <h2>
                Route Parameters Tutorial
            </h2>
            <h2> { Tutorial }</h2>
        </div>
    )
}


export const tutorialsloader = async ({ params }) => {
    const { Tutorial } = params 

    const res = await fetch('http://localhost:3000/course/' + Tutorial)
    return res.json
}