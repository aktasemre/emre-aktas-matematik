'use client';

import Link from 'next/link'

export default function NotFound() {
  return (
    <>
        <main className="container py-5">
            <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-md-10">
                    {/* Görsel Öğe */}
                    <div className="mb-4 d-flex justify-content-center">
                        <div className="position-relative" style={{ height: "180px", width: "180px" }}>
                            <div className="position-absolute start-50 top-50 translate-middle">
                                <div className="display-1 fw-bold text-primary" style={{ fontSize: "9rem", opacity: "0.2" }}>404</div>
                            </div>
                            <div className="position-absolute start-50 top-50 translate-middle">
                                <i className="bi bi-search text-primary" style={{ fontSize: "5rem" }}></i>
                            </div>
                        </div>
                    </div>

                    <h1 className="display-4 fw-bold mb-3 text-primary">Sayfa Bulunamadı</h1>
                    <p className="lead mb-4">Üzgünüz, aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
                    
                    {/* Ana Butonlar */}
                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
                        <Link href="/" className="btn btn-primary btn-lg">
                            <i className="bi bi-house-door me-2"></i> Ana Sayfaya Dön
                        </Link>
                        <Link href="/dersler" className="btn btn-outline-primary btn-lg">
                            <i className="bi bi-book me-2"></i> Derslerimize Göz Atın
                        </Link>
                    </div>

                    {/* Alternatif Sayfalar */}
                    <div className="mt-5">
                        <h2 className="h5 mb-3">Aşağıdaki sayfalar ilginizi çekebilir:</h2>
                        <div className="row g-3 justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <Link href="/dersler/lgs-hazirlik" className="text-decoration-none">
                                    <div className="card h-100 shadow-sm border-0 card-hover">
                                        <div className="card-body text-center">
                                            <i className="bi bi-award text-warning mb-2" style={{ fontSize: "2rem" }}></i>
                                            <h3 className="h6 card-title">LGS Hazırlık</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <Link href="/dersler/yks-hazirlik" className="text-decoration-none">
                                    <div className="card h-100 shadow-sm border-0 card-hover">
                                        <div className="card-body text-center">
                                            <i className="bi bi-mortarboard text-info mb-2" style={{ fontSize: "2rem" }}></i>
                                            <h3 className="h6 card-title">YKS Hazırlık</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <Link href="/metodoloji" className="text-decoration-none">
                                    <div className="card h-100 shadow-sm border-0 card-hover">
                                        <div className="card-body text-center">
                                            <i className="bi bi-diagram-3 text-success mb-2" style={{ fontSize: "2rem" }}></i>
                                            <h3 className="h6 card-title">Metodolojimiz</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
} 