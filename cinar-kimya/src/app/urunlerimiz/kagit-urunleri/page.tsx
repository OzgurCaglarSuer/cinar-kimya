import BackButton from '@/app/components/BackButton';

export default function KagitUrunleriPage() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <BackButton />
      
      <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-slideInDown">
        Kağıt Ürünleri
      </h1>
      <p className="text-lg text-gray-600 mb-12 animate-slideInUp">
        Kurumsal ve endüstriyel kullanım için hijyenik kağıt ürünlerimiz
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
          <div className="relative h-64 bg-emerald-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl font-bold text-gray-600 animate-zoomInRotate animate-delay-100">
                Tuvalet
              </span>
              <span className="text-4xl font-bold text-emerald-600 animate-zoomInRotate animate-delay-300">
                Kağıtları
              </span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
              Tuvalet Kağıtları
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Jumbo Boy</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Mini Jumbo</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">İçten Çekmeli</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Z Katlı</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
          <div className="relative h-64 bg-blue-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl font-bold text-gray-600 animate-bounceIn animate-delay-100">
                Kağıt
              </span>
              <span className="text-4xl font-bold text-emerald-600 animate-bounceIn animate-delay-300">
                Havlular
              </span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
              Kağıt Havlular
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Z Katlı</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">İçten Çekmeli</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Rulo</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Endüstriyel</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
          <div className="relative h-64 bg-purple-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl font-bold text-gray-600 animate-flipIn animate-delay-100">
                Kaliteli
              </span>
              <span className="text-4xl font-bold text-emerald-600 animate-flipIn animate-delay-300">
                Peçeteler
              </span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
              Peçeteler
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Dispenser</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Masaüstü</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Lüks</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Katlı</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
          <div className="relative h-64 bg-pink-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl font-bold text-gray-600 animate-scaleIn animate-delay-100">
                Özel
              </span>
              <span className="text-4xl font-bold text-emerald-600 animate-scaleIn animate-delay-300">
                Ürünler
              </span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
              Özel Kağıt Ürünleri
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Klozet Kapak Örtüleri</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Oto Koltuk Kılıfları</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Sedye Örtüleri</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Kağıt Bardak ve Tabaklar</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-emerald-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Toplu Siparişler
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Otel, restoran, hastane ve diğer kurumsal müşterilerimiz için özel fiyatlandırma ve toplu sipariş avantajları sunuyoruz.
        </p>
        <div className="flex gap-4">
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300">
            Fiyat Teklifi Al
          </button>
          <button className="bg-white text-emerald-600 border-2 border-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors duration-300">
            Numune Talep Et
          </button>
        </div>
      </div>
    </div>
  );
} 