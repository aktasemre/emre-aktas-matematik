import React from 'react';
import styles from '@/styles/DersDetayPage.module.css'; // Stil dosyasını kullanacağız

const DersDetayTemplate = ({ 
  pageTitle,
  pageSubtitle,
  programDescription,
  methodologyTitle = 'Nasıl Çalışıyoruz? (Metodolojimiz)', // Varsayılan başlık
  methodologySteps = [], // Varsayılan boş dizi
  additionalInfo = null, // Metodoloji sonrası ek bilgi (opsiyonel)
  ctaTitle,
  ctaText,
  // ctaLinkHref, // İleride eklenebilir
  // ctaLinkText, // İleride eklenebilir
}) => {
  return (
    <main className={styles.dersDetayPageContainer || 'container py-5'}>
      <div className={styles.pageHeader || 'text-center mb-5'}>
        <h1 className={styles.pageTitle || 'display-4 fw-bold'}>{pageTitle}</h1>
        {pageSubtitle && <p className={styles.pageSubtitle || 'lead text-muted'}>{pageSubtitle}</p>}
      </div>

      {programDescription && (
        <div className={styles.contentSection || 'mb-5'}>
          {/* Programın amacı/kapsamı gibi genel açıklamalar için */}
          {typeof programDescription === 'string' ? (
            <p className={styles.sectionText}>{programDescription}</p>
          ) : (
            programDescription // JSX veya React Node olarak da geçilebilir
          )}
        </div>
      )}

      {methodologySteps && methodologySteps.length > 0 && (
        <div className={styles.contentSection || 'mb-5'}>
          <h2 className={styles.sectionTitle || 'h3 mb-3'}>{methodologyTitle}</h2>
          {/* Opsiyonel olarak metodolojiye giriş metni eklenebilir */}
          {/* <p className={styles.sectionText}>Açıklama...</p> */}
          <ul className={styles.methodList || 'list-group list-group-flush mb-4'}>
            {methodologySteps.map((step, index) => (
              <li key={index} className={styles.methodListItem || 'list-group-item'}>
                <strong>{step.title}:</strong> {step.description}
              </li>
            ))}
          </ul>
          {additionalInfo && (
            typeof additionalInfo === 'string' ? (
              <p className={styles.sectionText}>{additionalInfo}</p>
            ) : (
              additionalInfo // JSX veya React Node olarak da geçilebilir
            )
          )}
        </div>
      )}

      {ctaTitle && ctaText && (
        <div className={styles.ctaSection || 'text-center'}> 
          <h2 className={styles.ctaTitle || 'h4 mb-3'}>{ctaTitle}</h2>
          <p className={styles.ctaText || 'mb-4'}>{ctaText}</p>
          {/* İletişim linki veya butonu eklenebilir */}
          {/* {ctaLinkHref && ctaLinkText && 
              <Link href={ctaLinkHref} className="btn btn-primary btn-lg">{ctaLinkText}</Link> 
          } */}
        </div>
      )}

    </main>
  );
};

export default DersDetayTemplate; 