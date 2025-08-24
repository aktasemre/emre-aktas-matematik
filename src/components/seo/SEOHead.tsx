import Head from 'next/head'

interface SEOHeadProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  author?: string
  keywords?: string[]
  publishedTime?: string
  modifiedTime?: string
  noindex?: boolean
  structuredData?: any
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  author = 'Emre Aktaş',
  keywords = [],
  publishedTime,
  modifiedTime,
  noindex = false,
  structuredData
}: SEOHeadProps) {
  const baseUrl = 'https://matematik-akademi.com'
  const fullUrl = canonical ? `${baseUrl}${canonical}` : baseUrl
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Matematik Akademi" />
      <meta property="og:locale" content="tr_TR" />
      
      {/* Article specific */}
      {ogType === 'article' && (
        <>
          <meta property="article:author" content={author} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:publisher" content="https://matematik-akademi.com" />
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content="@emreaktas" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Matematik Akademi" />
      <meta name="apple-mobile-web-app-title" content="Matematik Akademi" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    </Head>
  )
}
