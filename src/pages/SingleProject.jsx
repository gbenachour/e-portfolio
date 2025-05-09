import { useParams } from "react-router-dom"


export default function SingleProject() {
    const params = useParams()
    return (
        <h1>Project {params.id} here !</h1>
    )
}