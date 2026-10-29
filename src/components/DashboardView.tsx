import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Clock, Send, MessageSquare, Heart, 
  Settings, User, PlusCircle, AlertCircle, RefreshCw, Eye
} from 'lucide-react';
import { initialCommissions, initialMessages, collectionsData } from '../data';
import { Commission, Message, CollectionItem } from '../types';

interface DashboardViewProps {
  onSelectProduct: (item: CollectionItem) => void;
  onNavigate: (tab: string) => void;
}

export default function DashboardView({ onSelectProduct, onNavigate }: DashboardViewProps) {
  const [commissions, setCommissions] = useState<Commission[]>(initialCommissions);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [activeCommissionId, setActiveCommissionId] = useState('comm-1');

  // Client info
  const clientName = 'فاطمه السید';
  const clientEmail = 'fatima.alsayed@example.com';
  const clientMemberSince = 'عضو از آذر ۱۴۰۴';

  const activeCommission = commissions.find(c => c.id === activeCommissionId) || commissions[0];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: 'client',
      senderName: clientName,
      senderNameFa: clientName,
      text: inputText,
      time: 'Just now',
      timeFa: 'هم‌اکنون'
    };

    setMessages(prev => [...prev, newMsg]);
    setInputText('');

    // Simulate artisan automatic reply after 2 seconds!
    setTimeout(() => {
      const replies = [
        'درود بر شما فاطمه عزیز. پیام شما دریافت شد. در حال حاضر مشغول کار روی آستین‌ها هستم و کوک‌ها را هماهنگ با درخواست شما اصلاح می‌کنم.',
        'سلام فاطمه گرامی. پیام شما را ثبت کردم. استادکار فرح در ساعت ۱۲ امروز مجدداً با شما در تماس خواهند بود تا جزئیات را با هم بررسی کنیم.',
        'با احترام فاطمه عزیز. این تغییر کوچک به زیباتر ایستادن عبا بسیار کمک می‌کند. از پیشنهاد کمال‌گرایانه شما صمیمانه سپاسگزاریم.'
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];

      const systemReply: Message = {
        id: `msg-artisan-${Date.now()}`,
        sender: 'artisan',
        senderName: 'Master Artisan Farah',
        senderNameFa: 'استادکار فرح',
        text: randomReply,
        time: 'Just now',
        timeFa: 'هم‌اکنون'
      };
      setMessages(prev => [...prev, systemReply]);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10" dir="rtl" id="client-dashboard-container">
      {/* 1. CUSTOMER PROFILE HEADER CARD */}
      <div className="bg-emerald-deep text-white rounded-3xl p-8 border border-champagne/20 shadow-xl relative overflow-hidden mb-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,224,136,0.05),transparent_60%)]" />
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-champagne/10 border-2 border-champagne flex items-center justify-center text-champagne text-2xl font-serif">
              ف
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-serif text-champagne">{clientName}</h1>
                <span className="px-3 py-1 bg-champagne/10 border border-champagne/20 text-champagne text-xs rounded-full">مشتری ویژه VIP</span>
              </div>
              <p className="text-sm text-emerald-100/70">{clientEmail} • {clientMemberSince}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onNavigate('bespoke')}
              className="px-5 py-2.5 bg-champagne text-emerald-deep hover:bg-white transition-all text-xs md:text-sm font-semibold rounded-lg flex items-center gap-2 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>مشاوره سفارش جدید</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ==========================================
           COLUMN LEFT: COMMISSIONS TRACKER & TIMELINE
           ========================================== */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Active Commission Header Selection */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-emerald-deep flex items-center gap-2">
              <Clock className="w-5 h-5 text-champagne-dark" />
              <span>سفارش‌های فعال در آتلیه</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commissions.map(comm => (
                <button
                  key={comm.id}
                  onClick={() => setActiveCommissionId(comm.id)}
                  className={`p-4 rounded-xl border text-right transition-all cursor-pointer ${
                    activeCommissionId === comm.id
                      ? 'border-emerald-900 bg-emerald-50/20'
                      : 'border-gray-100 bg-gray-50/50 hover:bg-gray-50'
                  }`}
                >
                  <span className="block font-serif font-bold text-sm text-emerald-deep">{comm.titleFa}</span>
                  <span className="block text-xs text-gray-400 mt-1">{comm.typeFa}</span>
                  
                  {/* Miniature progress bar */}
                  <div className="mt-3 space-y-1">
                    <div className="flex justify-between text-[10px] text-gray-400 font-serif">
                      <span>پیشرفت</span>
                      <span>{comm.progress}%</span>
                    </div>
                    <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-800 transition-all duration-500"
                        style={{ width: `${comm.progress}%` }}
                      />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Selected Commission Status */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCommission.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${activeCommission.statusColor}`}>
                    {activeCommission.statusFa}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-emerald-deep pt-2">{activeCommission.titleFa}</h3>
                  <p className="text-xs text-gray-400 font-mono tracking-widest">{activeCommission.title} • {activeCommission.type}</p>
                </div>

                <div className="text-left">
                  <span className="text-xs text-gray-400 block">تحویل تخمینی</span>
                  <span className="text-sm font-semibold text-emerald-deep font-serif">{activeCommission.estimatedDeliveryFa}</span>
                </div>
              </div>

              {/* Real Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>فرآیند سوزن‌دوزی و زردوزی دستی</span>
                  <span className="font-bold">{activeCommission.progress}% کامل شده</span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden border border-gray-200/50">
                  <div 
                    className="h-full bg-emerald-900 bg-gradient-to-l from-emerald-950 to-champagne rounded-full transition-all duration-1000"
                    style={{ width: `${activeCommission.progress}%` }}
                  />
                </div>
              </div>

              {/* Commission technical choices */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h4 className="text-sm font-bold text-emerald-deep">مشخصات فنی و مواد اولیه سفارش</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
                  {activeCommission.detailsFa.map((det, idx) => (
                    <div key={idx} className="p-3 bg-gray-50/60 rounded-lg flex justify-between">
                      <span className="text-gray-400">{det.label}:</span>
                      <span className="font-semibold text-emerald-950 text-right">{det.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* History Tailoring Logs */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h4 className="text-sm font-bold text-emerald-deep">دفترچه گزارش سوزن‌دوز و استادکار</h4>
                <div className="relative border-r-2 border-champagne/30 pr-6 space-y-6">
                  {activeCommission.updates.map((upd, idx) => (
                    <div key={idx} className="relative">
                      {/* Circle indicator */}
                      <span className="absolute -right-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-900 border-2 border-white" />
                      
                      <div className="space-y-1">
                        <span className="text-[10px] text-gray-400 block font-mono">{upd.date}</span>
                        <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{upd.textFa}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* ==========================================
           COLUMN RIGHT: DIRECT MESSAGE CENTER
           ========================================== */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Chat Window */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[520px]">
            {/* Header chat */}
            <div className="p-5 bg-emerald-deep text-white border-b border-champagne/20 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-champagne/20 border border-champagne/40 flex items-center justify-center font-serif text-champagne">
                  ف
                </div>
                <div className="text-right">
                  <h3 className="text-sm font-semibold text-champagne">استادکار فرح (Farah)</h3>
                  <span className="text-[10px] text-emerald-100/80">پاسخ‌گویی مستقیم از کارگاه سوزن‌دوزی</span>
                </div>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse border border-white" />
            </div>

            {/* Message list */}
            <div className="p-5 flex-1 overflow-y-auto space-y-4 bg-stone-50/50">
              {messages.map(msg => {
                const isMe = msg.sender === 'client';
                return (
                  <div key={msg.id} className={`flex ${isMe ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-[85%] rounded-2xl p-4 shadow-2xs space-y-1 text-sm ${
                      isMe 
                        ? 'bg-emerald-deep text-white rounded-tr-none' 
                        : 'bg-white text-emerald-950 rounded-tl-none border border-gray-100'
                    }`}>
                      <span className="text-[10px] opacity-75 font-semibold block">
                        {isMe ? msg.senderNameFa : 'استادکار فرح'}
                      </span>
                      <p className="leading-relaxed text-xs md:text-sm">{msg.text}</p>
                      <span className="text-[9px] opacity-60 text-left block font-serif pt-1">
                        {msg.timeFa}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Input field */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                placeholder="پیامی بنویسید (مثلاً درخواست پرو یا تغییر طرح)..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-hidden focus:ring-1 focus:ring-champagne-dark"
              />
              <button
                type="submit"
                id="send-message-btn"
                className="p-2.5 bg-emerald-deep text-champagne hover:bg-champagne hover:text-emerald-deep transition-all rounded-lg cursor-pointer flex items-center justify-center"
              >
                <Send className="w-4 h-4 rotate-180" />
              </button>
            </form>
          </div>

          {/* Quick Wishlist preview */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-emerald-deep flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-600" />
              <span>شاهکارهای ذخیره‌شده شما</span>
            </h3>

            <div className="space-y-3">
              {collectionsData.slice(1, 3).map(item => (
                <div key={item.id} className="flex gap-3 p-2 bg-gray-50 rounded-xl items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <img 
                      src={item.imageUrl} 
                      alt={item.titleFa} 
                      className="w-12 h-12 rounded-lg object-cover" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="text-right space-y-0.5">
                      <span className="block text-xs font-bold text-emerald-deep">{item.titleFa}</span>
                      <span className="block text-[10px] text-gray-400 font-mono">{item.hoursOfStitching} ساعت دوخت</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProduct(item)}
                    className="p-1.5 bg-white border border-gray-200 text-emerald-deep hover:bg-emerald-deep hover:text-champagne transition-all rounded-lg cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
