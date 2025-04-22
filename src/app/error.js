'use client' // Hata bileşenleri İstemci Bileşeni olmalıdır
 
import { useEffect } from 'react'
import Link from 'next/link'
// ClientHeader ve ClientFooter importları kaldırıldı
// import { ClientHeader, ClientFooter } from '@/components/layout/ClientComponents';
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Hata raporlama servisine loglama yapılabilir
    console.error(error)
  }, [error])
 
  return (
    <>
      <main className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-md-10">
            {/* Görsel Öğe */}
            <div className="mb-4 d-flex justify-content-center">
              <div className="position-relative" style={{ height: "180px", width: "180px" }}>
                <div className="position-absolute start-50 top-50 translate-middle">
                  <div className="display-1 fw-bold text-danger" style={{ fontSize: "8rem", opacity: "0.2" }}>!</div>
                </div>
                <div className="position-absolute start-50 top-50 translate-middle">
                  <i className="bi bi-exclamation-triangle text-danger" style={{ fontSize: "5rem" }}></i>
                </div>
              </div>
            </div>

            <h1 className="display-5 fw-bold mb-3 text-danger">Beklenmedik Bir Hata Oluştu</h1>
            <p className="lead mb-4">Üzgünüz, işleminiz sırasında beklenmedik bir sorunla karşılaştık. Lütfen daha sonra tekrar deneyin.</p>
            
            {/* Ana Butonlar */}
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
              <button
                className="btn btn-warning btn-lg d-flex align-items-center"
                onClick={() => reset()}
              >
                <i className="bi bi-arrow-repeat me-2"></i> Tekrar Dene
              </button>
              <Link href="/" className="btn btn-outline-secondary btn-lg d-flex align-items-center">
                <i className="bi bi-house-door me-2"></i> Ana Sayfaya Dön
              </Link>
            </div>
            
            <div className="alert alert-light border shadow-sm p-4 mt-4">
              <h2 className="h5 mb-3">Yardımcı Olabilecek Kaynaklar:</h2>
              <div className="d-flex flex-column gap-2">
                <Link href="/dersler" className="text-decoration-none d-block">
                  <div className="p-2 rounded card-hover d-flex align-items-center">
                    <i className="bi bi-book text-primary me-3" style={{ fontSize: "1.5rem" }}></i>
                    <div className="text-start">
                      <span className="fw-medium">Derslerimizi İnceleyin</span>
                      <small className="d-block text-muted">LGS ve YKS hazırlık programlarımız</small>
                    </div>
                  </div>
                </Link>
                <Link href="/metodoloji" className="text-decoration-none d-block">
                  <div className="p-2 rounded card-hover d-flex align-items-center">
                    <i className="bi bi-diagram-3 text-success me-3" style={{ fontSize: "1.5rem" }}></i>
                    <div className="text-start">
                      <span className="fw-medium">Eğitim Metodolojimiz</span>
                      <small className="d-block text-muted">4 adımlı başarı sistemimiz</small>
                    </div>
                  </div>
                </Link>
                <a href="tel:+905XXXXXXXXX" className="text-decoration-none d-block">
                  <div className="p-2 rounded card-hover d-flex align-items-center">
                    <i className="bi bi-telephone text-danger me-3" style={{ fontSize: "1.5rem" }}></i>
                    <div className="text-start">
                      <span className="fw-medium">Destek Hattı</span>
                      <small className="d-block text-muted">Sorun yaşıyorsanız bizi arayın</small>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 