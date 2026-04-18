import Link from "next/link";
import { Zap, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-white mb-3">
              <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Zap size={14} className="text-white" fill="white" />
              </div>
              TapCard
            </div>
            <p className="text-sm leading-relaxed">
              La carte NFC intelligente fabriquée et livrée en Algérie.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { href: "#comment-ca-marche", label: "Comment ça marche" },
                { href: "#produits", label: "Produits" },
                { href: "/order", label: "Commander" },
                { href: "/p/demo", label: "Exemple de profil" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} />
                +213 (0) 555 000 000
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                contact@tapcard.dz
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-xs text-center text-gray-600">
          © {new Date().getFullYear()} TapCard. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
