import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Error() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (

        <div className="not-found">
            <h1>Oops ?... </h1>
            <h2>404 - Cette page ne peux pas être trouvée - 404</h2>
            <p>Retourner à la <Link href="/"><a>page d'acceuil</a></Link></p>
        </div>
    );
}

export default Error;