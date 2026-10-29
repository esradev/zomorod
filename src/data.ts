import { CollectionItem, AccessoryItem, Commission, Message } from './types';

export const collectionsData: CollectionItem[] = [
  {
    id: 'emerald-zardosi-abaya',
    title: 'Emerald Zardosi Abaya',
    titleFa: 'عبای زردوزی زمردین',
    description: 'A majestic abaya made of finest pure silk velvet, adorned with heavy gold zardosi embroidery, meticulously crafted over 120 hours by our master artisans.',
    descriptionFa: 'عبای باوقار و باشکوه دوخته‌شده از نفیس‌ترین مخمل ابریشم خالص، تزیین‌شده با رودوزی‌های سنگین زردوزی طلایی که بیش از ۱۲۰ ساعت زمان برای سوزن‌دوزی دستی آن صرف شده است.',
    category: 'zardosi',
    categoryFa: 'زردوزی اصیل',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80',
    hoursOfStitching: 120,
    goldFiligreeKarat: 'طلا عیار ۲۴',
    priceEstimate: 145000000, // ریال / تومان (can be represented beautifully in tomans)
    materials: [
      { name: 'Hand-drawn Gold Bullion Thread', nameFa: 'نخ شمش طلا کشیده‌شده با دست' },
      { name: 'Grade-A Clear Swarovski Crystals', nameFa: 'کریستال‌های درخشان سواروسکی درجه یک' },
      { name: 'Ethically Sourced Champagne Seed Pearls', nameFa: 'مرواریدهای ریز شامپاینی تهیه شده منصفانه' }
    ],
    details: [
      'Pure silk backing for unparalleled comfort and breathability',
      'Intricate floral vine patterns inspired by Safavid-era Islamic art',
      'Each leaf is padded with cotton core to create a magnificent 3D depth effect',
      'Finished with bespoke silk tassels and hand-rolled hems'
    ],
    detailsFa: [
      'آستر ابریشم خالص برای راحتی بی‌نظیر و قابلیت تنفس پوست',
      'طرح پیچک‌های اسلیمی الهام‌گرفته از مینیاتورهای اصیل دوران صفوی',
      'برجسته‌سازی سه‌بعدی برگ‌ها با مغزی پنبه‌ای برای تلالو و عمق دوچندان',
      'تزیین‌شده با منگوله‌های ابریشمی دست‌ساز و لبه‌دوزی‌های ظریف دستی'
    ],
    artisans: ['Master Artisan Farah', 'Beading Specialist Leila'],
    artisansFa: ['استادکار فرح', 'متخصص مرواریددوزی لیلا']
  },
  {
    id: 'celestial-flora-gown',
    title: 'Celestial Flora Gown',
    titleFa: 'پیراهن شب گل‌آرای آسمانی',
    description: 'An ethereal pastel-champagne kaftan embellished with thousands of organza petals, clear crystals, and gold-plated wire, reminiscent of a starry Islamic garden.',
    descriptionFa: 'پیراهنی افسانه‌ای به رنگ شامپاینی ملایم، تزیین‌شده با هزاران گلبرگ ارگانزا، کریستال‌های شفاف و مفتول‌های آبکاری‌شده طلایی که یادآور باغ‌های بهشتی اسلامی در زیر نور ستارگان است.',
    category: 'flora',
    categoryFa: 'گلدوزی سه‌بعدی',
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80',
    hoursOfStitching: 145,
    goldFiligreeKarat: 'طلای ۱۸ عیار سفارشی',
    priceEstimate: 168000000,
    materials: [
      { name: 'Hand-dyed Silk Silk Organza Petals', nameFa: 'گلبرگ‌های ارگانزای ابریشم رنگ‌شده با دست' },
      { name: 'Miyuki Japanese Micro-Glass Beads', nameFa: 'منجوق‌های شیشه‌ای مینیاتوری میوکی ژاپن' },
      { name: 'Champagne Luster Freshwater Pearls', nameFa: 'مرواریدهای پرورشی آب شیرین با درخشش شامپاینی' }
    ],
    details: [
      'Staggered arrangement of petals creating an ombre effect',
      'Invisible mesh neckline and tailored bell sleeves',
      'Symmetric geometric frame highlighting modern Islamic couture constraints'
    ],
    detailsFa: [
      'چیدمان پلکانی گلبرگ‌ها برای ایجاد افکت سایه‌روشن دلفریب',
      'یقه حریر محو و آستین‌های کلوش شاهانه',
      'طراحی متقارن هندسی بر پایه توازن نقوش معماری و هنر اسلامی'
    ],
    artisans: ['Master Artisan Farah', 'Lace Applique Artist Somayeh'],
    artisansFa: ['استادکار فرح', 'هنرمند اپلیکه‌دوزی سمیه']
  },
  {
    id: 'oyster-luster-bodice',
    title: 'Oyster Luster Bodice & Caftan',
    titleFa: 'جلیقه مرواریدگون صدف و قفطان',
    description: 'A heavy luxury bodice and outer caftan completely encrusted with micro freshwater pearls in cream and champagne hues, creating a gorgeous pearl-armor luster.',
    descriptionFa: 'یک جلیقه فاخر سنگین و قفطان بیرونی که تماماً با مرواریدهای ریز پرورشی در رنگ‌های کرم و شامپاینی پوشانده شده و تلالو زرهی از مرواریدهای درخشان را تداعی می‌کند.',
    category: 'pearls',
    categoryFa: 'مرواریددوزی',
    imageUrl: 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=800&auto=format&fit=crop&q=80',
    hoursOfStitching: 180,
    goldFiligreeKarat: 'نخ نقره با آبکاری طلا',
    priceEstimate: 195000000,
    materials: [
      { name: 'Freshwater Baroque & Round Pearls', nameFa: 'مرواریدهای گرد و باروک طبیعی آب شیرین' },
      { name: 'Fine Metallic Silver Sewing Wires', nameFa: 'مفتول‌های فلزی نقره‌ای بسیار ظریف' },
      { name: 'French Metallic Bouillon Coil', nameFa: 'نخ‌های مارپیچ فلزی فرانسوی فرانسوی' }
    ],
    details: [
      'Entirely hand-sewn with a double-thread lock stitch for lifespans',
      'Includes over 8,000 hand-graded real seed pearls',
      'Flattering structure with structured waist and elegant flowing train'
    ],
    detailsFa: [
      'تماماً دست‌دوز با دوخت قفل دو نخ برای تضمین ماندگاری همیشگی اثر',
      'شامل بیش از ۸,۰۰۰ مروارید طبیعی دست‌چین و دانه‌بندی شده',
      'ساختار باوقار کمر کشیده به همراه دنباله جاری و باشکوه ابریشمی'
    ],
    artisans: ['Beading Specialist Leila', 'Master Artisan Farah'],
    artisansFa: ['متخصص مرواریددوزی لیلا', 'استادکار فرح']
  },
  {
    id: 'lattice-tulle-abaya',
    title: 'Lattice Tulle Sleeve Kaftan',
    titleFa: 'عبای آستین توری مشبک',
    description: 'Minimalist charcoal velvet offset by sheer geometric lace lattice sleeves, featuring gold thread embroidery and tiny sparkling emerald cabochons.',
    descriptionFa: 'مخمل ذغالی مینیمال در تضاد با آستین‌های مشبک توری با طرح هندسی، دارای سوزن‌دوزی‌های طلا و نگین‌های درخشان تراش‌خورده زمردین.',
    category: 'crystals',
    categoryFa: 'کریستال‌دوزی',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80',
    hoursOfStitching: 95,
    goldFiligreeKarat: 'طلا دوزی ۱۸ عیار',
    priceEstimate: 110000000,
    materials: [
      { name: 'Genuine Emerald Cut Crystals', nameFa: 'کریستال‌های اصل تراش زمردین' },
      { name: 'Italian Black Velvet & Silk Organza', nameFa: 'مخمل مجلل مشکی ایتالیایی و ارگانزای ابریشم' },
      { name: 'Champagne Gold Metallic Threads', nameFa: 'نخ‌های فلزی طلایی شامپاینی' }
    ],
    details: [
      'Lattice sleeve patterns reminiscent of Mashrabiya windows',
      'Hidden magnetic button closures for clean minimal lines',
      'Deep emerald-colored jewel encrustation along the cuffs'
    ],
    detailsFa: [
      'طرح آستین‌های مشبک الهام‌گرفته از پنجره‌های سنتی ارسی و مشربیه',
      'دکمه‌های مغناطیسی پنهان برای حفظ تمیزی خطوط و ظواهر لباس',
      'نشاندن نگین‌های زمردین در حاشیه لبه آستین‌ها به صورت دست‌ساز'
    ],
    artisans: ['Soutache Specialist Somayeh'],
    artisansFa: ['متخصص سوزن‌دوزی سمیه']
  }
];

