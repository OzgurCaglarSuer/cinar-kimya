import { redirect } from 'next/navigation';

export default function CategoryRedirect({ params }: { params: { category: string } }) {
  redirect(`/urunlerimiz/${params.category}`);
}

export function generateStaticParams() {
  return [
    { category: 'temizlik-urunleri' },
    { category: 'kagit-urunleri' },
    { category: 'temizlik-ekipmanlari' }
  ];
} 