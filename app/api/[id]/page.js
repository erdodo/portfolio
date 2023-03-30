export default function api({ params }) {
    return (
        <div>
            <h1>API</h1>
            <p>API: {params.id}</p>
        </div>
    )
}