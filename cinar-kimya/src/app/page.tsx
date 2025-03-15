import Image from "next/image";
import HomeSlider from "./components/HomeSlider";
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <div className="relative">
      {/* Paralax Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 to-white/90" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-float-slow" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section with Slider */}
        <div className="mb-16">
          <HomeSlider />
        </div>

        {/* Interactive Stats Section */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
            <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">
              20+
            </div>
            <div className="text-gray-600">Yıllık Tecrübe</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
            <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">
              1000+
            </div>
            <div className="text-gray-600">Mutlu Müşteri</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
            <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">
              500+
            </div>
            <div className="text-gray-600">Ürün Çeşidi</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
            <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">
              24/7
            </div>
            <div className="text-gray-600">Teknik Destek</div>
          </div>
        </div>

        {/* Features Grid with 3D Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 perspective-1000">
          <div className="bg-white/80 p-6 rounded-2xl shadow-lg backdrop-blur-sm hover:bg-white/90 transition-all duration-500 transform-gpu hover:rotate-y-10 hover:scale-105 animate-slideInLeft animate-delay-100 group">
            <div className="relative h-64 mb-6 overflow-hidden rounded-xl group-hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/cleaning-products.jpg"
                alt="Temizlik Ürünleri"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2">Temizlik Ürünleri</h3>
                <p className="text-white/90 text-sm transform opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Profesyonel temizlik çözümleri için geniş ürün yelpazemizi keşfedin
                </p>
              </div>
            </div>
            <p className="text-gray-600 animate-fadeIn animate-delay-300 leading-relaxed">
              Endüstriyel temizlik ürünlerinden kişisel hijyen malzemelerine kadar geniş ürün yelpazemizle profesyonel çözümler sunuyoruz.
            </p>
          </div>

          <div className="bg-white/80 p-6 rounded-2xl shadow-lg backdrop-blur-sm hover:bg-white/90 transition-all duration-500 transform-gpu hover:rotate-y-10 hover:scale-105 animate-slideInUp animate-delay-200 group">
            <div className="relative h-64 mb-6 overflow-hidden rounded-xl group-hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/paper-products.jpg"
                alt="Kağıt Ürünleri"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2">Kağıt Ürünleri</h3>
                <p className="text-white/90 text-sm transform opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Yüksek kaliteli kağıt ürünleri ile işletmenizin ihtiyaçlarına özel çözümler
                </p>
              </div>
            </div>
            <p className="text-gray-600 animate-fadeIn animate-delay-400 leading-relaxed">
              Yüksek kaliteli kağıt havlu, tuvalet kağıdı, peçete ve diğer kağıt ürünleriyle işletmenizin ihtiyaçlarını karşılıyoruz.
            </p>
          </div>

          <div className="bg-white/80 p-6 rounded-2xl shadow-lg backdrop-blur-sm hover:bg-white/90 transition-all duration-500 transform-gpu hover:rotate-y-10 hover:scale-105 animate-slideInRight animate-delay-300 group">
            <div className="relative h-64 mb-6 overflow-hidden rounded-xl group-hover:shadow-2xl transition-all duration-500">
              <Image
                src="/images/cleaning-equipment.jpg"
                alt="Temizlik Ekipmanları"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2">Temizlik Ekipmanları</h3>
                <p className="text-white/90 text-sm transform opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Modern ve dayanıklı temizlik ekipmanları ile işinizi kolaylaştırın
                </p>
              </div>
            </div>
            <p className="text-gray-600 animate-fadeIn animate-delay-500 leading-relaxed">
              Çöp kovaları, temizlik arabaları ve diğer sarf malzemeleriyle profesyonel temizlik çözümleri sağlıyoruz.
            </p>
          </div>
        </div>

        {/* Interactive About Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-16 shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-3xl font-bold text-primary-600 mb-6 animate-slideInDown flex items-center">
            <span className="text-5xl mr-4">🌟</span>
            Neden Çınar Kimya?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-slideInLeft animate-delay-500">
              <div className="bg-white/50 p-6 rounded-xl transform transition-all hover:scale-105">
                <h3 className="text-xl font-semibold text-primary-600 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🎯</span>
                  Misyonumuz
                </h3>
                <p className="text-secondary-600">
                  İşletmelerin hijyen ve temizlik standartlarını en üst seviyede tutmak için kaliteli ürünler ve profesyonel çözümler sunmak.
                </p>
              </div>
              <div className="bg-white/50 p-6 rounded-xl transform transition-all hover:scale-105">
                <h3 className="text-xl font-semibold text-primary-600 mb-3 flex items-center">
                  <span className="text-2xl mr-2">💫</span>
                  Vizyonumuz
                </h3>
                <p className="text-secondary-600">
                  Sektörün öncü markası olarak, sürdürülebilir ve yenilikçi temizlik çözümleriyle fark yaratmak.
                </p>
              </div>
            </div>
            <div className="space-y-4 animate-slideInRight animate-delay-500">
              <div className="bg-white/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-primary-600 mb-4 flex items-center">
                  <span className="text-2xl mr-2">⭐</span>
                  Değerlerimiz
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center p-3 bg-white/50 rounded-lg transform transition-all hover:scale-105">
                    <span className="text-emerald-500 mr-3">✓</span>
                    <p className="text-secondary-600">Müşteri memnuniyeti odaklı hizmet</p>
                  </li>
                  <li className="flex items-center p-3 bg-white/50 rounded-lg transform transition-all hover:scale-105">
                    <span className="text-emerald-500 mr-3">✓</span>
                    <p className="text-secondary-600">Çevre dostu ürünler</p>
                  </li>
                  <li className="flex items-center p-3 bg-white/50 rounded-lg transform transition-all hover:scale-105">
                    <span className="text-emerald-500 mr-3">✓</span>
                    <p className="text-secondary-600">Kalite standartlarına uygunluk</p>
                  </li>
                  <li className="flex items-center p-3 bg-white/50 rounded-lg transform transition-all hover:scale-105">
                    <span className="text-emerald-500 mr-3">✓</span>
                    <p className="text-secondary-600">Güvenilir tedarikçi ilişkileri</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Call to Action */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-90 rounded-2xl" />
          <div className="relative text-center p-12 rounded-2xl">
            <h2 className="text-4xl font-bold text-white mb-4 animate-slideInDown animate-delay-600">
              Profesyonel Çözümler İçin Bize Ulaşın
            </h2>
            <p className="text-xl text-white/90 mb-8 animate-slideInUp animate-delay-600 max-w-2xl mx-auto">
              Uzman ekibimiz, işletmenizin ihtiyaçlarına özel çözümler sunmak için yanınızda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/iletisim"
                className="inline-flex items-center px-8 py-3 rounded-xl bg-white text-emerald-600 font-semibold hover:bg-emerald-50 transition-colors animate-bounceIn animate-delay-600 transform hover:scale-105"
              >
                <span className="text-xl mr-2">📞</span>
                İletişime Geçin
              </a>
              <a
                href="/urunler"
                className="inline-flex items-center px-8 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors animate-bounceIn animate-delay-700 transform hover:scale-105"
              >
                <span className="text-xl mr-2">🛍️</span>
                Ürünleri İncele
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
