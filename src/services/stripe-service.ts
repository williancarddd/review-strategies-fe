import { BillingInformation } from "@/interfaces/billing-information";
import apiClient from "@/lib/axios";

export async function createCheckouSection(userId: string): Promise<{
  url: string;
}> {
  const result = await apiClient.post(`/checkout`, { userId })
  return result.data;
}

export async function checkIfHasActiveSubscription(userId: string): Promise<{
  hasActiveSubscription: boolean;
}> {
  const result = await apiClient.get(`/checkout/subscription`, {
    params: {
      userId
    }
  });
  return result.data;
}

export async function cancelSubscription(userId: string): Promise<void> {
  return await apiClient.get("/checkout/cancel-subscription", {
    params: {
      userId
    }
  });
}

export async function getBillingInformation(userId: string): Promise<BillingInformation> {
  const result = await apiClient.get(`/checkout/information-user`, {
    params: {
      userId
    }
  });
  return result.data;
}