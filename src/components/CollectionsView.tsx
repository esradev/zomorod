import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, Sparkles, Heart, Search, Filter, 
  ChevronLeft, ShoppingBag, Check, ShieldAlert, Award
} from 'lucide-react';
import { collectionsData, accessoriesData } from '../data';
import { CollectionItem, AccessoryItem } from '../types';

interface CollectionsViewProps {
  selectedProduct: CollectionItem | null;
  onSelectProduct: (item: CollectionItem | null) => void;
  onInquireProduct: (item: CollectionItem) => void;
}

export default function CollectionsView({ 
  selectedProduct, 
  onSelectProduct, 
  onInquireProduct 
}: CollectionsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [addedAccessories, setAddedAccessories] = useState<string[]>([]);

  // Categories list in Persian & English
  const categories = [
    { id: 'all', nameFa: 'همه شاهکارها', nameEn: 'All Masterpieces' },
    { id: 'zardosi', nameFa: 'زردوزی اصیل', nameEn: 'Zardosi' },
    { id: 'crystals', nameFa: 'کریستال‌دوزی', nameEn: 'Crystals' },
    { id: 'pearls', nameFa: 'مرواریددوزی', nameEn: 'Pearls' },
    { id: 'flora', nameFa: 'گلدوزی سه‌بعدی', nameEn: 'Flora & Petals' }
  ];

  // Filtering logic
  const filteredItems = collectionsData.filter(item => {
    const matchesSearch = 
      item.titleFa.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.descriptionFa.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const toggleAccessory = (id: string) => {
    setAddedAccessories(prev =>
      prev.includes(id) ? prev.filter(accId => accId !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10" dir="rtl">
      <AnimatePresence mode="wait">
        {!selectedProduct ? (
          /* =======================================================
             SCREEN 1: THE COLLECTIONS PORTFOLIO GRID
             ======================================================= */
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-champagne-dark font-mono font-semibold">پورتفولیو آثار</span>
              <h1 className="text-3xl md:text-5xl font-serif text-emerald-deep leading-tight">
                پیش‌نمایش گالری پاییزه و زمستانه
              </h1>
              <p className="text-gray-500 text-sm md:text-base">
                تصاویری واقعی از لباس‌های مجلل و تزیینات اصیل دست‌دوز که زینت‌بخش گرانبها‌ترین لحظات شما خواهند بود.
              </p>
              <div className="w-16 h-0.5 bg-champagne-dark mx-auto" />
            </div>

            {/* Controls (Search & Category Filter) */}
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
              {/* Category buttons */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-emerald-deep text-champagne shadow-sm border border-champagne/30'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-transparent'
                    }`}
                  >
                    {cat.nameFa}
                  </button>
                ))}
              </div>

              {/* Search field */}
              <div className="relative w-full md:w-80">
                <Search className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="جستجوی نگاره یا مدل..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-hidden focus:ring-1 focus:ring-champagne-dark focus:border-champagne-dark focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Grid Display */}
            {filteredItems.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200 space-y-4">
                <Filter className="w-12 h-12 text-gray-300 mx-auto" />
                <h3 className="text-lg font-medium text-gray-600">اثری با این مشخصات یافت نشد</h3>
                <p className="text-sm text-gray-400">لطفاً کلیدواژه جستجو یا فیلتر دسته‌بندی را تغییر دهید.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map(item => {
                  const isFavorite = favorites.includes(item.id);
                  return (
                    <motion.div
                      layout
                      key={item.id}
                      onClick={() => onSelectProduct(item)}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full cursor-pointer"
                    >
                      {/* Image Frame */}
                      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                        <img
                          src={item.imageUrl}
                          alt={item.titleFa}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />

                        {/* Top controls: Category & Wishlist */}
                        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                          <span className="px-3 py-1 bg-emerald-deep text-champagne text-xs rounded-full border border-champagne/20 font-medium">
                            {item.categoryFa}
                          </span>
                          <button
                            onClick={(e) => toggleFavorite(item.id, e)}
                            className="p-2 bg-white/90 backdrop-blur-xs rounded-full text-emerald-deep hover:text-rose-600 hover:scale-110 shadow-xs transition-all cursor-pointer"
                          >
                            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-600 text-rose-600' : ''}`} />
                          </button>
                        </div>

                        {/* Stitching hours badge */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-white text-xs bg-emerald-deep/90 px-3 py-1.5 rounded-lg border border-champagne/20">
                          <Clock className="w-3.5 h-3.5 text-champagne" />
                          <span>{item.hoursOfStitching} ساعت دوخت دستی</span>
                        </div>
                      </div>

                      {/* Summary Section */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-xl font-serif text-emerald-deep group-hover:text-champagne-dark transition-colors">
                            {item.titleFa}
                          </h3>
                          <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">{item.title}</p>
                        </div>

                        <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                          {item.descriptionFa}
                        </p>

                        <div className="flex justify-between items-center pt-3 border-t border-gray-100 text-sm">
                          <span className="text-gray-400 font-mono text-xs">{item.goldFiligreeKarat || 'سفارشی'}</span>
                          <span className="font-semibold font-serif text-emerald-950">
                            {item.priceEstimate.toLocaleString('fa-IR')} تومان
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        ) : (
          /* =======================================================
             SCREEN 2: DETAILED PRODUCT SHOWCASE (e.g. Emerald Zardosi Abaya)
             ======================================================= */
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            className="space-y-12"
          >
            {/* Navigation back */}
            <button
              onClick={() => onSelectProduct(null)}
              className="flex items-center gap-2 text-emerald-900 hover:text-champagne-dark transition-colors cursor-pointer text-sm font-medium"
            >
              <ChevronLeft className="w-4 h-4 rotate-180" />
              <span>بازگشت به گالری مجموعه‌ها</span>
            </button>

            {/* Two-Column Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Column Left: Visual Enclosure */}
              <div className="lg:col-span-6 space-y-6">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl bg-gray-100">
                  <img
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.titleFa}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40" />
                </div>

                {/* Additional gallery grids if wanted, simulated beautiful placeholders */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square rounded-xl overflow-hidden border border-gray-100 bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&auto=format&fit=crop&q=80" 
                      alt="نخ طلایی" 
                      className="w-full h-full object-cover grayscale-25"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden border border-gray-100 bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&auto=format&fit=crop&q=80" 
                      alt="دوخت دستی" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden border border-gray-100 bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&auto=format&fit=crop&q=80" 
                      alt="تزیینات کریستال" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Column Right: Complete Artistic & Material Description */}
              <div className="lg:col-span-6 space-y-8 text-right">
                <div className="space-y-3">
                  <span className="px-3 py-1 bg-emerald-deep text-champagne text-xs rounded-full border border-champagne/20 font-medium">
                    {selectedProduct.categoryFa}
                  </span>
                  <h1 className="text-3xl md:text-5xl font-serif text-emerald-deep">
                    {selectedProduct.titleFa}
                  </h1>
                  <p className="text-gray-400 font-mono tracking-widest uppercase text-xs md:text-sm">{selectedProduct.title}</p>
                </div>

                <div className="w-16 h-1 bg-champagne-dark rounded" />

                {/* Price Estimate */}
                <div className="flex justify-between items-center bg-emerald-deep text-white p-6 rounded-2xl border border-champagne/20 shadow-md">
                  <div className="space-y-1">
                    <span className="text-xs text-champagne-light font-light block">تخمین حدودی ارزش اثر</span>
                    <span className="text-2xl font-semibold font-serif text-champagne">
                      {selectedProduct.priceEstimate.toLocaleString('fa-IR')} تومان
                    </span>
                  </div>
                  <div className="text-left text-xs text-champagne-light">
                    <Clock className="w-4 h-4 inline-block ml-1" />
                    <span>تولید اختصاصی بر اساس اندازه‌ها</span>
                  </div>
                </div>

                {/* Overview Text */}
                <p className="text-gray-700 leading-relaxed text-base">
                  {selectedProduct.descriptionFa}
                </p>

                {/* Key Technical Highlights (120+ Hours, Hand placed gold, etc) */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl space-y-1 text-center">
                    <span className="text-xs text-gray-400 block">مدت‌زمان سوزن‌دوزی</span>
                    <span className="text-lg font-serif font-bold text-emerald-deep">{selectedProduct.hoursOfStitching}+ ساعت</span>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl space-y-1 text-center">
                    <span className="text-xs text-gray-400 block">تزیین طلاکاری</span>
                    <span className="text-lg font-serif font-bold text-emerald-deep">{selectedProduct.goldFiligreeKarat || 'سفارشی'}</span>
                  </div>
                </div>

                {/* Materials Bulletins */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-emerald-deep flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-champagne-dark" />
                    <span>مواد اولیه فاخر و گرانبها</span>
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedProduct.materials.map((mat, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-emerald-50/40 p-3 rounded-lg border border-emerald-100/30 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-champagne-dark" />
                        <span className="font-medium text-emerald-950">{mat.nameFa}</span>
                        <span className="text-xs text-gray-400 font-mono mr-auto">{mat.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Elaborated Artisanal Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-emerald-deep">ویژگی‌های تزیینی و اصالت شاهکار</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {selectedProduct.detailsFa.map((det, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-champagne-dark font-bold font-serif">•</span>
                        <span>{det}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* The Hand of Artisan biography link */}
                <div className="p-5 bg-stone-50 border border-stone-200/60 rounded-xl flex items-center gap-4">
                  <Award className="w-8 h-8 text-champagne-dark flex-shrink-0" />
                  <div className="space-y-1">
                    <span className="text-xs text-gray-400 block">استادکاران سوزن‌دوز</span>
                    <span className="text-sm font-semibold text-emerald-deep">{selectedProduct.artisansFa.join(' و ')}</span>
                    <p className="text-xs text-gray-500">نظارت بر تمامی کارهای سوزن‌دوزی، اتوکاری و گارانتی همیشگی اثر.</p>
                  </div>
                </div>

                {/* ==========================================
                   COMPLETE THE LOOK ACCESSORIES
                   ========================================== */}
                <div className="space-y-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-emerald-deep flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-champagne-dark" />
                    <span>تکمیل هماهنگی لباس (Complete The Look)</span>
                  </h3>
                  <p className="text-xs text-gray-400">
                    اکسسوری‌های طراحی‌شده هماهنگ با این اثر که جلوه و باوقاری لباس شب شما را به کمال می‌رسانند:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {accessoriesData.map(acc => {
                      const isAdded = addedAccessories.includes(acc.id);
                      return (
                        <div key={acc.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden p-3 shadow-xs space-y-3 flex flex-col justify-between">
                          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-50">
                            <img
                              src={acc.imageUrl}
                              alt={acc.nameFa}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="space-y-1 text-right">
                            <h4 className="text-xs font-semibold text-emerald-deep line-clamp-1">{acc.nameFa}</h4>
                            <span className="text-xs font-serif text-emerald-950 block">{acc.priceFa}</span>
                          </div>
                          <button
                            onClick={() => toggleAccessory(acc.id)}
                            className={`w-full py-2 text-xs font-medium rounded-md transition-all cursor-pointer ${
                              isAdded 
                                ? 'bg-emerald-deep text-champagne border border-champagne/20' 
                                : 'bg-gray-50 text-emerald-deep border border-gray-100 hover:bg-emerald-50'
                            }`}
                          >
                            {isAdded ? (
                              <span className="flex items-center justify-center gap-1">
                                <Check className="w-3 h-3" />
                                <span>اضافه شده</span>
                              </span>
                            ) : (
                              <span>افزودن به مشاوره</span>
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Primary CTA: Custom tailor request */}
                <div className="pt-6 flex gap-4">
                  <button
                    onClick={() => onInquireProduct(selectedProduct)}
                    id="inquire-product-btn"
                    className="flex-1 py-4 bg-champagne text-emerald-deep hover:bg-white border border-champagne hover:scale-103 shadow-lg transition-all font-semibold rounded-lg text-center cursor-pointer"
                  >
                    ارسال جهت شخصی‌سازی و ثبت در سفارشی‌ها (Bespoke)
                  </button>
                  <button
                    onClick={() => onSelectProduct(null)}
                    className="px-6 py-4 bg-transparent text-emerald-deep border border-emerald-900 hover:bg-emerald-50 transition-colors rounded-lg text-sm"
                  >
                    انصراف
                  </button>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
