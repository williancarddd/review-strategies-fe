import { LoginForm } from "@/components/Login/login-form";
import Link from "next/link";

export default function LoginPage() {
  
  return (
    <div className="max-w-md w-full space-y-8">
      <h2 className="text-3xl font-bold">Login</h2>
      <p className="text-sm text-gray-400">Entre com seu usuário e senha</p>
      <LoginForm />
      <div className="mt-8 self-center">
        <Link href="/register" className="text-sm text-indigo-500 hover:text-indigo-400">
          Não tem uma conta? Registre-se
        </Link>
      </div>
      <div className="mt-8 self-center">
        <Link href="/" className="text-sm text-indigo-500 hover:text-indigo-400">
          Voltar à página principal
        </Link>
      </div>
    </div>
  );
}
