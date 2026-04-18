import Link from "next/link";
import Button from "@/components/ui/Button";
import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Zap size={16} className="text-white" fill="white" />
          </div>
          TapCard
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <Link href="#comment-ca-marche" className="hover:text-gray-900 transition-colors">
            Comment ça marche
          </Link>
          <Link href="#produits" className="hover:text-gray-900 transition-colors">
            Produits
          </Link>
          <Link href="/p/demo" className="hover:text-gray-900 transition-colors">
            Exemple
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              Mon profil
            </Button>
          </Link>
          <Link href="/order">
            <Button size="sm">Commander</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
