import Head from 'next/head'
import styles from '../../styles/Stil.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: { fremens: data }
    }
}

function Stil({ fremens }) {
    return (
        <>
            <Head>
                <title>Stil's List - La liste des ...</title>
                <meta name="keywords" content="stil, leader des fremens"></meta>
            </Head>
            <div>
                <h1>Fremens morts au combat</h1>
                {fremens.map(fremen =>
                    <Link
                        key={fremen.id}
                        href={`/stil/${fremen.id}`}>
                        <a className={styles.single}>
                            <h3>{fremen.name}</h3>
                        </a>
                    </Link>
                )}
            </div>
        </>
    )
}
export default Stil;