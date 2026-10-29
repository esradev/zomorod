import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sprout, ShieldCheck, Award, ShieldAlert, Heart } from 'lucide-react';
import { heritageHistory } from '../data';

export default function HeritageView() {
  const h = heritageHistory;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-20" dir="rtl" id="heritage-view-container">
      {/* 1. INTRO EPIC BANNER */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-champagne-dark font-mono font-bold block">کیمیای اصالت اسلامی</span>
        <h1 className="text-3xl md:text-5xl font-serif text-emerald-deep leading-tight">
          {h.title}
        </h1>
        <p className="text-sm font-mono uppercase tracking-widest text-gray-400">{h.subtitle}</p>
        <div className="w-16 h-1 bg-champagne-dark mx-auto rounded" />
      </section>

      {/* 2. SPLENDID BACKGROUND QUOTE CARRIER */}
      <section className="bg-emerald-deep text-white p-10 md:p-14 rounded-3xl text-center relative overflow-hidden border border-champagne/20 shadow-xl">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1561347181-a630a298569e?w=800&auto=format&fit=crop&q=80')` }}
        />
        <div className="relative z-10 space-y-6">
          <p className="text-xl md:text-3xl font-serif text-champagne tracking-wide leading-relaxed">
            {h.quote}
          </p>
          <div className="space-y-1">
            <span className="text-sm font-bold block text-champagne-light">{h.author}</span>
            <span className="text-xs text-emerald-200/70">تاسیس خانه طراحی پایدار تزیینات تجملی</span>
          </div>
        </div>
      </section>

      {/* 3. HISTORIC TEXTS GIRD */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6 leading-relaxed text-gray-700 text-sm md:text-base">
          {h.storyParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-emerald-deep">
            <Award className="w-6 h-6 text-champagne-dark" />
            <h3 className="font-bold">تاییدیه‌ها و استانداردهای لوکس</h3>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            کارگاه ما با ثبت رسمی الگوهای ابداعی و پیاده‌سازی گلدوزی‌های سه‌بعدی ابریشم، متعهد به ارتقای صنایع دستی اسلامی در سطح تراز اول مد جهانی است.
          </p>
          <ul className="space-y-2 text-xs text-gray-600">
            <li>• ثبت نشان اصالت هنر دستی در یونسکو</li>
            <li>• استفاده از طلاکاری سنتی عیار ۲۴ خالص</li>
            <li>• گواهینامه تجارت عادلانه تامین‌کنندگان مروارید</li>
          </ul>
        </div>
      </section>

      {/* 4. MASTER ARTISAN SPOTLIGHT */}
      <section className="bg-stone-50 p-8 md:p-12 rounded-3xl border border-stone-200/60">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-4 aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden shadow-md bg-stone-100">
            <img 
              src={h.artisanFarah.imageUrl} 
              alt={h.artisanFarah.name} 
              className="w-full h-full object-cover grayscale-15 hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="md:col-span-8 space-y-6 text-right">
            <div className="space-y-1">
              <span className="text-xs text-champagne-dark font-mono font-bold block">{h.artisanFarah.role}</span>
              <h3 className="text-2xl md:text-3xl font-serif text-emerald-deep">{h.artisanFarah.name}</h3>
            </div>

            <div className="w-16 h-0.5 bg-champagne-dark" />

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {h.artisanFarah.bio}
            </p>

            <div className="inline-flex items-center gap-2 p-3 bg-white rounded-lg border border-stone-200 text-xs text-emerald-950 font-medium">
              <Sparkles className="w-4 h-4 text-champagne-dark" />
              <span>تمام آثار زیر نظر مستقیم استادکار فرح طراحی، سوزن‌دوزی و مرمت می‌شوند.</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. ETHICAL COMMITMENTS CARDS */}
      <section className="space-y-10">
        <h3 className="text-2xl font-serif text-emerald-deep text-center">تعهدهای اخلاقی و استانداردهای پایداری</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {h.commitments.map((item, idx) => {
            const Icon = idx === 0 ? Sprout : idx === 1 ? ShieldCheck : Heart;
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xs space-y-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-900 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif text-emerald-deep">{item.title}</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
