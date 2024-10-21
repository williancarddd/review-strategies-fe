import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';

interface UserProfileProps {
  name: string;
  role: string;
}

export default function UserProfile({ name, role }: UserProfileProps) {
  return (
    <div className="flex flex-col items-center space-y-4 mb-6">
      <Avatar className="w-12 h-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <p className="font-bold text-customPrimary-deluge">{name}</p>
        <p className="text-sm text-customPrimary-deluge">{role}</p>
      </div>
    </div>
  );
}
