import { useParams } from "react-router-dom";

export default function PhotoDetails() {

    const { id } = useParams();
    return (
        <div>
            <h1>Photo Details {id}</h1>
        </div>
    )
}