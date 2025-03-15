'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/slides/slide1.jpg',
    title: 'Endüstriyel Temizlik Çözümleri',
    description: 'Profesyonel temizlik ürünleri ve ekipmanlarıyla işletmenizin tüm ihtiyaçlarını karşılıyoruz',
    animation: {
      first: 'animate-bounceIn',
      second: 'animate-bounceIn',
      description: 'animate-fadeIn'
    }
  },
  {
    image: '/slides/slide2.jpg',
    title: 'Kaliteli Kağıt Ürünleri',
    description: 'Yüksek kaliteli kağıt havlu, tuvalet kağıdı ve peçete çeşitleri',
    animation: {
      first: 'animate-slideInLeft',
      second: 'animate-slideInRight',
      description: 'animate-slideInUp'
    }
  },
  {
    image: '/slides/slide3.jpg',
    title: 'Temizlik Ekipmanları',
    description: 'Modern ve dayanıklı temizlik ekipmanlarıyla işinizi kolaylaştırıyoruz',
    animation: {
      first: 'animate-zoomInRotate',
      second: 'animate-zoomInRotate',
      description: 'animate-slideInUp'
    }
  },
  {
    image: '/slides/slide4.jpg',
    title: 'Güvenilir Tedarikçi',
    description: 'Sektörün önde gelen markalarıyla güvenilir tedarik çözümleri',
    animation: {
      first: 'animate-flipIn',
      second: 'animate-flipIn',
      description: 'animate-fadeIn'
    }
  },
  {
    image: '/slides/slide5.jpg',
    title: 'Profesyonel Çözümler',
    description: 'Her ölçekteki işletme için özel temizlik çözümleri sunuyoruz',
    animation: {
      first: 'animate-slideInDown',
      second: 'animate-slideInUp',
      description: 'animate-fadeIn'
    }
  },
  {
    image: '/slides/slide6.jpg',
    title: 'Geniş Ürün Yelpazesi',
    description: 'Tüm temizlik ve hijyen ihtiyaçlarınız için tek adres',
    animation: {
      first: 'animate-scaleIn',
      second: 'animate-scaleIn',
      description: 'animate-slideInRight'
    }
  }
];

export default function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setKey(prev => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setKey(prev => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setKey(prev => prev + 1);
  };

  return (
    <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              quality={90}
              priority={index === 0}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          {index === currentSlide && (
            <div key={key} className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end text-white p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 text-center drop-shadow-lg">
                <span className={`inline-block ${slide.animation.first} animate-delay-100`}>
                  {slide.title.split(' ')[0]}
                </span>{' '}
                <span className={`inline-block ${slide.animation.second} animate-delay-300`}>
                  {slide.title.split(' ').slice(1).join(' ')}
                </span>
              </h2>
              <p className={`text-sm sm:text-base md:text-lg text-center max-w-2xl mb-2 md:mb-4 drop-shadow-lg ${slide.animation.description} animate-delay-500`}>
                {slide.description}
              </p>
            </div>
          )}
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 md:p-2 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 md:p-2 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Slider dots */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setKey(prev => prev + 1);
            }}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 