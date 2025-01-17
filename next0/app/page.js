import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Página Inicial</h1>
            <Link href="/novarota">Ir para Nova Rota</Link>
        </div>
    );
}
