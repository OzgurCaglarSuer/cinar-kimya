import BackButton from '@/app/components/BackButton';

export default function TemizlikUrunleriPage() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <BackButton />
      
      <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-slideInDown">
        Temizlik Ürünleri
      </h1>
      <p className="text-lg text-gray-600 mb-12 animate-slideInUp">
        Endüstriyel temizlik için geliştirilen profesyonel kimyasal ürünlerimiz
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
          <div className="relative h-64 bg-emerald-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl font-bold text-gray-600 animate-flipIn animate-delay-100">
                Genel
              </span>
              <span className="text-4xl font-bold text-emerald-600 animate-flipIn animate-delay-300">
                Temizlik
              </span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
              Genel Temizlik Ürünleri
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Yüzey Temizleyiciler</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Çok Amaçlı Temizleyiciler</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Cam Temizleyiciler</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Banyo ve Mutfak Temizleyiciler</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
          <div className="relative h-64 bg-blue-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl font-bold text-gray-600 animate-bounceIn animate-delay-100">
                Profesyonel
              </span>
              <span className="text-4xl font-bold text-emerald-600 animate-bounceIn animate-delay-300">
                Dezenfektanlar
              </span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
              Dezenfektanlar
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Yüzey Dezenfektanları</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">El Dezenfektanları</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Medikal Dezenfektanlar</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Oda ve Ortam Dezenfektanları</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
          <div className="relative h-64 bg-purple-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl font-bold text-gray-600 animate-zoomInRotate animate-delay-100">
                Endüstriyel
              </span>
              <span className="text-4xl font-bold text-emerald-600 animate-zoomInRotate animate-delay-300">
                Temizlik
              </span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
              Endüstriyel Temizleyiciler
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Zemin Temizleyiciler</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Yağ Çözücüler</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Kireç Çözücüler</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Ağır Kir Çözücüler</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
          <div className="relative h-64 bg-pink-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl font-bold text-gray-600 animate-scaleIn animate-delay-100">
                Kişisel
              </span>
              <span className="text-4xl font-bold text-emerald-600 animate-scaleIn animate-delay-300">
                Bakım
              </span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
              Kişisel Bakım Ürünleri
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Sıvı El Sabunları</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Köpük Sabunlar</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">El Kremleri</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Antibakteriyel Ürünler</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-emerald-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ürün Kataloğu
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Tüm ürünlerimizin detaylı bilgilerini içeren kataloğumuzu indirebilir veya bizden talep edebilirsiniz.
        </p>
        <div className="flex gap-4">
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300">
            Kataloğu İndir
          </button>
          <button className="bg-white text-emerald-600 border-2 border-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors duration-300">
            Katalog Talep Et
          </button>
        </div>
      </div>
    </div>
  );
} 