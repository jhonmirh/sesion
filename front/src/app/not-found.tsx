import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center bg-White">
      <h1 className="text-[2.5rem] font-bold mb-4">Página no Encontrada</h1>
      <p className="text-lg mb-6">El recurso que buscas no está disponible.</p>
      <Link href="/">
        <button >
          Volver al Inicio
        </button>
      </Link>
    </main>
  );
}
