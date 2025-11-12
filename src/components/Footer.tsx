import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Perusahaan
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Mitra terpercaya untuk mendukung pertumbuhan berkelanjutan bisnis
              di Indonesia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Tautan Cepat
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Konsultasi Strategi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Analisis Data
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Transformasi Digital
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Pelatihan Tim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Jl. Gading Kirana Timur IX No. 22, RT.018 RW.008, Kelapa
                  Gading Barat, Kelapa Gading, Jakarta Utara 14240
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm">021-22458105</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-sm">cs@aretelogistik.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              © 2025. PT Arete Logistik Indonesia.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
