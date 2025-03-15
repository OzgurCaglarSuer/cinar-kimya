'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', text: 'Ana Sayfa' },
    { href: '/urunler', text: 'Ürünler' },
    { href: '/hakkimizda', text: 'Hakkımızda' },
    { href: '/iletisim', text: 'İletişim' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Çınar Kimya Logo"
                width={200}
                height={100}
                className="h-16 w-auto"
                priority
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>
          
          {/* Mobil menü butonu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary-600 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop menü */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href === '/urunlerimiz' ? '/urunler' : link.href}
                className={`${
                  pathname === (link.href === '/urunlerimiz' ? '/urunler' : link.href)
                    ? 'text-emerald-600'
                    : 'text-gray-600 hover:text-emerald-600'
                } transition-colors duration-300`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobil menü */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href === '/urunlerimiz' ? '/urunler' : link.href}
              className="text-gray-900 hover:text-emerald-700 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-gray-50"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 