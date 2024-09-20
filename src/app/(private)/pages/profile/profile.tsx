import { BillingProfileForm } from "@/components/Profile/profile-billing-form";
import { ProfileForm } from "@/components/Profile/profile-form";

export default function ProfilePage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-semibold mb-4">Perfil</h1>
      <ProfileForm />
      
      <div className="mt-10">
        <h2 className="text-1xl font-semibold mb-4">Assinatura e Pagamento</h2>
        <BillingProfileForm />
      </div>
    </div>
  );
}
