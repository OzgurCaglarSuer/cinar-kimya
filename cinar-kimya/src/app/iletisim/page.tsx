'use client';

import { useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    // Form gönderme işlemi burada yapılacak
    setTimeout(() => {
      setFormStatus('sent');
    }, 1500);
  };

  return (
    <div className="relative min-h-screen">
      {/* Animasyonlu Arkaplan */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 to-white/90" />
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-float-delayed" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Bölümü */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Bizimle İletişime Geçin
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sorularınız için bize ulaşın, en kısa sürede size dönüş yapalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* İletişim Formu */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-slideInLeft">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">İletişim Formu</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Adınızı ve soyadınızı giriniz"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="E-posta adresinizi giriniz"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Telefon numaranızı giriniz"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                  placeholder="Mesajınızı yazınız"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {formStatus === 'sending' ? 'Gönderiliyor...' : 'Gönder'}
              </button>

              {formStatus === 'sent' && (
                <div className="text-emerald-600 text-center font-medium animate-fadeIn">
                  Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                </div>
              )}
            </form>
          </div>

          {/* İletişim Bilgileri */}
          <div className="space-y-8 animate-slideInRight">
            {/* Adres Kartı */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">📍</span>
                Adresimiz
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Organize Sanayi Bölgesi<br />
                123. Sokak No: 45<br />
                34555 İstanbul / Türkiye
              </p>
            </div>

            {/* İletişim Kartı */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">📞</span>
                Bize Ulaşın
              </h3>
              <div className="space-y-3">
                <p className="text-gray-600">
                  <span className="font-medium">Telefon:</span><br />
                  +90 (212) 123 45 67
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">E-posta:</span><br />
                  info@cinarkimya.com
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Fax:</span><br />
                  +90 (212) 123 45 68
                </p>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">⏰</span>
                Çalışma Saatleri
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Pazartesi - Cuma:</span><br />
                  09:00 - 18:00
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Cumartesi:</span><br />
                  09:00 - 13:00
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Pazar:</span><br />
                  Kapalı
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Harita */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-slideInUp animate-delay-300">
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.8887565143337!2d29.1207853!3d40.9923378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzMyLjQiTiAyOcKwMDcnMTQuOCJF!5e0!3m2!1str!2str!4v1635000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </div>
  );
} 