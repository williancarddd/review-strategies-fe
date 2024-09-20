'use client';
import { usePayment } from "@/hooks/use-payment";
import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const {checkSubscription} = usePayment();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user) {
      checkSubscription.mutateAsync({
        userId: user.sub!,
      });
    }
  }, [user]);

  return (
    <></>
  );

}


