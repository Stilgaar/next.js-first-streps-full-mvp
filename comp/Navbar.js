import Link from 'next/link'
import Image from 'next/image' // LAZY LOADING !

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Image src="/unnamed.png" alt="Logo en attendant" width={70} height={60} />
            </div>
            <Link href="/"><a>Acceuil</a></Link>
            <Link href="/about"><a>A propos</a></Link>
            <Link href="/stil/"><a>Liste des Fremens</a></Link>
        </nav>
    );
}
export default Navbar;