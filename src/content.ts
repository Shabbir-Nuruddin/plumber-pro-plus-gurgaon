import { pickAreas, type Feature, type Hours, type Scene, type SectionKey } from "./lib";

export const BRAND = "Pro Plus";
export const HOURS: Hours = null;
export const FLAP_IDLE = "";
export const SCENE: Scene = "leak";
export const VISIT_IMG = "/img/p8.jpg";
export const VISIT_ALT = "Rooftop manifold installed by Plumber Pro Plus";
export const FALLBACK_IMG = "/img/p7.jpg";
export const ORDER: SectionKey[] = ["map", "feature", "reviews", "work", "visit"];

export const PHONE = "+918249452726";
export const PHONE_DISPLAY = "82494 52726";
export const WA = "918249452726";
export const SHOP = { lat: 28.4376132, lon: 77.0698701 };
export const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${SHOP.lat},${SHOP.lon}`;

export const waLink = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

export const AREAS = pickAreas(["s52", "s45", "s46", "s57", "s50", "s43", "sl1", "s39", "s54", "s56"]);
export const DEFAULT_AREA = "s57";

/** Verbatim from Google reviews of the listing. */
export const REVIEWS = [
  "Took all measurements correctly & ensured it is not interfering with any water or electrical fittings",
  "Akshay did very amazing work, has a resolution for each and every problem with minimal time spent",
  "Akshay Mondal did an outstanding job… Fair pricing",
  "Good fitting and fast finishing",
  "Very good service all over India new construction work very good price best service plumbing",
];

export const RATINGS = [
  { stars: 5, count: 67 },
  { stars: 4, count: 1 },
  { stars: 3, count: 0 },
  { stars: 2, count: 0 },
  { stars: 1, count: 1 },
];

export const STATUSES = ["MEASURED TWICE", "LINES MARKED", "PIPES IN", "FAST FINISH"];

export const FEATURE: Feature = {
  kind: "tracks",
  title: { en: "Repairs today. Whole buildings too.", hi: "आज की मरम्मत। पूरी बिल्डिंग भी।" },
  body: {
    en: "Akshay Mondal's listing covers three very different jobs. Pick yours.",
    hi: "अक्षय मंडल की लिस्टिंग में तीन अलग तरह के काम हैं। अपना चुनें।",
  },
  tracks: [
    {
      label: { en: "Homes", hi: "घर" },
      img: "/img/p7.jpg",
      body: { en: "Concealed pipes and cisterns, measured so nothing clashes with wiring.", hi: "कंसील्ड पाइप और सिस्टर्न, नाप ऐसा कि वायरिंग से न टकराए।" },
      quote: REVIEWS[0],
    },
    {
      label: { en: "Rooftops", hi: "छत" },
      img: "/img/p6.jpg",
      body: { en: "Tanks, filters, manifolds and pressure pumps.", hi: "टंकी, फ़िल्टर, मैनिफ़ोल्ड और प्रेशर पंप।" },
      quote: REVIEWS[3],
    },
    {
      label: { en: "New construction", hi: "नया निर्माण" },
      img: "/img/p1.jpg",
      body: { en: "Lines laid in the slab before the concrete is poured.", hi: "कंक्रीट डालने से पहले स्लैब में लाइन।" },
      quote: REVIEWS[4],
    },
  ],
  note: {
    en: "One Google review says the listed contact details were wrong. A site puts the right number in one place, every time.",
    hi: "एक गूगल रिव्यू कहता है कि लिस्टिंग पर नंबर ग़लत था। वेबसाइट पर सही नंबर हमेशा एक जगह रहता है।",
  },
};

const en = {
  banner: "Concept preview made for Plumber Pro Plus by LocalLift. Not live yet.",
  brandSub: "Plumbing contractor, Sector 52",
  live: "Akshay Mondal, open 24 hours",
  shopLabel: "Pro Plus, Indira Colony",
  call: "Call Akshay",
  callShort: "Call Akshay",
  whatsapp: "WhatsApp",
  waHello: "Hi Akshay ji, I need plumbing work.",
  heroTitle: ["Measured right.", "Finished fast."],
  heroProof: "4.9 stars from 69 Google reviews. Indira Colony 1, Sector 52. Open 24 hours.",
  drag: "Drag to turn the pipe",
  beats: [
    { title: "Measured before cutting.", body: "Concealed lines planned around your water and electrical fittings.", quote: REVIEWS[0] },
    { title: "A fix for every problem.", body: "From a single cistern to a full building's supply.", quote: REVIEWS[1] },
    { title: "Priced fairly.", body: "Fair pricing is the tag customers use most.", quote: REVIEWS[2] },
  ],
  googleReview: "Google review",
  distTitle: "Is Akshay nearby?",
  distBody: "Pick your area. Straight-line distance from Indira Colony 1, Sector 52.",
  distUnit: "km from Sector 52",
  distAsk: "Ask on WhatsApp",
  distWa: (area: string) => `Hi Akshay ji, I'm in ${area}. Can you take a look?`,
  workTitle: "Work you only see before the tiles go on.",
  workBody: "Photos from Plumber Pro Plus's own Google listing.",
  services: [
    { img: "/img/p1.jpg", title: "Slab and new-build piping", body: "Supply and drain lines laid in the structure." },
    { img: "/img/p7.jpg", title: "Concealed multilayer pipe", body: "Hot and cold lines inside the wall." },
    { img: "/img/p10.jpg", title: "Concealed cisterns", body: "Frames and cisterns for wall-hung WCs." },
    { img: "/img/p9.jpg", title: "Pressure pumps", body: "Booster pumps for weak supply." },
    { img: "/img/p3.jpg", title: "Roof filters", body: "Whole-house filters on the terrace." },
    { img: "/img/p8.jpg", title: "Rooftop manifolds", body: "Tank outlets split cleanly to every line." },
  ],
  revTitle: "69 reviews. 67 of them five stars.",
  revTags: "What customers mention most on Google",
  tags: [
    { label: "Fair pricing", n: 5 },
    { label: "Work", n: 4 },
    { label: "Quality work", n: 2 },
  ],
  stars: "stars",
  visitTitle: "In Indira Colony, Sector 52.",
  address: "196, Indira Colony 1, Sector 52, Gurugram",
  hours: "Open 24 hours, 7 days",
  pay: "",
  directions: "Directions",
  footer: "Concept by LocalLift for Plumber Pro Plus, Gurugram. Photos and reviews from the business's Google listing.",
  langLabel: "Language",
};

