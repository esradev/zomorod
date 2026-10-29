import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Clock, ShieldCheck, ArrowLeft, Heart, Eye } from 'lucide-react';
import { collectionsData } from '../data';
import { CollectionItem } from '../types';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
  onSelectProduct: (item: CollectionItem) => void;
}

export default function HomeView({ onNavigate, onSelectProduct }: HomeViewProps) {
  // Let's showcase 3 items in the Home bento grid
  const featuredItems = collectionsData.slice(0, 3);

  return (
    <div className="space-y-20 pb-16" dir="rtl">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-emerald-deep text-white rounded-3xl mt-4 mx-4 md:mx-6 shadow-2xl border border-champagne/20">
        {/* Background Image with elegant emerald overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40 scale-105 transition-transform duration-10000"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1600&auto=format&fit=crop&q=80')` }}
        />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-emerald-deep to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-champagne/10 border border-champagne/30 text-champagne text-xs md:text-sm tracking-wide"
          >
            <Sparkles className="w-4 h-4" />
            <span>تزیینات دستی و اصیل برای بانوی مدرن و باوقار</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-serif text-champagne tracking-tight leading-tight"
          >
            «زمرد و شامپاین»
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed font-light font-serif"
          >
            EMERALD & CHAMPAGNE
            <span className="block mt-2 font-sans text-sm md:text-base text-champagne-light">
              سمفونی سوزن، مروارید و طلا بر روی نفیس‌ترین حریر و مخمل روزگار
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <button
              onClick={() => onNavigate('bespoke')}
              id="hero-bespoke-btn"
              className="px-8 py-4 w-full sm:w-auto bg-champagne text-emerald-deep hover:bg-white transition-all duration-300 font-medium rounded-lg text-base shadow-lg hover:shadow-champagne/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>سفارش اختصاصی (Bespoke)</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('collections')}
              id="hero-collections-btn"
              className="px-8 py-4 w-full sm:w-auto bg-transparent text-champagne border border-champagne hover:bg-champagne/10 transition-all duration-300 font-medium rounded-lg text-base flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>مشاهده مجموعه‌ها</span>
            </button>
          </motion.div>
        </div>

        {/* Floating indicators */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-xs text-champagne/70 font-mono tracking-widest hidden md:flex">
          <div className="flex items-center gap-2">
            <span>24K GOLD FILIGREE</span>
          </div>
          <div className="flex items-center gap-2">
            <span>HEIRLOOM QUALITY</span>
          </div>
        </div>
      </section>

      {/* 2. THE BRAND PHILOSOPHY / INTRO */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs text-champagne-dark uppercase tracking-widest font-mono">داستان اصالت ما</div>
            <h2 className="text-3xl md:text-5xl font-serif text-emerald-deep leading-tight">
              سمفونی کوک‌های صبورانه و ابریشم خالص
            </h2>
            <div className="w-20 h-1 bg-champagne-dark rounded" />
          </div>
          <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              هر اثر در خانه طراحی <strong>«زمرد و شامپاین»</strong>، گواهی بر هنر صبورانه و رو به فراموشی گلدوزی‌های سنتی و زردوزی اسلامی است. استادکاران ما صدها ساعت زمان گرانبها را صرف چیدن دستی و میلی‌متری هر نگین، کریستال سواروسکی و مروارید شامپاینی می‌کنند.
            </p>
            <p className="text-emerald-900 font-medium font-serif italic text-lg border-r-4 border-champagne-dark pr-4">
              «شکوه و زیبایی تنها دیده نمی‌شود، بلکه در سنگینی باوقار ابریشم و جان و روح نفهته در هر کوک سوزن احساس می‌شود.»
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE BENEFITS (GRID WITH CHROME CARDS) */}
      <section className="bg-emerald-deep py-20 px-6 rounded-3xl mx-4 md:mx-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,224,136,0.08),transparent_50%)]" />
        
        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-champagne">تعهد ما به کمال بی‌همتا</h2>
            <p className="text-emerald-100/80 text-sm md:text-base">
              تلفیقی بی‌نظیر از استانداردهای لوکس پاریسی و اصالت تزیینات اصیل شرقی
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-emerald-950/40 p-8 rounded-2xl border border-champagne/10 hover:border-champagne/30 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-full bg-champagne/10 flex items-center justify-center text-champagne group-hover:bg-champagne group-hover:text-emerald-deep transition-all duration-300">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-champagne">+۱۲۰ ساعت هنر دستی خالص</h3>
              <p className="text-sm text-emerald-100/70 leading-relaxed">
                هر لباس شاهکار منحصربه‌فردی است که بر اساس تاییدیه کارگاه، بیش از ۱۲۰ ساعت زمان برای سوزن‌دوزی و زردوزی دستی آن اختصاص می‌یابد.
              </p>
            </div>

            <div className="bg-emerald-950/40 p-8 rounded-2xl border border-champagne/10 hover:border-champagne/30 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-full bg-champagne/10 flex items-center justify-center text-champagne group-hover:bg-champagne group-hover:text-emerald-deep transition-all duration-300">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-champagne">ملیله‌دوزی و زردوزی طلای ۲۴ عیار</h3>
              <p className="text-sm text-emerald-100/70 leading-relaxed">
                استفاده منحصربه‌فرد از نخ‌های شمش طلا و نقره سنتی عتیقه عیار بالا برای دستیابی به درخشش اصیل و ماندگاری جاودانه‌ نسل‌ها.
              </p>
            </div>

            <div className="bg-emerald-950/40 p-8 rounded-2xl border border-champagne/10 hover:border-champagne/30 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-full bg-champagne/10 flex items-center justify-center text-champagne group-hover:bg-champagne group-hover:text-emerald-deep transition-all duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-champagne">مراقبت و گارانتی مادام‌العمر</h3>
              <p className="text-sm text-emerald-100/70 leading-relaxed">
                آثار ما دارایی گرانبهایی هستند. ما خدمات ترمیم، سایزبندی و احیای مجانی تاروپود را به صورت همیشگی تضمین می‌کنیم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PREVIEW COLLECTIONS / BENTO GRID */}
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-gray-200 pb-6">
          <div className="space-y-2 text-right">
            <span className="text-xs font-mono uppercase tracking-widest text-champagne-dark">پیش‌نمایش کارگاه فصلی</span>
            <h2 className="text-3xl md:text-4xl font-serif text-emerald-deep">مجموعه‌های نفیس و برگزیده</h2>
          </div>
          <button
            onClick={() => onNavigate('collections')}
            className="text-sm font-medium text-emerald-900 hover:text-champagne-dark flex items-center gap-1 transition-all group cursor-pointer"
          >
            <span>مشاهده تمام آثار</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bento-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {featuredItems.map((item, idx) => {
            // Layout classes based on index to form a beautiful bento style
            const colSpan = idx === 0 ? 'md:col-span-8' : 'md:col-span-4';
            return (
              <div
                key={item.id}
                id={`bento-item-${item.id}`}
                className={`${colSpan} group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between`}
              >
                {/* Image and Badge */}
                <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto md:h-80">
                  <img
                    src={item.imageUrl}
                    alt={item.titleFa}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />
                  
                  {/* Overlay Category Badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 bg-emerald-deep text-champagne text-xs rounded-full font-medium border border-champagne/30">
                    {item.categoryFa}
                  </span>
                  
                  {/* Overlay Stitching Hours */}
                  <span className="absolute bottom-4 right-4 flex items-center gap-1.5 text-white text-xs font-serif bg-emerald-deep/80 backdrop-blur-xs px-3 py-1 rounded-full border border-champagne/20">
                    <Clock className="w-3.5 h-3.5 text-champagne" />
                    <span>{item.hoursOfStitching} ساعت دوخت دستی</span>
                  </span>
                </div>

                {/* Info Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-serif text-emerald-deep group-hover:text-champagne-dark transition-colors">
                      {item.titleFa}
                    </h3>
                    <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">{item.title}</p>
                  </div>
                  
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {item.descriptionFa}
                  </p>

                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <button
                      onClick={() => onSelectProduct(item)}
                      className="px-4 py-2 bg-emerald-deep text-champagne hover:bg-champagne hover:text-emerald-deep transition-all duration-300 rounded text-xs font-medium flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>جزئیات شاهکار</span>
                    </button>
                    <span className="text-sm font-semibold text-emerald-950 font-serif">
                      {item.priceEstimate.toLocaleString('fa-IR')} تومان
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. DYNAMIC CALL TO ACTION - CREATE LEGACY */}
      <section className="relative py-24 px-6 bg-emerald-deep text-white rounded-3xl mx-4 md:mx-6 overflow-hidden shadow-2xl">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?w=1600&auto=format&fit=crop&q=80')` }}
        />
        
        {/* Fine gold borders and details to look extra luxurious */}
        <div className="absolute inset-4 border border-champagne/10 rounded-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <span className="text-xs text-champagne tracking-widest font-mono uppercase block">تجربه شاهکار شخصی</span>
          <h2 className="text-3xl md:text-5xl font-serif text-champagne leading-tight">
            رویای خود را به کوک‌های ماندگار تبدیل کنید
          </h2>
          <p className="text-emerald-100/90 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            از طریق فرآیند ۴مرحله‌ای و خلاق سفارش اختصاصی (Bespoke)، لباس دلخواه خود را طراحی کنید. تمام انتخاب‌های شما توسط ماهرترین استادکار سوزن‌دوز خاورمیانه بررسی، برآورد و تولید خواهد شد.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('bespoke')}
              className="px-8 py-4 bg-champagne text-emerald-deep hover:bg-white hover:scale-105 transition-all duration-300 font-medium rounded-lg text-base shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>آغاز فرآیند طراحی اختصاصی</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('heritage')}
              className="px-8 py-4 bg-transparent text-champagne border border-champagne/40 hover:bg-champagne/10 transition-all duration-300 rounded-lg text-base cursor-pointer"
            >
              <span>گفتگو با استادکار فرح</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
