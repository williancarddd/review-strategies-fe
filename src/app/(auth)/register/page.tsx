
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="max-w-md w-full space-y-8">
      <h2 className="text-3xl font-bold">Registrar</h2>
      <p className="text-sm text-gray-400">Crie uma nova conta</p>
      jaja
      <div className="mt-8 self-center">
        <Link href="/" className="text-sm text-indigo-500 hover:text-indigo-400">
          Voltar à página principal
        </Link>
      </div>
    </div>
  );
}
