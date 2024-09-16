
import Image from 'next/image';

export function LoginRightPanel() {
  return (
    <div className="hidden lg:flex flex-1 relative bg-gradient-to-r from-indigo-800 to-indigo-400">
      {/* Texto grande do lado direito */}
      <div className="absolute top-20 w-full text-center text-white p-12">
        <h1 className="text-5xl font-bold mb-6">A Organização é a Chave para o Seus Estudos</h1>
        <p className="text-lg font-light">Faça parte dessa comunidade e melhore a sua retenção de conteúdo</p>
      </div>

      {/* Imagem centralizada */}
      <div className="absolute bottom-0 left-0 right-0">
        <Image
          src={"/boysandlogin.png"}
          alt="Login Illustration"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}
