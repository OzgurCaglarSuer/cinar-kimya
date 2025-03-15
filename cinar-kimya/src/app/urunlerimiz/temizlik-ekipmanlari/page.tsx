import BackButton from '@/app/components/BackButton';

export default function TemizlikEkipmanlariPage() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <BackButton />
      
      <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-slideInDown">
        Temizlik Ekipmanları
      </h1>
      <p className="text-lg text-gray-600 mb-12 animate-slideInUp">
        Profesyonel temizlik için gerekli tüm ekipman ve malzemeler
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
          <div className="relative h-64 bg-emerald-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl font-bold text-gray-600 animate-bounceIn animate-delay-100">
                Temizlik
              </span>
              <span className="text-4xl font-bold text-emerald-600 animate-bounceIn animate-delay-300">
                Makineleri
              </span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
              Temizlik Makineleri
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Zemin Temizleme Makineleri</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Halı Yıkama Makineleri</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Vakum Makineleri</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Basınçlı Yıkama Makineleri</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
          <div className="relative h-64 bg-blue-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl font-bold text-gray-600 animate-flipIn animate-delay-100">
                Temizlik
              </span>
              <span className="text-4xl font-bold text-emerald-600 animate-flipIn animate-delay-300">
                Arabaları
              </span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
              Temizlik Arabaları
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Kat Arabaları</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Çok Amaçlı Arabalar</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Paspas Arabaları</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Çamaşır Toplama Arabaları</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
          <div className="relative h-64 bg-purple-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl font-bold text-gray-600 animate-zoomInRotate animate-delay-100">
                Temizlik
              </span>
              <span className="text-4xl font-bold text-emerald-600 animate-zoomInRotate animate-delay-300">
                Aparatları
              </span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
              Temizlik Aparatları
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Mop ve Paspas Sistemleri</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Cam Temizleme Ekipmanları</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Fırça ve Süpürgeler</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Temizlik Bezleri</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
          <div className="relative h-64 bg-pink-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl font-bold text-gray-600 animate-scaleIn animate-delay-100">
                Dozajlama
              </span>
              <span className="text-4xl font-bold text-emerald-600 animate-scaleIn animate-delay-300">
                Sistemleri
              </span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
              Dozajlama ve Dağıtım Sistemleri
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Otomatik Dozajlama Sistemleri</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Köpük Sistemleri</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Sprey Sistemleri</span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="text-gray-600 group-hover/item:text-emerald-600 transition-colors duration-300">Dağıtıcı ve Dispenserler</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-emerald-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Teknik Servis ve Bakım
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Tüm temizlik ekipmanları için teknik servis, bakım ve yedek parça hizmetleri sunuyoruz. 
          Düzenli bakım planları ile ekipmanlarınızın ömrünü uzatın.
        </p>
        <div className="flex gap-4">
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300">
            Servis Talebi
          </button>
          <button className="bg-white text-emerald-600 border-2 border-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors duration-300">
            Bakım Planı Al
          </button>
        </div>
      </div>
    </div>
  );
} 