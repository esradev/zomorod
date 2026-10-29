import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Heart, Menu, X, ArrowLeft, Instagram, 
  MapPin, Phone, Mail, Award, Compass, MessageCircle
} from 'lucide-react';
import { collectionsData } from './data';
import { CollectionItem, BespokeInquiry } from './types';

// Components
import HomeView from './components/HomeView';
import CollectionsView from './components/CollectionsView';
import BespokeWizard from './components/BespokeWizard';
import DashboardView from './components/DashboardView';
import HeritageView from './components/HeritageView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<CollectionItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Transition handler to navigate to product details in Collections Tab
  const handleSelectProduct = (product: CollectionItem | null) => {
    setSelectedProduct(product);
    setCurrentTab('collections');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Transition handler to start bespoke customization with a pre-selected product
  const handleInquireProduct = (product: CollectionItem) => {
    setSelectedProduct(product); // Keeps a reference if needed
    setCurrentTab('bespoke');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Simple submit bespoke notification
  const handleSubmitBespoke = (inquiry: BespokeInquiry, price: number, hours: number) => {
    console.log('Submitted custom inquiry:', inquiry, 'Price:', price, 'Hours:', hours);
  };

  const navItems = [
    { id: 'home', label: 'صفحه اصلی', desc: 'خانه' },
    { id: 'collections', label: 'مجموعه‌ها', desc: 'گالری آثار' },
    { id: 'bespoke', label: 'سفارش اختصاصی', desc: 'خدمات شخصی‌دوزی' },
    { id: 'dashboard', label: 'میز کار مشتری', desc: 'پیگیری سفارش' },
    { id: 'heritage', label: 'میراث ما', desc: 'داستان اصالت' }
  ];

  return (
    <div className="min-h-screen bg-luxury-bg text-luxury-text selection:bg-champagne selection:text-emerald-deep font-sans flex flex-col justify-between" dir="rtl">
      {/* EXQUISITE TOP ANNOUNCEMENT BAR */}
      <div className="bg-emerald-deep text-champagne text-center py-2 text-xs font-medium border-b border-champagne/10 tracking-wide font-sans">
        ✨ پذیرش تعداد محدود ۵ سفارش ویژه (Bespoke) برای تزیینات و رودوزی‌های اصیل اسلامی تا پایان ماه جاری ✨
      </div>

      {/* LUXURY STICKY NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-luxury-bg/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Brand Logo with bilingual styling */}
          <div 
            onClick={() => { setCurrentTab('home'); setSelectedProduct(null); }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-deep flex items-center justify-center border border-champagne/40 shadow-md group-hover:scale-105 transition-all">
              <Sparkles className="w-5 h-5 text-champagne" />
            </div>
            <div className="text-right">
              <span className="block text-lg font-bold text-emerald-deep font-serif tracking-tight leading-tight group-hover:text-champagne-dark transition-colors">
                زمرد و شامپاین
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                EMERALD & CHAMPAGNE
              </span>
            </div>
          </div>

          {/* Desktop Navigation Link Tabs */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentTab(item.id);
                  if (item.id !== 'collections') setSelectedProduct(null);
                }}
                className={`relative py-2 text-sm font-medium transition-all group cursor-pointer`}
              >
                <span className={`block transition-colors ${
                  currentTab === item.id ? 'text-emerald-deep font-bold' : 'text-gray-500 hover:text-emerald-950'
                }`}>
                  {item.label}
                </span>
                <span className="block text-[9px] text-gray-400/80 font-mono tracking-wider text-left">
                  {item.id.toUpperCase()}
                </span>
                
                {/* Golden indicator underline */}
                {currentTab === item.id && (
                  <motion.span 
                    layoutId="activeNavLine" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-champagne-dark rounded-full" 
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Header Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => { setCurrentTab('dashboard'); setSelectedProduct(null); }}
              id="header-client-portal-btn"
              className="px-4 py-2 bg-emerald-deep text-champagne hover:bg-champagne hover:text-emerald-deep border border-emerald-900 transition-all duration-300 rounded-lg text-xs font-semibold shadow-xs cursor-pointer"
            >
              میز کار مشتری (Fatima)
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-emerald-deep hover:text-champagne-dark lg:hidden cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* MOBILE COLLAPSIBLE NAVIGATION DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 shadow-lg relative z-40 overflow-hidden"
          >
            <div className="p-6 space-y-4 text-right">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentTab(item.id);
                    if (item.id !== 'collections') setSelectedProduct(null);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full py-2.5 text-base font-semibold border-b border-gray-50 last:border-0 ${
                    currentTab === item.id ? 'text-emerald-deep' : 'text-gray-500'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{item.label}</span>
                    <span className="text-xs text-gray-400 font-mono font-light">{item.desc}</span>
                  </div>
                </button>
              ))}

              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => {
                    setCurrentTab('dashboard');
                    setSelectedProduct(null);
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 py-3 text-center bg-emerald-deep text-champagne rounded-lg text-sm font-semibold cursor-pointer"
                >
                  ورود به میز کار مشتری
                </button>
                <button
                  onClick={() => {
                    setCurrentTab('bespoke');
                    setSelectedProduct(null);
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 py-3 text-center bg-champagne text-emerald-deep rounded-lg text-sm font-semibold cursor-pointer"
                >
                  سفارش تزیینات دستی
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CORE DYNAMIC VIEWS CONTAINER */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {currentTab === 'home' && (
              <HomeView 
                onNavigate={(tab) => {
                  setCurrentTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                onSelectProduct={handleSelectProduct}
              />
            )}

            {currentTab === 'collections' && (
              <CollectionsView 
                selectedProduct={selectedProduct} 
                onSelectProduct={(item) => setSelectedProduct(item)}
                onInquireProduct={handleInquireProduct}
              />
            )}

            {currentTab === 'bespoke' && (
              <BespokeWizard 
                initialProduct={selectedProduct} 
                onSubmitInquiry={handleSubmitBespoke}
              />
            )}

            {currentTab === 'dashboard' && (
              <DashboardView 
                onSelectProduct={handleSelectProduct}
                onNavigate={(tab) => {
                  setCurrentTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {currentTab === 'heritage' && (
              <HeritageView />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* BEAUTIFUL COMPOSITE FOOTER WITH ISLAMIC MOTIF DECORATION */}
      <footer className="bg-emerald-deep text-white border-t border-champagne/20 relative overflow-hidden">
        {/* Absolute Background Detail */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80')`, backgroundSize: 'cover' }} 
        />

        <div className="max-w-6xl mx-auto px-6 py-16 relative z-10 space-y-12">
          
          {/* Islamic Star / Floral Divider pattern in CSS */}
          <div className="flex justify-center items-center gap-4">
            <div className="h-[1px] bg-gradient-to-l from-transparent to-champagne flex-1" />
            <div className="w-8 h-8 rounded-full border border-champagne/40 flex items-center justify-center text-champagne transform rotate-45">
              <Sparkles className="w-4 h-4 transform -rotate-45" />
            </div>
            <div className="h-[1px] bg-gradient-to-r from-transparent to-champagne flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-right">
            
            {/* Box 1: Brand story */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif text-champagne font-bold">خانه طراحی «زمرد و شامپاین»</h3>
              <p className="text-xs text-emerald-100/70 leading-relaxed font-sans">
                تلفیقی بی‌همتا از سنت هزارساله زردوزی اسلامی، تزیینات دست‌ساز گرانبها و استانداردهای لوکس و باوقار برای بانوی اصیل امروزی.
              </p>
              <div className="flex gap-3 justify-start pt-2">
                <a href="#instagram" className="p-2 bg-emerald-950/60 rounded-full text-champagne hover:bg-champagne hover:text-emerald-deep transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#contact" className="p-2 bg-emerald-950/60 rounded-full text-champagne hover:bg-champagne hover:text-emerald-deep transition-all">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Box 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-champagne">خدمات و بخش‌ها</h4>
              <ul className="space-y-2.5 text-xs text-emerald-100/75 font-sans">
                {navItems.map(item => (
                  <li key={item.id}>
                    <button 
                      onClick={() => {
                        setCurrentTab(item.id);
                        setSelectedProduct(null);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="hover:text-champagne transition-colors cursor-pointer text-right"
                    >
                      {item.label} ({item.desc})
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3: Commitments */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-champagne">ارزش‌های کارگاه</h4>
              <ul className="space-y-2 text-xs text-emerald-100/70 font-sans">
                <li>• ۱۲۰+ ساعت سوزن‌دوزی برای هر لباس شب</li>
                <li>• استفاده از طلا و نخ‌های شمش عیار بالا</li>
                <li>• تاییدیه بین‌المللی اصالت صنایع دستی</li>
                <li>• گارانتی مرمت و خدمات مادام‌العمر</li>
              </ul>
            </div>

            {/* Box 4: Boutique Address info */}
            <div className="space-y-4 font-sans text-right">
              <h4 className="text-sm font-semibold text-champagne">تماس و حضور در آتلیه</h4>
              <ul className="space-y-3 text-xs text-emerald-100/75 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-champagne flex-shrink-0" />
                  <span>تهران، خیابان پاسداران، پلاک ۲۴، آتلیه طراحی زمرد و شامپاین (پذیرش صرفاً با هماهنگی قبلی)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-champagne flex-shrink-0" />
                  <span>۰۲۱-۲۲۰۰۳۳۴۴</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-champagne flex-shrink-0" />
                  <span>atelier@emeraldschampagne.com</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Trademark and details */}
          <div className="pt-8 border-t border-champagne/10 flex flex-col md:flex-row justify-between items-center text-xs text-emerald-200/50 gap-4 font-sans">
            <p>© {new Date().getFullYear()} زمرد و شامپاین (EMERALD & CHAMPAGNE). تمامی حقوق محفوظ است.</p>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-champagne transition-colors">قوانین و حریم خصوصی</a>
              <span>•</span>
              <a href="#terms" className="hover:text-champagne transition-colors">مراقبت مادام‌العمر آثار</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
