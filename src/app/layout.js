import '@/styles/globals.css'
import styles from '@/styles/Layout.module.css'
import { Suspense } from 'react'
import { ClientHeader, ClientFooter } from '@/components/layout/ClientComponents'

export const metadata = {
  title: 'Özel Ders - Eğitim Platformu',
  description: 'Kaliteli ve özel eğitim hizmetleri',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <div className={styles.layoutWrapper}>
          <Suspense fallback={<div className={styles.loader}>Yükleniyor...</div>}>
            <ClientHeader />
            <main className={styles.mainContent}>{children}</main>
            <ClientFooter />
          </Suspense>
        </div>
      </body>
    </html>
  )
}
