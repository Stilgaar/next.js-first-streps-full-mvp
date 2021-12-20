export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    const paths = data.map(fremen => {

        return {
            params: {
                id: fremen.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()
    return {
        props: { fremen: data }
    }
}

function Details({ fremen }) {
    return (
        <div>
            <h1>{fremen.name}</h1>
            <p>{fremen.email}</p>
            <p>{fremen.website}</p>
            <p>{fremen.address.city}</p>
        </div>

    );
}

export default Details;