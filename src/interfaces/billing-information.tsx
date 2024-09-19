export interface BillingInformation {
  stripeCustomer: {
    id: string;
    email: string;
    currency: string;
    name: string;
    created: number; // Unix timestamp, precisa ser formatado para data legível
    balance: number;
    delinquent: boolean;
  };
  stripeSubscription: {
    id: string;
    status: string;
    created: number; // Unix timestamp
    current_period_start: number; // Unix timestamp
    current_period_end: number; // Unix timestamp
    plan: {
      id: string;
      amount: number; // Valor do plano
      currency: string;
      interval: string;
    };
  };
  stripePaymentMethods: {
    id: string;
    card: {
      brand: string;
      last4: string;
      exp_month: number;
      exp_year: number;
    };
  };
  invoices: {
    id: string;
    amount_due: number;
    amount_paid: number;
    status: string;
    invoice_pdf: string; // URL para o PDF da fatura
  }[];
}