export const accessoriesData: AccessoryItem[] = [
  {
    id: 'hijab-emerald',
    name: 'Emerald Silk Chiffon Hijab',
    nameFa: 'شال حریر ابریشم زمردین',
    price: '$280',
    priceFa: '۷,۵۰۰,۰۰۰ تومان',
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 'clutch-heritage',
    name: 'The Heritage Clutch',
    nameFa: 'کیف دستی میراث ماندگار',
    price: '$1,450',
    priceFa: '۳۸,۰۰۰,۰۰۰ تومان',
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 'pumps-velvet',
    name: 'Velvet Occasion Pumps',
    nameFa: 'کفش مجلسی مخمل زمردین',
    price: '$890',
    priceFa: '۲۴,۰۰۰,۰۰۰ تومان',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&auto=format&fit=crop&q=80'
  }
];

export const initialCommissions: Commission[] = [
  {
    id: 'comm-1',
    title: 'Majestic Emerald Kaftan',
    titleFa: 'قفطان زمردین باشکوه',
    type: 'Bespoke Evening Kaftan',
    typeFa: 'قفطان مجلسی شخصی‌دوزی‌شده',
    progress: 68,
    status: 'production',
    statusFa: 'در حال تولید و سوزن‌دوزی',
    statusColor: 'text-amber-600 bg-amber-50 border-amber-200',
    dateStarted: 'May 12, 2026',
    dateStartedFa: '۲۲ اردیبهشت ۱۴۰۵',
    estimatedDelivery: 'July 28, 2026',
    estimatedDeliveryFa: '۷ مرداد ۱۴۰۵',
    details: [
      { label: 'Primary Fabric', value: 'Royal Silk Velvet (Emerald Green)' },
      { label: 'Embroidery Theme', value: 'Flora & Lattice Border' },
      { label: 'Embellishments', value: '24k Gold Thread, Clear Swarovski, Pearl accents' },
      { label: 'Tailoring Status', value: 'Bodice completed, starting sleeves' }
    ],
    detailsFa: [
      { label: 'پارچه اصلی', value: 'مخمل ابریشم سلطنتی (سبز زمردی)' },
      { label: 'طرح رودوزی', value: 'پیچک‌های اسلیمی و حاشیه مشبک هندسی' },
      { label: 'تزیینات فاخر', value: 'مفتول طلای ۲۴ عیار، کریستال‌های شفاف سواروسکی، مروارید شامپاینی' },
      { label: 'وضعیت دوخت', value: 'بالاتنه تکمیل شده، شروع تزیینات آستین‌ها' }
    ],
    updates: [
      {
        date: 'June 20, 2026',
        text: 'Bodice hand-embroidery complete. Proceeding to bead selection for cuffs.',
        textFa: 'سوزن‌دوزی و زردوزی بالاتنه با موفقیت به پایان رسید. ورود به مرحله چیدمان و مرواریددوزی لبه آستین‌ها.'
      },
      {
        date: 'June 05, 2026',
        text: 'First fitting template approved. Base fabric cut.',
        textFa: 'الگوی اولیه متناسب با اندازه‌ها تأیید شد. پارچه مخمل ابریشم زمردین برش خورد.'
      },
      {
        date: 'May 15, 2026',
        text: 'Initial sketch and embellishment motifs finalized by Master Farah.',
        textFa: 'پیش‌طرح اولیه و نقوش تزیینات توسط استادکار فرح نهایی و تأیید گردید.'
      }
    ]
  },
  {
    id: 'comm-2',
    title: 'Heritage Lace Abaya',
    titleFa: 'عبای گیپور میراث',
    type: 'Bespoke Modest Abaya',
    typeFa: 'عبای باوقار شخصی‌دوزی‌ شده',
    progress: 95,
    status: 'quality_check',
    statusFa: 'در حال کنترل کیفیت نهایی',
    statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    dateStarted: 'April 02, 2026',
    dateStartedFa: '۱۳ فروردین ۱۴۰۵',
    estimatedDelivery: 'July 10, 2026',
    estimatedDeliveryFa: '۲۰ تیر ۱۴۰۵',
    details: [
      { label: 'Primary Fabric', value: 'Heavy French Solstiss Lace (Champagne-Black)' },
      { label: 'Embroidery Theme', value: 'Micro beading on lace patterns' },
      { label: 'Embellishments', value: 'Champagne freshwater seed pearls' },
      { label: 'Tailoring Status', value: 'Assembled, undergoing steam pressing & loose bead audit' }
    ],
    detailsFa: [
      { label: 'پارچه اصلی', value: 'گیپور فرانسوی سنگین مارک Solstiss (کرم-مشکی)' },
      { label: 'طرح رودوزی', value: 'میکروبیدینگ و منجوق‌دوزی ظریف روی نقوش گیپور' },
      { label: 'تزیینات فاخر', value: 'مرواریدهای ریز شامپاینی طبیعی آب شیرین' },
      { label: 'وضعیت دوخت', value: 'مونتاژ نهایی تمام شده، تحت بررسی اتو بخار و کنترل ایستایی مرواریدها' }
    ],
    updates: [
      {
        date: 'June 28, 2026',
        text: 'Assembly finished. Transferred to the quality room for final micro-stitch check.',
        textFa: 'دوخت و مونتاژ قطعات عبا به پایان رسید. انتقال به اتاق بازرسی برای بررسی میکروسکوپی کوک‌ها.'
      },
      {
        date: 'May 10, 2026',
        text: 'Lace cutting complete. 40 hours of master beading in progress.',
        textFa: 'برش تخصصی گیپور انجام شد. فرآیند ۴۰ ساعت مرواریددوزی فشرده توسط استادکار در جریان است.'
      }
    ]
  }
];

