'use client';

import Link from "next/link";

export default function PrivacyPolicySection() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Política de Privacidade</h1>

        <p className="mb-4">
          Bem-vindo à nossa Política de Privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais quando você utiliza nossa plataforma.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Informações que coletamos</h2>
        <p className="mb-4">
          Coletamos informações que você nos fornece diretamente, como quando você cria uma conta, preenche formulários, ou entra em contato conosco. As informações podem incluir:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Nome completo</li>
          <li>Email</li>
          <li>Informações de pagamento</li>
          <li>Dados demográficos</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">2. Como usamos suas informações</h2>
        <p className="mb-4">
          Usamos suas informações para:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Fornecer e manter nossos serviços</li>
          <li>Processar transações e enviar confirmações</li>
          <li>Responder a solicitações de atendimento ao cliente</li>
          <li>Enviar comunicações de marketing, quando permitido</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">3. Compartilhamento de informações</h2>
        <p className="mb-4">
          Não compartilhamos suas informações pessoais com terceiros, exceto nas seguintes circunstâncias:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Para processar transações financeiras (por exemplo, com serviços de pagamento como Stripe)</li>
          <li>Quando exigido por lei</li>
          <li>Para proteger os direitos e a segurança de nossos usuários</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">4. Segurança das informações</h2>
        <p className="mb-4">
          Tomamos medidas para proteger suas informações contra acesso não autorizado, uso ou divulgação. No entanto, nenhum sistema de segurança é impenetrável, e não podemos garantir a segurança completa das suas informações.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Seus direitos</h2>
        <p className="mb-4">
          Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Entre em contato conosco se precisar de assistência.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Alterações na Política de Privacidade</h2>
        <p className="mb-4">
          Podemos atualizar esta Política de Privacidade periodicamente. Avisaremos sobre quaisquer alterações significativas publicando a nova política em nosso site.
        </p>

        <p className="mb-4">
          Se você tiver alguma dúvida sobre nossa Política de Privacidade, entre em contato conosco pelo email: <a href="mailto:ReviseStrategies@outlook.com" className="text-blue-600 hover:underline">ReviseStrategies@outlook.com</a>.
        </p>
      </div>
      <Link href="/" className="block text-center text-blue-600 hover:underline mt-8">
        Voltar para a página inicial
      </Link>
    </section>
  );
}
