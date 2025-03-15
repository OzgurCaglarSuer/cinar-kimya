import { notFound } from 'next/navigation';
import TemizlikUrunleriPage from '../temizlik-urunleri/page';
import KagitUrunleriPage from '../kagit-urunleri/page';
import TemizlikEkipmanlariPage from '../temizlik-ekipmanlari/page';
import { Metadata } from 'next';

const validCategories = ['temizlik-urunleri', 'kagit-urunleri', 'temizlik-ekipmanlari'];

type Props = {
  params: { category: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.category;
  
  const titles = {
    'temizlik-urunleri': 'Temizlik Ürünleri',
    'kagit-urunleri': 'Kağıt Ürünleri',
    'temizlik-ekipmanlari': 'Temizlik Ekipmanları'
  };

  return {
    title: `${titles[category as keyof typeof titles]} | Çınar Kimya`,
    description: 'Endüstriyel temizlik ürünleri ve ekipmanları'
  };
}

export default function CategoryPage({ params }: Props) {
  if (!validCategories.includes(params.category)) {
    return notFound();
  }

  switch (params.category) {
    case 'temizlik-urunleri':
      return <TemizlikUrunleriPage />;
    case 'kagit-urunleri':
      return <KagitUrunleriPage />;
    case 'temizlik-ekipmanlari':
      return <TemizlikEkipmanlariPage />;
    default:
      return notFound();
  }
}

export function generateStaticParams() {
  return validCategories.map(category => ({
    category
  }));
}