'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCancelSubscriptionUser, useGetBillingInformationUser } from "@/hooks/use-payment";
import { BillingInformation } from "@/interfaces/billing-information";
import { useAuthStore } from "@/stores/auth-store";
import { format } from 'date-fns';
import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import {useRouter } from 'next/navigation';
export function BillingProfileForm() {
  const { user } = useAuthStore();
  const useBilling = useGetBillingInformationUser();
  const useCancelSubscription = useCancelSubscriptionUser();
  const [billingInformation, setBillingInformation] = useState<BillingInformation | null>(null);
  const hasActiveSubscription = billingInformation?.stripeSubscription.status === 'active';
  const router = useRouter();
  useEffect(() => {
    if (user) {
      useBilling.mutateAsync({
        userId: user?.sub!,
      }).then((data) => {
        setBillingInformation(data);
      });
    }
  }, [user]);

  const handleSubscription = useCallback(() => {
    if (!user) return
    if (!hasActiveSubscription) {
      return router.push('/billing/checkout');
    }
    const isCancelled = confirm('Você tem certeza que deseja cancelar sua assinatura?');
    if (isCancelled && user) {
      useCancelSubscription.mutateAsync({
        userId: user.sub!
      });
    }
  }, [user]);

  if (!billingInformation) {
    return <div>Carregando informações de pagamento...</div>;
  }

  const { stripeSubscription, stripePaymentMethods, invoices } = billingInformation;

  return (
    <Card className="shadow-lg p-6">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Informações de Pagamento</CardTitle>
        <CardDescription className="text-gray-600">Gerencie suas informações de pagamento e assinatura</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Informações da Assinatura */}
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold text-lg mb-2">Assinatura</h3>
            <p>Status: <span className="font-medium text-green-600">{stripeSubscription.status}</span></p>
            <p>Início: {format(new Date(stripeSubscription.current_period_start * 1000), 'dd/MM/yyyy')}</p>
            <p>Fim: {format(new Date(stripeSubscription.current_period_end * 1000), 'dd/MM/yyyy')}</p>
            <p>Plano: <span className="font-medium">R$ {(stripeSubscription.plan.amount / 100).toFixed(2)}</span> / {stripeSubscription.plan.interval}</p>
          </div>

          {/* Informações do Método de Pagamento */}
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold text-lg mb-2">Método de Pagamento</h3>
            <p>Cartão: <span className="font-medium text-blue-600">{stripePaymentMethods.card?.brand}</span> **** {stripePaymentMethods.card?.last4}</p>
            <p>Validade: {stripePaymentMethods.card?.exp_month}/{stripePaymentMethods.card?.exp_year}</p>
          </div>

          {/* Faturas */}
          {invoices.length > 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="font-semibold text-lg mb-2">Faturas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {invoices.map((invoice) => (
                  <div key={invoice.id} className="p-4 border rounded-lg shadow-sm bg-white">
                    <p className="font-medium">ID: {invoice.id}</p>
                    <p>Total: R$ {(invoice.amount_due / 100).toFixed(2)}</p>
                    <p>Pago: R$ {(invoice.amount_paid / 100).toFixed(2)}</p>
                    <p>Status: <span className="text-green-600">{invoice.status}</span></p>
                    <a
                      href={invoice.invoice_pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline mt-2 block"
                    >
                      Ver PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          onClick={handleSubscription}
          variant={hasActiveSubscription ? 'destructive' : 'outline'}
        >
          {hasActiveSubscription ? 'Cancelar Assinatura' : 'Assinatura Cancelada'}
        </Button>
      </CardFooter>
    </Card>
  );
}