export const initialMessages: Message[] = [
  {
    id: 'm-1',
    sender: 'artisan',
    senderName: 'Master Artisan Farah',
    senderNameFa: 'استادکار فرح',
    text: 'سلام فاطمه عزیز. امیدوارم حال شما عالی باشد. امروز زردوزی بالاتنه قفطان شما را کامل کردم. درخشش طلا روی مخمل زمردین شگفت‌انگیز شده است. تصویری از نمای نزدیک برای شما آماده کرده‌ام.',
    time: 'Yesterday at 4:32 PM',
    timeFa: 'دیروز ساعت ۱۶:۳۲'
  },
  {
    id: 'm-2',
    sender: 'client',
    senderName: 'Fatima Al-Sayed',
    senderNameFa: 'فاطمه السید',
    text: 'درود بر شما استادکار فرح بی‌همتا! واقعاً هیجان‌زده هستم. دیدن حاصل دستان هنرمند شما همیشه مایه افتخار است. آیا برای پرو نهایی می‌توانم هفته آینده به کارگاه تشریف بیاورم؟',
    time: 'Yesterday at 5:10 PM',
    timeFa: 'دیروز ساعت ۱۷:۱۰'
  },
  {
    id: 'm-3',
    sender: 'artisan',
    senderName: 'Master Artisan Farah',
    senderNameFa: 'استادکار فرح',
    text: 'بله حتماً! روز چهارشنبه ساعت ۱۴ الی ۱۶ کارگاه منتظر حضور پرمهر شماست تا پرو نهایی بالاتنه و آستین را انجام دهیم و طول قد عبا را علامت‌گذاری کنیم.',
    time: 'Today at 10:15 AM',
    timeFa: 'امروز ساعت ۱۰:۱۵'
  }
];

