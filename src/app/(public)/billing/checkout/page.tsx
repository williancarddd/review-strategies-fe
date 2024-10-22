'use client';
import { usePayment } from "@/hooks/use-payment";
import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "next/navigation";
import { useEffect, useCallback } from "react";

export default function Page() {
  const router = useRouter();
  const { checkSubscription } = usePayment();
  const { user } = useAuthStore();


  const checkUserSubscription = useCallback(async () => {
    if (user) {
      await checkSubscription.mutateAsync({
        userId: user.sub!,
      });
    }
  }, [user, checkSubscription]);

  useEffect(() => {
    if (user) {
      checkUserSubscription();
    }
  }, [user, checkUserSubscription]);

  return (
    <></>
  );
}
