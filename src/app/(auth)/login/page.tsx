import { LoginForm } from "@/components/Login/login-form";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="max-w-md w-full space-y-8  p-8 rounded-lg shadow-md bg-gray-200">
        <div className="flex flex-col items-center">
          <Image src="/Herman.png" width={80} height={80} alt="Logo" className="mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Faça login com a sua conta.</h2>
        </div>
        <LoginForm />
         {/* Link para registrar */}
        <div className="flex justify-center mt-4">
          <Link href="/register" className="text-sm text-purple-500 hover:underline flex justify-center items-center border border-purple-500 py-2 px-4 rounded-full">
            Não tem plano? Assine Agora
          </Link>
        </div>
      </div>
    </div>
  );
}