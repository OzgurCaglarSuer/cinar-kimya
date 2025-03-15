'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollToTop from '../components/ScrollToTop';

const categories = [
  {
    id: 'temizlik',
    title: 'Endüstriyel Temizlik',
    icon: '🧪',
    subCategories: [
      'Zemin Temizleyiciler',
      'Genel Temizlik',
      'Özel Temizleyiciler',
      'Köpük Sistemleri',
      'Dozaj Sistemleri',
      'Dezenfektanlar',
      'Sanitasyon Ürünleri'
    ]
  },
  {
    id: 'kagit',
    title: 'Kağıt Ürünleri',
    icon: '📜',
    subCategories: [
      'Z Katlı Havlu',
      'Rulo Havlu',
      'Dispenser Havlu',
      'Masaüstü Peçete',
      'Dispenser Peçete',
      'Mini Jumbo',
      'Jumbo',
      'Standart'
    ]
  },
  {
    id: 'ekipman',
    title: 'Temizlik Ekipmanları',
    icon: '🧹',
    subCategories: [
      'Temizlik Arabaları',
      'Ekipman Setleri',
      'Zemin Makineleri',
      'Vakum Makineleri',
      'Mop Setleri',
      'Temizlik Setleri'
    ]
  }
];

const brandCatalogs = [
  {
    id: 1,
    name: 'Kersia Endüstriyel',
    logo: '/images/partner-logos/kersia.png',
    catalogPdf: 'https://drive.google.com/drive/folders/1GpnrKESqhbHidaAQ-0jPjBj2uzHPF0re?usp=drive_link/kersiaendustriyel.pdf'
  },
  {
    id: 2,
    name: 'Kersia Gıda',
    logo: '/images/partner-logos/kersia.png',
    catalogPdf: 'https://drive.google.com/drive/folders/1GpnrKESqhbHidaAQ-0jPjBj2uzHPF0re?usp=drive_link/kersiagida.pdf'
  },
  {
    id: 3,
    name: 'Focus',
    logo: '/images/partner-logos/focus.png',
    catalogPdf: 'https://drive.google.com/drive/folders/1GpnrKESqhbHidaAQ-0jPjBj2uzHPF0re?usp=drive_link/focus.pdf'
  },
  {
    id: 4,
    name: 'Bursa Pazarı',
    logo: '/images/partner-logos/bursapazari.png',
    catalogPdf: 'https://drive.google.com/drive/folders/1GpnrKESqhbHidaAQ-0jPjBj2uzHPF0re?usp=drive_link/bursapazari.pdf'
  },
  {
    id: 5,
    name: 'Rulopak',
    logo: '/images/partner-logos/rulopak.png',
    catalogPdf: 'https://drive.google.com/drive/folders/1GpnrKESqhbHidaAQ-0jPjBj2uzHPF0re?usp=drive_link/rulopak.pdf'
  },
  {
    id: 6,
    name: 'Üçtem Plastik',
    logo: '/images/partner-logos/uctemplastik.png',
    catalogPdf: 'https://drive.google.com/drive/folders/1GpnrKESqhbHidaAQ-0jPjBj2uzHPF0re?usp=drive_link/uctemplas.pdf'
  },
  {
    id: 7,
    name: 'Rollup',
    logo: '/images/partner-logos/rollup.png',
    catalogPdf: null
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Animasyonlu Arkaplan */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 to-white/90" />
        <div className="absolute w-[500px] h-[500px] -left-48 -top-48 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute w-[500px] h-[500px] -right-48 -bottom-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute w-[500px] h-[500px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Bölümü */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Ürünlerimiz
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profesyonel temizlik çözümleri için ihtiyacınız olan her şey
          </p>
        </div>

        {/* Marka Katalogları */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Marka Katalogları</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brandCatalogs.map((brand) => (
              <div
                key={brand.id}
                className="group bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="relative h-24 mb-4">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain transition-all duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600 group-hover:text-emerald-600 transition-colors duration-300">
                    {brand.name}
                  </p>
                  {brand.catalogPdf ? (
                    <button
                      onClick={() => window.open(brand.catalogPdf, '_blank')}
                      className="inline-flex items-center mt-2 px-4 py-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium rounded-lg hover:bg-emerald-50 transition-all duration-300"
                    >
                      <span>Kataloğu İncele</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  ) : (
                    <p className="mt-2 text-xs text-gray-500 bg-gray-50 py-2 px-4 rounded-lg inline-block">Katalog Yakında</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kategori ve Alt Kategori Bölümü */}
        <div className="max-w-4xl mx-auto">
          {/* Ana Kategoriler */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory.id === category.id
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white/60 text-gray-700 hover:bg-emerald-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </span>
              </button>
            ))}
          </div>

          {/* Alt Kategoriler */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-3xl">{selectedCategory.icon}</span>
              {selectedCategory.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedCategory.subCategories.map((subCategory) => (
                <div
                  key={subCategory}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{subCategory}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
} 