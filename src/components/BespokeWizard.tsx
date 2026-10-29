import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, CheckCircle2, Sliders, Ruler, Send, 
  Upload, HelpCircle, ArrowLeft, ArrowRight, Clock, ShieldCheck
} from 'lucide-react';
import { BespokeInquiry, CollectionItem } from '../types';

interface BespokeWizardProps {
  initialProduct?: CollectionItem | null;
  onSubmitInquiry: (inquiry: BespokeInquiry, priceEstimate: number, hoursEstimate: number) => void;
}

const PRESET_COLORS = [
  { name: 'سبز زمردی سلطنتی', hex: '#002215' },
  { name: 'شامپاینی متالیک', hex: '#ffe088' },
  { name: 'مشکی شبانه', hex: '#0d0d0e' },
  { name: 'صدفی براق', hex: '#fbf9f8' },
  { name: 'یاقوتی عمیق', hex: '#4a0e17' }
];

export default function BespokeWizard({ initialProduct, onSubmitInquiry }: BespokeWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [garmentType, setGarmentType] = useState(
    initialProduct ? (initialProduct.id.includes('kaftan') ? 'kaftan' : 'abaya') : 'abaya'
  );
  const [fabric, setFabric] = useState('velvet');
  const [colorOption, setColorOption] = useState('emerald');
  const [customColor, setCustomColor] = useState('#002215');
  const [motifStyle, setMotifStyle] = useState('arabesque');
  const [density, setDensity] = useState(3); // 1 to 5 scale
  
  const [measurements, setMeasurements] = useState({
    height: '',
    bust: '',
    waist: '',
    hips: '',
    notes: ''
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Estimator Logic
  const calculateEstimates = () => {
    let basePrice = 80000000; // in Tomans
    let baseHours = 60;

    // Garment multiplier
    if (garmentType === 'kaftan') { basePrice += 20000000; baseHours += 20; }
    if (garmentType === 'gown') { basePrice += 40000000; baseHours += 35; }
    if (garmentType === 'cape') { basePrice += 15000000; baseHours += 10; }

    // Fabric multiplier
    if (fabric === 'velvet') { basePrice += 15000000; baseHours += 15; }
    if (fabric === 'organza') { basePrice += 10000000; baseHours += 10; }
    if (fabric === 'chiffon') { basePrice += 5000000; baseHours += 5; }

    // Density multiplier
    basePrice += (density - 1) * 15000000;
    baseHours += (density - 1) * 20;

    // Motif multiplier
    if (motifStyle === 'arabesque') { basePrice += 10000000; baseHours += 15; }
    if (motifStyle === 'geometric') { basePrice += 8000000; baseHours += 10; }

    return { price: basePrice, hours: baseHours };
  };

  const { price, hours } = calculateEstimates();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMeasurements(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Drag and Drop files
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const triggerSubmit = () => {
    const inquiry: BespokeInquiry = {
      garmentType,
      fabric,
      customColor: colorOption === 'custom' ? customColor : PRESET_COLORS.find(c => c.hex === customColor)?.name || customColor,
      paletteOption: colorOption,
      motifStyle,
      density,
      measurements,
      attachments: uploadedFile ? [uploadedFile.name] : []
    };
    
    onSubmitInquiry(inquiry, price, hours);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10" dir="rtl" id="bespoke-wizard-container">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl"
          >
            {/* Header Title */}
            <div className="space-y-2 text-center">
              <span className="text-xs uppercase tracking-widest text-champagne-dark font-mono font-bold">فرآیند ۴ مرحله‌ای آتلیه</span>
              <h1 className="text-3xl md:text-4xl font-serif text-emerald-deep">طراحی شاهکار اختصاصی شما</h1>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                رؤیای زیبایی، حیا و وقار شما در کارگاه «زمرد و شامپاین» به کوک‌هایی ماندگار تبدیل خواهد شد.
              </p>
            </div>

            {/* Step Indicators */}
            <div className="flex justify-between items-center border-b border-gray-100 pb-6 max-w-lg mx-auto">
              {[
                { step: 1, label: 'جزئیات لباس' },
                { step: 2, label: 'سبک تزیینات' },
                { step: 3, label: 'اندازه‌گیری' },
                { step: 4, label: 'بررسی و زمان‌بندی' }
              ].map(indicator => (
                <div key={indicator.step} className="flex flex-col items-center space-y-2 relative flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    currentStep === indicator.step
                      ? 'bg-emerald-deep text-champagne ring-4 ring-champagne/30'
                      : currentStep > indicator.step
                        ? 'bg-emerald-900 text-white'
                        : 'bg-gray-100 text-gray-400'
                  }`}>
                    {indicator.step}
                  </div>
                  <span className={`text-xs ${currentStep === indicator.step ? 'text-emerald-950 font-bold' : 'text-gray-400'}`}>
                    {indicator.label}
                  </span>
                </div>
              ))}
            </div>

            {/* STEP 1: GARMENT TYPE & FABRIC */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                {/* Garment Type Grid */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-emerald-deep">۱. انتخاب نوع لباس شب و وقار</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { id: 'abaya', nameFa: 'عبای سلطنتی', desc: 'مناسب مجالس رسمی' },
                      { id: 'kaftan', nameFa: 'قفطان فاخر', desc: 'مخمل‌دوزی کلاسیک' },
                      { id: 'gown', nameFa: 'پیراهن شب مجلل', desc: 'سوزن‌دوزی پرحجم' },
                      { id: 'cape', nameFa: 'شنل سنتی و شال', desc: 'تکمیل‌کننده هماهنگی' }
                    ].map(type => (
                      <button
                        key={type.id}
                        onClick={() => setGarmentType(type.id)}
                        className={`p-5 rounded-xl border text-right transition-all cursor-pointer ${
                          garmentType === type.id
                            ? 'border-champagne-dark bg-emerald-50/50 ring-2 ring-champagne-dark/30'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="block font-bold text-emerald-deep text-sm md:text-base">{type.nameFa}</span>
                        <span className="block text-xs text-gray-400 mt-1">{type.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fabric Type */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-emerald-deep">۲. نوع پارچه پایه و آستر</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { id: 'velvet', nameFa: 'مخمل ابریشم طبیعی (Velvet)', desc: 'ایستایی فوق‌العاده با تلالو عمیق' },
                      { id: 'crepe', nameFa: 'کرپ دوشین فرانسوی (Crepe)', desc: 'بسیار خنک، لطیف و ریزش‌دار' },
                      { id: 'organza', nameFa: 'ارگانزای ابریشم (Organza)', desc: 'مخصوص گلبرگ‌های سه‌بعدی و آستین' }
                    ].map(fab => (
                      <button
                        key={fab.id}
                        onClick={() => setFabric(fab.id)}
                        className={`p-4 rounded-xl border text-right transition-all cursor-pointer ${
                          fabric === fab.id
                            ? 'border-champagne-dark bg-emerald-50/50 ring-2 ring-champagne-dark/30'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="block font-bold text-emerald-deep text-sm">{fab.nameFa}</span>
                        <span className="block text-xs text-gray-400 mt-1">{fab.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection with Color Picker */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-emerald-deep">۳. تم رنگی و پالت زمردین</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    {PRESET_COLORS.map(color => (
                      <button
                        key={color.hex}
                        onClick={() => {
                          setColorOption(color.name);
                          setCustomColor(color.hex);
                        }}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-xs transition-all cursor-pointer ${
                          customColor === color.hex && colorOption !== 'custom'
                            ? 'border-emerald-deep bg-emerald-50/40 ring-1 ring-emerald-deep'
                            : 'border-gray-200'
                        }`}
                      >
                        <span 
                          className="w-4 h-4 rounded-full border border-black/10 inline-block"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span>{color.name}</span>
                      </button>
                    ))}

                    <button
                      onClick={() => setColorOption('custom')}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-xs cursor-pointer ${
                        colorOption === 'custom'
                          ? 'border-emerald-deep bg-emerald-50/40'
                          : 'border-gray-200'
                      }`}
                    >
                      <input 
                        type="color" 
                        value={customColor}
                        onChange={(e) => {
                          setColorOption('custom');
                          setCustomColor(e.target.value);
                        }}
                        className="w-6 h-6 border-0 p-0 rounded-sm cursor-pointer bg-transparent"
                      />
                      <span>انتخاب رنگ دلخواه</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: EMBELLISHMENT STYLE & DENSITY */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                {/* Motif Types */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-emerald-deep">۱. طرح کلی و بته‌جقه‌های تزیینی</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { id: 'arabesque', nameFa: 'گل‌وبته و اسلیمی زردوزی', desc: 'سوزن‌دوزی منحنی الهام‌گرفته از مینیاتور اسلامی' },
                      { id: 'geometric', nameFa: 'مشبک و هندسی عثمانی', desc: 'طرح مشبک با تراکم بالای کریستال و ملیله' },
                      { id: 'minimal', nameFa: 'مینیمال حاشیه‌ای مدرن', desc: 'خطوط مرواریددوزی بسیار نازک در آستین و لبه‌ها' }
                    ].map(motif => (
                      <button
                        key={motif.id}
                        onClick={() => setMotifStyle(motif.id)}
                        className={`p-5 rounded-xl border text-right transition-all cursor-pointer ${
                          motifStyle === motif.id
                            ? 'border-champagne-dark bg-emerald-50/50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="block font-bold text-emerald-deep text-sm">{motif.nameFa}</span>
                        <span className="block text-xs text-gray-400 mt-1">{motif.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Density Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-emerald-deep">۲. تراکم مرواریددوزی و نگین‌دوزی</h3>
                    <span className="text-sm font-semibold text-champagne-dark">سطح {density} از ۵</span>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <input 
                      type="range" 
                      min="1" 
                      max="5" 
                      value={density}
                      onChange={(e) => setDensity(Number(e.target.value))}
                      className="w-full accent-emerald-deep cursor-pointer"
                    />
                    
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>بسیار ظریف و حاشیه‌ای (سطح ۱)</span>
                      <span>سنگین، باشکوه و متراکم شاهانه (سطح ۵)</span>
                    </div>

                    <p className="text-xs text-emerald-900 bg-emerald-50/50 p-3 rounded-lg leading-relaxed mt-2">
                      💡 <strong>برآورد کارگاه:</strong> هر سطح افزایش تراکم، نیازمند میانگین ۲۰ الی ۲۵ ساعت کار دست‌دوز اصیل اضافی توسط دوخت‌کاران و مرواریددوزان متبحر ما خواهد بود.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: CUSTOM MEASUREMENTS FORM */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-emerald-deep">اندازه‌های قد و اندام (به سانتی‌متر)</h3>
                  <p className="text-xs text-gray-400">اندازه‌گیری‌ها برای خوش‌فرمی و ایستایی کمال‌گرایانه عبا یا قفطان حیاتی است.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-600 block">قد کامل لباس (قد بانو)</label>
                    <input 
                      type="number" 
                      name="height"
                      placeholder="مانند ۱۶۵"
                      value={measurements.height}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-hidden focus:ring-1 focus:ring-champagne-dark"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-600 block">دور سینه</label>
                    <input 
                      type="number" 
                      name="bust"
                      placeholder="مانند ۹۵"
                      value={measurements.bust}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-hidden focus:ring-1 focus:ring-champagne-dark"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-600 block">دور کمر</label>
                    <input 
                      type="number" 
                      name="waist"
                      placeholder="مانند ۷۸"
                      value={measurements.waist}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-hidden focus:ring-1 focus:ring-champagne-dark"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-600 block">دور باسن</label>
                    <input 
                      type="number" 
                      name="hips"
                      placeholder="مانند ۱۰۴"
                      value={measurements.hips}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-hidden focus:ring-1 focus:ring-champagne-dark"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600 block">یادداشت‌های طراحی ویژه یا اصلاحات دلخواه</label>
                  <textarea 
                    name="notes"
                    rows={4}
                    placeholder="تمایل دارید آستین کلوش‌تر باشد یا طول دنباله لباس کوتاه‌تر در نظر گرفته شود؟ لطفاً ذکر بفرمایید..."
                    value={measurements.notes}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-hidden focus:ring-1 focus:ring-champagne-dark"
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 4: REVIEW & TIMELINE / SKETCH UPLOAD */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                {/* Drag and Drop Sketch Upload */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-emerald-deep">۱. بارگذاری فایل طرح یا الهام‌بخش (پیش‌طرح)</h3>
                  
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer ${
                      isDragOver
                        ? 'border-champagne-dark bg-emerald-50/20 scale-101'
                        : uploadedFile 
                          ? 'border-emerald-600 bg-emerald-50/10'
                          : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                    }`}
                  >
                    <input 
                      type="file" 
                      id="sketch-upload-file" 
                      onChange={handleFileSelect} 
                      className="hidden" 
                      accept="image/*,.pdf"
                    />
                    <label htmlFor="sketch-upload-file" className="cursor-pointer space-y-4 block">
                      <Upload className="w-10 h-10 text-emerald-800 mx-auto" />
                      <div className="space-y-1">
                        <span className="text-sm font-semibold text-emerald-deep block">
                          {uploadedFile ? `فایل آماده است: ${uploadedFile.name}` : 'فایل طرح، الگو یا اسکچ الهام‌بخش خود را بکشید یا اینجا رها کنید'}
                        </span>
                        <span className="text-xs text-gray-400 block">پشتیبانی از فرمت‌های تصویری و PDF (حداکثر ۱۰ مگابایت)</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Estimate Summary card */}
                <div className="p-6 bg-emerald-deep text-white rounded-2xl border border-champagne/30 space-y-4 shadow-lg">
                  <h4 className="text-base font-serif text-champagne border-b border-champagne/20 pb-2">برآورد اولیه کارگاه «زمرد و شامپاین»</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <span className="text-xs text-emerald-200">جزئیات لباس:</span>
                      <p className="font-semibold">{garmentType === 'abaya' ? 'عبای مجلل' : garmentType === 'kaftan' ? 'قفطان کلاسیک' : garmentType === 'gown' ? 'پیراهن شب متراکم' : 'شنل سنتی'} با پارچه {fabric === 'velvet' ? 'مخمل ابریشم خالص' : fabric === 'crepe' ? 'کرپ دوشین' : 'ارگانزای ابریشم'}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs text-emerald-200">رودوزی انتخاب شده:</span>
                      <p className="font-semibold">{motifStyle === 'arabesque' ? 'اسلیمی و گل‌وبته زردوزی' : motifStyle === 'geometric' ? 'طرح هندسی' : 'خطوط مدرن'} (تراکم {density} از ۵)</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-champagne/20 gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-champagne" />
                      <div>
                        <span className="text-xs text-emerald-200 block">مدت‌زمان سوزن‌دوزی با دست</span>
                        <span className="text-base font-bold text-champagne">{hours} ساعت دوخت دستی فشرده</span>
                      </div>
                    </div>

                    <div className="text-left">
                      <span className="text-xs text-emerald-200 block">مجموع حدودی قیمت اثر</span>
                      <span className="text-xl md:text-2xl font-bold font-serif text-champagne">{price.toLocaleString('fa-IR')} تومان</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
              {currentStep > 1 ? (
                <button
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="px-6 py-3 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>گام قبلی</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  className="px-8 py-3 bg-emerald-deep text-champagne hover:bg-emerald-950 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>گام بعدی</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={triggerSubmit}
                  id="bespoke-submit-btn"
                  className="px-10 py-4 bg-champagne text-emerald-deep hover:bg-white border border-champagne hover:scale-103 transition-all font-bold rounded-lg text-base shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>ثبت سفارش و شروع مشاوره تخصصی</span>
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          /* CONGRATULATIONS SCREEN (Step 5 Success screen) */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-3xl border border-gray-100 text-center space-y-6 shadow-2xl"
          >
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 mx-auto border border-emerald-100">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-champagne-dark font-mono font-bold block">سفارش ثبت گردید</span>
              <h2 className="text-3xl font-serif text-emerald-deep">رؤیای شما در دست‌های ما جاری است</h2>
              <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                درخواست سفارش اختصاصی (Bespoke) شما با تاییدیه اولیه با موفقیت در میز کار آتلیه <strong>«زمرد و شامپاین»</strong> قرار گرفت. استادکار فرح شخصاً جزئیات را در عرض چند ساعت آینده بررسی خواهد نمود.
              </p>
            </div>

            {/* Simulated timeline status */}
            <div className="max-w-md mx-auto p-5 bg-emerald-deep text-white rounded-2xl text-right border border-champagne/20 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-champagne" />
                <h4 className="font-semibold text-sm">جزئیات ثبت سفارش شما:</h4>
              </div>
              <ul className="space-y-2 text-xs text-emerald-100/90 leading-relaxed">
                <li>• <strong>نوع لباس انتخابی:</strong> {garmentType === 'abaya' ? 'عبای مجلل' : garmentType === 'kaftan' ? 'قفطان کلاسیک' : garmentType === 'gown' ? 'پیراهن شب متراکم' : 'شنل سنتی'}</li>
                <li>• <strong>تراکم تزیینات:</strong> سطح {density} مرواریددوزی فشرده ({hours} ساعت کار دست‌ساز)</li>
                <li>• <strong>تخمین برآورد کارگاه:</strong> {price.toLocaleString('fa-IR')} تومان</li>
                <li>• <strong>پاسخ بررسی اولیه:</strong> در عرض ۲ ساعت در چت پنل کاربری شما</li>
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                }}
                className="px-6 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              >
                طراحی یک اثر دیگر
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
