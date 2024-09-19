import apiClient from "@/lib/axios";

export async function createCheckouSection(userId: string): Promise<{
  url: string;
}> {
  const result = await apiClient.post(`/checkout`,  { userId })
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