import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı - 404 | Matematik Özel Ders İstanbul',
  description: 'Aradığınız sayfa bulunamadı. Matematik özel ders hizmetlerimizi keşfedin.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="mt-4 text-3xl font-bold text-gray-900">404</h1>
            <h2 className="mt-2 text-xl font-semibold text-gray-700">Sayfa Bulunamadı</h2>
            <p className="mt-2 text-gray-600">
              Aradığınız sayfa mevcut değil veya taşınmış olabilir.
            </p>
          </div>
          
          <div className="mt-8 space-y-4">
            <Link
              href="/"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Ana Sayfaya Dön
            </Link>
            
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">Veya şu sayfaları ziyaret edin:</p>
              <div className="space-y-2">
                <Link href="/matematik" className="block text-indigo-600 hover:text-indigo-500 text-sm">
                  Matematik Özel Ders
                </Link>
                <Link href="/lgs" className="block text-indigo-600 hover:text-indigo-500 text-sm">
                  LGS Hazırlık
                </Link>
                <Link href="/tyt-ayt" className="block text-indigo-600 hover:text-indigo-500 text-sm">
                  TYT/AYT Hazırlık
                </Link>
                <Link href="/iletisim" className="block text-indigo-600 hover:text-indigo-500 text-sm">
                  İletişim
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
