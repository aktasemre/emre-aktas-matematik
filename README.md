# Özel Ders Platformu

## Proje Hakkında
Bu proje, LGS, YKS ve çeşitli branşlarda özel ders hizmeti sunan modern bir Next.js tabanlı web uygulamasıdır. Kullanıcılar, ders programlarını inceleyebilir, başvuru yapabilir ve eğitim metodolojisi hakkında bilgi alabilir.

## Kurulum

1. **Gereksinimler:**
   - Node.js >= 18
   - npm veya yarn

2. **Projeyi Klonlayın:**
   ```bash
   git clone <repo-url>
   cd ozel-ders
   ```

3. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   # veya
   yarn install
   ```

4. **Geliştirme Sunucusunu Başlatın:**
   ```bash
   npm run dev
   # veya
   yarn dev
   ```

5. **Uygulamayı Açın:**
   - [http://localhost:3000](http://localhost:3000)

## Proje Yapısı

- `src/app/` : Sayfa ve route dosyaları (Next.js app router)
- `src/components/` : Tüm tekrar kullanılabilir React bileşenleri
- `src/constants.js` : Sabitler ve global değişkenler
- `src/styles/` : CSS ve CSS Module dosyaları
- `public/` : Statik dosyalar ve görseller

## Ana Bileşenler ve Kullanım Örnekleri

### 1. Button Bileşeni

`src/components/common/Button.js`

**Kullanım:**
```jsx
<Button
  variant="primary"
  size="medium"
  onClick={() => alert('Tıklandı!')}
  iconLeft={<FaPhone />}
  iconRight={<FaArrowRight />}
  disabled={false}
  fullWidth={false}
>
  Buton Metni
</Button>
```

**Props Açıklamaları:**
- `variant`: 'primary' | 'secondary' | 'success' | 'outline' | 'text' (Butonun stilini belirler)
- `size`: 'small' | 'medium' | 'large'
- `onClick`: (opsiyonel) Tıklama olayı
- `href`: (opsiyonel) Link olarak kullanmak için
- `iconLeft`, `iconRight`: (opsiyonel) Sol/sağ ikon
- `disabled`: (opsiyonel) Butonu pasif yapar
- `fullWidth`: (opsiyonel) Butonu tam genişlikte yapar
- `children`: Butonun içeriği

### 2. DersDetayTemplate Bileşeni

`src/components/dersler/DersDetayTemplate.js`

**Kullanım:**
```jsx
<DersDetayTemplate
  title="Ders Başlığı"
  subtitle="Açıklama"
  imagePath="/images/ornek.jpg"
  altText="Açıklama"
  methodologySteps={stepsArray}
  ctaTitle="CTA Başlığı"
  ctaText="CTA Açıklaması"
  contactFormSource="kaynakKodu"
>
  {/* Ekstra içerik veya açıklama */}
</DersDetayTemplate>
```

**Props Açıklamaları:**
- `title`: Sayfa başlığı
- `subtitle`: Alt başlık
- `imagePath`: Üst görsel yolu
- `altText`: Görsel için açıklama
- `methodologySteps`: [{title, description}] formatında metodoloji adımları
- `ctaTitle`: CTA başlığı
- `ctaText`: CTA açıklaması
- `contactFormSource`: Formun hangi sayfadan geldiğini belirtir
- `children`: (opsiyonel) Ekstra içerik

### 3. Header ve Footer Bileşenleri

- `Header.js` ve `Footer.js` otomatik olarak layout içinde kullanılır, ekstra konfigürasyon gerektirmez.

### 4. Diğer Bileşenler
- `Hero`, `Cta`, `Methodology`, `Stats`, `Testimonials` gibi ana sayfa bileşenleri de props ile özelleştirilebilir.

## Geliştirme ve Katkı
- Kodunuzu göndermeden önce linter ve formatlayıcıdan geçirin.
- Bileşenler için propTypes veya TypeScript tipi kullanmaya özen gösterin.
- Her yeni bileşen için kısa bir kullanım örneği ve prop açıklaması ekleyin.

## Lisans
MIT