export const heritageHistory = {
  title: 'کیمیای سنت و هنر صبورانه',
  subtitle: 'The Alchemy of Tradition',
  quote: '«تجمل و زیبایی واقعی، عجله نمی‌شناسد؛ بلکه در صبر، عشق و کوک‌های صبورانه دستان استادکاران نهفته است.»',
  author: 'استادکار فرح، بنیان‌گذار کارگاه',
  storyParagraphs: [
    'کارگاه سوزن‌دوزی و رودوزی‌های فاخر «زمرد و شامپاین»، با هدف زنده نگاه داشتن هنر هزارساله سوزن‌دوزی اسلامی و زردوزی اصیل پا به عرصه وجود نهاد. ما در این آتلیه لوکس، پارچه‌های شاهانه را به بومی برای تجسم رؤیاها و قصه‌های فرهنگ غنی اسلامی تبدیل می‌کنیم.',
    'هر لباس، داستان تولد متفاوتی دارد. استادکاران ما با وفاداری به روش‌های سنتی کارگاه‌های ملوکانه صفوی و عثمانی، رشته‌های شمش طلا و نقره را با دست می‌تابند و کریستال‌های گرانبها را یکی پس از دیگری با فواصل دقیق میلی‌متری بر تاروپود حریر و مخمل می‌نشانند. این یک تولید لباس نیست؛ این آفرینش میراثی خانوادگی است که نسل به نسل دست‌به‌دست خواهد شد.',
    'تعهد اخلاقی ما به پایداری محیط زیست و جامعه، در قلب تمام تصمیمات ما جریان دارد. از تهیه ابریشم‌های بدون خشونت (Peace Silk) گرفته تا مرواریدهای پرورشی عادلانه، اصالت و خیرخواهی را در تاروپود هنر خود تنیده‌ایم.'
  ],
  artisanFarah: {
    name: 'استادکار فرح',
    role: 'بنیان‌گذار و سوزن‌دوز ارشد کارگاه',
    bio: 'استاد فرح با بیش از ۳۰ سال تجربه در حوزه رودوزی‌های سنتی و مرمت لباس‌های تاریخی ملوکانه، بر هر کوک و تزیین برند نظارت مستقیم دارد. او برنده چندین نشان ملی اصالت هنر دستی است و آثارش در نمایشگاه‌های بین‌المللی پوشاک اسلامی به نمایش درآمده است.',
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80'
  },
  commitments: [
    {
      title: 'ابریشم صلح و طبیعی',
      description: 'استفاده انحصاری از ابریشم مولبری ارگانیک و الیاف صلح‌آمیز که کرم ابریشم در حین برداشت نخ آسیبی نمی‌بیند.',
      icon: 'Sprout'
    },
    {
      title: 'مرواریددوزی عادلانه',
      description: 'مرواریدهای پرورشی آب‌های شیرین ما از مزارع دریایی تهیه می‌شوند که حقوق عادلانه بومیان و حفظ اکوسیستم دریا را رعایت می‌کنند.',
      icon: 'ShieldCheck'
    },
    {
      title: 'ماندگاری مادام‌العمر',
      description: 'هر اثر شامل کارت اصالت و گارانتی همیشگی مرمت و اصلاح سایز برای خریدار اولیه یا فرزندان اوست.',
      icon: 'Sparkles'
    }
  ]
};