const hi: typeof en = {
  banner: "यह LocalLift द्वारा प्लंबर प्रो प्लस के लिए बनाया गया डेमो है। अभी लाइव नहीं है।",
  brandSub: "प्लंबिंग कॉन्ट्रैक्टर, सेक्टर 52",
  live: "अक्षय मंडल, 24 घंटे खुला",
  shopLabel: "प्रो प्लस, इंदिरा कॉलोनी",
  call: "अक्षय जी को कॉल करें",
  callShort: "कॉल करें",
  whatsapp: "व्हाट्सऐप",
  waHello: "नमस्ते अक्षय जी, मुझे प्लंबिंग का काम है।",
  heroTitle: ["सही नाप।", "जल्दी काम।"],
  heroProof: "69 गूगल रिव्यू में 4.9 स्टार। इंदिरा कॉलोनी 1, सेक्टर 52। 24 घंटे खुला।",
  drag: "पाइप घुमाने के लिए खींचें",
  beats: [
    { title: "काटने से पहले नाप।", body: "कंसील्ड लाइन आपकी पानी और बिजली की फ़िटिंग देखकर।", quote: REVIEWS[0] },
    { title: "हर समस्या का हल।", body: "एक सिस्टर्न से पूरी बिल्डिंग की सप्लाई तक।", quote: REVIEWS[1] },
    { title: "सही दाम।", body: "ग्राहक सबसे ज़्यादा 'सही दाम' लिखते हैं।", quote: REVIEWS[2] },
  ],
  googleReview: "गूगल रिव्यू",
  distTitle: "क्या अक्षय जी पास हैं?",
  distBody: "अपना इलाका चुनें। इंदिरा कॉलोनी 1, सेक्टर 52 से सीधी दूरी।",
  distUnit: "किमी सेक्टर 52 से",
  distAsk: "व्हाट्सऐप पर पूछें",
  distWa: (area: string) => `नमस्ते अक्षय जी, मैं ${area} में हूँ। क्या आकर देख सकते हैं?`,
  workTitle: "वो काम जो टाइल से पहले ही दिखता है।",
  workBody: "फ़ोटो प्लंबर प्रो प्लस की अपनी गूगल लिस्टिंग से।",
  services: [
    { img: "/img/p1.jpg", title: "स्लैब और नई बिल्डिंग की पाइपिंग", body: "ढाँचे में सप्लाई और ड्रेन लाइन।" },
    { img: "/img/p7.jpg", title: "कंसील्ड मल्टीलेयर पाइप", body: "दीवार के अंदर गरम और ठंडी लाइन।" },
    { img: "/img/p10.jpg", title: "कंसील्ड सिस्टर्न", body: "वॉल-हंग WC के फ़्रेम और सिस्टर्न।" },
    { img: "/img/p9.jpg", title: "प्रेशर पंप", body: "कम प्रेशर के लिए बूस्टर पंप।" },
    { img: "/img/p3.jpg", title: "छत के फ़िल्टर", body: "पूरे घर के फ़िल्टर छत पर।" },
    { img: "/img/p8.jpg", title: "छत के मैनिफ़ोल्ड", body: "टंकी से हर लाइन तक साफ़ बँटवारा।" },
  ],
  revTitle: "69 रिव्यू। 67 पाँच स्टार।",
  revTags: "गूगल पर ग्राहक सबसे ज़्यादा क्या लिखते हैं",
  tags: [
    { label: "सही दाम", n: 5 },
    { label: "काम", n: 4 },
    { label: "अच्छी क्वालिटी", n: 2 },
  ],
  stars: "स्टार",
  visitTitle: "इंदिरा कॉलोनी, सेक्टर 52 में।",
  address: "196, इंदिरा कॉलोनी 1, सेक्टर 52, गुरुग्राम",
  hours: "24 घंटे, सातों दिन खुला",
  pay: "",
  directions: "रास्ता देखें",
  footer: "LocalLift द्वारा प्लंबर प्रो प्लस, गुरुग्राम के लिए कॉन्सेप्ट। फ़ोटो और रिव्यू गूगल लिस्टिंग से।",
  langLabel: "भाषा",
};

export const COPY = { en, hi };
