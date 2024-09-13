'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";
import { routes } from '@/routes/routes';

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard = ({ children }: RouteGuardProps) => {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = useAuthStore.persist.onFinishHydration(() => {
      setLoading(false);  // Hydration complete, set loading to false
    });

    // If the store is already hydrated, we skip the loading state
    if (useAuthStore.persist.hasHydrated()) {
      setLoading(false);
    }

    return () => unsubscribe();
  }, []);

  const pathname = usePathname();
  const isPublicRoute = routes.public.includes(pathname);

  if (loading) {
    // While loading, display a loader or nothing
    return <div></div>; // You can replace this with a spinner or placeholder
  }

  if (isPublicRoute) {
    return <>{children}</>;
  }

  if (!isAuthenticated) {
    router.push("/login");
    return null;
  }

  return <>{children}</>;
};

export default RouteGuard;
