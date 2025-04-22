'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Ayşe Yılmaz',
    role: 'Lise Öğrencisi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Matematik dersinden her zaman korkardım, ama Emre hocam sayesinde şimdi en sevdiğim ders haline geldi. YKS için özgüvenle hazırlanıyorum artık.',
    rating: 5
  },
  {
    id: 2,
    name: 'Mehmet Kaya',
    role: 'Üniversite Öğrencisi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Bilgisayar Mühendisliği eğitimim sırasında zorlandığım programlama dersleri için aldığım özel dersler sayesinde stajda diğer öğrencilerden çok daha ilerideydim. Emre hocam harika bir eğitimci!',
    rating: 5
  },
  {
    id: 3,
    name: 'Zeynep Öztürk',
    role: 'Veli',
    avatar: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Oğlum için aldığımız özel dersler, ona yurt dışı eğitim fırsatlarının kapısını açtı. Emre hoca profesyonel ve sabırlı yaklaşımıyla çocuğumun başarısında büyük pay sahibi.',
    rating: 5
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Öğrencilerimizin Deneyimleri</h2>
          <p className={styles.subtitle}>
            Başarı hikayelerini kendi ağızlarından dinleyin
          </p>
        </div>

        <div className={styles.carousel}>
          <div className={styles.slide}>
            <div className={styles.quote}>
              <svg className={styles.quoteIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" fill="currentColor"/>
              </svg>
              <p className={styles.testimonialContent}>
                {testimonials[activeTestimonial].content}
              </p>

              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={i < testimonials[activeTestimonial].rating ? styles.starFilled : styles.star}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className={styles.author}>
              <div className={styles.avatar}>
                <Image
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  width={60}
                  height={60}
                  className={styles.avatarImage}
                />
              </div>
              <div className={styles.info}>
                <h4 className={styles.name}>{testimonials[activeTestimonial].name}</h4>
                <p className={styles.role}>{testimonials[activeTestimonial].role}</p>
              </div>
            </div>
          </div>

          <div className={styles.controls}>
            <button className={styles.controlBtn} onClick={handlePrev}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/>
              </svg>
            </button>
            <div className={styles.indicators}>
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`${styles.indicator} ${i === activeTestimonial ? styles.active : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                />
              ))}
            </div>
            <button className={styles.controlBtn} onClick={handleNext}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 