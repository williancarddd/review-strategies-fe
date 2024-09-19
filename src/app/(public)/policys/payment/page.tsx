'use client';

import Link from "next/link";

export default function PaymentPolicySection() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Política de Pagamento</h1>

        <p className="mb-4">
          Agradecemos por escolher nossa plataforma. Queremos ser transparentes sobre o status atual de nosso desenvolvimento, e por isso, criamos esta política para esclarecer detalhes sobre os pagamentos e funcionalidades oferecidas. Nossa plataforma está atualmente em fase  <strong className="text-red-600">beta</strong> e funcionando como um <strong className="text-red-600">MVP</strong>.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Status Beta e Funcionalidades</h2>
        <p className="mb-4">
          Como estamos em fase de testes, nossa plataforma está recebendo constantemente novas funcionalidades e melhorias. Durante essa fase beta, é possível que algumas das funcionalidades mencionadas não estejam totalmente disponíveis ou funcionem de maneira limitada. Pedimos sua compreensão enquanto trabalhamos para trazer a melhor experiência possível.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Resolução de Problemas e Suporte</h2>
        <p className="mb-4">
          Caso você encontre alguma funcionalidade que não esteja funcionando conforme esperado ou não esteja disponível, pedimos que entre em contato com nosso suporte através do email: <a href="mailto:ReviseStrategies@outlook.com" className="text-blue-600 hover:underline">ReviseStrategies@outlook.com</a>.
        </p>
        <p className="mb-4">
          Nos comprometemos a analisar e corrigir qualquer problema relatado no prazo de <strong>2 semanas</strong> após o contato, dependendo da complexidade da funcionalidade e do problema relatado.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Processamento de Pagamentos</h2>
        <p className="mb-4">
          Todos os pagamentos realizados em nossa plataforma são processados através de nossos parceiros de pagamento seguros, como Stripe. Nenhuma informação de pagamento, como números de cartão de crédito ou débito, é armazenada diretamente em nossos servidores.
        </p>
        <p className="mb-4">
          No momento, oferecemos planos de assinatura com diferentes preços que permitem acesso às funcionalidades da plataforma. Como estamos em fase beta, novos planos e opções de pagamento poderão ser adicionados no futuro.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Cancelamentos e Reembolsos</h2>
        <p className="mb-4">
          Entendemos que pode haver situações em que você não fique completamente satisfeito com nosso serviço. Durante o período de testes e beta, oferecemos uma política de cancelamento flexível. Se, por algum motivo, você deseja cancelar sua assinatura ou solicitar um reembolso, entre em contato com nossa equipe de suporte no prazo de 14 dias após a data da compra para que possamos analisar sua solicitação.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Atualizações e Melhorias</h2>
        <p className="mb-4">
          Durante o período beta, nossa equipe de desenvolvimento estará lançando atualizações regulares. Isso significa que novas funcionalidades poderão ser introduzidas, enquanto algumas funcionalidades atuais podem ser temporariamente removidas ou ajustadas. Agradecemos sua paciência e feedback durante este período.
        </p>

        <p className="mb-4">
          Nossa equipe está empenhada em garantir que a plataforma ofereça a melhor experiência de estudo possível. Pedimos que, se houver dúvidas ou preocupações sobre as funcionalidades ou o processo de pagamento, entre em contato conosco para que possamos ajudá-lo.
        </p>

        <p className="mt-6">
          Entre em contato conosco para mais informações: <a href="mailto:ReviseStrategies@outlook.com" className="text-blue-600 hover:underline">ReviseStrategies@outlook.com</a>.
        </p>
      </div>
      <Link href="/" className="block text-center text-blue-600 hover:underline mt-8">
        Voltar para a página inicial
      </Link>
    </section>
  );
}
