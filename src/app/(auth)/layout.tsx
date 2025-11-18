import { ShoppingCart } from "lucide-react";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="flex-1 w-full flex h-full items-center max-w-sm">
        {children}
      </div>
      <footer className="py-4 text-sm flex flex-col items-center gap-y-2">
        <div className="flex items-center gap-1">
          <p>Online Store</p>
          <ShoppingCart className="size-4" />
        </div>
        <p>Portfolio Project of Arridha Amrad</p>
      </footer>
    </main>
  );
}
