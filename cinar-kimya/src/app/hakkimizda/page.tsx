import Image from 'next/image';
import ScrollToTop from '../components/ScrollToTop';

export default function About() {
  return (
    <div className="relative min-h-screen">
      {/* Animasyonlu Arkaplan */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 to-white/90" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-float-delayed" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Bölümü */}
        <div className="relative overflow-hidden rounded-3xl mb-20 bg-gradient-to-r from-emerald-600 to-blue-600">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative p-8 md:p-12 lg:p-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slideInDown">
              Çınar Kimya Hikayesi
            </h1>
            <p className="text-xl text-white/90 max-w-3xl animate-slideInUp animate-delay-200">
              20 yılı aşkın tecrübemizle, endüstriyel temizlik sektöründe güvenilir çözüm ortağınız olarak hizmet veriyoruz.
            </p>
          </div>
          <div className="absolute -bottom-8 right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float" />
        </div>

        {/* Zaman Çizelgesi */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Yolculuğumuz</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200" />
            
            <div className="space-y-16">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full" />
                <div className="ml-[52%] pl-8 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold text-emerald-600 mb-2">2003</h3>
                    <p className="text-gray-600">Çınar Kimya'nın kuruluşu ve ilk adımlar</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full" />
                <div className="mr-[52%] pr-8 text-right group hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold text-emerald-600 mb-2">2010</h3>
                    <p className="text-gray-600">Ürün yelpazemizin genişlemesi ve büyüme</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full" />
                <div className="ml-[52%] pl-8 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold text-emerald-600 mb-2">2015</h3>
                    <p className="text-gray-600">Modern tesisimize taşınma ve üretim kapasitesi artışı</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full" />
                <div className="mr-[52%] pr-8 text-right group hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold text-emerald-600 mb-2">2023</h3>
                    <p className="text-gray-600">Dijital dönüşüm ve sürdürülebilir üretim hedefleri</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ekip ve Değerler */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Ekip */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg group hover:shadow-xl transition-all duration-500">
            <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
              <Image
                src="/images/team.jpg"
                alt="Çınar Kimya Ekibi"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">Profesyonel Ekibimiz</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Uzman kadromuz ile müşterilerimize en iyi hizmeti sunmak için sürekli kendimizi geliştiriyoruz.
            </p>
          </div>

          {/* Değerler */}
          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-emerald-600 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Kalite Odaklılık
              </h3>
              <p className="text-gray-600">En yüksek kalite standartlarında üretim ve hizmet</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-emerald-600 mb-3 flex items-center">
                <span className="text-2xl mr-2">🌱</span>
                Sürdürülebilirlik
              </h3>
              <p className="text-gray-600">Çevre dostu üretim ve ürün politikası</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-emerald-600 mb-3 flex items-center">
                <span className="text-2xl mr-2">💡</span>
                İnovasyon
              </h3>
              <p className="text-gray-600">Sürekli gelişim ve yenilikçi çözümler</p>
            </div>
          </div>
        </div>

        {/* Sertifikalar */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sertifikalarımız</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['ISO 9001', 'ISO 14001', 'TSE', 'OHSAS 18001'].map((cert, index) => (
              <div key={cert} className="group">
                <div className="bg-white/80 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏆</div>
                    <h3 className="font-semibold text-emerald-600">{cert}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
} 