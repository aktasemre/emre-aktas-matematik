import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Form validasyon şeması
const contactSchema = z.object({
  firstName: z.string().min(2, 'Ad en az 2 karakter olmalıdır'),
  lastName: z.string().min(2, 'Soyad en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  phone: z.string().min(10, 'Geçerli bir telefon numarası giriniz'),
  subject: z.string().min(1, 'Lütfen bir konu seçiniz'),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Form validasyonu
    const validatedData = contactSchema.parse(body)
    
    // Burada e-posta gönderme, veritabanına kaydetme gibi işlemler yapılabilir
    // Şimdilik sadece başarılı yanıt döndürüyoruz
    
    console.log('İletişim formu gönderildi:', validatedData)
    
    // E-posta gönderme simülasyonu (gerçek uygulamada nodemailer veya başka bir servis kullanılır)
    // await sendEmail(validatedData)
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.' 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('İletişim formu hatası:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Form verilerinde hata var',
          errors: error.errors 
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.' 
      },
      { status: 500 }
    )
  }
}
