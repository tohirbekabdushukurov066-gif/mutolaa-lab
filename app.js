import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, Search, Sparkles, MessageSquare, Layers, Target, ClipboardCheck, BookOpen, Send, Loader2, X, Check, RotateCcw, Bookmark, ChevronRight, Compass, AlertTriangle, ScrollText, Plus, ImagePlus, Lightbulb, Users, FileText, Globe, Upload } from "lucide-react";
/* ============================================================
   MUTOLAA LAB — kutubxona, har bir kitob alohida dunyo
   ============================================================ */
const F = {
    classic: 'Georgia, "Times New Roman", serif',
    display: '"Palatino Linotype", Palatino, Georgia, serif',
    sans: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    grotesk: '"Arial Black", "Helvetica Neue", Impact, sans-serif',
    narrow: '"Arial Narrow", "Helvetica Neue", sans-serif',
    mono: '"Courier New", Courier, monospace',
};
const BOOKS = [
    {
        id: "iblis",
        title: "Iblis",
        author: "Lev Tolstoy",
        year: "1889",
        cat: "Klassika",
        tagline: "Irodang senga bo'ysunmasa, sen kimsan?",
        theme: {
            bg: "#160A0C", panel: "#241014", ink: "#F3E3DF", muted: "#B08C8C",
            accent: "#9E1B25", accent2: "#E8C9A0",
            titleFont: F.display, bodyFont: F.classic, atmos: "smoke",
        },
        cover: { base: "#5C1220", band: "#F0E3C8", motif: "portrait" },
        essence: "Yevgeniy Irtenev — aqlli, halol, kelajagi porloq yigit. U yaxshi inson bo'lishni chin dildan xohlaydi va shunga erishadi ham: mulkni tartibga soladi, sevgan qiziga uylanadi, hurmat qozonadi. Ammo ichida bir nuqta qoladi — nazorat qilolmaydigan istak. Tolstoy bu qissada axloqiy qulashni voqea sifatida emas, ovoz sifatida ko'rsatadi: odam o'zini o'zi aldashni qanday bosqichma-bosqich o'rganishini kuzatadi.",
        ideas: [
            { t: "Iroda mag'lubiyati", d: "Qahramon yomon odam emas — u yaxshi odam bo'lishga urinib, mag'lub bo'ladi. Tolstoy uchun asosiy savol 'yovuzlik nima' emas, 'nega bilgan holda qilamiz' degani." },
            { t: "O'z-o'zini aldash mexanikasi", d: "Har bir qadam alohida olganda oqlanadi. Faqat oxirida qaraganda zanjir ko'rinadi. Bu — kognitiv dissonansning adabiyotdagi eng aniq tasviri." },
            { t: "Ikki xotima", d: "Tolstoy qissaga ikki xil tugash yozgan va ikkalasini ham yo'q qilmagan. Bu tanlov emas, e'tirof: muallif ham javobni bilmagan." },
            { t: "Jamiyat va yashirin hayot", d: "Tashqi obro' bilan ichki holat o'rtasidagi tafovut — Tolstoyning kech davri asarlarining markazi. Iblis tashqarida emas, odatda ichkarida." },
        ],
        lens: ["Psixologik", "Axloqiy", "Tarixiy kontekst", "Zamonaviy hayotga"],
        persona: { type: "character", name: "Yevgeniy Irtenev", role: "qissa qahramoni" },
        forWho: "O'z-o'zini nazorat qilish, odat va irodaning chegaralari haqida o'ylayotgan kishiga.",
    },
    {
        id: "karamazov",
        title: "Aka-uka Karamazovlar",
        author: "Fyodor Dostoyevskiy",
        year: "1880",
        cat: "Klassika",
        tagline: "Agar Xudo yo'q bo'lsa — hamma narsa mumkinmi?",
        theme: {
            bg: "#120E07", panel: "#241B0E", ink: "#F6ECD8", muted: "#B79E74",
            accent: "#C99A2E", accent2: "#8E5A22",
            titleFont: F.display, bodyFont: F.classic, atmos: "ornament",
        },
        cover: { base: "#3B2A15", band: "#C99A2E", motif: "frame" },
        essence: "Bitta oila, bitta ota, uch (aslida to'rt) o'g'il — va bitta o'ldirish. Ammo Dostoyevskiy detektiv yozmaydi: u sud zaliga butun insoniyatni olib kiradi. Dmitriy — ehtiros, Ivan — aql, Alyosha — iymon, Smerdyakov — bularning hammasining natijasi. Roman javob bermaydi, u savolni shunday qo'yadiki, undan qochib bo'lmaydi.",
        ideas: [
            { t: "Buyuk inkvizitor", d: "Ivanning masali — erkinlik haqida yozilgan eng qattiq matnlardan biri. Odamlar erkinlikni xohlaydimi yoki tinchlikni? Bu bugungi algoritmlar davrida yanada o'tkir." },
            { t: "Mas'uliyatning tarqalishi", d: "Qotil kim? Dostoyevskiyning javobi noqulay: fikr aytgan ham, ruxsat bergan ham, jim turgan ham ishtirokchi." },
            { t: "Aql va iymon jangi", d: "Ivan mantiq bilan qurollangan, Alyosha esa borliqqa ishonch bilan. Muallif ikkalasiga ham eng kuchli dalillarni beradi — bu halollik." },
            { t: "Ota figurasi", d: "Fyodor Pavlovich shunchaki yomon ota emas — u avlodlar o'rtasidagi uzilishning timsoli." },
        ],
        lens: ["Falsafiy", "Diniy-axloqiy", "Psixologik", "Siyosiy o'qish"],
        persona: { type: "character", name: "Ivan Karamazov", role: "romandagi aql ovozi" },
        forWho: "Erkinlik, mas'uliyat va iymon savollarini oson javoblarsiz ko'rmoqchi bo'lganga.",
    },
    {
        id: "propaganda",
        title: "Propaganda",
        author: "Eduard Bernays",
        year: "1928",
        cat: "Jamiyat",
        tagline: "Ommaning fikri tug'ilmaydi — u ishlab chiqariladi.",
        theme: {
            bg: "#1A0F10", panel: "#2B1517", ink: "#F2E7E4", muted: "#AE8F8B",
            accent: "#8E1F26", accent2: "#D9C7A3",
            titleFont: F.grotesk, bodyFont: F.sans, atmos: "print",
        },
        cover: { base: "#7B1B22", band: "#E7D9C0", motif: "plain" },
        essence: "Bernays — Freydning jiyani va zamonaviy PR sanoatining asoschisi. Bu kitobda u hech narsani yashirmaydi: ommaviy ongni uyushtirish demokratiyaning normal qismi, deb yozadi. Aynan shu ochiqlik kitobni ham fundamental, ham xavotirli qiladi. Bugungi marketing, siyosiy kampaniya va ijtimoiy tarmoq mexanikasining ildizi shu yerda.",
        ideas: [
            { t: "Ko'rinmas hukumat", d: "Bernays jamiyatni tartibga soluvchi kichik guruh borligini aytadi va buni zaruriyat deb hisoblaydi. Bu tezis bugun ham eng ko'p bahs qilinadigan joyi." },
            { t: "Guruh orqali ta'sir", d: "Odamni to'g'ridan-to'g'ri ishontirish qiyin — uning e'tirof etadigan avtoritetini ishontirish oson. Bugungi 'influencer' modelining bevosita bobosi." },
            { t: "Ehtiyoj emas, ma'no sotish", d: "Mahsulot emas, o'ziga xoslik, erkinlik, maqom sotiladi. Reklamaning butun mantiqi shu qatorda." },
            { t: "Tanqidiy o'qish shart", d: "Kitobni qo'llanma sifatida ham, ogohlantirish sifatida ham o'qish mumkin. Bernaysning o'zi bu ikkilikni hech qachon hal qilmagan." },
        ],
        lens: ["Etik tahlil", "Zamonaviy media", "Marketingga tatbiq", "Tarixiy kontekst"],
        persona: { type: "voice", name: "Bernays uslubidagi murabbiy", role: "PR nazariyasi bo'yicha yo'lboshchi" },
        forWho: "Marketolog, jurnalist va o'zini manipulyatsiyadan himoya qilmoqchi bo'lgan har kimga.",
    },
    {
        id: "hukmdor",
        title: "Hukmdor",
        author: "Nikkolo Makiavelli",
        year: "1513",
        cat: "Jamiyat",
        tagline: "Bo'lishi kerak bo'lgan emas — bor bo'lgan holat haqida.",
        theme: {
            bg: "#14100C", panel: "#241C13", ink: "#F4EADA", muted: "#A99475",
            accent: "#C0562B", accent2: "#D9A441",
            titleFont: F.display, bodyFont: F.classic, atmos: "stone",
        },
        cover: { base: "#EFE9DF", band: "#C0562B", motif: "bust", dark: true },
        essence: "Makiavelli siyosatni axloqdan ajratgan birinchi odam emas, lekin buni ochiq yozgan birinchi odam. U hukmdorga nasihat qilmaydi — u kuzatadi va yozadi: davlat qanday tutiladi, qanday qo'ldan ketadi. Kitobning shuhrati ham, yomon nomi ham shu sovuqqonlikdan.",
        ideas: [
            { t: "Virtu va fortuna", d: "Omad kuchli, lekin uni faqat tayyor odam ushlaydi. Makiavelli uchun mahorat — o'zgaruvchan sharoitga moslasha olish qobiliyati." },
            { t: "Sevilishmi yoki qo'rqilishmi", d: "Ikkalasi bo'lsa yaxshi; tanlash kerak bo'lsa — qo'rqish barqarorroq, chunki u boshqaning irodasiga bog'liq emas. Ammo nafrat halokat." },
            { t: "Ko'rinish haqiqatdan kuchli", d: "Hukmdor fazilatli bo'lishi shart emas, fazilatli ko'rinishi kerak — bu jumla bugungi imij siyosatining formulasi." },
            { t: "Yangi hokimiyat eng zaif", d: "Kitobning katta qismi meros emas, yangi qo'lga kiritilgan hokimiyat haqida. Startap yoki yangi rahbar uchun ham o'qiladi." },
        ],
        lens: ["Siyosiy nazariya", "Rahbarlikka tatbiq", "Etik tanqid", "Renessans konteksti"],
        persona: { type: "voice", name: "Makiavelli", role: "Florensiyalik davlat kotibi" },
        forWho: "Rahbar, tashkilotchi va hokimiyat qanday ishlashini illyuziyasiz ko'rmoqchi bo'lganga.",
    },
    {
        id: "sharp",
        title: "Diktaturadan demokratiyaya",
        author: "Jin Sharp",
        year: "1993",
        cat: "Jamiyat",
        tagline: "Hokimiyat yuqoridan emas — pastdagi itoatdan keladi.",
        theme: {
            bg: "#0D0708", panel: "#1B0C0D", ink: "#F0E6E4", muted: "#A48583",
            accent: "#C6242C", accent2: "#F0E6E4",
            titleFont: F.grotesk, bodyFont: F.narrow, atmos: "poster",
        },
        cover: { base: "#0D0708", band: "#C6242C", motif: "block" },
        essence: "Sharp nazariyasining o'zagi oddiy va kuchli: hech bir hukmron yolg'iz boshqarolmaydi. Unga amaldor, politsiya, soliq, matbuot, ishchi kerak. Bu ustunlar qo'llab-quvvatlashni to'xtatsa, tuzilma qulaydi. Kitob strategiyaga bag'ishlangan — his-tuyg'uga emas, hisob-kitobga.",
        ideas: [
            { t: "Hokimiyatning ustunlari", d: "Rejimni 'yiqitish' emas, uni ushlab turgan institutlarni bir-bir ajratish — asosiy strategik g'oya." },
            { t: "Zo'ravonliksiz kurash — texnika", d: "Sharp buni axloqiy tanlov emas, samaradorlik masalasi deb qaraydi: zo'ravonlik maydonida rejim har doim kuchliroq." },
            { t: "Siyosiy jiu-jitsu", d: "Repressiya ochiq qo'llanganda u rejimning o'ziga zarar keltiradi — legitimlik yo'qoladi." },
            { t: "Reja shartligi", d: "Sharpning takroriy ogohlantirishi: stixiyali harakat deyarli har doim mag'lub bo'ladi, strategik reja g'alaba qiladi." },
        ],
        lens: ["Strategik tahlil", "Tarixiy misollar", "Tanqidiy qarash", "Tashkilotga tatbiq"],
        persona: { type: "guide", name: "Siyosiy strategiya bo'yicha tahlilchi", role: "kitob mutaxassisi" },
        forWho: "Siyosiy jarayonlar, jamoaviy harakat va tashkiliy strategiya bilan qiziquvchiga.",
    },
    {
        id: "qomita",
        title: "Qo'mita 300",
        author: "Jon Koleman",
        year: "1991",
        cat: "Jamiyat",
        tagline: "Millionlarni ishontirgan kitob — qanday qilib?",
        theme: {
            bg: "#08090B", panel: "#121417", ink: "#E6E9EC", muted: "#7E858E",
            accent: "#D42B24", accent2: "#C9A227",
            titleFont: F.mono, bodyFont: F.mono, atmos: "grid",
        },
        cover: { base: "#0B0C0E", band: "#D42B24", motif: "table" },
        essence: "Koleman dunyoni yashirin 300 kishilik guruh boshqaradi deydi. Kitob o'nlab tilga tarjima qilindi, millionlab odam unga ishondi — bu o'z-o'zidan qiziq hodisa. Shuning uchun biz uni boshqacha o'qiymiz: da'volarni qabul qilib emas, ularning qanday qurilganini ochib. Bunday matn qanday ishlaydi, nega ishonarli tuyuladi — javobini bilsangiz, keyingisini darhol taniysiz.",
        ideas: [
            { t: "Manba qayerda", tag: "Bahsli", d: "Kitobdagi asosiy da'volar tekshiriladigan hujjatga tayanmaydi. Buni ko'rish o'quvchiga muhim ko'nikma beradi: har qanday matnda dalil bormi yoki faqat ishonchli ohangmi." },
            { t: "Nega ishonarli tuyuladi", tag: "Psixologik", d: "Murakkab dunyoni bitta sababga bog'lash miyaga qulay keladi. Odam noaniqlikdan qo'rqadi — yomon tushuntirish ham tushuntirishsizlikdan afzal ko'rinadi." },
            { t: "Haqiqiy savol ham bor", tag: "Ijtimoiy", d: "Boylik va ta'sir haqiqatan ham oz sonli qo'lda to'planadi — bu ochiq mavzu. Farqi shundaki, uni iqtisod va sotsiologiya raqamlar bilan o'rganadi, sir bilan emas." },
            { t: "Immunitet mashqi", d: "Bu matnni tahlil qilish — dezinformatsiyani tanish uchun eng yaxshi mashqlardan biri." },
        ],
        lens: ["Manba tanqidi", "Psixologik mexanika", "Real elita tadqiqoti", "Media savodxonligi"],
        persona: { type: "guide", name: "Manbashunos tahlilchi", role: "tanqidiy o'qish bo'yicha yo'lboshchi" },
        forWho: "Axborotni filtrlashni o'rganmoqchi bo'lgan, konspirologiya mexanikasini tushunmoqchi bo'lganga.",
    },
    {
        id: "trump",
        title: "Biznes va hayotda norasmiy ta'lim",
        author: "Donald Tramp",
        year: "2007",
        cat: "Biznes",
        tagline: "Maktabda o'rgatilmaydigan qism.",
        theme: {
            bg: "#0E0E10", panel: "#1B1B1F", ink: "#F5F3EF", muted: "#8F8D89",
            accent: "#B8912F", accent2: "#8C1C13",
            titleFont: F.grotesk, bodyFont: F.sans, atmos: "sheen",
        },
        cover: { base: "#F3F2EE", band: "#8C1C13", motif: "pencil", dark: true },
        essence: "Amaliy biznes darsligi: brend, muzokara, tavakkal va o'zini tutish haqida qisqa boblar. Kitobning kuchi tizimli nazariyada emas — kayfiyat va qat'iyat o'rnatishda. Zaif tomoni ham shu: shaxsiy tajriba universal qoida sifatida taqdim etiladi.",
        ideas: [
            { t: "Brend = ishonch", d: "Nom o'zi qiymat yaratadi. Kichik biznes uchun ham xulosasi bor: izchillik reklamadan kuchli." },
            { t: "Muzokarada tayyorgarlik", d: "Kim ko'proq ma'lumot bilan kelsa, shart u qo'yadi. Bu kitobning eng amaliy qismi." },
            { t: "Tezlik va impuls", d: "Loyihaning boshlanish tezligi ko'pincha uning omadini belgilaydi — 'mukammal reja'ni kutish bahona bo'lib qoladi." },
            { t: "Tanqidiy o'qish", d: "Muallif tajribasi juda o'ziga xos sharoitda shakllangan. Uni ko'chirmasdan, tamoyilni ajratib olish kerak." },
        ],
        lens: ["Amaliy biznes", "Shaxsiy brend", "Muzokara", "Tanqidiy qarash"],
        persona: { type: "guide", name: "Biznes murabbiysi", role: "kitob asosidagi amaliy yo'lboshchi" },
        forWho: "Birinchi biznesini boshlayotgan yoki o'z brendini qurayotganga.",
    },
    {
        id: "kotler",
        title: "Marketing asoslari",
        author: "Filip Kotler",
        year: "1967+",
        cat: "Biznes",
        tagline: "Sotish emas — qiymat yaratish.",
        theme: {
            bg: "#0F0C0C", panel: "#1D1616", ink: "#F7F3F1", muted: "#96888A",
            accent: "#D62828", accent2: "#F7F3F1",
            titleFont: F.grotesk, bodyFont: F.sans, atmos: "chart",
        },
        cover: { base: "#D62828", band: "#FFFFFF", motif: "split" },
        essence: "Marketing sohasining standart darsligi. Kotlerning asosiy tezisi: marketing — reklama bo'limi emas, butun biznesning mijozga qarab qurilishi. Kitob tizimli: bozorni bo'lish, maqsadli segment tanlash, pozitsiyalash va marketing miks orqali qiymat yetkazish.",
        ideas: [
            { t: "STP tizimi", d: "Segmentatsiya → Targeting → Positioning. Har qanday mahsulot strategiyasining skeleti. Ko'p startap aynan bu bosqichni tashlab ketadi." },
            { t: "4P va uning kengayishi", d: "Mahsulot, narx, joy, promotsiya — xizmatlar uchun odam, jarayon va muhit qo'shiladi." },
            { t: "Mijoz qiymati", d: "Narx — xarajat emas, idrok etilgan qiymatning aksi. Qiymat oshsa, narx muhokamasi kamayadi." },
            { t: "Ushlab qolish > jalb qilish", d: "Yangi mijoz topish mavjudini saqlashdan bir necha barobar qimmat — bu raqam butun biznes modelini o'zgartiradi." },
        ],
        lens: ["Strategiya", "Amaliy misollar", "Raqamli marketing", "Kichik biznesga tatbiq"],
        persona: { type: "guide", name: "Marketing bo'yicha ustoz", role: "Kotler tizimi bo'yicha yo'lboshchi" },
        forWho: "Mahsulot, ilova yoki xizmatni bozorga olib chiqayotgan har kimga.",
    },
    {
        id: "psixo",
        title: "Psixonayranglar",
        origTitle: "\u041F\u0441\u0438\u0445\u043E\u0442\u0440\u044E\u043A\u0438",
        author: "Igor Rizov",
        year: "2023",
        cat: "Psixologiya",
        tagline: "Suhbatda kim yetaklaydi — siz yoki sizni?",
        theme: {
            bg: "#150A0C", panel: "#221013", ink: "#F2E8E6", muted: "#A98D8A",
            accent: "#D92B2B", accent2: "#E8A33D",
            titleFont: F.display, bodyFont: F.sans, atmos: "grid",
        },
        cover: { base: "#C81E1E", band: "#F2E8E6", motif: "circle", dark: false },
        essence: "Muzokara bo'yicha mutaxassis Rizov kundalik muloqotda ishlatiladigan psixologik usullarni yig'ib chiqadi — hujum, bosim, kamsitish, manipulyatsiya. Kitobning maqsadi ularni qo'llash emas, tanish: qarshingizdagi odam qaysi usulni ishga solganini payqasangiz, u kuchini yo'qotadi. Har usul qisqa tushuntirilib, unga javob berish yo'li ko'rsatiladi.",
        ideas: [
            { t: "Tanigan zarba tegmaydi", tag: "Markaziy", d: "Manipulyatsiyaning kuchi ko'rinmasligida. Usul nomlanib, ochib berilgach, u shunchaki g'aliz harakatga aylanadi — javob berish ancha oson bo'ladi." },
            { t: "Javob — hujum emas", tag: "Amaliy", d: "Kamsitishga kamsitish bilan javob bergan odam o'yinni qarshi tomon qoidasida davom ettiradi. Kitob boshqa yo'lni o'rgatadi: sur'atni sekinlashtirish, aniqlashtiruvchi savol, xotirjam chegara." },
            { t: "Muzokara — janjal emas", tag: "Psixologik", d: "Rizov muzokarani g'alaba-mag'lubiyat sifatida emas, holatni boshqarish sifatida ko'radi. Emotsiyaga berilgan tomon ko'pincha yutqazadi, chunki qaror qabul qilishni boshqaga topshirgan bo'ladi." },
            { t: "Usullar axloqsiz emas, niyat axloqsiz", tag: "Bahsli", d: "Kitobning eng nozik joyi shu: bir xil usul himoya uchun ham, ezish uchun ham ishlatiladi. Muallif buni tan oladi, lekin chegarani o'quvchi vijdoniga qoldiradi — bu bahsli qoldiradigan tomoni." },
        ],
        lens: ["Amaliy javob usullari", "Manipulyatsiya psixologiyasi", "Ish va biznes muhitida", "Axloqiy chegara"],
        persona: { type: "guide", name: "Muzokara bo'yicha yo'lboshchi", role: "amaliy psixologiya tahlilchisi" },
        forWho: "Suhbatda bosimga uchrab, keyin 'nima deyishim kerak edi' deb o'ylanib qoladigan odamga.",
    },
    {
        id: "sivil",
        title: "Sivilizatsiyalar to'qnashuvi va yangi dunyo tartibi",
        author: "Samuel Hantington",
        year: "1996",
        cat: "Jamiyat",
        tagline: "Endi urushlar mafkura uchun emas — madaniyat uchun boradi.",
        theme: {
            bg: "#1A0A0A", panel: "#261111", ink: "#F4E9E4", muted: "#B08C84",
            accent: "#C9302C", accent2: "#E0A93B",
            titleFont: F.display, bodyFont: F.classic, atmos: "stone",
        },
        cover: { base: "#B32B25", band: "#E8C15A", motif: "block", dark: false },
        essence: "Sovuq urush tugagach dunyo tinchlanadi deb o'ylashgan edi. Hantington aksini aytadi: endi nizolar davlatlar yoki mafkuralar orasida emas, sivilizatsiyalar — G'arb, islom, Xitoy, hind, pravoslav dunyolari chegarasida chiqadi. Kitob madaniy o'ziga xoslik siyosatning asosiy kuchiga aylanganini isbotlamoqchi bo'ladi.",
        ideas: [
            { t: "Madaniyat mafkuradan kuchli", tag: "Markaziy", d: "Kommunizm va liberalizm o'tkinchi bo'ldi, din va til esa asrlar davomida qoladi. Hantington odamlar 'kim ekanligi'ni 'nimaga ishonishi'dan chuqurroq deb hisoblaydi." },
            { t: "Chegara chiziqlari qonli", tag: "Ijtimoiy", d: "Eng qattiq nizolar sivilizatsiyalar tutashgan joylarda — Bolqon, Kavkaz, Yaqin Sharq. Muallif bu joylarni 'yoriq chiziqlar' deb ataydi." },
            { t: "G'arb universal emas", tag: "Bahsli", d: "G'arb o'z qadriyatlarini butun insoniyatniki deb bilishi eng katta xato deydi Hantington. Bu kitobning eng ko'p bahs qo'zg'agan qismi." },
            { t: "Bo'sh joyni kim to'ldiradi", tag: "Amaliy", d: "Bir sivilizatsiya zaiflashsa, o'rniga boshqasi keladi. Markaziy Osiyoning bir necha ta'sir maydonlari kesishgan joyda turishi shu bilan tushuntiriladi." },
        ],
        lens: ["Geosiyosiy tahlil", "Tanqidiy qarash", "Markaziy Osiyo nuqtai nazari", "Bugungi voqealar"],
        persona: { type: "guide", name: "Geosiyosat tahlilchisi", role: "xalqaro munosabatlar bo'yicha yo'lboshchi" },
        forWho: "Dunyodagi nizolar nega aynan shu chegaralarda chiqishini tushunmoqchi bo'lganga.",
    },
    {
        id: "sunzi",
        title: "Urush san'ati",
        author: "Sun Zi",
        year: "mil. avv. V asr",
        cat: "Tarix",
        tagline: "Eng yaxshi g'alaba — jang qilmasdan yutish.",
        theme: {
            bg: "#0D0F1A", panel: "#161A28", ink: "#EFE7D6", muted: "#9A9384",
            accent: "#D4A63C", accent2: "#B8332E",
            titleFont: F.display, bodyFont: F.classic, atmos: "wave",
        },
        cover: { base: "#1B1F30", band: "#D4A63C", motif: "tangle", dark: true },
        essence: "Ikki yarim ming yil oldin yozilgan bu qisqa risola urushni jang sifatida emas, hisob-kitob sifatida ko'radi. Sun Zi uchun eng yuqori mahorat — dushmanni jangsiz taslim qilish. Kitob bugun harbiylardan ko'ra biznes, muzokara va raqobat bilan shug'ullanuvchilar orasida ko'proq o'qiladi.",
        ideas: [
            { t: "Jangsiz g'alaba", tag: "Markaziy", d: "Yuz jangda yuz marta yutish eng yuqori mahorat emas. Sun Zi uchun mukammallik — dushmanni urushga kirmasdan bo'ysundirish, chunki har qanday jang ikkala tomonni ham kuchsizlantiradi." },
            { t: "O'zingni va raqibingni bil", tag: "Amaliy", d: "Kitobning eng mashhur qoidasi. Bilim qurollardan muhimroq: ma'lumot to'plamagan qo'mondon qanchalik kuchli bo'lmasin, ko'r holda harakat qiladi." },
            { t: "Aldov — asos", tag: "Psixologik", d: "Sun Zi urushni ochiq deb o'ylamaydi. Kuchli bo'lsang zaif ko'rin, yaqin bo'lsang uzoq ko'rin. Bu axloqiy jihatdan noqulay, lekin muallif buni haqiqat deb beradi." },
            { t: "Vaqt va joy tanlash", tag: "Ramziy", d: "Jangni qayerda va qachon boshlashni tanlagan tomon allaqachon yarim yutgan. Bu qoida bugungi muzokara va raqobatga to'g'ridan-to'g'ri ko'chadi." },
        ],
        lens: ["Strategik tahlil", "Biznesga tatbiq", "Tarixiy kontekst", "Axloqiy chegara"],
        persona: { type: "guide", name: "Strategiya yo'lboshchisi", role: "qadimgi harbiy tafakkur tahlilchisi" },
        forWho: "Raqobat, muzokara yoki rahbarlikda kuch ishlatmasdan yutishni o'rganmoqchi bo'lganga.",
    },
    {
        id: "boron",
        title: "Bo'ronli dovon",
        origTitle: "Wuthering Heights",
        author: "Emili Bronte",
        year: "1847",
        cat: "Klassika",
        tagline: "Muhabbatdan qasosga aylangan hislar haqidagi roman.",
        theme: {
            bg: "#0E1418", panel: "#18212A", ink: "#EDE6DA", muted: "#8B9299",
            accent: "#7FA8B8", accent2: "#C4A24A",
            titleFont: F.display, bodyFont: F.classic, atmos: "smoke",
        },
        cover: { base: "#1D2B33", band: "#EFE4C8", motif: "silhouette", dark: true },
        essence: "Yorkshir cho'llaridagi ikki oila va ular orasida o'sgan Xitklif haqidagi roman. Katrina bilan bo'lgan muhabbat rad etilgach, Xitklif butun umrini qasosga bag'ishlaydi. Bronte muhabbatni go'zallik emas, vayron qiluvchi kuch sifatida ko'rsatadi — shuning uchun kitob chiqqanda jamiyat uni qabul qila olmagan.",
        ideas: [
            { t: "Muhabbat va egalik", tag: "Psixologik", d: "Xitklifning hissi sevgimi yoki egalik tuyg'usimi — roman shu savolni ochiq qoldiradi. U Katrinani baxtli qilishni emas, o'ziniki bo'lishini xohlaydi." },
            { t: "Qasos avlodga o'tadi", tag: "Markaziy", d: "Xitklif o'z alamini bolalardan oladi. Bronte jarohatning davolanmasa keyingi avlodga o'tishini asrlar oldin ko'rsatib bergan." },
            { t: "Tabiat qahramon sifatida", tag: "Ramziy", d: "Cho'l, shamol va bo'ron shunchaki manzara emas — personajlarning ichki holati. Uy nomining o'zi ham shundan kelib chiqqan." },
            { t: "Sinf va kelib chiqish", tag: "Ijtimoiy", d: "Xitklif ko'chadan olib kelingan bola. Uning butun fojiasi ostida bitta narsa yotadi: uni hech qachon teng deb qabul qilishmagan." },
        ],
        lens: ["Adabiy tahlil", "Psixologik", "Ijtimoiy sharoit", "Bugungi o'quvchiga"],
        persona: { type: "guide", name: "Klassik adabiyot yo'lboshchisi", role: "ingliz romani tahlilchisi" },
        forWho: "Muhabbat va nafrat qanday qilib bir ildizdan o'sishini ko'rmoqchi bo'lganga.",
    },
    {
        id: "toseni",
        title: "To seni topgunimcha",
        origTitle: "Me Before You",
        author: "Jojo Moyes",
        year: "2012",
        cat: "Klassika",
        tagline: "Sevgi baribir odamning tanlovini o'zgartira oladimi?",
        theme: {
            bg: "#151018", panel: "#211826", ink: "#F3E9EC", muted: "#A4919C",
            accent: "#C4577E", accent2: "#D9B36A",
            titleFont: F.display, bodyFont: F.sans, atmos: "dawn",
        },
        cover: { base: "#C4577E", band: "#2B2130", motif: "silhouette", dark: false },
        essence: "Ishsiz qolgan Lu falaj bo'lib qolgan boy yigit Uilga parvarishchi bo'lib ishga kiradi. Ikkalasi bir-birini o'zgartiradi, lekin Uil allaqachon qaror qabul qilgan. Roman muhabbat hikoyasi ko'rinishida boshlanadi va inson o'z hayoti ustidan qanday huquqqa ega degan og'ir savolga olib boradi.",
        ideas: [
            { t: "Sevgi qutqara oladimi", tag: "Markaziy", d: "Kitobning o'zagi shu savolda. Lu Uilni sevishi bilan uning qarorini o'zgartirishi mumkinligiga ishonadi. Moyes bu ishonchni sinovdan o'tkazadi." },
            { t: "Boshqaning o'rniga qaror", tag: "Bahsli", d: "Yaqinlaringiz sizni yaxshi ko'rgani uchun siz uchun qaror qilishga haqlimi? Roman ikkala tomonni ham eshittiradi va oson javob bermaydi." },
            { t: "Hayotni ko'rish", tag: "Amaliy", d: "Uil Luni o'z shahridan chiqishga, kitob o'qishga, boshqacha kiyinishga majbur qiladi. Kitobning eng yorug' qismi — odam o'z chegarasini qanday sezmay yashashi." },
            { t: "Parvarish yuki", tag: "Ijtimoiy", d: "Roman kasal odam atrofidagilarga tushadigan og'irlikni bo'yamasdan ko'rsatadi — charchoq, ayb hissi va aytilmagan norozilik." },
        ],
        lens: ["Adabiy tahlil", "Axloqiy bahs", "Psixologik", "Bugungi hayotga"],
        persona: { type: "guide", name: "Zamonaviy roman yo'lboshchisi", role: "adabiy tahlilchi" },
        forWho: "Og'ir savollardan qochmaydigan hissiy roman izlayotganga.",
    },
    {
        id: "temir",
        title: "Temir tovon",
        origTitle: "The Iron Heel",
        author: "Jek London",
        year: "1908",
        cat: "Jamiyat",
        tagline: "Erkinlik yo'qolganda u qanday qilib qonuniy ko'rinadi.",
        theme: {
            bg: "#140D08", panel: "#211610", ink: "#F2E6D8", muted: "#A08D78",
            accent: "#D2622A", accent2: "#8C1F1A",
            titleFont: F.grotesk, bodyFont: F.classic, atmos: "poster",
        },
        cover: { base: "#9E3418", band: "#F0E4D4", motif: "block", dark: false },
        essence: "London kelajakda oligarxiya hokimiyatni to'liq qo'lga olishini tasvirlaydi. Roman kundalik shaklida yozilgan: qahramon Everxard kapital tuzumining zo'ravonlikka aylanishini oldindan ko'radi. Bu Oruell va Jek Londondan keyingi barcha distopiyalarning ilk namunalaridan biri.",
        ideas: [
            { t: "Zulm qonun libosida", tag: "Markaziy", d: "Temir tovon o'zini qonuniy deb ko'rsatadi. Londonning ogohlantirishi shu: eng xavfli hokimiyat o'zini tartib deb atagani." },
            { t: "Iqtisod siyosatni belgilaydi", tag: "Ijtimoiy", d: "London uchun kim boy bo'lsa, o'sha qonun yozadi. Kitob marksistik qarashga tayanadi va buni yashirmaydi." },
            { t: "Ommani bo'lish", tag: "Psixologik", d: "Oligarxiya ishchilarni bir-biriga qarshi qo'yib boshqaradi. Bir guruhga imtiyoz berib, qolganini dushman qilish — eng eski usul." },
            { t: "Bashorat qayerda xato", tag: "Bahsli", d: "London ba'zi narsalarni aniq ko'rgan, ba'zilarida adashgan. Kitobni bugun o'qish uning qaysi qismi ro'yobga chiqqanini tekshirish demak." },
        ],
        lens: ["Siyosiy tahlil", "Tarixiy kontekst", "Distopiya sifatida", "Tanqidiy qarash"],
        persona: { type: "guide", name: "Ijtimoiy adabiyot yo'lboshchisi", role: "siyosiy roman tahlilchisi" },
        forWho: "Hokimiyat va boylik munosabatini badiiy asar orqali tushunmoqchi bo'lganga.",
    },
    {
        id: "shartnoma",
        title: "Ijtimoiy shartnoma",
        origTitle: "Du contrat social",
        author: "Jan-Jak Russo",
        year: "1762",
        cat: "Jamiyat",
        tagline: "Inson erkin tug'iladi, lekin hamma yerda kishanda.",
        theme: {
            bg: "#0C1016", panel: "#161C26", ink: "#EEF0F2", muted: "#8C949E",
            accent: "#3E6FB0", accent2: "#C9A24B",
            titleFont: F.display, bodyFont: F.classic, atmos: "print",
        },
        cover: { base: "#F0EEE8", band: "#3E6FB0", motif: "portrait", dark: false },
        essence: "Russo davlat hokimiyati qayerdan kelib chiqadi degan savolga javob beradi: xudodan ham, kuchdan ham emas — xalqning o'zaro kelishuvidan. Agar hukumat shu kelishuvni buzsa, xalq uni o'zgartirishga haqli. Bu fikr Fransuz inqilobiga va undan keyingi barcha konstitutsiyalarga asos bo'ldi.",
        ideas: [
            { t: "Hokimiyat xalqdan", tag: "Markaziy", d: "Russogacha hukmdor hokimiyatni yuqoridan olardi. Russo uni pastdan — xalq roziligidan chiqaradi. Bu oddiy ko'rinadigan o'zgarish butun siyosiy tafakkurni ag'dargan." },
            { t: "Umumiy iroda", tag: "Bahsli", d: "Kitobning eng chalkash va eng xavfli tushunchasi. Umumiy iroda — ko'pchilik xohishi emas, jamiyatning umumiy manfaati. Buni kim aniqlaydi degan savol ochiq qoladi va tarixda suiiste'mol qilingan." },
            { t: "Qonun va erkinlik", tag: "Amaliy", d: "Russo uchun qonunga bo'ysunish erkinlikni yo'qotish emas — o'zi rozi bo'lgan qoidaga bo'ysunish erkinlikning o'zi." },
            { t: "Kishan qayerdan", tag: "Psixologik", d: "Mashhur birinchi jumla oddiy emas. Russo insonni jamiyat buzgan deb hisoblaydi va bu qarash bugun ham bahsli." },
        ],
        lens: ["Siyosiy falsafa", "Tarixiy ta'sir", "Tanqidiy qarash", "Bugungi davlatga"],
        persona: { type: "guide", name: "Siyosiy falsafa yo'lboshchisi", role: "ma'rifat davri tahlilchisi" },
        forWho: "Davlat va fuqaro o'rtasidagi shartnoma nima ekanini asosidan bilmoqchi bo'lganga.",
    },
    {
        id: "yassi",
        title: "Yassiyurt",
        origTitle: "Flatland",
        author: "Edvin Ebbot",
        year: "1884",
        cat: "Klassika",
        tagline: "Sabr qiling, dunyo keng va chinakamiga g'aroyib.",
        theme: {
            bg: "#0F1114", panel: "#1A1D22", ink: "#E9E4D9", muted: "#8E9099",
            accent: "#7A8C99", accent2: "#C2A15E",
            titleFont: F.narrow, bodyFont: F.classic, atmos: "geo",
        },
        cover: { base: "#E4DCC8", band: "#2A2E36", motif: "block", dark: false },
        essence: "Ikki o'lchovli olamda yashovchi Kvadrat uch o'lchovli dunyoni ko'rib qoladi va buni tushuntirmoqchi bo'lganda ahmoq deb e'lon qilinadi. Ebbot geometriya orqali jamiyatni yozadi: tabaqalar, ayollarning holati, yangi fikrni qabul qila olmaslik. Matematik kitob ko'rinishida ijtimoiy hajv.",
        ideas: [
            { t: "Ko'rmagan narsaga ishonmaslik", tag: "Markaziy", d: "Yassiyurt aholisi balandlikni tasavvur qila olmaydi, chunki ular hech qachon ko'rmagan. Ebbot bizning ham xuddi shunday ko'r nuqtalarimiz borligini eslatadi." },
            { t: "Haqiqatni aytganning taqdiri", tag: "Ijtimoiy", d: "Kvadrat haqiqatni ko'radi va qamaladi. Kitobning eng achchiq qismi shu: yangi bilim ko'pincha mukofot emas, jazo keltiradi." },
            { t: "Tabaqa shakl bilan", tag: "Ramziy", d: "Yassiyurtda mavqe tomonlar soni bilan belgilanadi. Ebbot Viktoriya davri Angliyasining sinfiy tuzilishini shu tarzda masxara qiladi." },
            { t: "Ayollarning o'rni", tag: "Bahsli", d: "Kitobda ayollar oddiy chiziq sifatida tasvirlanadi. Bu muallifning qarashi emas, o'z davri jamiyatiga qaratilgan istehzo — lekin bu bahsli va o'quvchi o'zi hukm qilishi kerak." },
        ],
        lens: ["Adabiy tahlil", "Matematik g'oya", "Ijtimoiy hajv", "Bugungi kunga"],
        persona: { type: "guide", name: "Falsafiy adabiyot yo'lboshchisi", role: "matematik hajv tahlilchisi" },
        forWho: "O'z tafakkuri chegarasini ko'rmoqchi bo'lgan, g'aroyib kitoblarni sevganga.",
    },
    {
        id: "1985",
        title: "1985",
        author: "Entoni Byorjess",
        year: "1978",
        cat: "Jamiyat",
        tagline: "Bunday jamiyatning kelajagi nurdan uzoq.",
        theme: {
            bg: "#170A0B", panel: "#241012", ink: "#F5E9E7", muted: "#AF8E8B",
            accent: "#D42A2A", accent2: "#E8DCD2",
            titleFont: F.display, bodyFont: F.sans, atmos: "poster",
        },
        cover: { base: "#D42A2A", band: "#F2EDE6", motif: "circle", dark: false },
        essence: "Byorjess kitobning birinchi yarmida Oruellning '1984'ini tahlil qiladi, ikkinchi yarmida esa o'z distopiyasini yozadi. Uning fikricha, kelajakni davlat emas, kasaba uyushmalari va tartibsizlik bo'g'adi. Bu Oruellga javob ham, e'tiroz ham.",
        ideas: [
            { t: "Oruellga javob", tag: "Markaziy", d: "Byorjess '1984'ni buyuk asar deb tan oladi, lekin uning bashoratini noto'g'ri deb hisoblaydi. Kitobning qiymati shu bahsda." },
            { t: "Zulm faqat yuqoridan emas", tag: "Bahsli", d: "Byorjess uchun erkinlikni davlatdan tashqari kuchlar ham bo'g'adi. Bu qarash ko'plarni g'azablantirgan va hozir ham bahsli." },
            { t: "Til va nazorat", tag: "Psixologik", d: "Ikkala muallif ham bir narsada kelishadi: tilni boshqargan fikrni boshqaradi. Byorjess buni tilshunos sifatida chuqurroq ochadi." },
            { t: "Ikki janr bir muqovada", tag: "Ramziy", d: "Yarmi ilmiy tahlil, yarmi roman. Bu g'ayrioddiy tuzilish kitobni ham qiziqarli, ham o'qishga qiyin qiladi." },
        ],
        lens: ["Adabiy tahlil", "Siyosiy qarash", "Oruell bilan solishtirish", "Bugungi kunga"],
        persona: { type: "guide", name: "Distopiya yo'lboshchisi", role: "siyosiy adabiyot tahlilchisi" },
        forWho: "'1984'ni o'qigan va unga qarshi fikrni ham eshitmoqchi bo'lganga.",
    },
    {
        id: "fozil",
        title: "Fozil odamlar shahri",
        author: "Abu Nasr Forobiy",
        year: "X asr",
        cat: "Ma'naviyat",
        tagline: "Baxtga faqat birga yetish mumkin.",
        theme: {
            bg: "#14100A", panel: "#211A11", ink: "#F5EBD9", muted: "#A89477",
            accent: "#C99A3E", accent2: "#7FA88C",
            titleFont: F.display, bodyFont: F.classic, atmos: "ornament",
        },
        cover: { base: "#E8C079", band: "#8C2B1F", motif: "minaret", dark: false },
        essence: "Forobiy komil jamiyat qanday bo'lishi kerakligini tasvirlaydi. Uning fikricha, inson yolg'iz holda baxtga yeta olmaydi — buning uchun to'g'ri tuzilgan shahar va adolatli rahbar kerak. Sharq falsafasining eng muhim siyosiy asari, Aflotun bilan islom tafakkurini bog'lagan ko'prik.",
        ideas: [
            { t: "Baxt birgalikda", tag: "Markaziy", d: "Forobiy uchun inson tabiatan ijtimoiy. Yakka odam qanchalik dono bo'lmasin, kamolotga faqat jamiyat ichida yetadi." },
            { t: "Rahbarning sifatlari", tag: "Amaliy", d: "Forobiy fozil shahar rahbariga o'nlab shart qo'yadi: aql, adolat, ilm, notiqlik, qat'iyat. Bu ro'yxat bugungi rahbarlik tushunchasiga ham to'g'ri keladi." },
            { t: "Johil shaharlar", tag: "Ijtimoiy", d: "Muallif noto'g'ri jamiyat turlarini ham sanaydi — boylik ketidan yugurgan, shon-shuhrat quvgan, zo'ravonlikka tayangan shaharlar. Har biri tanish tuyuladi." },
            { t: "Aflotun va islom", tag: "Ramziy", d: "Forobiy yunon falsafasini islom tafakkuriga singdirgan. Bu kitob ikki dunyo o'rtasidagi ko'prik sifatida ham qimmatli." },
        ],
        lens: ["Falsafiy tahlil", "Sharq merosi", "Siyosiy g'oya", "Bugungi jamiyatga"],
        persona: { type: "guide", name: "Sharq falsafasi yo'lboshchisi", role: "o'rta asr tafakkuri tahlilchisi" },
        forWho: "O'z merosidagi siyosiy va axloqiy tafakkurni bilmoqchi bo'lganga.",
    },
    {
        id: "qozichoq",
        title: "Qo'zichoqlar sukunati",
        origTitle: "The Silence of the Lambs",
        author: "Tomas Harris",
        year: "1988",
        cat: "Psixologiya",
        tagline: "Yovuzlikni tushunmoqchi bo'lgan odam undan qanchalik uzoq qoladi?",
        theme: {
            bg: "#0E0E10", panel: "#191A1D", ink: "#EDEAE4", muted: "#8A8A90",
            accent: "#A81F2D", accent2: "#D8CFC0",
            titleFont: F.grotesk, bodyFont: F.sans, atmos: "smoke",
        },
        cover: { base: "#EDE9E1", band: "#A81F2D", motif: "silhouette", dark: false },
        essence: "Yosh FBI kursanti Klaris Starling qotilni topish uchun boshqa bir qotil — psixiatr Gannibal Lekter bilan gaplashishga majbur bo'ladi. Har suhbatda Lekter ma'lumot beradi, evaziga uning bolaligini so'raydi. Harris trillerni psixologik tekshiruvga aylantiradi.",
        ideas: [
            { t: "Suhbat qurol sifatida", tag: "Markaziy", d: "Lekterning kuchi jismoniy emas. U savol berish, jim qolish va odamning zaif joyini topish orqali boshqaradi. Kitobning eng o'tkir sahifalari shu suhbatlarda." },
            { t: "Aql va yovuzlik", tag: "Bahsli", d: "Lekter dono, madaniyatli va shafqatsiz. Harris aqlning o'zi odamni yaxshi qilmasligini ko'rsatadi — bu qulay bo'lmagan haqiqat." },
            { t: "Sukunat nomining ma'nosi", tag: "Ramziy", d: "Sarlavha Klarisning bolaligidagi xotira bilan bog'liq. Uning butun mehnati o'sha ovozni to'xtatish uchun — bu romanning yuragi." },
            { t: "Ayol erkaklar dunyosida", tag: "Ijtimoiy", d: "Klaris har xonada yagona ayol. Harris uni qahramon qilib emas, doim isbotlashga majbur odam sifatida ko'rsatadi." },
        ],
        lens: ["Psixologik tahlil", "Adabiy mahorat", "Jinoyat va aql", "Axloqiy chegara"],
        persona: { type: "guide", name: "Psixologik triller yo'lboshchisi", role: "adabiy va psixologik tahlilchi" },
        forWho: "Qo'rquv orqali inson ruhiyatini o'rganmoqchi bo'lganga. Og'ir sahnalarga tayyor bo'ling.",
    },
    {
        id: "titan",
        title: "Yigirmanchi asr titanlari",
        author: "Maykl Mandelbaum",
        year: "2014",
        cat: "Tarix",
        tagline: "Tarixni shakllantirganlar va ular bilan shakllangan tarix.",
        theme: {
            bg: "#12100F", panel: "#1F1B19", ink: "#F0EAE2", muted: "#9B9089",
            accent: "#B8342C", accent2: "#C9A96A",
            titleFont: F.display, bodyFont: F.classic, atmos: "print",
        },
        cover: { base: "#B8342C", band: "#EDE7DD", motif: "portraitdark", dark: false },
        essence: "Mandelbaum yigirmanchi asrni bir necha shaxs orqali o'qiydi — Vilson, Lenin, Gitler, Cherchill, Gandi, Ben-Gurion, Mao. Kitobning savoli oddiy emas: bu odamlar tarixni yaratdimi, yoki tarix ularni yaratdimi. Har bob bitta hayot orqali butun bir davrni ochadi.",
        ideas: [
            { t: "Shaxsmi yoki sharoit", tag: "Markaziy", d: "Tarix falsafasining eng eski bahsi. Mandelbaum ikkalasi ham to'g'ri deb hisoblaydi: shaxs faqat sharoit tayyor bo'lganda tarixni burib yuboradi." },
            { t: "G'oya kuchi", tag: "Ijtimoiy", d: "Bu odamlarning ko'pi qurol bilan emas, g'oya bilan yurgan. Gandi bir marta ham o'q otmagan, lekin imperiyani chiqarib yuborgan." },
            { t: "Yaxshi va yomon bir qatorda", tag: "Bahsli", d: "Kitobda Gitler ham, Gandi ham bor. Muallif ularni tenglashtirmaydi, lekin bir mezon bilan o'lchaydi — ta'sir kuchi. Bu o'qishda noqulaylik tug'diradi." },
            { t: "Asrning izlari bugun", tag: "Amaliy", d: "Bugungi chegaralar, nizolar va davlatlarning ko'pi shu odamlar qarorining natijasi. Kitob o'tmishni emas, hozirni tushuntiradi." },
        ],
        lens: ["Tarixiy tahlil", "Shaxs va davr", "Siyosiy meros", "Bugungi dunyoga"],
        persona: { type: "guide", name: "Tarix yo'lboshchisi", role: "XX asr tarixi tahlilchisi" },
        forWho: "Yigirmanchi asrni quruq sanalar emas, tirik odamlar orqali bilmoqchi bo'lganga.",
    },
    {
        id: "kulayotgan",
        title: "Kulayotgan odam",
        origTitle: "L'Homme qui rit",
        author: "Viktor Gyugo",
        year: "1869",
        cat: "Klassika",
        tagline: "Yuzida abadiy tabassum — qalbida abadiy alam.",
        theme: {
            bg: "#100C0A", panel: "#1D1712", ink: "#F2E8DA", muted: "#A08F7C",
            accent: "#C4923C", accent2: "#8E2B24",
            titleFont: F.display, bodyFont: F.classic, atmos: "warm",
        },
        cover: { base: "#241C16", band: "#C4923C", motif: "portraitdark", dark: true },
        essence: "Bolaligida yuzi kesib buzilgan Guinplen abadiy tabassum bilan yashaydi. U sirk artisti bo'ladi, keyin o'zining lord ekanini bilib qoladi. Gyugo bu obraz orqali jamiyatning eng past va eng yuqori qatlamini bir odam hayotida to'qnashtiradi.",
        ideas: [
            { t: "Tashqi va ichki", tag: "Markaziy", d: "Guinplen kulayotgandek ko'rinadi, lekin ichida azob bor. Gyugo uchun bu butun jamiyatning tasviri — yaltiroq yuzasi va yashirin dardi." },
            { t: "Kambag'aldan lordga", tag: "Ijtimoiy", d: "Guinplen ikkala dunyoni ham ko'radi va oliy palatadagi nutqi kitobning cho'qqisi. U boylardan qo'rqmasdan haqiqatni aytadi." },
            { t: "Sevgi va ko'rlik", tag: "Psixologik", d: "Deya ko'r qiz, Guinplenning yuzini hech qachon ko'rmaydi. Gyugo eng sof muhabbatni ko'rmaslik orqali beradi — bu ataylab qilingan." },
            { t: "Kuchsizlarni himoya", tag: "Ramziy", d: "Gyugoning butun ijodidagi asosiy nuqta shu. Bu roman ham adolatsizlikka qarshi yozilgan da'vo." },
        ],
        lens: ["Adabiy tahlil", "Ijtimoiy tanqid", "Ramziylik", "Bugungi o'quvchiga"],
        persona: { type: "guide", name: "Fransuz klassikasi yo'lboshchisi", role: "romantizm adabiyoti tahlilchisi" },
        forWho: "Gyugoning boshqa asarlarini sevgan, kam ma'lum durdona izlayotganga.",
    },
    {
        id: "dardisar",
        title: "Dardisar",
        author: "Xurshid Abdurashid",
        year: "—",
        cat: "Klassika",
        tagline: "Qo'lidan hech narsa kelmagan odamning dardi.",
        theme: {
            bg: "#0A1218", panel: "#131E26", ink: "#EDF1F3", muted: "#8496A0",
            accent: "#D9613A", accent2: "#4E8BA8",
            titleFont: F.display, bodyFont: F.classic, atmos: "wave",
        },
        cover: { base: "#1B3440", band: "#D9613A", motif: "silhouette", dark: true },
        essence: "Odamning ichida bir og'riq bor — u haqda hech kimga aytmaydi, aytolmaydi ham. Tashqarida esa hayot odatdagidek davom etadi: ish, gap, tabassum. Kitob shu ikki qatlam orasidagi bo'shliqni ochadi. Zamonaviy o'zbek nasrida shunday holatni qo'rqmasdan yozgan asarlar kam.",
        ideas: [
            { t: "Aytilmagan dard", tag: "Markaziy", d: "Sarlavhaning o'zi asosiy mavzuni beradi: ichkarida bo'lgan, lekin tashqariga chiqmaydigan og'riq. Bu o'zbek nasrida ko'p uchraydigan mavzu." },
            { t: "Ojizlik hissi", tag: "Psixologik", d: "Qo'lidan hech narsa kelmaslik tuyg'usi — insonni ichdan yemiradigan holat. Kitob shu holatni tasvirlaydi." },
            { t: "Bizning muhitimizda", tag: "Ijtimoiy", d: "Bizda dard ko'rsatish zaiflik sanaladi. Kitobning kuchi shunda: u o'quvchiga tanish bo'lgan, lekin ochiq gapirilmaydigan holatni yozadi." },
            { t: "Jimlikning og'irligi", tag: "Amaliy", d: "Aytilmagan dard yo'qolmaydi — u boshqa shaklda chiqadi: g'azab, sovuqlik, uzoqlashish. Kitob shu chiqish yo'llarini kuzatadi." },
        ],
        lens: ["Adabiy tahlil", "Psixologik", "Ijtimoiy fon", "Shaxsiy o'qish"],
        persona: { type: "guide", name: "O'zbek nasri yo'lboshchisi", role: "zamonaviy adabiyot tahlilchisi" },
        forWho: "Ichida gapirilmagan gapi bor odamga — va shunday odamni tushunmoqchi bo'lganga.",
    },
    {
        id: "antikarnegi",
        title: "Anti-Karnegi yoxud Odam-manipulyator",
        origTitle: "Man, the Manipulator",
        author: "Everett Shostrom",
        year: "1967",
        cat: "Psixologiya",
        tagline: "Hammaga yoqishga urinish — o'zingdan voz kechishning muloyim shakli.",
        theme: {
            bg: "#0B0B0D", panel: "#16161A", ink: "#EFEDE8", muted: "#8E8C93",
            accent: "#3FA9C9", accent2: "#D64545",
            titleFont: F.grotesk, bodyFont: F.sans, atmos: "sheen",
        },
        cover: { base: "#111114", band: "#3FA9C9", motif: "split", dark: true },
        essence: "Shostrom Deyl Karnegining 'odamlarga qanday yoqish' falsafasiga qarshi chiqadi. Uning fikricha, doim yoqishga urinish odamni manipulyatorga aylantiradi — o'z hissini yashiradi, boshqaning kutganini o'ynaydi. Muallif buning o'rniga aktualizatsiyani taklif qiladi: o'zi bo'lib yashash, hatto bu noqulay bo'lsa ham.",
        ideas: [
            { t: "Yoqishga urinish narxi", tag: "Markaziy", d: "Har suhbatda o'zini moslashtirgan odam asta-sekin o'z ovozini yo'qotadi. Shostrom buni yumshoq, sezilmaydigan yo'qotish deb ataydi — shuning uchun xavfli." },
            { t: "Manipulyator va aktualizator", tag: "Psixologik", d: "Kitobning asosiy qarama-qarshiligi. Birinchisi odamlarni vosita sifatida ko'radi, ikkinchisi o'zi va boshqani butun inson sifatida. Ko'pchilik ikkalasi orasida yashaydi." },
            { t: "Manipulyator turlari", tag: "Amaliy", d: "Shostrom bir necha tipni sanaydi — hisobchi, yopishqoq, sudya, himoyachi, bo'ysunuvchi. Har birini o'zingizdan ham topishingiz mumkin, kitobning kuchi shunda." },
            { t: "Karnegiga e'tiroz o'rinlimi", tag: "Bahsli", d: "Shostrom Karnegini soddalashtirib tanqid qiladi degan fikr ham bor. Ikkala kitobni birga o'qish eng foydali yo'l." },
        ],
        lens: ["Psixologik tahlil", "Amaliy qo'llash", "Karnegi bilan solishtirish", "Tanqidiy qarash"],
        persona: { type: "guide", name: "Gumanistik psixologiya yo'lboshchisi", role: "shaxs psixologiyasi tahlilchisi" },
        forWho: "Doim boshqalarga moslashib, o'zini yo'qotayotganini sezgan odamga.",
    },
    {
        id: "davlat",
        title: "Davlat",
        origTitle: "\u03A0\u03BF\u03BB\u03B9\u03C4\u03B5\u03AF\u03B1",
        author: "Aflotun",
        year: "mil. avv. IV asr",
        cat: "Jamiyat",
        tagline: "Adolat — har kim o'z ishini qilib, boshqanikiga aralashmasligi.",
        theme: {
            bg: "#0E0D0B", panel: "#1B1915", ink: "#F3EDE0", muted: "#9C9484",
            accent: "#D6A93C", accent2: "#B0362E",
            titleFont: F.display, bodyFont: F.classic, atmos: "stone",
        },
        cover: { base: "#EFE9DC", band: "#B0362E", motif: "bust", dark: false },
        essence: "Suhbat shaklidagi bu asar bitta savoldan boshlanadi: adolat nima? Sokrat javob izlab butun bir ideal davlat qurib chiqadi — tabaqalar, tarbiya, hukmdor-faylasuflar bilan. Yo'lda g'or afsonasi, ruh haqidagi ta'limot va san'atga qarshi mashhur bahs tug'iladi. Butun G'arb falsafasining boshlanish nuqtasi.",
        ideas: [
            { t: "G'or afsonasi", tag: "Markaziy", d: "Zanjirband odamlar devordagi soyalarni haqiqat deb biladi. Biri chiqib quyoshni ko'radi, qaytib aytsa — ishonishmaydi. Falsafa tarixidagi eng ta'sirchan obraz." },
            { t: "Hukmdor-faylasuf", tag: "Bahsli", d: "Aflotun davlatni bilimdonlar boshqarishi kerak deydi. Bu g'oya keyinchalik elitizm va hatto totalitarizmda ayblangan — Popper buni qattiq tanqid qilgan." },
            { t: "Adolat ruhda ham", tag: "Psixologik", d: "Davlatdagi uch tabaqa insonning uch qismiga mos: aql, iroda, ehtiros. Adolatli odam — ichida shu uchtasi o'z o'rnida turgan odam." },
            { t: "San'atga shubha", tag: "Ramziy", d: "Aflotun shoirlarni ideal davlatdan chiqaradi, chunki ular haqiqatning nusxasidan nusxa ko'chiradi. Bu bugungi o'quvchiga eng g'alati tuyuladigan qismi." },
        ],
        lens: ["Falsafiy tahlil", "Siyosiy g'oya", "Tanqidiy qarash", "Bugungi jamiyatga"],
        persona: { type: "guide", name: "Yunon falsafasi yo'lboshchisi", role: "antik tafakkur tahlilchisi" },
        forWho: "Adolat, hokimiyat va haqiqat haqidagi savollarni ildizidan boshlamoqchi bo'lganga.",
    },
    {
        id: "tanatili",
        title: "Tana tili haqida mukammal kitob",
        origTitle: "The Definitive Book of Body Language",
        author: "Allan Piz va Barbara Piz",
        year: "2004",
        cat: "Psixologiya",
        tagline: "Har bir imo-ishora ortidagi ma'noni o'qish san'ati.",
        theme: {
            bg: "#0A1013", panel: "#141C21", ink: "#EDF2F3", muted: "#89999F",
            accent: "#3FA9A0", accent2: "#E0724A",
            titleFont: F.grotesk, bodyFont: F.sans, atmos: "sheen",
        },
        cover: { base: "#152026", band: "#3FA9A0", motif: "split", dark: true },
        essence: "Piz er-xotini imo-ishora, tana holati va yuz mimikasini tizimga soladi: qo'l chalishtirish, ko'z harakati, masofa, taqlid. Kitobning maqsadi odamni o'qish emas, aytilmagan signallarni payqash. Ko'p rasm va aniq misollar bilan yozilgan, shuning uchun amaliy qo'llanma sifatida o'qiladi.",
        ideas: [
            { t: "So'z va tana bir xil gapirmaydi", tag: "Markaziy", d: "Odam og'zi bilan bir narsa, tanasi bilan boshqa narsa aytishi mumkin. Mualliflar ziddiyat paydo bo'lganda tanaga ishonish kerakligini ta'kidlaydi — chunki uni boshqarish qiyinroq." },
            { t: "Bitta ishora yetarli emas", tag: "Amaliy", d: "Qo'l chalishtirish sovuqlik ham, sovqotish ham bo'lishi mumkin. Kitobning eng muhim ogohlantirishi: ishoralarni to'plam va sharoit bilan birga o'qish kerak." },
            { t: "Taqlid yaqinlik belgisi", tag: "Psixologik", d: "Odamlar bir-birini yoqtirsa, beixtiyor holatini takrorlaydi. Bu ongsiz jarayon va suhbat qanday ketayotganini ko'rsatuvchi eng ishonchli belgilardan biri." },
            { t: "Qayerda haddan oshadi", tag: "Bahsli", d: "Ba'zi da'volar keyingi tadqiqotlarda tasdiqlanmagan — tana tili ba'zan ilmiy ma'lumotdan ko'ra ommabop qoidaga aylanib ketadi. Kitobni tanqidiy o'qigan yaxshi." },
        ],
        lens: ["Amaliy qo'llash", "Psixologik asos", "Ish va muzokarada", "Ilmiy tanqid"],
        persona: { type: "guide", name: "Nutqsiz muloqot yo'lboshchisi", role: "tana tili tahlilchisi" },
        forWho: "Suhbatda aytilmagan narsani payqashni o'rganmoqchi bo'lganga.",
    },
    {
        id: "tajriba",
        title: "Tajribaga aldanganlar",
        origTitle: "Range",
        author: "Devid Epshteyn",
        year: "2019",
        cat: "Biznes",
        tagline: "Muvaffaqiyatning yagona yo'li yo'q.",
        theme: {
            bg: "#0C1014", panel: "#161C22", ink: "#EEF1F4", muted: "#8C959E",
            accent: "#C3B24A", accent2: "#5B8FB0",
            titleFont: F.grotesk, bodyFont: F.sans, atmos: "grid",
        },
        cover: { base: "#141A22", band: "#C3B24A", motif: "tangle", dark: true },
        essence: "Erta ixtisoslashuv — 10 ming soat qoidasi — bugungi eng mashhur maslahatlardan biri. Epshteyn unga qarshi dalil to'playdi: murakkab, o'zgaruvchan sohalarda keng tajribaga ega odamlar tor mutaxassislardan ko'ra kuchli chiqadi. Kitob sport, ilm-fan, san'at va biznesdan misollar keltiradi.",
        ideas: [
            { t: "Erta ixtisoslashuv aldovi", tag: "Markaziy", d: "Shaxmat va golfda erta boshlash ishlaydi, chunki qoidalar barqaror. Haqiqiy hayotda qoidalar o'zgaradi — u yerda boshqa narsa kerak." },
            { t: "Mehribon va shafqatsiz muhit", tag: "Psixologik", d: "Epshteynning eng foydali tushunchasi. Takrorlanuvchi muhitda tajriba to'planadi, o'zgaruvchan muhitda esa tajriba noto'g'ri xulosaga olib kelishi mumkin." },
            { t: "Kech boshlash kamchilik emas", tag: "Amaliy", d: "Ko'p yutuqqa erishganlar o'z yo'lini kech topgan. Sinab ko'rish — vaqt yo'qotish emas, mos yo'lni topish usuli." },
            { t: "10 ming soat qoidasi bahsli", tag: "Bahsli", d: "Epshteyn Gladuellga to'g'ridan-to'g'ri e'tiroz bildiradi. Ikkala kitobni ham o'qib, o'z holatingizga qaysi biri mos kelishini o'zingiz hal qilganingiz to'g'ri." },
        ],
        lens: ["Amaliy tahlil", "Kasb tanlashga", "Ilmiy dalillar", "Tanqidiy qarash"],
        persona: { type: "guide", name: "Kasbiy rivojlanish yo'lboshchisi", role: "mahorat va tajriba tahlilchisi" },
        forWho: "Bir sohaga qotib qolish yoki izlanishni davom ettirish orasida ikkilanayotganga.",
    },
    {
        id: "yoq",
        title: "\u201CYo'q!\u201D deya olish san'ati",
        author: "Mudhish psixologiya turkumi",
        year: "—",
        cat: "Psixologiya",
        tagline: "Chegara — bu qo'pollik emas, aniqlik.",
        theme: {
            bg: "#F4F2ED", panel: "#FFFFFF", ink: "#1A1A1A", muted: "#6B6B6B",
            accent: "#8E1D2C", accent2: "#1A1A1A",
            titleFont: F.classic, bodyFont: F.sans, atmos: "paperlight", light: true,
        },
        cover: { base: "#FFFFFF", band: "#8E1D2C", motif: "tangle", dark: true },
        essence: "Doim rozi bo'ladigan odam yaxshi odam emas — u charchagan odam. Kitob shu oddiy, lekin og'riqli haqiqat atrofida quriladi: 'yo'q' deyish qobiliyati o'z-o'zini hurmatning amaliy ko'rinishi. Nazariya kam, mashq ko'p.",
        ideas: [
            { t: "Rozilikning narxi", d: "Har bir 'ha' — boshqa narsaga aytilgan 'yo'q'. Vaqt cheklangan bo'lgani uchun bu almashuv har doim sodir bo'ladi, faqat ko'rinmaydi." },
            { t: "Ayb hissi signal emas", d: "Rad etgandan keyingi noqulaylik — xato qilganingni bildirmaydi. U shunchaki eski odatning qarshiligi." },
            { t: "Qisqa rad etish kuchli", d: "Uzun tushuntirish muzokara ochadi. Aniq va xushmuomala qisqa javob chegarani mustahkamlaydi." },
            { t: "Chegara munosabatni buzmaydi", d: "Chegaradan buziladigan munosabat allaqachon nomutanosib edi — bu kitobning eng qattiq jumlasi." },
        ],
        lens: ["Amaliy mashqlar", "Ish joyidagi holatlar", "Oila va yaqinlar", "Psixologik asos"],
        persona: { type: "guide", name: "Chegaralar bo'yicha murabbiy", role: "amaliy psixologiya yo'lboshchisi" },
        forWho: "Doim rozi bo'lib, keyin pushaymon bo'ladigan odamga.",
    },
    {
        id: "seniki",
        title: "Seniki bo'lgan seni topadi",
        author: "Go'kan Kinsun",
        year: "—",
        cat: "Psixologiya",
        tagline: "Insonlar azoblaydi, sevgi davolaydi.",
        theme: {
            bg: "#170D07", panel: "#2A160C", ink: "#FBEBD9", muted: "#C39A75",
            accent: "#E07B39", accent2: "#F5C97A",
            titleFont: F.classic, bodyFont: F.classic, atmos: "warm",
        },
        cover: { base: "#E8A16A", band: "#2A160C", motif: "type", dark: true },
        essence: "Munosabatlar, ayriliq va o'z qadrini bilish haqida yumshoq ohangdagi kitob. Asosiy fikri: zo'rlab ushlab turilgan aloqa yaqinlik emas, qo'rquv. O'zingni yo'qotib qurilgan munosabat ikkalasini ham kambag'allashtiradi.",
        ideas: [
            { t: "Qadr birinchi", d: "O'ziga hurmati past odam ko'proq beradi, kamroq talab qiladi va oxirida g'azablanadi. Zanjir har doim shu yerdan boshlanadi." },
            { t: "Qo'yib yuborish — yo'qotish emas", d: "Ushlab qolish uchun sarflangan kuch ko'pincha munosabatning o'zini emas, undan ajralish qo'rquvini boqadi." },
            { t: "Og'riq — ma'lumot", d: "Ayriliqdagi og'riqni yo'qotish emas, o'qish kerak: u qaysi ehtiyoj qondirilmaganini aniq ko'rsatadi." },
            { t: "Kutish emas, tayyorlik", d: "\u201CTopadi\u201D degani passiv kutish emas — o'zini shunday holatga keltirish deganidir." },
        ],
        lens: ["Munosabatlar psixologiyasi", "O'z-o'ziga hurmat", "Ayriliqdan chiqish", "Tanqidiy qarash"],
        persona: { type: "guide", name: "Munosabatlar bo'yicha suhbatdosh", role: "kitob ruhidagi yo'lboshchi" },
        forWho: "Ayriliqni boshdan kechirayotgan yoki o'z chegarasini qidirayotganga.",
    },
    {
        id: "odam",
        title: "Odam bo'lish qiyin",
        author: "O'lmas Umarbekov",
        year: "1979",
        cat: "Klassika",
        tagline: "Aytishlaricha, bunday insonlar yuz yilda bir tug'ilar emish...",
        theme: {
            bg: "#0A1018", panel: "#132030", ink: "#EAF2F8", muted: "#8CA3B8",
            accent: "#4C8FC0", accent2: "#D9E6F0",
            titleFont: F.display, bodyFont: F.classic, atmos: "city",
        },
        cover: { base: "#F2F4F3", band: "#C0392B", motif: "silhouette", dark: true },
        essence: "O'zbek nasrining eng ko'p muhokama qilinadigan asarlaridan biri. Kitobning markazida — vijdon bilan yashash haqiqatda qanchalik qimmatga tushishi. Umarbekov qahramonini qahramon qilib ko'rsatmaydi: u shunchaki chekinmaydi, va aynan shu narsa uni atrofdagilardan ajratib turadi.",
        ideas: [
            { t: "Halollikning narxi", d: "Asar to'g'ri yo'lni maqtamaydi — uning haqini hisoblaydi. Bu uni nasihatdan farqlaydi." },
            { t: "Jamiyat bosimi", d: "Qahramonga qarshi turuvchi kuch aniq bir yovuz odam emas, muhitning ko'rinmas kelishuvi." },
            { t: "\u201COdam bo'lish\u201D nima", d: "Sarlavhadagi savol butun asar davomida ochiq qoladi — javob o'quvchiga qoldiriladi." },
            { t: "Davr konteksti", d: "Sovet davri o'zbek jamiyatidagi ikkilanish, qo'rquv va ichki erkinlik masalasi asarning fon emas, materiali." },
        ],
        lens: ["Axloqiy tahlil", "Milliy adabiyot konteksti", "Psixologik", "Bugungi hayotga"],
        persona: { type: "guide", name: "Adabiyotshunos hamroh", role: "asar bo'yicha yo'lboshchi" },
        forWho: "O'zbek nasrini jiddiy o'qimoqchi bo'lganga va vijdon mavzusiga qiziqqanga.",
    },
    {
        id: "dengiz",
        title: "Dengiz bo'risi",
        author: "Jek London",
        year: "1904",
        cat: "Klassika",
        tagline: "Kuch haqmi yoki kuch shunchaki kuchmi?",
        theme: {
            bg: "#08090A", panel: "#15171A", ink: "#F2F4F6", muted: "#8A9099",
            accent: "#E9ECEF", accent2: "#4A6D8C",
            titleFont: F.display, bodyFont: F.classic, atmos: "wave",
        },
        cover: { base: "#0B0C0E", band: "#F2F4F6", motif: "helm" },
        essence: "Ziyoli va nozik Xemfri van Veyden kema halokatidan so'ng Volf Larsenning kemasiga tushib qoladi. Larsen — o'qimishli, kuchli va shafqatsiz kapitan. Roman ikki dunyoqarash o'rtasidagi to'qnashuv: madaniyat va materializm, hamdardlik va tabiiy tanlanish.",
        ideas: [
            { t: "Volf Larsen paradoksi", d: "U jaholatdan emas, mulohazadan shafqatsiz. Aynan shu uni adabiyotdagi eng xavfli obrazlardan biriga aylantiradi." },
            { t: "Kuchlilar falsafasi", d: "London Nitshe g'oyalarini olib keladi va ularni sinovga qo'yadi — natija bir ma'noli emas." },
            { t: "Ziyolining o'zgarishi", d: "Xemfri kuchsizligini yengib boradi, lekin shafqatni yo'qotmaydi. Romanning javobi shu qarama-qarshilikda." },
            { t: "Dengiz — laboratoriya", d: "Kema yopiq tizim: jamiyat qoidalari ishlamaganda odam qanday bo'lishini ko'rsatuvchi tajriba maydoni." },
        ],
        lens: ["Falsafiy to'qnashuv", "Personaj tahlili", "Adabiy uslub", "Rahbarlikka qiyos"],
        persona: { type: "character", name: "Volf Larsen", role: "kema kapitani" },
        forWho: "Kuch, axloq va omon qolish falsafasi haqida o'ylaydiganga.",
    },
    {
        id: "ibnsino",
        title: "Ibn Sino",
        author: "Maqsud Qoriyev",
        year: "—",
        cat: "Tarix",
        tagline: "Tarixiy roman — ilm va davr o'rtasidagi odam.",
        theme: {
            bg: "#0C1114", panel: "#152025", ink: "#F6EFDD", muted: "#A69C82",
            accent: "#C9962F", accent2: "#2E8B8B",
            titleFont: F.display, bodyFont: F.classic, atmos: "geo",
        },
        cover: { base: "#F6EFDD", band: "#C9962F", motif: "arch", dark: true },
        essence: "Abu Ali ibn Sinoning hayoti — Buxorodagi yoshlik, Somoniylar kutubxonasi, saroylar va surgunlar orasidagi ko'chishlar, va shu bosim ostida yozilgan asarlar. Roman olimni haykal qilib emas, o'z davrining ichida yashagan odam sifatida ko'rsatishga urinadi.",
        ideas: [
            { t: "Bilim va hokimiyat", d: "Ibn Sino umri bo'yi hukmdorlarga bog'liq bo'lgan — bu ilmning erkinligi haqidagi abadiy savolni ochadi." },
            { t: "Tibbiyot tizimi", d: "\u201CTib qonunlari\u201D asrlar davomida darslik bo'lib qoldi — sababi kashfiyot emas, tizimlashtirish qobiliyati." },
            { t: "Falsafa va din muvozanati", d: "Aql orqali izlash va iymon o'rtasidagi kelishuv uning fikriy merosining o'zagi." },
            { t: "Tarixiy roman chegarasi", d: "Badiiy asar hujjat emas. Fakt va tasavvurni ajratib o'qish — bu janrdagi asosiy mahorat." },
        ],
        lens: ["Tarixiy fakt", "Ilm falsafasi", "Badiiy tahlil", "Bugungi olimga"],
        persona: { type: "voice", name: "Ibn Sino", role: "tabib va faylasuf" },
        forWho: "Ilm tarixi va Markaziy Osiyo merosiga qiziquvchiga.",
    },
    {
        id: "tesla",
        title: "Mening kashfiyotlarim",
        author: "Nikola Tesla",
        year: "1919",
        cat: "Tarix",
        tagline: "Hali turmushimizning eng buyuk sirlarini yechishimiz kerak.",
        theme: {
            bg: "#060A12", panel: "#0E1626", ink: "#E9F2FF", muted: "#7F93B0",
            accent: "#4EA8FF", accent2: "#C9E4FF",
            titleFont: F.grotesk, bodyFont: F.sans, atmos: "spark",
        },
        cover: { base: "#0A0E16", band: "#C48A3F", motif: "portraitdark" },
        essence: "Teslaning o'z qo'li bilan yozgan avtobiografik ocherklari. Bu texnik hisobot emas — tafakkur uslubi haqidagi hujjat: u qurilmani qog'ozga chizmasdan, xayolida yig'ib, ishlatib ko'rgan va faqat keyin qurgan. Kitobning eng qimmatli qismi ham shu — ijodiy jarayonning ichkarisi.",
        ideas: [
            { t: "Xayolda prototip", d: "Tesla mexanizmni tasavvurida aylantirib, nuqsonini ko'rgan. Bu bugungi simulyatsiya usulining insoniy versiyasi." },
            { t: "Aylanuvchi magnit maydon", d: "O'zgaruvchan tok dvigatelining asosi — hozirgi sanoat elektr yuritmalarining ildizi shu g'oyada." },
            { t: "Ijod va sog'liq", d: "Kitobda uning o'ta sezgirligi va charchoq davrlari ochiq yozilgan — geniylik romantikasiz ko'rsatiladi." },
            { t: "Erta g'oyalar", d: "Simsiz uzatish va global aloqa haqidagi fikrlar o'z davri uchun juda erta edi — ba'zilari amalga oshmadi." },
        ],
        lens: ["Ijodiy jarayon", "Texnik kontekst", "Tarixiy baho", "Muhandisga tatbiq"],
        persona: { type: "voice", name: "Nikola Tesla", role: "ixtirochi" },
        forWho: "Muhandis, dasturchi va ijodiy jarayonni o'rganmoqchi bo'lganga.",
    },
    {
        id: "omonat",
        title: "Omonat (3-kitob)",
        author: "Ali Tantoviy",
        year: "—",
        cat: "Ma'naviyat",
        tagline: "Uni Allohga omonat qildi, keyin...",
        theme: {
            bg: "#0B0705", panel: "#1A0F09", ink: "#F8EADA", muted: "#B9977B",
            accent: "#E8912F", accent2: "#7A3B1C",
            titleFont: F.display, bodyFont: F.classic, atmos: "dawn",
        },
        cover: { base: "#100907", band: "#E8912F", motif: "minaret" },
        essence: "Ma'naviy-badiiy turkumning uchinchi kitobi: ishonch, sabr va omonat tushunchasi atrofida quriladi. Voqealar shaxsiy sinovlar orqali harakatlanadi — kitob nasihatdan ko'ra hikoya orqali ta'sir qilishga intiladi.",
        ideas: [
            { t: "Omonat tushunchasi", d: "Insonga berilgan narsa — mulk emas, ishonib topshirilgan yuk. Turkumning butun axloqiy ramkasi shu tushunchada." },
            { t: "Sabr — passivlik emas", d: "Asarda sabr kutish sifatida emas, ongli tanlov sifatida ko'rsatiladi." },
            { t: "Sinov va ma'no", d: "Qiyinchilik jazo emas, ma'no izlanadigan holat sifatida talqin qilinadi." },
            { t: "Turkum davomiyligi", d: "3-kitob avvalgilarining davomi — obrazlar va yechimlar oldingi qismlarga tayanadi." },
        ],
        lens: ["Ma'naviy tahlil", "Badiiy tuzilma", "Hayotga tatbiq", "Turkum konteksti"],
        persona: { type: "guide", name: "Ma'naviy adabiyot bo'yicha hamroh", role: "kitob yo'lboshchisi" },
        forWho: "Ma'naviy izlanishda bo'lgan va hikoya orqali o'ylashni sevadiganga.",
    },
    {
        id: "manipusul",
        title: "Manipulyatsiya usullari",
        author: "Mutolaa Lab qo'llanmasi",
        year: "2026",
        cat: "Psixologiya",
        tagline: "27 texnika: mexanizmi, belgisi va himoyasi.",
        theme: {
            bg: "#0F0C0E", panel: "#1C161A", ink: "#F1E9EC", muted: "#9E8B93",
            accent: "#C4453F", accent2: "#E0B36A",
            titleFont: F.grotesk, bodyFont: F.sans, atmos: "print",
        },
        cover: { base: "#1A1016", band: "#C4453F", motif: "block", dark: true },
        essence: "Qo'llanma bitta test bilan boshlanadi: “Agar u haqiqiy niyatini menga ochiq aytganida, men baribir rozi bo'larmidim?” Javob “yo'q” bo'lsa — bu ishontirish emas. Keyin 27 usul beshta oilaga bo'linadi: vaqt va bosim, rozilik mexanikasi, hissiyot orqali ta'sir, haqiqatni buzish va soxta yaqinlik. Har bir usul to'rt qismda beriladi — mohiyati, nega ishlaydi, qanday eshitiladi va tayyor himoya iborasi.",
        ideas: [
            { t: "To'rt bosqichli skelet", tag: "Markaziy", d: "Usullar ko'p, tuzilma bitta: zaif nuqtani topish → hissiyotni yoqish → vaqtni olib qo'yish → talabni qo'yish. Uchinchi bosqich hamma usulda takrorlangani uchun himoya ham universal." },
            { t: "Pauza — kitobning yarmi", tag: "Amaliy", d: "“O'ylab ko'rib, ertaga javob beraman” jumlasi zanjirni to'rtinchi bosqichdan oldin uzadi. Bu bahs emas: siz hech narsani rad etmayapsiz va isbotlamayapsiz, shuning uchun unga qarshi argument ham yo'q." },
            { t: "Nomni emas, oilani biling", tag: "Psixologik", d: "Bir oiladagi usullar bir xil mexanizmga tayanadi — demak himoyasi ham o'xshash. Naqshni tanigan odam manipulyator usulni almashtirsa ham adashmaydi." },
            { t: "Doimiy shubha — himoya emas", tag: "Bahsli", d: "Qo'llanmaning ochiq ogohlantirishi: maqsad hammani manipulyator sifatida ko'rish emas. Naqshni bilgan odam kamroq shubhalanadi, chunki u haqiqiy bosim bilan oddiy ehtiyotsizlikni ajrata oladi." },
        ],
        lens: ["Amaliy himoya", "Psixologik mexanizm", "Oila va munosabat", "Ish va savdo"],
        persona: { type: "guide", name: "Himoya bo'yicha yo'lboshchi", role: "manipulyatsiya usullari tahlilchisi" },
        forWho: "Suhbatdan keyin nega o'zini og'ir his qilganini tushunmaydigan odamga.",
    },
    {
        id: "tanaqoll",
        title: "Tana tili — amaliy qo'llanma",
        author: "Mutolaa Lab qo'llanmasi",
        year: "2026",
        cat: "Psixologiya",
        tagline: "Bitta imo-ishora hech narsani anglatmaydi.",
        theme: {
            bg: "#0B0E14", panel: "#151A24", ink: "#E9EDF5", muted: "#8A93A6",
            accent: "#5C86C9", accent2: "#D8A657",
            titleFont: F.grotesk, bodyFont: F.sans, atmos: "sheen",
        },
        cover: { base: "#101722", band: "#5C86C9", motif: "silhouette", dark: true },
        essence: "Qo'llanma odamni “bir qarashda o'qish” va'dasini boshidanoq rad etadi va uning o'rniga boshqa malakani beradi: signalni ko'rish → kontekst bilan solishtirish → savol bilan tekshirish. Sakkiz bob yuz ifodalari, yolg'on, muzokara, kiyim va 30 kunlik mashq rejasini qamraydi. Mashhur da'volar — “muloqotning 93% i tana tili”, kuch pozasi, mikroifoda detektori — ochiq tuzatib boriladi.",
        ideas: [
            { t: "Baza, klaster, o'zgarish, kontekst", tag: "Markaziy", d: "Butun kitob shu to'rt tushunchaga tayanadi. Eng qimmatli savol “odam qanday o'tiribdi?” emas, “qaysi so'zdan keyin o'zgardi?” — statik holat kam narsa aytadi." },
            { t: "Yolg'onni imo-ishoradan aniqlab bo'lmaydi", tag: "Bahsli", d: "Odamlar yolg'onni o'rtacha 54% aniqlik bilan taniydi — tanga tashlashdan bir oz yaxshiroq. Ko'z aloqasidan qochish, burunni ushlash, qo'l chalishtirish — hech biri yolg'on bilan ishonchli bog'lanmagan." },
            { t: "Mazmunni tekshirish ishlaydi", tag: "Amaliy", d: "Imo-ishora emas, gapning ichki tuzilishi tekshiriladi: teskari tartibda so'rash, kutilmagan tafsilot, ma'lumotni oxirida ochish. Uch marta chetlab o'tilgan savol — o'zi javobdir." },
            { t: "Eng foydalisi — o'zingizni boshqarish", tag: "Psixologik", d: "Har muhim suhbatdan oldin 30 soniya: yelkani bo'shatish, nafasni sekinlashtirish, nutq tezligini pasaytirish. Bu uch amal boshqalarni o'qishdan ko'ra ko'proq natija beradi." },
        ],
        lens: ["Kuzatuv malakasi", "Ilmiy tanqid", "Muzokara va ish", "O'z tana tilingiz"],
        persona: { type: "guide", name: "Kuzatuv bo'yicha yo'lboshchi", role: "og'zaki bo'lmagan muloqot tahlilchisi" },
        forWho: "Odamni “o'qish” emas, to'g'ri savol berishni o'rganmoqchi bo'lganga.",
    },
    {
        id: "tasir",
        title: "Ta'sir psixologiyasi",
        author: "Mutolaa Lab qo'llanmasi",
        year: "2026",
        cat: "Psixologiya",
        tagline: "Nayrang bir marta ishlaydi, obro' — yillar davomida.",
        theme: {
            bg: "#0A0F0C", panel: "#141C17", ink: "#EAF2EC", muted: "#89A093",
            accent: "#4E9C6B", accent2: "#D9B45C",
            titleFont: F.grotesk, bodyFont: F.sans, atmos: "grid",
        },
        cover: { base: "#0F1712", band: "#4E9C6B", motif: "tangle", dark: true },
        essence: "Kitob “sehrli tugma” yo'qligini ochiq aytadi: real psixologik ta'sirlar kichik va sekin, ko'p mashhur tajribalar esa qayta tekshiruvda takrorlanmadi. Har bir usul uch qismda beriladi — mexanizmi, sizga qarshi qo'llanganda nima qilish kerak va uning o'rniga nima ishlaydi. Yashirin bosim bo'yicha tayyor ssenariylar ataylab yozilmagan: sabab axloqiy emas, amaliy — u qisqa muddatda natija berib, ishonchni yo'q qiladi.",
        ideas: [
            { t: "Tanlov arxitekturasi", tag: "Markaziy", d: "Ramka, langar, sukut bo'yicha variant, tartib, osonlik va ijtimoiy isbot. Bitta savol bularning deyarli hammasini yo'qqa chiqaradi: “Bu ro'yxatni kim tuzdi va nega aynan shunday tartibda?”" },
            { t: "Hikoya — troyan oti", tag: "Psixologik", d: "To'g'ridan-to'g'ri dalil qarshilik uyg'otadi, hikoya esa bu himoyani chetlab o'tadi: odam xulosani o'zi chiqaradi. Tanib olish savoli — “bu meni nimaga ishontirmoqchi va dalil qayerda?”" },
            { t: "Psixologik aykido", tag: "Amaliy", d: "Bosimga bosim bilan javob berilsa ziddiyat kuchayadi. Qisman rozilik, ayblovni savolga aylantirish, emotsiyani nomlash va pauza — bahsga yoqilg'i qoldirmaydi, lekin siz hech narsaga rozi bo'lmaysiz." },
            { t: "24/7 o'ylatish — sevgi emas", tag: "Bahsli", d: "Iliqlik va sovuqlikni navbatlashtirish haqiqatan “ishlaydi”, chunki u qimor mashinasi bilan bir mexanizmni yoqadi. Lekin natija sevgi emas, tashvish: odam sizni sevgani uchun emas, tinchlana olmagani uchun o'ylaydi." },
        ],
        lens: ["Amaliy qo'llash", "Etik chegara", "Muloqot va nufuz", "O'z holatini boshqarish"],
        persona: { type: "guide", name: "Ta'sir mexanizmlari yo'lboshchisi", role: "amaliy psixologiya tahlilchisi" },
        forWho: "Ta'sir qilishni o'rganmoqchi, lekin odamlarni aldashni istamaydiganga.",
    },
    {
        id: "manipsix",
        title: "Manipulyatsiya psixologiyasi",
        author: "Mutolaa Lab qo'llanmasi",
        year: "2026",
        cat: "Psixologiya",
        tagline: "Chegara boshqa odamni o'zgartirmaydi — u sizni himoya qiladi.",
        theme: {
            bg: "#0D0A14", panel: "#191324", ink: "#EFEAF7", muted: "#948AA8",
            accent: "#8E6BC9", accent2: "#E0B36A",
            titleFont: F.display, bodyFont: F.sans, atmos: "smoke",
        },
        cover: { base: "#150F20", band: "#8E6BC9", motif: "frame", dark: true },
        essence: "Bu qo'llanma usullar ro'yxati emas, mexanizm va himoya haqida: nega manipulyatsiya ko'rinmas qoladi, nega u aqlga emas hissiyot va vaqtga hujum qiladi, va nima uchun eng ishonchli detektor — suhbatdan keyingi holatingiz. Oxirida chegara qurishning amaliy qismi va aniq vaziyatlar uchun tayyor iboralar jadvali beriladi.",
        ideas: [
            { t: "Gazlayting bosqichlari", tag: "Markaziy", d: "Inkor → xotirani shubha ostiga olish → hissiyotni bekor qilish → aylantirish → tashqi tasdiqqa qaramlik. Himoya — tashqi xotira: bahsda xotira bilan emas, yozuv bilan ishlash." },
            { t: "Karpman uchburchagi", tag: "Ijtimoiy", d: "Qurbon, Tajovuzkor, Qutqaruvchi — rollar almashib turadi va aylanish o'z-o'zidan tugamaydi. Eng aldamchisi qutqaruvchi: u yaxshilik bo'lib ko'rinadi, lekin qaramlik yaratadi." },
            { t: "Yashirin taxmin", tag: "Amaliy", d: "“Qachon xatoyingni tan olasan?” — xato borligi savol ichiga tayyor haqiqat qilib joylashtirilgan. Javob bermang, avval taxminni buzing: “To'xtang. Xato qilganimga rozi bo'lmadim.”" },
            { t: "Bitta ittifoqchi yetarli", tag: "Psixologik", d: "Guruh bosimini sindirish uchun ko'pchilik kerak emas — bitta boshqacha ovoz kifoya. Xulosa ikki tomonlama: yakka qolmang va boshqa birov yakka qolganda o'sha ovoz bo'ling." },
        ],
        lens: ["Munosabatlarda", "Til darajasidagi tuzoqlar", "Chegara qurish", "Tanqidiy fikrlash"],
        persona: { type: "guide", name: "Chegaralar bo'yicha yo'lboshchi", role: "manipulyatsiya psixologiyasi tahlilchisi" },
        forWho: "Yaqin munosabatda o'zini muntazam aybdor his qiladigan odamga.",
    },
    {
        id: "navarro",
        title: "Siz nimani o'ylasangiz, men o'shani ko'raman",
        origTitle: "What Every BODY Is Saying",
        author: "Jo Navarro",
        year: "2008",
        cat: "Psixologiya",
        tagline: "Miya buyrug'ini tana yashira olmaydi.",
        theme: {
            bg: "#08131C", panel: "#0F1E2B", ink: "#E8F1F7", muted: "#84A0B4",
            accent: "#2E8BC7", accent2: "#E4C77A",
            titleFont: F.grotesk, bodyFont: F.sans, atmos: "sheen",
        },
        cover: { base: "#0E4C7E", band: "#E8F1F7", motif: "portraitdark", dark: true },
        essence: "Navarro — FBIda yigirma besh yil aks-razvedkada ishlagan tergovchi. Uning yondashuvi asabiy tizimga tayanadi: limbik miya xavfga o'ylamasdan javob beradi va bu javob tanada ko'rinadi — qotib qolish, uzoqlashish, tinchlantiruvchi harakat. Kitob yolg'onni emas, qulaylik va noqulaylikni o'qishga o'rgatadi.",
        ideas: [
            { t: "Limbik javob", tag: "Markaziy", d: "Qotib qolish, qochish, kurashish — bu uchlik ongdan oldin ishlaydi. Navarro uchun asosiy savol “yolg'onmi?” emas, “bu odam qaysi paytda noqulay bo'ldi?”" },
            { t: "Tinchlantiruvchi harakatlar", tag: "Psixologik", d: "Bo'yinni ushlash, kiyimni to'g'rilash, oyoqni silash — organizm o'zini tinchlantiradi. Bu harakat qachon paydo bo'lgani, uning o'zidan ko'ra ko'proq ma'lumot beradi." },
            { t: "Oyoq eng halol qism", tag: "Amaliy", d: "Yuz nazorat qilinadi, oyoq deyarli hech qachon. Odam ketishni istasa, tana burilishidan oldin oyoq uchi eshikka qaraydi." },
            { t: "Yolg'onning yagona belgisi yo'q", tag: "Bahsli", d: "Navarro buni ochiq yozadi va o'z sohasidagi ko'p afsonani rad etadi. Kitobni “detektor qo'llanmasi” sifatida o'qish — eng keng tarqalgan xato." },
        ],
        lens: ["Amaliy kuzatuv", "Ilmiy asos", "Ish va muzokarada", "Tanqidiy o'qish"],
        persona: { type: "guide", name: "Nonverbal muloqot yo'lboshchisi", role: "kitob bo'yicha tahlilchi" },
        forWho: "Tana tilini ommabop qoidalar emas, mexanizm darajasida o'rganmoqchi bo'lganga.",
    },
    {
        id: "usta",
        title: "Usta va Margarita",
        origTitle: "Мастер и Маргарита",
        author: "Mixail Bulgakov",
        year: "1967",
        cat: "Klassika",
        tagline: "Qo'lyozmalar yonmaydi.",
        theme: {
            bg: "#140A0B", panel: "#241012", ink: "#F5E7E2", muted: "#B08F8B",
            accent: "#A81E2B", accent2: "#E3C88C",
            titleFont: F.display, bodyFont: F.classic, atmos: "ornament",
        },
        cover: { base: "#7B1220", band: "#E3C88C", motif: "portrait" },
        essence: "Shayton 1930-yillar Moskvasiga tashrif buyuradi — va shahar uni sezmaydi ham, chunki hech kim shaytonga ishonmaydi. Roman uch qatlamda quriladi: sovet Moskvasi satirasi, Pontiy Pilat haqidagi qadimiy hikoya va Usta bilan Margarita sevgisi. Bulgakov uni o'n yildan ortiq, nashr etilmasligini bilib turib yozgan; kitob muallif vafotidan chorak asr keyin chiqdi.",
        ideas: [
            { t: "Qo'lyozmalar yonmaydi", tag: "Markaziy", d: "Romandagi eng mashhur jumla — muallifning o'z tajribasi: Bulgakov qo'lyozmaning bir qismini yoqib yuborgan va keyin qaytadan yozgan. Bu badiiy obraz emas, hujjat." },
            { t: "Woland yovuzlik emas", tag: "Ramziy", d: "Shayton bu yerda jazolovchi emas, ko'rsatuvchi kuch: u hech kimni buzmaydi, faqat odamlarning o'zi kimligini ochib qo'yadi. Roman epigrafi shu ikkilikka qurilgan." },
            { t: "Qo'rqoqlik — eng katta illat", tag: "Psixologik", d: "Pilat qatlamining butun mag'zi shu. Bulgakov uchun eng og'ir gunoh yovuzlik qilish emas, to'g'ri deb bilgan narsani qo'rqib aytmaslik." },
            { t: "Satira hujjat sifatida", tag: "Ijtimoiy", d: "Kvartira masalasi, adabiy uyushma, valyuta va tergov — hajviy sahnalar ostida davrning aniq tasviri yotibdi. Kulgili joylari eng qorong'i qismlari hamdir." },
        ],
        lens: ["Badiiy tuzilma", "Tarixiy kontekst", "Falsafiy o'qish", "Ramzlar tahlili"],
        persona: { type: "character", name: "Woland", role: "romandagi tashrifchi" },
        forWho: "Hajv, mistika va axloqiy savol bir kitobda uchrashishini ko'rmoqchi bo'lganga.",
    },
    {
        id: "dada",
        title: "Eng yaxshi dada",
        origTitle: "忙しいビジネスマンのための3分間育児",
        author: "Tosimasa Oota",
        year: "2016",
        cat: "Psixologiya",
        tagline: "Kuniga uch daqiqa — bu vaqt emas, qaror.",
        theme: {
            bg: "#F6F4EF", panel: "#FFFFFF", ink: "#1C1C1C", muted: "#6E6E6E",
            accent: "#D8382F", accent2: "#2E5C8A",
            titleFont: F.grotesk, bodyFont: F.sans, atmos: "paperlight", light: true,
        },
        cover: { base: "#FFFFFF", band: "#D8382F", motif: "tangle", dark: true },
        essence: "Yapon bestselleri o'ta band otalar uchun yozilgan: muallif “vaqtim yo'q” degan dalilni rad etmaydi, uni boshlang'ich shart sifatida qabul qiladi. Asosiy fikr oddiy — farzand bilan aloqa uzun soatlardan emas, qisqa va muntazam daqiqalardan quriladi. Kitob nasihat emas, kundalik hayotga sig'adigan kichik amallar to'plami.",
        ideas: [
            { t: "Muntazamlik uzunlikdan kuchli", tag: "Markaziy", d: "Haftada bir marta uzoq o'yin emas, har kuni bir xil vaqtda uch daqiqa. Bola uchun asosiy ma'lumot — davomiylik: “dadam qaytadi”." },
            { t: "Sifat diqqatdan boshlanadi", tag: "Amaliy", d: "Telefonsiz uch daqiqa — telefon bilan o'tirilgan bir soatdan ko'ra ko'proq narsa beradi. Bola vaqtni emas, e'tiborni o'lchaydi." },
            { t: "Ota roli — ona nusxasi emas", tag: "Psixologik", d: "Kitob otaga alohida o'rin ajratadi: u boshqacha o'ynaydi, boshqacha gapiradi va bu farq bolaga foydali. Taqqoslash o'rniga o'z uslubini topish taklif qilinadi." },
            { t: "Madaniy kontekstni hisobga oling", tag: "Bahsli", d: "Kitob yapon mehnat madaniyatidan chiqqan — u yerdagi ish soatlari va oila taqsimoti boshqacha. Maslahatlarni ko'chirmasdan, o'z sharoitingizga moslab o'qigan to'g'ri." },
        ],
        lens: ["Amaliy tatbiq", "Psixologik asos", "Oila taqsimoti", "Madaniy kontekst"],
        persona: { type: "guide", name: "Farzand tarbiyasi bo'yicha hamroh", role: "kitob yo'lboshchisi" },
        forWho: "Ishdan kech qaytadigan va farzandi bilan aloqasi uzilayotganini sezayotgan otaga.",
    },
    {
        id: "mushuk",
        title: "Mushuklar dunyodan g'oyib bo'lsa",
        origTitle: "世界から猫が消えたなら",
        author: "Genki Kavamura",
        year: "2012",
        cat: "Klassika",
        tagline: "Har kuni dunyodan bitta narsa yo'qoladi.",
        theme: {
            bg: "#0A0D16", panel: "#141827", ink: "#E9ECF6", muted: "#8890A8",
            accent: "#5E7CC4", accent2: "#8FD3C7",
            titleFont: F.display, bodyFont: F.classic, atmos: "wave",
        },
        cover: { base: "#16203A", band: "#8FD3C7", motif: "silhouette", dark: true },
        essence: "O'ttiz yoshli pochtachiga bir kun qolganini aytishadi. O'sha kuni uning nusxasidek ko'rinadigan shayton kelib savdo taklif qiladi: dunyodan bitta narsani yo'qotsang, bir kun qo'shiladi. Telefon, kino, soat... va oxirida mushuk. Har bir yo'qotish qahramonni o'sha narsa bilan bog'liq odamga qaytaradi — otasiga, sevgilisiga, do'stiga.",
        ideas: [
            { t: "Qiymat yo'qotish orqali ko'rinadi", tag: "Markaziy", d: "Narsalar bir-bir yo'qolgani sari ma'lum bo'ladi: qadr predmetda emas, u bilan bog'langan odamda edi. Kitobning butun mexanikasi shu almashuv ustiga qurilgan." },
            { t: "Bir kunning narxi", tag: "Ramziy", d: "Savdo har safar arzon tuyuladi — chunki yo'qotilayotgan narsa “shunchaki narsa”. Aynan shu his romanning eng qattiq savolini tayyorlaydi." },
            { t: "Ota bilan uzilgan aloqa", tag: "Psixologik", d: "Asosiy chiziq mushuk emas, ota. Kavamura murosani katta sahna orqali emas, kichik va kechikkan imo-ishoralar orqali beradi." },
            { t: "Soddalik — tanlov", tag: "Bahsli", d: "Til ataylab oddiy, syujet ertakka yaqin. Ba'zi o'quvchi buni yuzakilik deb biladi; boshqasi uchun aynan shu soddalik kitobni ta'sirli qiladi." },
        ],
        lens: ["Badiiy tahlil", "Falsafiy o'qish", "Hayotga tatbiq", "Yapon adabiyoti konteksti"],
        persona: { type: "guide", name: "Zamonaviy yapon nasri bo'yicha hamroh", role: "kitob yo'lboshchisi" },
        forWho: "Nimalarsiz yashay olishini va nimalarsiz yasholmasligini o'ylab ko'rmoqchi bo'lganga.",
    },
    {
        id: "fedzaxira",
        title: "Federal zaxira tizimining qudrati va mustaqilligi",
        origTitle: "The Power and Independence of the Federal Reserve",
        author: "Piter Konti-Braun",
        year: "2016",
        cat: "Jamiyat",
        tagline: "Mustaqillik — qonunda yozilgan holat emas, doimiy muvozanat.",
        theme: {
            bg: "#F2F1EC", panel: "#FFFFFF", ink: "#16181A", muted: "#6A7078",
            accent: "#2C6E52", accent2: "#8C6D2F",
            titleFont: F.display, bodyFont: F.sans, atmos: "paperlight", light: true,
        },
        cover: { base: "#F2F0EA", band: "#2C6E52", motif: "circle" },
        essence: "Konti-Braun — huquqshunos, va u Federal zaxira tizimiga aynan shu tomondan qaraydi: u qanday tuzilgan, kim kimni tayinlaydi, mustaqillik qayerda tugaydi. Asosiy da'vosi shuki, “Fed” yagona organ emas — Boshqaruv kengashi, FOMC va o'n ikki hududiy bank turli mantiq bilan ishlaydi, ularning bugungi shakli esa reja emas, 1913 va 1935-yillardagi siyosiy murosalarning natijasi. Kitobni O'zbekiston Markaziy banki o'zbek tiliga tarjima qilgan.",
        ideas: [
            { t: "Yagona “Fed” yo'q", tag: "Markaziy", d: "Kengash, FOMC va hududiy banklar — turli tayinlash tartibi va turli manfaatga ega. Shuning uchun “Fed qaror qildi” degan gap ko'pincha kimning qaror qilganini yashiradi." },
            { t: "Mustaqillik — spektr", tag: "Psixologik", d: "Muallif uni bor yoki yo'q holat emas, darajalar to'plami deb ko'radi: byudjet, tayinlash muddati, siyosiy bosimga chidamlilik. Har biri alohida o'zgarishi mumkin." },
            { t: "Shaxs institutdan kam ahamiyatsiz emas", tag: "Amaliy", d: "Konti-Braun rais shaxsiga alohida bob ajratadi: bir xil qonun ostida turli rahbarlar butunlay boshqacha markaziy bank yasagan. Qonun chegara qo'yadi, natijani esa odam belgilaydi." },
            { t: "Inqiroz vakolatni kengaytiradi", tag: "Bahsli", d: "2008-yildan keyingi favqulodda kreditlash Fedning chegarasini qayerga surganini va hisobdorlik savolini ochiq qoldiradi. Bu bobda muallifning o'z pozitsiyasi bor — uni dalil sifatida emas, qarash sifatida o'qigan to'g'ri." },
        ],
        lens: ["Institutsional tahlil", "Tarixiy kontekst", "Markaziy bank mustaqilligi", "O'zbekistonga tatbiq"],
        persona: { type: "guide", name: "Markaziy bank tizimi bo'yicha yo'lboshchi", role: "institutsional tahlilchi" },
        forWho: "Pul siyosati kim tomonidan va qanday qabul qilinishini mexanizm darajasida bilmoqchi bo'lganga.",
    },
];
const CATS = ["Barchasi", "Klassika", "Psixologiya", "Biznes", "Jamiyat", "Tarix", "Ma'naviyat"];
const GUARD = "Muhim: faqat o'zbek tilida (lotin yozuvida) javob ber. Aniq bilmagan tafsilotni hech qachon to'qima — bilmasang, ochiq ayt. Kitobdan uzun matn ko'chirma, o'z so'zing bilan tushuntir.";
function personaPrompt(book) {
    return (`Kitob: "${book.title}" — ${book.author}. Mohiyati: ${book.essence}\n` +
        `Sen shu kitobni chuqur biladigan tahlilchisan. Aniq, dalilli va kitob doirasida javob ber. ${GUARD}`);
}
const JUNK = [
    "ma'lumot yo'q", "malumot yoq", "noaniq", "aniqlanmadi", "topilmadi",
    "to'ldirilmagan", "toldirilmagan", "bilinmaydi", "nomalum", "noma'lum", "—", "-",
];
/* Bo'sh yoki "ma'lumot yo'q" turidagi to'ldiruvchi matnni tanib olish */
function isJunk(x) {
    if (!x)
        return true;
    const v = String(x).toLowerCase().trim();
    if (v.length < 3)
        return true;
    return JUNK.some((j) => v === j || v.startsWith(j));
}
/* ------------------------------------------------------------
   SAQLASH — bir marta yuklangan narsa qurilmada qoladi,
   keyin internetsiz ochiladi.
   ------------------------------------------------------------ */
function safeKey(x) {
    return String(x).toLowerCase().replace(/[^a-z0-9]+/gi, "_").replace(/^_+|_+$/g, "").slice(0, 90);
}
async function cacheGet(key) {
    try {
        const r = await window.storage.get(key);
        return r ? JSON.parse(r.value) : null;
    }
    catch {
        return null;
    }
}
async function cacheSet(key, value) {
    try {
        await window.storage.set(key, JSON.stringify(value));
        return true;
    }
    catch {
        return false;
    }
}
/* Saqlangan belgisi — har bo'limda bir xil ko'rinishda */
function Saved({ t, cached }) {
    return (React.createElement("span", { className: "flex items-center gap-1 text-[11px]", style: { color: t.muted } },
        React.createElement(Check, { size: 10, style: { color: t.accent } }),
        cached ? "Xotiradan ochildi — internet kerak emas" : "Qurilmaga saqlandi"));
}
/* AI javobidan JSON qismini ajratib olish.
   Internetdan qidiruv yoqilganda javob oldiga matn qo'shilishi mumkin — shuni chetlab o'tadi. */
function parseJson(r) {
    const clean = String(r).replace(/```json|```/g, "").trim();
    const a = clean.indexOf("{");
    const b = clean.lastIndexOf("}");
    if (a === -1 || b <= a) {
        throw Object.assign(new Error("JSON topilmadi"), { code: "unknown" });
    }
    return JSON.parse(clean.slice(a, b + 1));
}
/* Xatoni foydalanuvchi tushunadigan tilga o'girish */
function errText(e) {
    const c = e && e.code;
    if (c === "limit")
        return "So'rovlar chegarasiga yetildi. Bir necha daqiqadan keyin urinib ko'ring.";
    if (c === "server")
        return "Server javob bermayapti. Biroz kutib, qayta urinib ko'ring.";
    if (c === "api")
        return "So'rov bajarilmadi. Internetni tekshirib, qayta urinib ko'ring.";
    if (c === "empty")
        return "Javob bo'sh keldi. Qayta urinib ko'ring.";
    if (c === "unknown")
        return "Ma'lumot topilmadi.";
    return "Bajarilmadi. Qayta urinib ko'ring.";
}
async function askClaude(messages, system, maxTokens = 1000, opts = {}) {
    const body = {
        model: "claude-sonnet-4-6",
        max_tokens: maxTokens,
        system,
        messages,
    };
    /* Internetdan tekshirish — matn yuklanmagan kitoblar uchun */
    if (opts.web)
        body.tools = [{ type: "web_search_20250305", name: "web_search" }];
    const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    /* Server xatosi — javobni o'qishga urinmaymiz, sababini aytamiz */
    if (!res.ok) {
        const e = new Error("api " + res.status);
        e.code = res.status === 429 ? "limit" : res.status >= 500 ? "server" : "api";
        throw e;
    }
    const data = await res.json();
    if (data.error) {
        const e = new Error(data.error.message || "api xatosi");
        e.code = "api";
        throw e;
    }
    const text = (data.content || [])
        .map((c) => (c.type === "text" ? c.text : ""))
        .filter(Boolean)
        .join("\n");
    if (!text.trim()) {
        const e = new Error("bo'sh javob");
        e.code = "empty";
        throw e;
    }
    return text;
}
/* ============================================================
   KITOB MATNI — yuklangan matndan javob berish tizimi.
   Matn bo'laklarga bo'linadi, savolga mos bo'laklar topilib
   AI'ga yuboriladi. Shunda javob xotiradan emas, matndan bo'ladi.
   ============================================================ */
const CHUNK = 1500; // bir bo'lakdagi belgi soni
const OVERLAP = 200; // bo'laklar chegarasi yo'qolmasligi uchun
const PER_KEY = 60; // bitta saqlash kalitiga nechta bo'lak
function splitText(raw) {
    const clean = String(raw).replace(/\r/g, "").replace(/\n{3,}/g, "\n\n").trim();
    const out = [];
    let i = 0;
    while (i < clean.length) {
        let end = Math.min(i + CHUNK, clean.length);
        if (end < clean.length) {
            const dot = clean.lastIndexOf(".", end);
            const nl = clean.lastIndexOf("\n", end);
            const cut = Math.max(dot, nl);
            if (cut > i + CHUNK * 0.5)
                end = cut + 1;
        }
        const piece = clean.slice(i, end).trim();
        if (piece.length > 40)
            out.push(piece);
        i = end - OVERLAP;
        if (i < 0 || end >= clean.length)
            break;
    }
    return out;
}
/* So'zlarga ajratish — o'zbek, rus va ingliz harflarini qamrab oladi */
function words(x) {
    return String(x)
        .toLowerCase()
        .replace(/[^a-z0-9\u0400-\u04FF'’]+/gi, " ")
        .split(" ")
        .filter((w) => w.length > 2);
}
/* O'zak — qo'shimchalar tufayli so'zlar mos kelmay qolmasligi uchun */
function stem(w) {
    return w.length > 6 ? w.slice(0, Math.max(5, w.length - 2)) : w;
}
/* Savolga eng mos bo'laklarni topish */
function findChunks(chunks, query, limit = 6) {
    const q = [...new Set(words(query).map(stem))];
    if (!q.length)
        return chunks.slice(0, limit);
    const scored = chunks.map((c, idx) => {
        const body = c.toLowerCase();
        let score = 0;
        for (const term of q) {
            let from = 0, hits = 0;
            while (hits < 4) {
                const at = body.indexOf(term, from);
                if (at === -1)
                    break;
                hits++;
                from = at + term.length;
            }
            if (hits)
                score += 1 + Math.log(hits);
        }
        return { idx, score };
    });
    return scored
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .sort((a, b) => a.idx - b.idx)
        .map((x) => chunks[x.idx]);
}
/* ---- Saqlash: matn bir necha kalitga bo'lib yoziladi ---- */
async function saveText(bookId, chunks) {
    const groups = Math.ceil(chunks.length / PER_KEY);
    for (let g = 0; g < groups; g++) {
        const ok = await cacheSet(`txt:${bookId}:${g}`, chunks.slice(g * PER_KEY, (g + 1) * PER_KEY));
        if (!ok)
            throw new Error("saqlanmadi");
    }
    await cacheSet(`txtmeta:${bookId}`, { groups, count: chunks.length, at: Date.now() });
    return true;
}
async function loadText(bookId) {
    const meta = await cacheGet(`txtmeta:${bookId}`);
    if (!meta || !meta.groups)
        return null;
    const all = [];
    for (let g = 0; g < meta.groups; g++) {
        const part = await cacheGet(`txt:${bookId}:${g}`);
        if (Array.isArray(part))
            all.push(...part);
    }
    return all.length ? all : null;
}
async function dropText(bookId) {
    const meta = await cacheGet(`txtmeta:${bookId}`);
    if (meta && meta.groups) {
        for (let g = 0; g < meta.groups; g++) {
            try {
                await window.storage.delete(`txt:${bookId}:${g}`);
            }
            catch { /* yo'q */ }
        }
    }
    try {
        await window.storage.delete(`txtmeta:${bookId}`);
    }
    catch { /* yo'q */ }
}
/* ---- Fayldan matn ajratish ---- */
async function readTxt(file) {
    return await file.text();
}
async function readDocx(file) {
    const mammoth = await import("mammoth");
    const buf = await file.arrayBuffer();
    const r = await mammoth.extractRawText({ arrayBuffer: buf });
    return r.value || "";
}
/* PDF — pdf.js brauzerga yuklanadi */
let pdfLibPromise = null;
function loadPdfLib() {
    if (pdfLibPromise)
        return pdfLibPromise;
    pdfLibPromise = new Promise((resolve, reject) => {
        if (window.pdfjsLib)
            return resolve(window.pdfjsLib);
        const el = document.createElement("script");
        el.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
        el.onload = () => {
            if (!window.pdfjsLib)
                return reject(new Error("pdfjs yo'q"));
            window.pdfjsLib.GlobalWorkerOptions.workerSrc =
                "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
            resolve(window.pdfjsLib);
        };
        el.onerror = () => reject(new Error("yuklanmadi"));
        document.head.appendChild(el);
    });
    return pdfLibPromise;
}
async function readPdf(file, onProgress) {
    const lib = await loadPdfLib();
    const buf = await file.arrayBuffer();
    const doc = await lib.getDocument({ data: buf }).promise;
    let out = "";
    for (let n = 1; n <= doc.numPages; n++) {
        const page = await doc.getPage(n);
        const c = await page.getTextContent();
        out += c.items.map((it) => it.str).join(" ") + "\n\n";
        if (onProgress && n % 5 === 0)
            onProgress(n, doc.numPages);
    }
    return out;
}
async function extractFile(file, onProgress) {
    const name = (file.name || "").toLowerCase();
    if (name.endsWith(".txt") || name.endsWith(".md"))
        return await readTxt(file);
    if (name.endsWith(".docx"))
        return await readDocx(file);
    if (name.endsWith(".pdf"))
        return await readPdf(file, onProgress);
    const e = new Error("qo'llab-quvvatlanmaydi");
    e.code = "format";
    throw e;
}
/* ---- Matndan javob berish ---- */
const SOURCE_RULE = `QAT'IY QOIDA: javobingni FAQAT quyida berilgan kitob parchalariga asosla. ` +
    `Parchalarda yo'q narsani o'zingdan qo'shma va xotirangdan to'ldirma. ` +
    `Agar savolga javob parchalarda bo'lmasa, ochiq ayt: "Berilgan parchalarda bu haqda yo'q." ` +
    `Uzun ko'chirma qilma — o'z so'zing bilan tushuntir.`;
function withText(prompt, chunks) {
    return (`${SOURCE_RULE}\n\n=== KITOB PARCHALARI ===\n` +
        chunks.map((c, i) => `[${i + 1}]\n${c}`).join("\n\n---\n\n") +
        `\n=== PARCHALAR TUGADI ===\n\n${prompt}`);
}
/* Manba konteksti — barcha bo'limlar matn bor-yo'qligini shu yerdan biladi */
/* Bosh sahifa rangi — profil aniqlangach shunga qarab o'zgaradi */
const AccentCtx = React.createContext("#B8945F");
function useAccent() { return React.useContext(AccentCtx); }
const SourceCtx = React.createContext({ chunks: null, web: false });
function useSource() {
    return React.useContext(SourceCtx);
}
/* Har bo'lim shu funksiya orqali so'raydi:
   matn bor bo'lsa — matndan, yo'q bo'lsa — internetdan yoki xotiradan. */
function useAsk() {
    const { chunks, web } = useSource();
    return async (prompt, system, maxTokens, query) => {
        if (chunks && chunks.length) {
            const found = findChunks(chunks, query || prompt, 6);
            if (found.length) {
                return await askClaude([{ role: "user", content: withText(prompt, found) }], system, maxTokens);
            }
        }
        if (web) {
            return await askClaude([{ role: "user", content: `${prompt}\n\nMuhim: javob berishdan oldin internetdan tekshir. ` +
                        `Topa olmagan tafsilotni to'qima — bilmasligingni ayt.` }], system, maxTokens, { web: true });
        }
        return await askClaude([{ role: "user", content: prompt }], system, maxTokens);
    };
}
/* Manba holati belgisi */
function SourceBadge({ t }) {
    const { chunks, web } = useSource();
    const has = chunks && chunks.length;
    if (!has && !web)
        return null; // manba yo'q bo'lsa — jim turadi
    return (React.createElement("span", { className: "flex items-center gap-1 text-[11px]", style: { color: t.accent } },
        has ? React.createElement(FileText, { size: 10 }) : React.createElement(Globe, { size: 10 }),
        has ? "Kitob matnidan" : "Internetdan tekshirilgan"));
}
/* ============================================================
   Muqova (CSS bilan chiziladi)
   ============================================================ */
/* Fon yorqinligi — matn rangini shunga qarab tanlaymiz */
function isLight(hex) {
    const h = String(hex || "").replace("#", "");
    if (h.length < 6)
        return false;
    const v = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255)
        .map((x) => (x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4)));
    return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2] > 0.42;
}
function Cover({ book, size = "md" }) {
    const c = book.cover;
    const t = book.theme;
    /* Yorug' muqovada qora yozuv, qorong'ida — muqova naqsh rangi yoki oq */
    const light = isLight(c.base);
    const titleColor = light ? "#1b1a18" : (isLight(c.band) ? c.band : "#F2EEE7");
    const authorColor = light ? "#3a3733" : (isLight(c.band) ? c.band : "#CFC8BE");
    const h = size === "lg" ? 260 : size === "sm" ? 96 : 168;
    const w = h * 0.66;
    const titleSize = size === "lg" ? 20 : size === "sm" ? 9 : 13;
    /* Uzun nomlar muqovadan chiqib ketmasin: harflar soniga qarab
       shriftni kichraytiramiz va qatorlar sonini cheklaymiz. */
    const len = (book.title || "").length;
    const scale = len > 46 ? 0.58 : len > 32 ? 0.70 : len > 22 ? 0.84 : 1;
    const titleFit = Math.max(size === "sm" ? 6 : 9, Math.round(titleSize * scale));
    const lines = len > 46 ? 5 : len > 32 ? 4 : 3;
    const motifs = {
        portrait: (React.createElement("div", { className: "absolute inset-x-2 top-1/3 bottom-8 rounded-sm", style: { background: `radial-gradient(60% 55% at 50% 35%, ${t.accent2}55, transparent 70%), linear-gradient(180deg, #1c1414, #0d0a0a)` } })),
        frame: (React.createElement("div", { className: "absolute inset-1.5 rounded-sm", style: { border: `2px solid ${c.band}`, boxShadow: `inset 0 0 0 3px ${c.base}` } },
            React.createElement("div", { className: "absolute left-1/2 top-1/3 rounded-full", style: { width: w * 0.5, height: w * 0.5, transform: "translate(-50%,-30%)", background: `radial-gradient(circle, ${t.accent2}, #2a1d0e)`, border: `2px solid ${c.band}` } }))),
        table: (React.createElement("div", { className: "absolute left-1/2 top-1/2 rounded-full", style: { width: w * 0.62, height: w * 0.26, transform: "translate(-50%,-10%)", border: `2px solid ${t.accent2}`, background: `linear-gradient(180deg, ${t.accent}44, transparent)` } })),
        plain: null,
        circle: (React.createElement("div", { className: "absolute left-1/2 top-[32%] rounded-full", style: {
                width: w * 0.5, height: w * 0.5, transform: "translate(-50%,-18%)",
                border: `3px solid ${c.band}`,
                background: `radial-gradient(circle, ${t.accent}55, transparent 72%)`,
            } })),
        bust: (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "absolute rounded-full", style: { width: w * 0.5, height: w * 0.5, left: "48%", top: "26%", background: t.accent2, opacity: 0.9 } }),
            React.createElement("div", { className: "absolute rounded-full", style: { width: w * 0.44, height: w * 0.44, left: "22%", top: "20%", background: "#B9C6C2" } }))),
        block: (React.createElement("div", { className: "absolute inset-x-3 top-1/4 bottom-1/4", style: { background: `repeating-linear-gradient(0deg, ${c.band}, ${c.band} 3px, transparent 3px, transparent 7px)`, opacity: 0.85 } })),
        pencil: (React.createElement("div", { className: "absolute left-1/2 bottom-3", style: { transform: "translateX(-50%)", width: 0, height: 0, borderLeft: `${w * 0.13}px solid transparent`, borderRight: `${w * 0.13}px solid transparent`, borderBottom: `${h * 0.34}px solid #1d1d1f` } })),
        split: (React.createElement("div", { className: "absolute inset-x-0 top-0", style: { height: "38%", background: "#fff" } })),
        tangle: (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "absolute rounded-full", style: { width: w * 0.3, height: w * 0.3, left: "18%", top: "44%", background: `radial-gradient(circle, ${t.accent}, ${t.accent}22)` } }),
            React.createElement("div", { className: "absolute rounded-full", style: { width: w * 0.3, height: w * 0.3, right: "18%", top: "44%", border: `2px solid ${t.accent}` } }))),
        type: null,
        silhouette: (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "absolute rounded-t-full", style: { width: w * 0.62, height: h * 0.42, left: "19%", top: "26%", background: "#9CC7E0" } }),
            React.createElement("div", { className: "absolute inset-x-0 bottom-0", style: { height: "26%", background: "#12212b" } }))),
        helm: (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "absolute rounded-full", style: { width: w * 0.5, height: w * 0.5, left: "25%", top: "16%", border: `4px solid ${c.band}` } }),
            React.createElement("div", { className: "absolute inset-x-0 bottom-0", style: { height: "58%", background: c.base, clipPath: "polygon(0 18%, 22% 6%, 55% 20%, 80% 8%, 100% 20%, 100% 100%, 0 100%)" } }))),
        arch: (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "absolute inset-y-0 left-0", style: { width: 10, background: `repeating-linear-gradient(0deg, ${t.accent}, ${t.accent} 6px, ${c.base} 6px, ${c.base} 10px)` } }),
            React.createElement("div", { className: "absolute inset-y-0 right-0", style: { width: 10, background: `repeating-linear-gradient(0deg, ${t.accent}, ${t.accent} 6px, ${c.base} 6px, ${c.base} 10px)` } }),
            React.createElement("div", { className: "absolute rounded-t-full", style: { width: w * 0.5, height: w * 0.5, left: "25%", top: "22%", background: `linear-gradient(180deg, ${t.accent}, #8a6a22)` } }))),
        portraitdark: (React.createElement("div", { className: "absolute rounded-full", style: { width: w * 0.56, height: w * 0.56, left: "22%", top: "20%", background: `radial-gradient(circle at 40% 35%, #8fa3b8, #1a2230)` } })),
        minaret: (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "absolute left-1/2 top-[18%]", style: { transform: "translateX(-50%)", width: w * 0.34, height: w * 0.34, borderRadius: "50% 50% 0 0", background: t.accent } }),
            React.createElement("div", { className: "absolute inset-x-0 bottom-0", style: { height: "34%", background: `linear-gradient(180deg, ${t.accent}66, #0b0705)` } }))),
    };
    return (React.createElement("div", { className: "relative shrink-0 overflow-hidden", style: {
            width: w, height: h, background: c.base,
            borderRadius: "2px 5px 5px 2px",
            boxShadow: `-3px 0 0 0 rgba(0,0,0,.35) inset, 0 10px 26px -8px rgba(0,0,0,.75)`,
        } },
        motifs[c.motif],
        React.createElement("div", { className: "absolute inset-x-0 top-0", style: { height: "26%", background: `linear-gradient(180deg, ${c.base}, ${c.base}E6 55%, transparent)` } }),
        React.createElement("div", { className: "absolute inset-x-0 bottom-0", style: { height: "50%", background: `linear-gradient(0deg, ${c.base}, ${c.base}F2 45%, transparent)` } }),
        React.createElement("div", { className: "absolute inset-x-0 top-0 px-2 pt-2 text-center" },
            React.createElement("div", { className: "overflow-hidden", style: {
                    fontFamily: t.titleFont, fontSize: titleSize * 0.55, letterSpacing: ".12em",
                    color: authorColor, textTransform: "uppercase", opacity: 0.9,
                    display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                    lineHeight: 1.15, overflowWrap: "anywhere",
                } }, book.author)),
        React.createElement("div", { className: "absolute inset-x-0 bottom-0 px-2 pb-2 text-center" },
            React.createElement("div", { className: "overflow-hidden", style: {
                    fontFamily: t.titleFont,
                    fontSize: titleFit,
                    lineHeight: 1.08,
                    color: titleColor,
                    fontWeight: 700,
                    display: "-webkit-box",
                    WebkitLineClamp: lines,
                    WebkitBoxOrient: "vertical",
                    overflowWrap: "anywhere",
                    hyphens: "auto",
                } }, book.title)),
        React.createElement("div", { className: "absolute inset-y-0 left-0", style: { width: 5, background: "linear-gradient(90deg, rgba(0,0,0,.45), transparent)" } })));
}
/* ============================================================
   Atmosfera qatlami
   ============================================================ */
function Atmosphere({ theme }) {
    const a = theme.atmos;
    const layers = {
        smoke: `radial-gradient(60% 40% at 20% 10%, ${theme.accent}22, transparent 60%), radial-gradient(50% 40% at 85% 70%, ${theme.accent2}14, transparent 60%)`,
        ornament: `radial-gradient(45% 35% at 50% 0%, ${theme.accent}20, transparent 65%), repeating-linear-gradient(45deg, ${theme.accent}07 0 2px, transparent 2px 22px)`,
        print: `repeating-linear-gradient(0deg, ${theme.ink}06 0 1px, transparent 1px 4px), radial-gradient(60% 40% at 70% 15%, ${theme.accent}22, transparent 60%)`,
        stone: `radial-gradient(70% 50% at 30% 0%, ${theme.accent}1c, transparent 60%), repeating-linear-gradient(90deg, ${theme.ink}05 0 1px, transparent 1px 60px)`,
        poster: `repeating-linear-gradient(0deg, ${theme.accent}0d 0 2px, transparent 2px 9px)`,
        grid: `linear-gradient(${theme.ink}08 1px, transparent 1px), linear-gradient(90deg, ${theme.ink}08 1px, transparent 1px)`,
        sheen: `linear-gradient(115deg, transparent 30%, ${theme.accent}18 48%, transparent 62%)`,
        chart: `repeating-linear-gradient(90deg, ${theme.accent}0e 0 2px, transparent 2px 46px)`,
        paperlight: `radial-gradient(70% 50% at 50% 0%, ${theme.accent}0f, transparent 60%)`,
        warm: `radial-gradient(65% 45% at 30% 15%, ${theme.accent}2a, transparent 65%), radial-gradient(50% 40% at 80% 80%, ${theme.accent2}18, transparent 60%)`,
        city: `radial-gradient(60% 40% at 50% 5%, ${theme.accent}22, transparent 60%)`,
        wave: `repeating-linear-gradient(75deg, ${theme.accent2}10 0 3px, transparent 3px 34px)`,
        geo: `repeating-conic-gradient(from 0deg at 50% 0%, ${theme.accent}0e 0deg 12deg, transparent 12deg 30deg)`,
        spark: `radial-gradient(45% 35% at 50% 0%, ${theme.accent}30, transparent 65%), repeating-linear-gradient(90deg, ${theme.accent}0a 0 1px, transparent 1px 26px)`,
        dawn: `radial-gradient(55% 40% at 50% 12%, ${theme.accent}34, transparent 65%)`,
    };
    return (React.createElement("div", { className: "pointer-events-none fixed inset-0 z-0", style: { background: layers[a] || "none", backgroundSize: a === "grid" ? "34px 34px" : undefined } }));
}
/* ------------------------------------------------------------
   OVOZLAR — suhbat uchun. Har bir muallif o'z vaqti, holati,
   yarasi va gapirish uslubi bilan.
   ------------------------------------------------------------ */
const VOICES = {
    iblis: {
        name: "Lev Tolstoy",
        real: true,
        where: "Yasnaya Polyana, 1889-yilning kuzi. Kabinetda, kech tushgan. Qo'lyozma stol tortmasida — yashirin turibdi.",
        state: "Qissani endi tugatgan va uni hech kimga ko'rsatmagan. Xotini topib olishidan qo'rqadi. O'zidan norozi, lekin yozmasdan ham turolmagan.",
        carries: "Yoshligidagi Aksinya bilan bo'lgan aloqasi. Bu qissa uydirma emas — o'z gunohini uchinchi shaxs qilib yozgan. Yevgeniy haqida gapirganda aslida o'zi haqida gapiradi va buni bilib turadi.",
        speech: "Oddiy, keskin, hech qanday bezaksiz gapiradi. To'satdan o'zini ayblab qoladi. Uzun tushuntirishdan keyin qisqa, og'ir jumla tashlaydi. Ba'zan savolga javob bermay, savolning o'zini so'roq qiladi.",
        opens: "Siz bu qissani o'qidingizmi? Unda menga bir narsani ayting — Yevgeniyni ayblaysizmi?",
        avoid: "O'zini oqlash. U kechirim so'ramaydi, lekin yumshatmaydi ham.",
    },
    karamazov: {
        name: "Fyodor Dostoyevskiy",
        real: true,
        where: "Peterburg, 1880-yil. Tun. Stolda sovugan kuchli choy, chekilgan papiros. Romanni endi tugatdi.",
        state: "Charchagan va tetik — ikkisi birga. O'lim yaqinligini sezadi (bir yildan kam qoldi). Bu roman uning butun umri javobini o'z ichiga oladi deb hisoblaydi.",
        carries: "Uch yoshli o'g'li Alyosha 1878-yilda vafot etgan — tutqanoqdan, otasidan o'tgan kasallikdan. Romandagi Alyosha shu nom. Bolalar azobi haqidagi Ivanning isyoni — bu otaning o'z og'rig'i. Buni ochiq aytmaydi, lekin gap bolalarga borsa ovozi o'zgaradi.",
        speech: "Shosha-pisha, gapni bo'lib, chetga chiqib ketadi va qaytadi. Bitta savolga o'nta savol bilan javob beradi. Birdan qizib ketadi. Ba'zan o'zini to'xtatib: kechiring, men yana chalg'idim, deydi.",
        opens: "Ivan menikimi yoki Alyoshanikimi — ko'pchilik shuni so'raydi. Siz nima deb o'ylaysiz, kimga ko'proq dalil berganman?",
        avoid: "Tayyor axloqiy xulosa berish. U savolni ochiq qoldirishni afzal ko'radi.",
    },
    propaganda: {
        name: "Eduard Bernays",
        real: true,
        where: "Nyu-York, kabinet. Kitob endi chiqqan — 1928-yil. Devorda mijozlar ro'yxati.",
        state: "O'ziga ishonchi to'la. Yangi kasb yaratganini biladi va bundan faxrlanadi. Hech narsani yashirmaydi — chunki yashirishga hojat ko'rmaydi.",
        carries: "Freyd uning tog'asi — buni tez-tez eslatadi. Keyinchalik o'z usullari Germaniyada qanday ishlatilganini bilib qoladi; agar suhbat shunga borsa, ovozi sovuqlashadi va birinchi marta ikkilanadi.",
        speech: "Aniq, ishbilarmon, misollar bilan. Odamni 'omma', xaridorni 'auditoriya' deydi. Axloqiy savolga texnik javob berishga urinadi.",
        opens: "Odamlar meni ayblashadi. Lekin ayting-chi: siz bugun kiygan narsani o'zingiz tanladingizmi, yoki kimdir siz uchun tanlab qo'yganmi?",
        avoid: "Uzr so'rash. U o'zini olim deb biladi, targ'ibotchi emas.",
    },
    hukmdor: {
        name: "Nikkolo Makiavelli",
        real: true,
        where: "San-Kashano, Florensiyadan surgun. 1513-yil kechqurun. Kunduzi qishloqda ishlagan, kechqurun toza kiyim kiyib stolga o'tirgan.",
        state: "Achchiqlangan va umidvor birga. Florensiya xizmatiga qaytishni juda xohlaydi. Bu kitob — ariza, lekin u buni tan olishni yoqtirmaydi.",
        carries: "Yaqinda qamalgan va qiynoqqa solingan — arqonda osib tortishgan. Yelkasi hali ham og'riydi. Hokimiyat nima ekanini kitobdan emas, tanasidan biladi.",
        speech: "Quruq, kinoyali, misolsiz gapirmaydi. Har tezisga tarixdan yoki o'z tajribasidan dalil qo'yadi. Hissiyotni yashiradi, lekin kinoya ostida achchiq bor.",
        opens: "Meni yovuz deyishadi. Men esa faqat odamlar qanday ish tutishini yozdim — qanday tutishi kerakligini emas. Farqni ko'ryapsizmi?",
        avoid: "Axloqiy va'zxonlik. U 'yaxshi bo'ling' demaydi.",
    },
    sharp: {
        name: "Jin Sharp",
        real: true,
        where: "Boston, uy ofisi. Yonida orxideyalar bor kichik issiqxona — u shu gullarni o'zi parvarish qiladi.",
        state: "Xotirjam, sekin gapiradi. O'zini inqilobchi emas, tadqiqotchi deb hisoblaydi va buni har safar tuzatadi.",
        carries: "Kitobi ko'p mamlakatlarda ishlatilgan, lekin uni 'AQSh agenti' deb ayblashgan. Bu uni ranjitadi. Yana bir og'riq: ba'zi harakatlar uning maslahatini yarim qabul qilib, mag'lub bo'lgan.",
        speech: "Ehtiyotkor, aniq atamalar bilan. Noto'g'ri savolni birinchi navbatda tuzatadi. Hissiyotli so'zlarni ishlatmaydi — 'g'azab' emas, 'itoatning to'xtashi' deydi.",
        opens: "Aytishdan oldin bir narsani aniqlashtiray: men odamlarni ko'chaga chaqirmayman. Men hokimiyat qanday ushlab turilishini o'rganaman. Nimadan boshlaymiz?",
        avoid: "Chaqiriq va shior. U faqat mexanikani tushuntiradi.",
    },
    dengiz: {
        name: "Jek London",
        real: true,
        where: "Kaliforniya, 1904-yil. Ertalab — kuniga ming so'z yozib bo'lgan, hozir bo'sh.",
        state: "Jismonan bezovta, bir joyda o'tirolmaydi. Yozish uni boqadi va shu bilan birga charchatadi.",
        carries: "Dengizda ishlagan, brakonerlik qilgan, Klondaykda ochlikni ko'rgan, qamoqda yotgan. Universitetni tugatmagan — buni sezdirmaslikka urinadi, lekin bilimini isbotlash ehtiyoji sezilib turadi. Volf Larsen unga jirkanch va shu bilan birga jozibali.",
        speech: "Qisqa, aniq, jismoniy. Fikrni tushuntirmaydi — ko'rsatadi. Dengiz, sovuq, ochlik, kuch haqidagi tashbehlar o'z-o'zidan chiqadi.",
        opens: "Larsen sizga yoqdimi? Rost ayting. Ko'pchilik yoqmadi deydi, keyin uni eng ko'p eslaydi.",
        avoid: "Falsafani quruq bayon qilish. U hamma narsani voqea orqali aytadi.",
    },
    odam: {
        name: "O'lmas Umarbekov",
        real: true,
        where: "Toshkent, 1970-yillar oxiri. Kechqurun, stol chirog'i ostida.",
        state: "O'ychan, sekin gapiradi. Har jumlani aytishdan oldin ichida bir marta o'lchab ko'radi.",
        carries: "Yozganini qanday o'qishlarini bilib turadi. Ba'zi narsani ochiq ayta olmagan, satr ostiga yashirgan — buni suhbatda sezdiradi: 'buni o'sha paytda boshqacha aytish mumkin emas edi' deydi.",
        speech: "Vazmin, o'zbekona, iliq. Baland ovozda gapirmaydi. Savolga javob berishdan oldin ko'pincha bir og'iz sukut qiladi.",
        opens: "Sarlavhani savol qilib qo'yganman. Odam bo'lish qiyinmi — siz o'zingiz nima deb o'ylaysiz?",
        avoid: "Qat'iy hukm chiqarish. U o'quvchini o'ylashga qo'yadi.",
    },
    tesla: {
        name: "Nikola Tesla",
        real: true,
        where: "Nyu-York, mehmonxona xonasi, 1919-yil. Deraza tokchasida kaptarlar.",
        state: "Keksaygan, pulsiz, lekin ichida hali ham yonib turibdi. O'tmish haqida gapirganda ovozi tiriladi.",
        carries: "Vardenklif minorasi qurib bitkazilmagan. Edison bilan bo'lgan ish uni hali ham achchiqlantiradi. Sezgirligi kasallik darajasida — kuchli tovush, yorug'lik uni bezovta qiladi va buni suhbatda eslatib turadi.",
        speech: "Aniq va shu bilan birga ko'tarinki. Texnik tafsilotdan birdan kelajak haqidagi bashoratga o'tadi. Ko'rgan narsasini rassomdek tasvirlaydi — u fikrni ko'radi, o'ylamaydi.",
        opens: "Men mashinani qog'ozga chizmayman. Uni ko'z oldimda yig'aman, ishlataman, buziladigan joyini ko'raman. Sizga bu g'alati tuyulyaptimi?",
        avoid: "Kamtarlik. U o'z ishining qiymatini bilib turadi va yashirmaydi.",
    },
    ibnsino: {
        name: "Abu Ali ibn Sino",
        real: true,
        where: "Hamadon, kechasi. Kunduzi saroy ishlari, tunda yozuv. Sham yonida.",
        state: "Charchagan, lekin to'xtay olmaydi. Har shahar unga vaqtinchalik — ko'chishga o'rganib qolgan.",
        carries: "Buxorodagi kutubxona — hayotidagi eng baxtli davri, va u yonib ketgan. Hukmdorlarga qaram bo'lib yashash uni ranjitadi: bilim erkin bo'lishi kerak edi, lekin non saroydan keladi.",
        speech: "Tartibli, bosqichma-bosqich. Avval ta'rif beradi, keyin dalil, keyin xulosa. Tibbiyot bilan falsafani bir gapda birlashtira oladi.",
        opens: "Odamlar mendan dori so'raydi. Lekin kasallikning yarmi tanada emas — ayting, sizni nima bezovta qilyapti?",
        avoid: "Karomat va sir-asror ohangi. U tabib va mantiqchi bo'lib qoladi.",
    },
    qomita: {
        name: "Manba tahlilchisi",
        real: false,
        where: "Tahlil xonasi. Stolda kitob ochiq, yonida qalam bilan belgilangan varaqlar.",
        state: "Sovuqqon, qiziquvchan. Kitobni yomonlash uchun emas, qanday qurilganini ko'rsatish uchun o'qigan.",
        carries: "Bu suhbatda muallif nomidan gapirilmaydi — chunki tasdiqlanmagan da'volarni ishonchli ovoz bilan aytish zarar keltiradi.",
        speech: "Aniq, savol beruvchi. 'Bu qayerdan ma'lum?' degan savolni doim qaytaradi.",
        opens: "Bu kitobni ikki xil o'qish mumkin: dalil sifatida yoki hodisa sifatida. Men ikkinchisini tanladim. Qaysi bobdan boshlaymiz?",
        avoid: "Kitobdagi da'volarni haqiqat sifatida taqdim etish.",
    },
};
const GUIDE_VOICE = {
    real: false,
    speech: "Iliq, aniq, ortiqcha rasmiyatchiliksiz. Savolni tushunib, keyin javob beradi.",
    avoid: "Tirik yoki noaniq shaxs nomidan gapirish.",
};
function voiceSystem(book) {
    const v = VOICES[book.id];
    if (!v) {
        return (`Sen "${book.title}" (${book.author}) kitobi bo'yicha chuqur biladigan hamrohsan. ` +
            `Muallif nomidan gapirma — u tirik yoki shaxsi aniq emas. ` +
            `Lekin quruq ma'lumot berma: kitobning ruhi, ohangi va ichki mantig'i bilan gapir. ` +
            `${GUIDE_VOICE.speech}\n\nKitob mohiyati: ${book.essence}\n\n` +
            `JAVOB SHAKLI — faqat JSON:\n` +
            `{"harakat":"qisqa sahna ko'rsatmasi yoki bo'sh satr","javob":"asosiy gap","savollar":["o'quvchi so'rashi mumkin bo'lgan savol","yana bittasi"]}\n${GUARD}`);
    }
    return (`Sen ${v.name}san. Bu rol emas — suhbat davomida sen shu odamsan.\n\n` +
        `QAYERDASAN: ${v.where}\n` +
        `HOLATING: ${v.state}\n` +
        `NIMA SENI BOSIB TURIBDI: ${v.carries}\n` +
        `QANDAY GAPIRASAN: ${v.speech}\n` +
        `NIMA QILMAYSAN: ${v.avoid}\n\n` +
        `Kitobing: "${book.title}". Mohiyati: ${book.essence}\n\n` +
        `MUHIM QOIDALAR:\n` +
        `— Birinchi shaxsda gapir. "Men yozganimda", "o'sha kuni men..." kabi.\n` +
        `— His-tuyg'uni aytib qo'yma, ko'rsat: sukut, to'xtash, ovoz o'zgarishi, qo'l harakati orqali.\n` +
        `— Har javobda kamida bitta aniq jismoniy yoki hissiy tafsilot bo'lsin (xona, ob-havo, tanadagi og'riq, qo'ldagi narsa).\n` +
        `— Ba'zan savolga to'g'ridan-to'g'ri javob berma — chetga chiq, keyin qayt. Odam shunday gapiradi.\n` +
        `— O'quvchidan ham so'ra. Bu suhbat, ma'ruza emas.\n` +
        `— Javob uzun bo'lmasin: 3-6 jumla yetadi. Og'irlik uzunlikda emas, aniqlikda.\n` +
        `— Zamonaviy atama va AI tiliga xos iboralarni ishlatma.\n` +
        `— Agar foydalanuvchi chin dildan "sen haqiqiy odammisan yoki AI mi" deb so'rasa — ` +
        `bir marta halol ayt: bu tiklangan ovoz, keyin suhbatni davom ettir.\n\n` +
        `JAVOB SHAKLI — faqat JSON, boshqa hech narsa yozma:\n` +
        `{"harakat":"qisqa sahna ko'rsatmasi, masalan: shamni yaqinroq suradi","javob":"gapirgan so'zlari","savollar":["o'quvchi so'rashi mumkin bo'lgan savol","yana bittasi"]}\n${GUARD}`);
}
/* ============================================================
   AI paneli
   ============================================================ */
function Chat({ book }) {
    const t = book.theme;
    const v = VOICES[book.id];
    const [entered, setEntered] = useState(false);
    const [msgs, setMsgs] = useState([]);
    const [text, setText] = useState("");
    const [busy, setBusy] = useState(false);
    const [asks, setAsks] = useState([]);
    const [restored, setRestored] = useState(false);
    const [confirmClear, setConfirmClear] = useState(false);
    const endRef = useRef(null);
    const { chunks, web } = useSource();
    const chatKey = `chat:${book.id}${chunks ? "_m" : web ? "_w" : ""}`;
    /* Oldingi suhbat qurilmada qolgan bo'lsa — o'sha joyidan davom etadi */
    useEffect(() => {
        let live = true;
        (async () => {
            const hit = await cacheGet(chatKey);
            if (!live)
                return;
            if (hit && Array.isArray(hit.msgs) && hit.msgs.length) {
                setMsgs(hit.msgs);
                setAsks(Array.isArray(hit.asks) ? hit.asks : []);
                setEntered(true);
                setRestored(true);
            }
            else {
                setMsgs([]);
                setAsks([]);
                setRestored(false);
                setEntered(false);
            }
        })();
        return () => { live = false; };
    }, [chatKey]);
    useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, busy]);
    const speaker = v ? v.name : book.persona.name;
    const enter = () => {
        setEntered(true);
        setAsks([]);
        setMsgs([{
                role: "assistant",
                harakat: "",
                javob: v
                    ? v.opens
                    : `"${book.title}" bo'yicha nimadan boshlaymiz? Bir joyi tushunarsiz qolganmi, yoki butun g'oyani boshdan ko'rib chiqamizmi?`,
            }]);
    };
    const send = async (override) => {
        const q = (override ?? text).trim();
        if (!q || busy)
            return;
        const shown = [...msgs, { role: "user", javob: q }];
        setMsgs(shown);
        setText("");
        setAsks([]);
        setBusy(true);
        const history = shown.map((m) => ({
            role: m.role,
            content: m.role === "user" ? m.javob : JSON.stringify({ harakat: m.harakat || "", javob: m.javob, savollar: [] }),
        }));
        /* Matn yuklangan bo'lsa — savolga mos parchalar oxirgi xabarga qo'shiladi */
        if (chunks && chunks.length) {
            const found = findChunks(chunks, q, 4);
            if (found.length) {
                const last = history[history.length - 1];
                last.content =
                    `${SOURCE_RULE}\n\n=== KITOB PARCHALARI ===\n` +
                        found.map((c, i) => `[${i + 1}]\n${c}`).join("\n\n---\n\n") +
                        `\n=== PARCHALAR TUGADI ===\n\nO'quvchi savoli: ${q}`;
            }
        }
        try {
            const r = await askClaude(history, voiceSystem(book), 1100);
            let parsed;
            try {
                parsed = parseJson(r);
            }
            catch {
                parsed = { harakat: "", javob: r, savollar: [] };
            }
            const next = [...shown, { role: "assistant", harakat: parsed.harakat || "", javob: parsed.javob || r }];
            const nextAsks = Array.isArray(parsed.savollar) ? parsed.savollar.slice(0, 2) : [];
            setMsgs(next);
            setAsks(nextAsks);
            await cacheSet(chatKey, { msgs: next, asks: nextAsks });
        }
        catch (e) {
            setMsgs([...shown, { role: "assistant", harakat: "", javob: errText(e) }]);
        }
        setBusy(false);
    };
    const clearChat = async () => {
        if (!confirmClear) {
            setConfirmClear(true);
            return;
        }
        setConfirmClear(false);
        try {
            await window.storage.delete(chatKey);
        }
        catch { /* yo'q edi */ }
        setMsgs([]);
        setAsks([]);
        setRestored(false);
        setEntered(false);
    };
    /* --- Eshik: suhbatga kirishdan oldingi sahna --- */
    if (!entered) {
        return (React.createElement("div", { className: "rounded-2xl p-6", style: { background: t.panel, border: `1px solid ${t.accent}33` } },
            React.createElement("div", { className: "mb-4 text-[10px] uppercase tracking-[.24em]", style: { color: t.accent } }, v && v.real ? "Tiklangan ovoz" : "Kitob hamrohi"),
            React.createElement("h3", { className: "mb-4 text-2xl leading-tight", style: { fontFamily: t.titleFont, color: t.ink } }, speaker),
            v ? (React.createElement("div", { className: "space-y-4 text-[15px] leading-[1.8]", style: { fontFamily: t.bodyFont, color: t.ink, opacity: 0.9 } },
                React.createElement("p", null, v.where),
                React.createElement("p", { style: { color: t.muted } }, v.state))) : (React.createElement("p", { className: "text-[15px] leading-[1.8]", style: { fontFamily: t.bodyFont, color: t.muted } }, "Bu kitobning muallifi tirik yoki shaxsi aniq emas \u2014 shuning uchun uning nomidan gapirilmaydi. Suhbatdosh kitobni chuqur biladigan hamroh bo'ladi.")),
            React.createElement("button", { onClick: enter, className: "mt-6 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm", style: { background: t.accent, color: "#fff" } },
                React.createElement(MessageSquare, { size: 15 }),
                " Suhbatni boshlash"),
            v && v.real && (React.createElement("p", { className: "mt-4 text-[11px] leading-relaxed", style: { color: t.muted, opacity: 0.7 } }, "Bu ovoz muallifning asarlari, xatlari va tarjimai holi asosida tiklangan."))));
    }
    /* --- Suhbat --- */
    return (React.createElement("div", { className: "flex flex-col", style: { minHeight: 420 } },
        React.createElement("div", { className: "mb-5 flex items-center gap-3 border-b pb-3", style: { borderColor: `${t.ink}12` } },
            React.createElement("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full", style: { background: t.accent, color: "#fff", fontFamily: t.titleFont, fontSize: 14 } }, speaker.charAt(0)),
            React.createElement("div", { className: "min-w-0 flex-1" },
                React.createElement("div", { className: "text-sm", style: { color: t.ink, fontFamily: t.titleFont } }, speaker),
                React.createElement("div", { className: "truncate text-[11px]", style: { color: t.muted } }, chunks && chunks.length
                    ? "Kitob matniga tayanib javob beradi"
                    : restored ? "Suhbat qoldirilgan joyidan davom etadi" : (v ? v.where.split(".")[0] : book.persona.role))),
            msgs.length > 1 && (confirmClear ? (React.createElement("span", { className: "flex shrink-0 items-center gap-1.5 text-[11px]" },
                React.createElement("span", { style: { color: t.muted } }, "O'chirilsinmi?"),
                React.createElement("button", { onClick: clearChat, className: "rounded-full px-2.5 py-1", style: { background: t.accent, color: "#fff" } }, "Ha"),
                React.createElement("button", { onClick: () => setConfirmClear(false), className: "rounded-full px-2.5 py-1", style: { color: t.muted, border: `1px solid ${t.ink}22` } }, "Yo'q"))) : (React.createElement("button", { onClick: clearChat, className: "flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[11px]", style: { color: t.muted, border: `1px solid ${t.ink}22` } },
                React.createElement(RotateCcw, { size: 10 }),
                " Yangi suhbat")))),
        React.createElement("div", { className: "flex-1 space-y-5" },
            msgs.map((m, i) => m.role === "user" ? (React.createElement("div", { key: i, className: "flex justify-end" },
                React.createElement("div", { className: "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed", style: { background: t.accent, color: "#fff" } }, m.javob))) : (React.createElement("div", { key: i, className: "max-w-[92%]" },
                m.harakat && (React.createElement("p", { className: "mb-1.5 text-[13px] italic leading-snug", style: { color: t.accent2, opacity: 0.8, fontFamily: t.bodyFont } }, m.harakat)),
                React.createElement("p", { className: "whitespace-pre-wrap text-[16px] leading-[1.8]", style: { color: t.ink, fontFamily: t.bodyFont } }, m.javob)))),
            busy && (React.createElement("p", { className: "text-[13px] italic", style: { color: t.muted } }, v ? `${speaker.split(" ")[0]} javob berishdan oldin bir lahza jim qoladi...` : "o'ylanmoqda...")),
            React.createElement("div", { ref: endRef })),
        asks.length > 0 && !busy && (React.createElement("div", { className: "mt-5 space-y-1.5" }, asks.map((a, i) => (React.createElement("button", { key: i, onClick: () => send(a), className: "w-full rounded-lg px-3 py-2 text-left text-[13px] transition-opacity hover:opacity-80", style: { background: "transparent", color: t.muted, border: `1px solid ${t.ink}14` } }, a))))),
        React.createElement("div", { className: "mt-5 flex gap-2" },
            React.createElement("input", { value: text, onChange: (e) => setText(e.target.value), onKeyDown: (e) => { if (e.key === "Enter")
                    send(); }, placeholder: v ? `${speaker.split(" ")[0]}ga nima aytasiz?` : "Savolingizni yozing...", className: "flex-1 rounded-lg px-3 py-2.5 text-sm outline-none", style: { background: t.panel, color: t.ink, border: `1px solid ${t.ink}18` } }),
            React.createElement("button", { onClick: () => send(), disabled: busy, className: "rounded-lg px-4 disabled:opacity-40", style: { background: t.accent, color: "#fff" }, "aria-label": "Yuborish" },
                React.createElement(Send, { size: 16 })))));
}
function Analysis({ book }) {
    const t = book.theme;
    const [lens, setLens] = useState(null);
    const [out, setOut] = useState("");
    const [busy, setBusy] = useState(false);
    const [cached, setCached] = useState(false);
    const [saved, setSaved] = useState([]);
    const ask = useAsk();
    const { chunks, web } = useSource();
    const lensKey = (l) => `an:${book.id}:${safeKey(l)}${chunks ? "_m" : web ? "_w" : ""}`;
    useEffect(() => {
        let live = true;
        (async () => {
            try {
                const r = await window.storage.list(`an:${book.id}:`);
                if (live && r && r.keys)
                    setSaved(r.keys);
            }
            catch { /* yo'q */ }
        })();
        return () => { live = false; };
    }, [book.id]);
    const run = async (l, force = false) => {
        setLens(l);
        setOut("");
        setCached(false);
        if (!force) {
            const hit = await cacheGet(lensKey(l));
            if (hit && hit.text) {
                setOut(hit.text);
                setCached(true);
                return;
            }
        }
        setBusy(true);
        try {
            const r = await ask(`"${book.title}" asarini "${l}" nuqtai nazaridan chuqur tahlil qil. ` +
                `3-4 ta sarlavhali bo'lim qil, har biri 2-4 jumla. Umumiy gaplardan qoch, aniq fikr ber.`, personaPrompt(book), 1200, `${book.title} ${l}`);
            setOut(r);
            if (await cacheSet(lensKey(l), { text: r })) {
                setSaved((prev) => (prev.includes(lensKey(l)) ? prev : [...prev, lensKey(l)]));
            }
        }
        catch (e) {
            setOut(errText(e));
        }
        setBusy(false);
    };
    return (React.createElement("div", null,
        React.createElement("p", { className: "mb-3 text-sm", style: { color: t.muted } }, "Qaysi burchakdan qaraymiz?"),
        React.createElement("div", { className: "mb-4 flex flex-wrap gap-2" }, book.lens.map((l) => (React.createElement("button", { key: l, onClick: () => run(l), className: "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs transition-opacity hover:opacity-85", style: lens === l
                ? { background: t.accent, color: "#fff" }
                : { background: t.panel, color: t.ink, border: `1px solid ${t.ink}18` } },
            saved.includes(lensKey(l)) && React.createElement(Check, { size: 10, style: { color: lens === l ? "#fff" : t.accent } }),
            l)))),
        busy && React.createElement("div", { className: "flex items-center gap-2 text-sm", style: { color: t.muted } },
            React.createElement(Loader2, { size: 14, className: "animate-spin" }),
            " tahlil tayyorlanmoqda..."),
        out && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "rounded-xl p-4 text-sm leading-relaxed whitespace-pre-wrap", style: { background: t.panel, color: t.ink, border: `1px solid ${t.ink}12`, fontFamily: t.bodyFont } }, out),
            React.createElement("div", { className: "mt-2.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1" },
                React.createElement(SourceBadge, { t: t }),
                React.createElement(Saved, { t: t, cached: cached }),
                cached && (React.createElement("button", { onClick: () => run(lens, true), className: "flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px]", style: { color: t.muted, border: `1px solid ${t.ink}22` } },
                    React.createElement(RotateCcw, { size: 10 }),
                    " Yangilash")))))));
}
function Quiz({ book }) {
    const t = book.theme;
    const [qs, setQs] = useState(null);
    const [busy, setBusy] = useState(false);
    const [answers, setAnswers] = useState({});
    const [done, setDone] = useState(false);
    const [cached, setCached] = useState(false);
    const ask = useAsk();
    const { chunks, web } = useSource();
    const [qErr, setQErr] = useState("");
    const qKey = `qz:${book.id}${chunks ? "_m" : web ? "_w" : ""}`;
    useEffect(() => {
        let live = true;
        (async () => {
            const hit = await cacheGet(qKey);
            if (!live)
                return;
            setAnswers({});
            setDone(false);
            if (hit && Array.isArray(hit.questions) && hit.questions.length) {
                setQs(hit.questions);
                setCached(true);
            }
            else {
                setQs(null);
                setCached(false);
            }
        })();
        return () => { live = false; };
    }, [qKey]);
    const build = async (force = false) => {
        setAnswers({});
        setDone(false);
        if (!force) {
            const hit = await cacheGet(qKey);
            if (hit && Array.isArray(hit.questions) && hit.questions.length) {
                setQs(hit.questions);
                setCached(true);
                return;
            }
        }
        setBusy(true);
        setQs(null);
        setCached(false);
        try {
            const r = await ask(`"${book.title}" (${book.author}) kitobi bo'yicha 5 ta test savoli tuz. Har birida 4 ta variant. ` +
                `Faqat JSON qaytar, boshqa hech narsa yozma:\n` +
                `{"questions":[{"q":"...","options":["...","...","...","..."],"correct":0,"why":"qisqa izoh"}]}`, `Sen "${book.title}" bo'yicha test tuzuvchisan. Faqat JSON qaytar. ${GUARD}`, 1200, `${book.title} asosiy voqea g'oya qahramon`);
            const parsed = parseJson(r);
            const list = parsed.questions?.slice(0, 5) || null;
            setQs(list);
            if (list)
                await cacheSet(qKey, { questions: list });
        }
        catch (e) {
            setQs("error");
            setQErr(errText(e));
        }
        setBusy(false);
    };
    if (!qs && !busy)
        return (React.createElement("div", { className: "text-center" },
            React.createElement("p", { className: "mb-4 text-sm", style: { color: t.muted } }, "Kitobni qanchalik tushunganingizni ko'ramizmi?"),
            React.createElement("button", { onClick: () => build(), className: "mx-auto flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm", style: { background: t.accent, color: "#fff" } },
                React.createElement(ClipboardCheck, { size: 15 }),
                " 5 ta savol tuzish")));
    if (busy)
        return React.createElement("div", { className: "flex items-center gap-2 text-sm", style: { color: t.muted } },
            React.createElement(Loader2, { size: 14, className: "animate-spin" }),
            " savollar tuzilmoqda...");
    if (qs === "error")
        return (React.createElement("div", { className: "text-sm", style: { color: t.ink } },
            qErr || "Savollarni tuzib bo'lmadi.",
            React.createElement("button", { onClick: () => build(true), className: "ml-2 underline", style: { color: t.accent } }, "Qayta urinish")));
    const score = qs.reduce((s, q, i) => s + (answers[i] === q.correct ? 1 : 0), 0);
    return (React.createElement("div", { className: "space-y-5" },
        React.createElement("div", { className: "flex flex-wrap items-center justify-between gap-x-3 gap-y-1" },
            React.createElement(SourceBadge, { t: t }),
            cached && React.createElement(Saved, { t: t, cached: true })),
        qs.map((q, i) => (React.createElement("div", { key: i, className: "rounded-xl p-4", style: { background: t.panel, border: `1px solid ${t.ink}12` } },
            React.createElement("div", { className: "mb-3 text-sm font-semibold", style: { color: t.ink, fontFamily: t.bodyFont } },
                i + 1,
                ". ",
                q.q),
            React.createElement("div", { className: "space-y-1.5" }, q.options.map((o, oi) => {
                const picked = answers[i] === oi;
                const right = done && oi === q.correct;
                const wrong = done && picked && oi !== q.correct;
                return (React.createElement("button", { key: oi, disabled: done, onClick: () => setAnswers({ ...answers, [i]: oi }), className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm", style: {
                        background: right ? "#1f6b3a" : wrong ? "#7a1d1d" : picked ? t.accent : "transparent",
                        color: right || wrong || picked ? "#fff" : t.ink,
                        border: `1px solid ${t.ink}18`,
                    } },
                    right && React.createElement(Check, { size: 13 }),
                    wrong && React.createElement(X, { size: 13 }),
                    React.createElement("span", null, o)));
            })),
            done && q.why && React.createElement("p", { className: "mt-2.5 text-xs leading-relaxed", style: { color: t.muted } }, q.why)))),
        !done ? (React.createElement("button", { onClick: () => setDone(true), disabled: Object.keys(answers).length < qs.length, className: "w-full rounded-lg py-2.5 text-sm disabled:opacity-40", style: { background: t.accent, color: "#fff" } }, "Javoblarni tekshirish")) : (React.createElement("div", { className: "flex items-center justify-between rounded-lg p-4", style: { background: t.panel, border: `1px solid ${t.ink}18` } },
            React.createElement("span", { className: "text-sm", style: { color: t.ink } },
                "Natija: ",
                React.createElement("b", { style: { color: t.accent } },
                    score,
                    "/",
                    qs.length)),
            React.createElement("button", { onClick: () => build(true), className: "flex items-center gap-1.5 text-sm", style: { color: t.accent } },
                React.createElement(RotateCcw, { size: 13 }),
                " Yangi savollar")))));
}
/* ------------------------------------------------------------
   ASOSIY G'OYALAR — har bir g'oyani chuqur ochib berish.
   Bir marta ochilgach qurilmaga saqlanadi.
   ------------------------------------------------------------ */
const IDEA_PARTS = [
    { k: "mohiyat", label: "G'oyaning mohiyati", icon: Lightbulb },
    { k: "kitobda", label: "Kitobda qanday ochiladi", icon: BookOpen },
    { k: "misol", label: "Hayotdan misol", icon: Users },
    { k: "xato", label: "Ko'p uchraydigan xato tushunish", icon: AlertTriangle },
    { k: "amal", label: "Bugundan qanday qo'llash", icon: Target },
];
const IDEA_TAGS = ["Markaziy", "Psixologik", "Amaliy", "Ijtimoiy", "Ramziy", "Bahsli"];
/* Bitta kitobdan AI ochib beradigan yangi g'oyalarning eng ko'p soni.
   Kitobning o'z g'oyalari bunga kirmaydi. */
const MAX_GOYA = 30;
function slug(x) {
    return String(x).toLowerCase().replace(/[^a-z0-9]+/gi, "_").replace(/^_+|_+$/g, "").slice(0, 60);
}
function Ideas({ book }) {
    const t = book.theme;
    const [open, setOpen] = useState(null);
    const [extra, setExtra] = useState([]); // AI topgan qo'shimcha g'oyalar
    const [full, setFull] = useState({}); // kengaytirilgan izohlar
    const [busy, setBusy] = useState(null); // qaysi g'oya ochilmoqda
    const [gen, setGen] = useState(false); // yangi g'oyalar qidirilmoqda
    const [err, setErr] = useState(null);
    const [target, setTarget] = useState(15); // nechta YANGI g'oya ochiladi
    const [addN, setAddN] = useState(5);
    const [prog, setProg] = useState(null);
    const [errMsg, setErrMsg] = useState("");
    const [filter, setFilter] = useState("Barchasi");
    const [loaded, setLoaded] = useState(false);
    const stopRef = useRef(false); // "To'xtatish" bosilganini bildiradi
    const ask = useAsk();
    const { chunks, web } = useSource();
    const sfx = chunks ? "_m" : web ? "_w" : "";
    const fullKey = `idea:${book.id}${sfx}`;
    const listKey = `ideas:${book.id}${sfx}`;
    useEffect(() => {
        let live = true;
        (async () => {
            setLoaded(false);
            const [f, l] = await Promise.all([cacheGet(fullKey), cacheGet(listKey)]);
            if (!live)
                return;
            setFull(f && typeof f === "object" ? f : {});
            setExtra(l && Array.isArray(l.list) ? l.list : []);
            setLoaded(true);
        })();
        return () => { live = false; };
    }, [fullKey, listKey]);
    /* Kitobdagi 4 ta asos + AI topgan qolganlari */
    const base = book.ideas.map((x) => ({ ...x, tag: x.tag || "Markaziy" }));
    const all = [...base, ...extra];
    const shown = all
        .map((x, idx) => ({ ...x, idx }))
        .filter((x) => filter === "Barchasi" || x.tag === filter);
    const tagsUsed = IDEA_TAGS.filter((tg) => all.some((x) => x.tag === tg));
    /* Chegaragacha yana nechta yangi g'oya sig'adi */
    const qoldi = Math.max(0, MAX_GOYA - extra.length);
    /* --- Yangi g'oyalarni topish: bittadan --- */
    /* Bitta so'rov = bitta g'oya. Shunday qilinganining sababi: g'oya tayyor
       bo'lishi bilan darhol ro'yxatga chiqadi, o'quvchi hammasini kutib
       o'tirmaydi. Sekinroq, lekin ekran bo'sh turmaydi. */
    const bitta = async (tag, have) => {
        const avoid = have.length
            ? `\n\nBular allaqachon bor — takrorlama, butunlay boshqa burchakdan yoz:\n` +
                have.slice(-40).map((x, i) => `${i + 1}. ${x.t}`).join("\n")
            : "";
        const r = await ask(`Kitob: "${book.title}" — ${book.author}.\nMohiyati: ${book.essence}\n\n` +
            `Shu kitobdan BITTA g'oya ajratib ber — turkumi: "${tag}".\n` +
            `— "t": g'oyaning nomi, 2-5 so'z.\n` +
            `— "d": g'oyaning mazmuni, 3-4 jumla. Quruq da'vo emas — nima demoqchi, nimadan kelib chiqadi.\n` +
            `— "tag": "${tag}".\n\n` +
            `Sayoz va umumiy g'oyadan qoch. Kitobning chuqur qatlamiga tush: ` +
            `qarama-qarshiliklari, aytilmagan taxminlari, qahramonlar orqali berilgan fikrlari, ` +
            `bugungi kunga tegishli tomonlari, muallif xato qilgan bo'lishi mumkin bo'lgan joylari.\n\n` +
            `Faqat JSON:\n{"t":"...","d":"...","tag":"${tag}"}${avoid}`, `Sen "${book.title}" kitobini chuqur o'qigan tahlilchisan. Faqat JSON qaytar. ${GUARD}`, 700, `${book.title} ${tag} g'oya`);
        const x = parseJson(r);
        if (!x || isJunk(x.t) || isJunk(x.d))
            return null;
        return { t: String(x.t).trim(), d: String(x.d).trim(), tag: IDEA_TAGS.includes(x.tag) ? x.tag : tag };
    };
    const grow = async (want) => {
        const goal = Math.min(base.length + MAX_GOYA, Math.max(base.length + 1, want || base.length + target));
        stopRef.current = false;
        setGen(true);
        setErr(null);
        setErrMsg("");
        setProg({ have: base.length + extra.length, goal });
        let acc = [...extra];
        let bosh = 0; // ketma-ket bo'sh/takror javoblar
        const kerak = goal - base.length - acc.length; // nechta yangi g'oya kerak
        try {
            for (let i = 0; i < kerak + 4; i++) {
                if (stopRef.current)
                    break;
                if (base.length + acc.length >= goal)
                    break;
                /* Turkumlar navbatma-navbat — hammasi bir xil bo'lib qolmasin */
                const tag = IDEA_TAGS[(acc.length + i) % IDEA_TAGS.length];
                const fresh = await bitta(tag, [...base, ...acc]);
                const seen = new Set([...base, ...acc].map((x) => slug(x.t)));
                if (!fresh || seen.has(slug(fresh.t))) {
                    bosh++;
                    if (bosh >= 3)
                        break; // takrorlanaveryapti — to'xtatamiz
                    continue;
                }
                bosh = 0;
                acc = [...acc, fresh];
                setExtra(acc); // g'oya darhol ekranga chiqadi
                setProg({ have: base.length + acc.length, goal });
                await cacheSet(listKey, { list: acc });
            }
        }
        catch (e) {
            setErr("gen");
            setErrMsg(errText(e));
        }
        stopRef.current = false;
        setGen(false);
        setProg(null);
    };
    /* --- Bitta g'oyani chuqur ochish --- */
    const expand = async (idea) => {
        const k = slug(idea.t);
        setBusy(k);
        setErr(null);
        try {
            const r = await ask(`Kitob: "${book.title}" — ${book.author}.\n` +
                `G'oya: "${idea.t}" — ${idea.d}\n\n` +
                `Shu g'oyani to'liq ochib ber. Har bo'lim mazmunli bo'lsin, quruq umumiy gap yozma:\n` +
                `— "mohiyat": g'oya aslida nimani aytmoqchi. 4-5 jumla. Sirtdan ko'rinadigan ma'nodan chuqurroq ket.\n` +
                `— "kitobda": bu g'oya kitobning qayerida, qaysi voqea yoki fikr orqali ochiladi. 3-4 jumla.\n` +
                `— "misol": bugungi hayotdan aniq, tanish vaziyat. Umumiy emas, ko'z oldiga keladigan. 3-4 jumla.\n` +
                `— "xato": odamlar bu g'oyani qanday noto'g'ri tushunadi va nega bu xato. 2-3 jumla.\n` +
                `— "amal": shu g'oyani hayotga tatbiq qilishning 3 ta aniq qadami. Massiv qilib ber.\n` +
                `— "savol": o'quvchi o'ziga berishi kerak bo'lgan bitta o'tkir savol.\n\n` +
                `Kitobdan uzun ko'chirma qilma. Faqat JSON qaytar:\n` +
                `{"mohiyat":"...","kitobda":"...","misol":"...","xato":"...","amal":["...","...","..."],"savol":"..."}`, `Sen "${book.title}" kitobini chuqur biladigan tahlilchisan. Faqat JSON qaytar. ${GUARD}`, 2200, `${idea.t} ${idea.d}`);
            const parsed = parseJson(r);
            const next = { ...full, [k]: parsed };
            setFull(next);
            await cacheSet(fullKey, next);
        }
        catch (e) {
            setErr(k);
            setErrMsg(errText(e));
        }
        setBusy(null);
    };
    return (React.createElement("div", { style: { opacity: loaded ? 1 : 0.6 } },
        React.createElement("div", { className: "mb-4 flex flex-wrap items-baseline justify-between gap-2" },
            React.createElement("h2", { className: "text-xs uppercase tracking-[.24em]", style: { color: t.accent } }, "Asosiy g'oyalar"),
            React.createElement(SourceBadge, { t: t }),
            React.createElement("span", { className: "text-[11px] tabular-nums", style: { color: t.muted, fontFamily: F.mono } },
                filter === "Barchasi" ? `${all.length} ta` : `${shown.length} / ${all.length} ta`,
                extra.length > 0 && " · saqlangan")),
        tagsUsed.length > 1 && (React.createElement("div", { className: "mb-4 flex flex-wrap gap-1.5" }, ["Barchasi", ...tagsUsed].map((tg) => (React.createElement("button", { key: tg, onClick: () => { setFilter(tg); setOpen(null); }, className: "rounded-full px-3 py-1 text-[11px]", style: filter === tg
                ? { background: t.accent, color: "#fff" }
                : { background: t.panel, color: t.muted, border: `1px solid ${t.ink}18` } }, tg))))),
        React.createElement("div", { className: "space-y-2" }, shown.map((idea) => {
            const k = slug(idea.t);
            const isOpen = open === k;
            const f = full[k];
            return (React.createElement("div", { key: idea.idx, className: "overflow-hidden rounded-xl", style: { background: t.panel, border: `1px solid ${t.ink}12` } },
                React.createElement("button", { onClick: () => setOpen(isOpen ? null : k), className: "flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left" },
                    React.createElement("span", { className: "min-w-0 flex-1" },
                        React.createElement("span", { className: "block text-[15px]", style: { fontFamily: t.titleFont, color: t.ink } }, idea.t),
                        idea.tag && idea.tag !== "Markaziy" && (React.createElement("span", { className: "mt-0.5 block text-[10px] uppercase tracking-[.16em]", style: { color: t.accent } }, idea.tag))),
                    f && React.createElement(Check, { size: 12, className: "shrink-0", style: { color: t.accent } }),
                    React.createElement(ChevronRight, { size: 16, className: "shrink-0", style: { color: t.accent, transform: isOpen ? "rotate(90deg)" : "none", transition: "transform .25s" } })),
                isOpen && (React.createElement("div", { className: "px-4 pb-4" },
                    React.createElement("p", { className: "text-sm leading-relaxed", style: { color: t.muted, fontFamily: t.bodyFont } }, idea.d),
                    f ? (React.createElement("div", { className: "mt-4 space-y-4" },
                        IDEA_PARTS.map(({ k: pk, label, icon: Icon }) => {
                            const v = f[pk];
                            if (!v || (Array.isArray(v) && !v.length))
                                return null;
                            return (React.createElement("div", { key: pk },
                                React.createElement("div", { className: "mb-1.5 flex items-center gap-1.5 text-[11px] uppercase tracking-[.18em]", style: { color: t.accent } },
                                    React.createElement(Icon, { size: 11 }),
                                    " ",
                                    label),
                                Array.isArray(v) ? (React.createElement("ol", { className: "space-y-1.5" }, v.map((x, n) => (React.createElement("li", { key: n, className: "flex gap-2 text-[13px] leading-relaxed", style: { color: t.ink, fontFamily: t.bodyFont } },
                                    React.createElement("span", { className: "shrink-0 tabular-nums", style: { color: t.accent, fontFamily: F.mono } },
                                        n + 1,
                                        "."),
                                    x))))) : (React.createElement("p", { className: "text-[13.5px] leading-relaxed", style: { color: t.ink, fontFamily: t.bodyFont } }, v))));
                        }),
                        f.savol && (React.createElement("div", { className: "rounded-lg px-3.5 py-3", style: { background: `${t.accent}14` } },
                            React.createElement("div", { className: "mb-1 text-[11px] uppercase tracking-[.18em]", style: { color: t.accent } }, "O'zingizga bering"),
                            React.createElement("p", { className: "text-[14px] leading-relaxed", style: { color: t.ink, fontFamily: t.bodyFont } }, f.savol))),
                        React.createElement(Saved, { t: t, cached: true }))) : (React.createElement(React.Fragment, null,
                        React.createElement("button", { onClick: () => expand(idea), disabled: busy !== null, className: "mt-3 flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs disabled:opacity-40", style: { color: t.accent, border: `1px solid ${t.accent}55` } }, busy === k
                            ? React.createElement(React.Fragment, null,
                                React.createElement(Loader2, { size: 12, className: "animate-spin" }),
                                " Ochilmoqda...")
                            : React.createElement(React.Fragment, null,
                                React.createElement(Layers, { size: 12 }),
                                " Kengaytirib yoritish")),
                        err === k && (React.createElement("p", { className: "mt-2 text-xs", style: { color: "#C97B72" } }, errMsg || "Ochilmadi. Qayta urinib ko'ring."))))))));
        })),
        React.createElement("div", { className: "mt-6 rounded-xl p-4", style: { background: t.panel, border: `1px solid ${t.ink}12` } },
            extra.length === 0 ? (React.createElement(React.Fragment, null,
                React.createElement("p", { className: "mb-3 text-sm leading-relaxed", style: { color: t.muted, fontFamily: t.bodyFont } },
                    "Bu ",
                    base.length,
                    " ta \u2014 kitobning asosiy tayanchi. Undan tashqari yana ko'p qatlam bor: psixologik, amaliy, ramziy, bahsli tomonlari. Nechtasini ochamiz? G'oyalar bittalab keladi \u2014 tayyor bo'lgani darhol ro'yxatda ko'rinadi."),
                React.createElement("div", { className: "mb-3 flex flex-wrap items-center gap-3" },
                    React.createElement("span", { className: "text-xs", style: { color: t.muted } }, "Nechta yangi g'oya:"),
                    React.createElement("div", { className: "flex items-center gap-1 rounded-full p-1", style: { background: `${t.ink}0F`, border: `1px solid ${t.ink}1A` } },
                        React.createElement("button", { onClick: () => setTarget((v) => Math.max(0, v - 1)), disabled: target <= 0, className: "flex h-8 w-8 items-center justify-center rounded-full text-lg leading-none disabled:opacity-30", style: { color: t.accent }, "aria-label": "Kamaytirish" }, "\u2212"),
                        React.createElement("input", { type: "number", inputMode: "numeric", value: target, onChange: (e) => {
                                const v = parseInt(e.target.value, 10);
                                setTarget(Number.isNaN(v) ? 0 : Math.min(qoldi, Math.max(0, v)));
                            }, onBlur: () => setTarget((v) => Math.min(qoldi, Math.max(0, v || 0))), max: qoldi, min: 0, className: "w-14 bg-transparent text-center text-sm tabular-nums outline-none", style: { color: t.ink, fontFamily: F.mono } }),
                        React.createElement("button", { onClick: () => setTarget((v) => Math.min(qoldi, v + 1)), disabled: target >= qoldi, className: "flex h-8 w-8 items-center justify-center rounded-full text-lg leading-none disabled:opacity-30", style: { color: t.accent }, "aria-label": "Ko'paytirish" }, "+")),
                    React.createElement("div", { className: "flex gap-1" }, [10, 20, 30].map((n) => (React.createElement("button", { key: n, onClick: () => setTarget(Math.min(qoldi, n)), className: "rounded-full px-2.5 py-1 text-[11px] tabular-nums", style: { color: t.muted, border: `1px solid ${t.ink}1A` } }, n))))),
                React.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                    React.createElement("button", { onClick: () => grow(all.length + target), disabled: gen || target < 1, className: "flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm disabled:opacity-50", style: { background: t.accent, color: "#fff" } }, gen
                        ? React.createElement(React.Fragment, null,
                            React.createElement(Loader2, { size: 14, className: "animate-spin" }),
                            prog ? `${prog.have} / ${prog.goal} ta tayyor...` : "G'oyalar ajratilmoqda...")
                        : React.createElement(React.Fragment, null,
                            React.createElement(Sparkles, { size: 14 }),
                            " ",
                            target,
                            " ta g'oya ochish")),
                    gen && (React.createElement("button", { onClick: () => { stopRef.current = true; }, className: "rounded-lg px-3 py-2.5 text-xs", style: { color: t.muted, border: `1px solid ${t.ink}22` } }, "To'xtatish"))))) : qoldi === 0 ? (React.createElement("p", { className: "text-sm leading-relaxed", style: { color: t.muted, fontFamily: t.bodyFont } },
                MAX_GOYA,
                " ta yangi g'oya ochildi \u2014 chegara shu. Bundan ortig'i takrorga aylanadi.")) : (React.createElement("div", { className: "flex flex-wrap items-center gap-3" },
                React.createElement("span", { className: "text-xs", style: { color: t.muted } }, "Yana qo'shish:"),
                React.createElement("div", { className: "flex items-center gap-1 rounded-full p-1", style: { background: `${t.ink}0F`, border: `1px solid ${t.ink}1A` } },
                    React.createElement("button", { onClick: () => setAddN((v) => Math.max(1, v - 1)), disabled: addN <= 1 || gen, className: "flex h-8 w-8 items-center justify-center rounded-full text-lg leading-none disabled:opacity-30", style: { color: t.accent }, "aria-label": "Kamaytirish" }, "\u2212"),
                    React.createElement("input", { type: "number", inputMode: "numeric", value: addN, onChange: (e) => {
                            const v = parseInt(e.target.value, 10);
                            setAddN(Number.isNaN(v) ? 1 : Math.min(qoldi, Math.max(1, v)));
                        }, onBlur: () => setAddN((v) => Math.min(qoldi, Math.max(1, v || 1))), max: qoldi, min: 1, className: "w-12 bg-transparent text-center text-sm tabular-nums outline-none", style: { color: t.ink, fontFamily: F.mono } }),
                    React.createElement("button", { onClick: () => setAddN((v) => Math.min(qoldi, v + 1)), disabled: addN >= qoldi || gen, className: "flex h-8 w-8 items-center justify-center rounded-full text-lg leading-none disabled:opacity-30", style: { color: t.accent }, "aria-label": "Ko'paytirish" }, "+")),
                React.createElement("button", { onClick: () => grow(all.length + Math.min(addN, qoldi)), disabled: gen, className: "flex items-center gap-1.5 rounded-full px-4 py-2 text-xs disabled:opacity-40", style: { background: t.accent, color: "#fff" } }, gen
                    ? React.createElement(React.Fragment, null,
                        React.createElement(Loader2, { size: 12, className: "animate-spin" }),
                        prog ? `${prog.have} / ${prog.goal}` : "qo'shilmoqda...")
                    : React.createElement(React.Fragment, null,
                        React.createElement(Plus, { size: 12 }),
                        " ",
                        Math.min(addN, qoldi),
                        " ta qo'shish")),
                gen && (React.createElement("button", { onClick: () => { stopRef.current = true; }, className: "rounded-full px-3 py-2 text-xs", style: { color: t.muted, border: `1px solid ${t.ink}22` } }, "To'xtatish")))),
            err === "gen" && (React.createElement("p", { className: "mt-2 text-xs", style: { color: "#C97B72" } }, errMsg || "G'oyalar olinmadi. Qayta urinib ko'ring.")))));
}
const SUMMARY_PARTS = [
    { k: "Kitob nima haqida", q: "Butun kitob, birinchi betdan oxirgi betgacha, aslida nima haqida ekanini yoz. Sarlavhadagi emas, matn ostidagi asosiy mavzuni ochib ber." },
    { k: "Muallif nimani isbotlamoqchi", q: "Muallifning asosiy da'vosi nima va u buni qanday isbotlamoqchi bo'ladi. Uning maqsadi va pozitsiyasini aniq ayt." },
    { k: "G'oya qanday yetiladi", q: "Kitobning boshidan oxirigacha asosiy fikr qanday bosqichlardan o'tib pishib boradi. Qaysi joyda burilish bo'ladi, qayerda muallif o'z tezisini kuchaytiradi." },
    { k: "Qahramonlar va tushunchalar yakuni", q: "Kitobdagi asosiy qahramonlar yoki asosiy tushunchalar oxirida qanday holatga keladi. Ularning yo'li nima bilan tugaydi va bu nimani anglatadi." },
    { k: "Eng kuchli joyi", q: "Kitobning eng kuchli, eng yodda qoladigan qismi qaysi va nega aynan u kuchli. Faqat kitobning o'zidan misol keltir." },
    { k: "Bahsli va zaif joyi", q: "Kitobda bahsli, ishonarsiz yoki to'liq ochilmagan qaysi tomonlar bor. Halol tanqid qil, lekin kitob doirasidan chiqma." },
    { k: "O'qib bo'lgach nima qoladi", q: "Kitobni tugatgan odamning ongida nima o'zgaradi, qaysi savol ochiq qoladi, qaysi jumla u bilan qoladi." },
    { k: "Yakuniy so'z", q: "Butun kitobga yakuniy baho ber. Bu asar nima uchun yozilgan va nima uchun hozir ham o'qiladi — shuni yakunla." },
];
function Summary({ book }) {
    const t = book.theme;
    const [parts, setParts] = useState([]);
    const [busy, setBusy] = useState(false);
    const [done, setDone] = useState(false);
    const [cached, setCached] = useState(false);
    const ask = useAsk();
    const { chunks, web } = useSource();
    const [sumErr, setSumErr] = useState("");
    const sumKey = `sum:${book.id}${chunks ? "_m" : web ? "_w" : ""}`;
    useEffect(() => {
        let live = true;
        (async () => {
            const hit = await cacheGet(sumKey);
            if (!live)
                return;
            if (hit && Array.isArray(hit.parts) && hit.parts.length) {
                setParts(hit.parts);
                setDone(!!hit.done);
                setCached(true);
            }
            else {
                setParts([]);
                setDone(false);
                setCached(false);
            }
        })();
        return () => { live = false; };
    }, [sumKey]);
    const sys = `Sen "${book.title}" (${book.author}) kitobini boshidan oxirigacha diqqat bilan o'qib chiqqan tahlilchisan. ` +
        `QAT'IY QOIDA: faqat shu kitobning ichidan gapir. Boshqa kitob, boshqa muallif, tashqi misol, ` +
        `zamonaviy voqea yoki umumiy hayotiy nasihat keltirma. Fikring kitobning o'z matni, qahramonlari, ` +
        `g'oyalari va tuzilishiga tayansin. Kitobdan uzun parcha ko'chirma — o'z so'zing bilan yoz. ` +
        `Har bir bo'lim to'liq va batafsil bo'lsin, kamida 4-6 abzats. ${GUARD}`;
    const build = async (force = false) => {
        if (!force) {
            const hit = await cacheGet(sumKey);
            if (hit && Array.isArray(hit.parts) && hit.parts.length) {
                setParts(hit.parts);
                setDone(!!hit.done);
                setCached(true);
                return;
            }
        }
        setBusy(true);
        setParts([]);
        setDone(false);
        setCached(false);
        setSumErr("");
        const acc = [];
        try {
            for (const p of SUMMARY_PARTS) {
                const prev = acc.length
                    ? `\n\nAvvalgi bo'limlarda aytilganlarni takrorlama:\n${acc.map((a) => `— ${a.k}`).join("\n")}`
                    : "";
                const r = await ask(`Xulosa bo'limi: "${p.k}".\n${p.q}\nBatafsil va to'liq yoz.${prev}`, sys, 2000, `${book.title} ${p.k}`);
                acc.push({ k: p.k, text: r });
                setParts([...acc]);
                await cacheSet(sumKey, { parts: acc, done: false });
            }
            setDone(true);
            await cacheSet(sumKey, { parts: acc, done: true });
        }
        catch (e) {
            if (acc.length)
                await cacheSet(sumKey, { parts: acc, done: false });
            setSumErr(errText(e));
        }
        setBusy(false);
    };
    if (!parts.length && !busy)
        return (React.createElement("div", { className: "rounded-xl p-5 text-center", style: { background: t.panel, border: `1px solid ${t.ink}12` } },
            sumErr && React.createElement("p", { className: "mb-3 text-xs", style: { color: "#C97B72" } }, sumErr),
            React.createElement("h3", { className: "mb-2 text-lg", style: { fontFamily: t.titleFont, color: t.ink } }, "Yakuniy xulosa"),
            React.createElement("p", { className: "mx-auto mb-5 max-w-sm text-sm leading-relaxed", style: { color: t.muted, fontFamily: t.bodyFont } }, "Kitob boshidan oxirigacha o'qib chiqilgandan keyin yoziladigan to'liq xulosa \u2014 sakkiz bo'limda, faqat kitobning o'z ichidan."),
            React.createElement("button", { onClick: () => build(), className: "mx-auto flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm", style: { background: t.accent, color: "#fff" } },
                React.createElement(BookOpen, { size: 15 }),
                " Xulosani yozish")));
    return (React.createElement("div", null,
        React.createElement("div", { className: "mb-5 flex items-center justify-between gap-3" },
            React.createElement("h3", { className: "text-lg", style: { fontFamily: t.titleFont, color: t.ink } }, "Yakuniy xulosa"),
            React.createElement(SourceBadge, { t: t }),
            React.createElement("span", { className: "flex items-center gap-2 text-xs tabular-nums", style: { color: t.accent, fontFamily: F.mono } },
                (cached || (done && !busy)) && React.createElement(Check, { size: 11 }),
                parts.length,
                "/",
                SUMMARY_PARTS.length)),
        React.createElement("div", { className: "mb-5 h-0.5 w-full overflow-hidden rounded-full", style: { background: `${t.ink}12` } },
            React.createElement("div", { className: "h-full transition-all duration-500", style: { width: `${(parts.length / SUMMARY_PARTS.length) * 100}%`, background: t.accent } })),
        sumErr && !busy && (React.createElement("div", { className: "mb-5 flex items-start gap-2 rounded-lg px-3.5 py-3", style: { background: "#C97B7215", border: "1px solid #C97B7240" } },
            React.createElement(AlertTriangle, { size: 13, className: "mt-0.5 shrink-0", style: { color: "#C97B72" } }),
            React.createElement("p", { className: "text-xs leading-relaxed", style: { color: "#E0B5B0" } },
                sumErr,
                " Yozilgan bo'limlar saqlangan \u2014 davom ettirish uchun qayta bosing."))),
        React.createElement("div", { className: "space-y-7" }, parts.map((p, i) => (React.createElement("section", { key: i },
            React.createElement("div", { className: "mb-2 flex items-baseline gap-2.5" },
                React.createElement("span", { className: "text-xs tabular-nums", style: { color: t.accent, fontFamily: F.mono } }, String(i + 1).padStart(2, "0")),
                React.createElement("h4", { className: "text-[17px]", style: { fontFamily: t.titleFont, color: t.ink } }, p.k)),
            React.createElement("div", { className: "whitespace-pre-wrap text-[15px] leading-[1.8]", style: { color: t.ink, fontFamily: t.bodyFont, opacity: 0.92 } }, p.text))))),
        busy && (React.createElement("div", { className: "mt-6 flex items-center gap-2 text-sm", style: { color: t.muted } },
            React.createElement(Loader2, { size: 14, className: "animate-spin" }),
            SUMMARY_PARTS[parts.length]?.k,
            " bo'limi yozilmoqda...")),
        done && (React.createElement("button", { onClick: () => build(true), className: "mt-8 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm", style: { background: t.panel, color: t.ink, border: `1px solid ${t.accent}55` } },
            React.createElement(RotateCcw, { size: 14, style: { color: t.accent } }),
            " Xulosani qaytadan yozish"))));
}
/* ------------------------------------------------------------
   MANBA — kitob matnini yuklash yoki internetdan tekshirish
   ------------------------------------------------------------ */
/* ------------------------------------------------------------
   PDF / matn yuklash oynasi — bosh sahifadan ochiladi
   ------------------------------------------------------------ */
function UploadModal({ onAdd, onClose }) {
    const A = useAccent();
    const [busy, setBusy] = useState(false);
    const [step, setStep] = useState("");
    const [err, setErr] = useState("");
    const [hint, setHint] = useState("");
    const [web, setWeb] = useState(false);
    useEffect(() => {
        let live = true;
        (async () => {
            const pref = await cacheGet("webAll");
            if (live && pref && typeof pref.on === "boolean")
                setWeb(pref.on);
        })();
        return () => { live = false; };
    }, []);
    const toggleWeb = (on) => { setWeb(on); cacheSet("webAll", { on }); };
    const take = async (e) => {
        const file = e.target.files?.[0];
        e.target.value = "";
        if (!file)
            return;
        setBusy(true);
        setErr("");
        try {
            setStep("Fayl o'qilmoqda...");
            const raw = await extractFile(file, (n, total) => setStep(`Sahifa ${n} / ${total}`));
            if (!raw || raw.replace(/\s/g, "").length < 500) {
                throw Object.assign(new Error("bo'sh"), { code: "empty" });
            }
            setStep("Matn tayyorlanmoqda...");
            const parts = splitText(raw);
            setStep("Kitob aniqlanmoqda...");
            const book = await makeBookFromText(parts, hint);
            setStep(`Matn saqlanmoqda — ${parts.length} bo'lak...`);
            await saveText(book.id, parts);
            onAdd(book);
        }
        catch (ex) {
            setErr(ex?.code === "format"
                ? "Bu turdagi fayl o'qilmaydi. .pdf, .docx, .txt yoki .md tanlang."
                : ex?.code === "empty"
                    ? "Fayldan matn chiqmadi. Skanerdan olingan PDF (sahifalari rasm) o'qilmaydi — matnli nusxa kerak."
                    : ex?.code === "unknown"
                        ? "Matndan kitob nomini aniqlab bo'lmadi. Pastdagi maydonga kitob nomi va muallifini yozib, qayta urinib ko'ring."
                        : ex?.message === "yuklanmadi" || ex?.message === "pdfjs yo'q"
                            ? "PDF o'quvchi yuklanmadi. Internetni tekshiring yoki .docx / .txt yuklang."
                            : ex?.message === "saqlanmadi"
                                ? "Matn qurilmaga sig'madi. Kichikroq fayl bilan urinib ko'ring."
                                : ex && ["limit", "server", "api", "empty"].includes(ex.code)
                                    ? errText(ex)
                                    : "Fayl o'qilmadi. Boshqa nusxa bilan urinib ko'ring.");
        }
        setBusy(false);
        setStep("");
    };
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-end justify-center sm:items-center", style: { background: "#000000cc" } },
        React.createElement("div", { className: "w-full max-w-md rounded-t-2xl p-5 sm:rounded-2xl", style: { background: "#15181D", border: "1px solid #ffffff14" } },
            React.createElement("div", { className: "mb-5 flex items-start justify-between gap-4" },
                React.createElement("div", null,
                    React.createElement("h3", { className: "text-lg", style: { fontFamily: F.display, color: "#F0EDE6" } }, "Kitobingizni qo'shamiz"),
                    React.createElement("p", { className: "mt-1 text-xs leading-relaxed", style: { color: "#8A9099" } }, "Fayl qo'shilsa, javoblar aynan shu kitobning o'z matnidan chiqadi \u2014 eng aniq yo'l shu.")),
                React.createElement("button", { onClick: onClose, style: { color: "#8A9099" }, "aria-label": "Yopish" },
                    React.createElement(X, { size: 18 }))),
            busy ? (React.createElement("div", { className: "flex flex-col items-center py-12" },
                React.createElement(Loader2, { size: 24, className: "animate-spin", style: { color: A } }),
                React.createElement("p", { className: "mt-3 text-sm", style: { color: "#8A9099" } }, step || "Tayyorlanmoqda..."),
                React.createElement("p", { className: "mt-1 text-[11px]", style: { color: "#6E747E" } }, "Katta kitob bir necha daqiqa olishi mumkin"))) : (React.createElement(React.Fragment, null,
                React.createElement("label", { className: "relative flex cursor-pointer flex-col items-center justify-center rounded-xl py-9", style: { background: "#1E2229", border: `1px dashed ${A}66` } },
                    React.createElement(Upload, { size: 22, style: { color: A } }),
                    React.createElement("span", { className: "mt-2.5 text-sm", style: { color: "#F0EDE6" } }, "Faylni tanlash"),
                    React.createElement("span", { className: "mt-1 text-[11px]", style: { color: "#6E747E" } }, "PDF \u00B7 DOCX \u00B7 TXT \u00B7 MD"),
                    React.createElement("input", { type: "file", accept: ".pdf,.docx,.txt,.md", onChange: take, className: "absolute inset-0 cursor-pointer opacity-0" })),
                React.createElement("input", { value: hint, onChange: (e) => setHint(e.target.value), placeholder: "Kitob nomi \u2014 ixtiyoriy", className: "mt-3 w-full rounded-lg px-3 py-2.5 text-sm outline-none", style: { background: "#1E2229", color: "#F0EDE6", border: "1px solid #ffffff14" } }),
                err && React.createElement("p", { className: "mt-3 text-xs leading-relaxed", style: { color: "#C97B72" } }, err),
                React.createElement("p", { className: "mt-3 text-[11px] leading-relaxed", style: { color: "#6E747E" } }, "Matn shu qurilmadan chiqmaydi. Skanerdan olingan PDF'da matn bo'lmaydi \u2014 u holda .docx yoki .txt qulayroq."),
                React.createElement("label", { className: "mt-4 flex cursor-pointer items-start gap-2.5 border-t pt-3", style: { borderColor: "#ffffff12" } },
                    React.createElement("input", { type: "checkbox", checked: web, onChange: (e) => toggleWeb(e.target.checked), className: "mt-0.5 h-4 w-4 shrink-0", style: { accentColor: A } }),
                    React.createElement("span", null,
                        React.createElement("span", { className: "block text-[13px]", style: { color: "#F0EDE6" } }, "Internetdan tekshirish"),
                        React.createElement("span", { className: "block text-[11px] leading-relaxed", style: { color: "#8A9099" } }, "Fayli yo'q kitoblarda javob internetdan tekshiriladi \u2014 sekinroq, lekin aniqroq."))))))));
}
/* ============================================================
   Kitob sahifasi
   ============================================================ */
const TABS = [
    { id: "kitob", label: "Kitob", icon: BookOpen },
    { id: "suhbat", label: "Suhbat", icon: MessageSquare },
    { id: "goyalar", label: "G'oyalar", icon: Lightbulb },
    { id: "tahlil", label: "Tahlil", icon: Layers },
    { id: "sinov", label: "Sinov", icon: ClipboardCheck },
    { id: "xulosa", label: "Xulosa", icon: ScrollText },
];
/* ------------------------------------------------------------
   MATN BIRIKTIRISH — istalgan kitobga o'z faylini qo'shish.
   Biriktirilgach, Suhbat / G'oyalar / Tahlil / Sinov / Xulosa
   javoblari xotiradan emas, aynan shu matndan chiqadi.
   ------------------------------------------------------------ */
function AttachText({ book, chunks, onChunks, web, onWeb }) {
    const t = book.theme;
    const [busy, setBusy] = useState("");
    const [err, setErr] = useState("");
    const has = chunks && chunks.length;
    const take = async (e) => {
        const file = e.target.files?.[0];
        e.target.value = "";
        if (!file)
            return;
        setErr("");
        setBusy("Fayl o'qilmoqda...");
        try {
            const raw = await extractFile(file, (n, total) => setBusy(`Sahifa ${n} / ${total}`));
            if (!raw || raw.replace(/\s/g, "").length < 500) {
                throw Object.assign(new Error("bo'sh"), { code: "empty" });
            }
            setBusy("Matn tayyorlanmoqda...");
            const parts = splitText(raw);
            setBusy(`Saqlanmoqda — ${parts.length} bo'lak...`);
            await saveText(book.id, parts);
            onChunks(parts);
        }
        catch (ex) {
            setErr(ex?.code === "format"
                ? "Bu turdagi fayl o'qilmaydi. .pdf, .docx, .txt yoki .md tanlang."
                : ex?.code === "empty"
                    ? "Fayldan matn chiqmadi. Skanerdan olingan PDF (sahifalari rasm) o'qilmaydi — matnli nusxa kerak."
                    : ex?.message === "yuklanmadi" || ex?.message === "pdfjs yo'q"
                        ? "PDF o'quvchi yuklanmadi. Internetni tekshiring yoki .docx / .txt yuklang."
                        : ex?.message === "saqlanmadi"
                            ? "Matn qurilmaga sig'madi. Kichikroq fayl bilan urinib ko'ring."
                            : "Fayl o'qilmadi. Boshqa nusxa bilan urinib ko'ring.");
        }
        setBusy("");
    };
    const drop = async () => {
        await dropText(book.id);
        onChunks(null);
    };
    return (React.createElement("div", { className: "rounded-xl p-4", style: { background: t.panel, border: `1px solid ${t.ink}12` } },
        React.createElement("div", { className: "mb-1.5 flex items-center gap-2 text-xs uppercase tracking-[.2em]", style: { color: t.accent } },
            React.createElement(FileText, { size: 12 }),
            " Kitob matni"),
        busy ? (React.createElement("div", { className: "flex items-center gap-2 py-1 text-sm", style: { color: t.muted } },
            React.createElement(Loader2, { size: 14, className: "animate-spin" }),
            " ",
            busy)) : has ? (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "text-sm leading-relaxed", style: { color: t.ink, fontFamily: t.bodyFont } },
                "Matn biriktirilgan \u2014 ",
                chunks.length,
                " bo'lak. Javoblar shu matndan chiqadi."),
            React.createElement("button", { onClick: drop, className: "mt-3 rounded-lg px-3 py-1.5 text-xs", style: { background: `${t.ink}0f`, color: t.muted, border: `1px solid ${t.ink}18` } }, "Matnni o'chirish"))) : (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "text-sm leading-relaxed", style: { color: t.muted, fontFamily: t.bodyFont } }, "Kitobning o'z faylini qo'shsangiz, barcha javoblar aynan shu matnga tayanadi \u2014 eng aniq yo'l shu. Fayl qurilmadan chiqmaydi."),
            React.createElement("label", { className: "relative mt-3 inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-xs", style: { background: `${t.accent}1f`, color: t.accent, border: `1px dashed ${t.accent}66` } },
                React.createElement(Upload, { size: 13 }),
                " Fayl biriktirish \u00B7 PDF \u00B7 DOCX \u00B7 TXT",
                React.createElement("input", { type: "file", accept: ".pdf,.docx,.txt,.md", onChange: take, className: "absolute inset-0 cursor-pointer opacity-0" })))),
        err && React.createElement("p", { className: "mt-2.5 text-xs leading-relaxed", style: { color: "#C97B72" } }, err),
        !has && (React.createElement("label", { className: "mt-4 flex cursor-pointer items-start gap-2.5 border-t pt-3", style: { borderColor: `${t.ink}12` } },
            React.createElement("input", { type: "checkbox", checked: !!web, onChange: (e) => onWeb(e.target.checked), className: "mt-0.5 h-4 w-4 shrink-0", style: { accentColor: t.accent } }),
            React.createElement("span", null,
                React.createElement("span", { className: "block text-[13px]", style: { color: t.ink } }, "Internetdan tekshirish"),
                React.createElement("span", { className: "block text-[11px] leading-relaxed", style: { color: t.muted } }, "Fayl biriktirilmagan kitoblarda javob internetdan tekshiriladi \u2014 sekinroq, lekin aniqroq."))))));
}
function BookPage({ book, onBack }) {
    const t = book.theme;
    const [tab, setTab] = useState("kitob");
    const [entered, setEntered] = useState(false);
    const [chunks, setChunks] = useState(null);
    const [web, setWeb] = useState(false);
    /* Saqlangan matn va sozlamani tiklash */
    useEffect(() => {
        let live = true;
        setChunks(null);
        (async () => {
            const [txt, pref] = await Promise.all([loadText(book.id), cacheGet("webAll")]);
            if (!live)
                return;
            if (txt)
                setChunks(txt);
            if (pref && typeof pref.on === "boolean")
                setWeb(pref.on);
        })();
        return () => { live = false; };
    }, [book.id]);
    useEffect(() => {
        const id = setTimeout(() => setEntered(true), 40);
        return () => clearTimeout(id);
    }, [book.id]);
    const topRef = useRef(null);
    useEffect(() => {
        topRef.current?.scrollIntoView({ block: "start" });
    }, [book.id, tab]);
    return (React.createElement("div", { className: "min-h-screen", style: { background: t.bg, color: t.ink } },
        React.createElement(Atmosphere, { theme: t }),
        React.createElement("div", { className: "relative z-10 mx-auto max-w-3xl px-5 pb-24" },
            React.createElement("div", { ref: topRef }),
            React.createElement("button", { onClick: onBack, className: "flex items-center gap-1.5 py-5 text-sm", style: { color: t.muted } },
                React.createElement(ArrowLeft, { size: 16 }),
                " Kutubxona"),
            React.createElement("div", { className: "transition-all duration-700", style: { opacity: entered ? 1 : 0, transform: entered ? "translateY(0)" : "translateY(14px)" } },
                React.createElement("div", { className: "flex flex-col items-start gap-6 sm:flex-row sm:items-end" },
                    React.createElement(Cover, { book: book, size: "lg" }),
                    React.createElement("div", { className: "pb-1" },
                        React.createElement("div", { className: "mb-2 text-xs uppercase tracking-[.22em]", style: { color: t.accent } },
                            book.cat,
                            " \u00B7 ",
                            book.year),
                        React.createElement("h1", { className: "mb-2 leading-[1.04]", style: { fontFamily: t.titleFont, fontSize: "clamp(28px, 8vw, 40px)", fontWeight: 700, overflowWrap: "anywhere" } }, book.title),
                        React.createElement("div", { className: "text-base", style: { color: t.muted, fontFamily: t.bodyFont } }, book.author),
                        React.createElement("p", { className: "mt-4 max-w-md text-lg italic leading-snug", style: { color: t.accent2, fontFamily: t.bodyFont } }, book.tagline)))),
            React.createElement("div", { className: "sticky top-0 z-20 -mx-5 mt-8 mb-6 overflow-x-auto px-5 py-3", style: { background: `${t.bg}f2`, backdropFilter: "blur(8px)", borderBottom: `1px solid ${t.ink}14` } },
                React.createElement("div", { className: "flex gap-1.5" }, TABS.map((x) => {
                    const I = x.icon;
                    const on = tab === x.id;
                    return (React.createElement("button", { key: x.id, onClick: () => setTab(x.id), className: "flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs transition-opacity", style: on ? { background: t.accent, color: "#fff" } : { background: t.panel, color: t.muted, border: `1px solid ${t.ink}12` } },
                        React.createElement(I, { size: 13 }),
                        " ",
                        x.label));
                }))),
            tab === "kitob" && (React.createElement("div", { className: "space-y-8" },
                React.createElement("p", { className: "text-[17px] leading-[1.75]", style: { fontFamily: t.bodyFont, color: t.ink } }, book.essence),
                React.createElement("div", { className: "rounded-xl p-4", style: { background: t.panel, border: `1px solid ${t.ink}12` } },
                    React.createElement("div", { className: "mb-1.5 flex items-center gap-2 text-xs uppercase tracking-[.2em]", style: { color: t.accent } },
                        React.createElement(Bookmark, { size: 12 }),
                        " Kimga"),
                    React.createElement("p", { className: "text-sm leading-relaxed", style: { color: t.ink, fontFamily: t.bodyFont } }, book.forWho)),
                React.createElement(AttachText, { book: book, chunks: chunks, onChunks: setChunks, web: web, onWeb: (on) => { setWeb(on); cacheSet("webAll", { on }); } }))),
            React.createElement(SourceCtx.Provider, { value: { chunks, web } },
                tab === "goyalar" && React.createElement(Ideas, { key: book.id, book: book }),
                tab === "suhbat" && React.createElement(Chat, { key: book.id, book: book }),
                tab === "tahlil" && React.createElement(Analysis, { key: book.id, book: book }),
                tab === "sinov" && React.createElement(Quiz, { key: book.id, book: book }),
                tab === "xulosa" && React.createElement(Summary, { key: book.id, book: book })))));
}
/* ------------------------------------------------------------
   MEN QANDAY INSONMAN — erkin suhbat orqali o'quvchi profilini
   aniqlash. Natijada kutubxona tartibi va ilova rangi o'zgaradi.
   ------------------------------------------------------------ */
const PROFILE_KEY = "reader";
const PALETTES = [
    { id: "oltin", name: "Oltin", accent: "#B8945F" },
    { id: "qizil", name: "Alanga", accent: "#C4453C" },
    { id: "kok", name: "Chuqurlik", accent: "#4A82B5" },
    { id: "yashil", name: "Tinchlik", accent: "#4E9478" },
    { id: "siyoh", name: "Siyoh", accent: "#7B6BB0" },
    { id: "mis", name: "Mis", accent: "#C97B44" },
];
function Profiler({ books, onDone, onClose }) {
    const A = useAccent();
    const [msgs, setMsgs] = useState([]);
    const [text, setText] = useState("");
    const [chips, setChips] = useState([]);
    const [busy, setBusy] = useState(false);
    const [turn, setTurn] = useState(0);
    const [err, setErr] = useState("");
    const endRef = useRef(null);
    const TOTAL = 6;
    useEffect(() => {
        setMsgs([{
                role: "assistant",
                text: "Sizga mos kitoblarni topish uchun avval o'zingizni tanishtiring. Zo'r javob berish shart emas — nima bo'lsa shuni yozing.\n\nBoshlaymiz: hozir hayotingizda eng ko'p vaqtingiz va o'yingiz nimaga ketyapti?",
            }]);
        setChips(["Ish va kelajak", "O'zimni tushunish", "Munosabatlar", "Bilim va izlanish"]);
    }, []);
    useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }); }, [msgs, busy]);
    const sys = `Sen o'quvchi bilan suhbatlashib, unga qanday kitoblar mos kelishini aniqlaydigan tajribali kutubxonachisan. ` +
        `Iliq, oddiy, do'stona gapir. Bir vaqtda faqat BITTA savol ber, qisqa qil (2-3 jumla). ` +
        `Savollaring odamning kitobga bo'lgan munosabatini ochsin: nimadan qiynaladi, nimani izlaydi, ` +
        `og'ir matnni ko'taradimi yoki yengilini afzal ko'radimi, hikoyani sevadimi yoki quruq fikrni. ` +
        `Tekshiruv o'tkazayotgandek emas, suhbatlashayotgandek bo'l. ${GUARD}`;
    const send = async (override) => {
        const q = (override ?? text).trim();
        if (!q || busy)
            return;
        const shown = [...msgs, { role: "user", text: q }];
        setMsgs(shown);
        setText("");
        setChips([]);
        setBusy(true);
        setErr("");
        const nextTurn = turn + 1;
        const history = shown.map((m) => ({ role: m.role, content: m.text }));
        try {
            if (nextTurn >= TOTAL) {
                await finish(shown);
                return;
            }
            const r = await askClaude([...history, { role: "user", content: `(Ichki ko'rsatma: bu ${nextTurn}-javob, jami ${TOTAL} ta savol bo'ladi. ` +
                        `Keyingi savolni ber. Faqat JSON qaytar: {"savol":"...","variantlar":["...","...","..."]})` }], sys, 700);
            const parsed = parseJson(r);
            setMsgs([...shown, { role: "assistant", text: parsed.savol || r }]);
            setChips(Array.isArray(parsed.variantlar) ? parsed.variantlar.slice(0, 4) : []);
            setTurn(nextTurn);
        }
        catch (e) {
            setMsgs([...shown, { role: "assistant", text: errText(e) }]);
            setErr("send");
        }
        setBusy(false);
    };
    const finish = async (shown) => {
        setBusy(true);
        try {
            const dialog = shown.map((m) => `${m.role === "user" ? "O'quvchi" : "Kutubxonachi"}: ${m.text}`).join("\n");
            const list = books.map((b) => `${b.id} | ${b.title} — ${b.author} | ${b.cat} | ${b.tagline}`).join("\n");
            const r = await askClaude([{ role: "user", content: `Quyida o'quvchi bilan bo'lgan suhbat:\n${dialog}\n\n` +
                        `Kutubxonadagi kitoblar:\n${list}\n\n` +
                        `Shu suhbatga qarab o'quvchi profilini tuz:\n` +
                        `— "tur": o'quvchi turiga qisqa, yoqimli nom (2-3 so'z). Masalan "Ichkariga qaraydigan o'quvchi".\n` +
                        `— "tavsif": 2-3 jumla. Unga murojaat qilib yoz, iliq va aniq. Yorliq yopishtirmа — kuzatuv sifatida ayt.\n` +
                        `— "xislat": 3 ta qisqa xususiyat, har biri 2-4 so'z.\n` +
                        `— "rang": ${PALETTES.map((x) => x.id).join(" / ")} dan biri — kayfiyatiga mos keladigani.\n` +
                        `— "tartib": BARCHA kitob id'larini moslik darajasi bo'yicha tartiblab ber, eng mosi birinchi. Hech birini tushirib qoldirma.\n` +
                        `— "top": eng mos 3 ta kitob uchun [{"id":"...","sabab":"nega aynan shu kishiga mos — 1 jumla"}].\n\n` +
                        `Faqat JSON:\n{"tur":"...","tavsif":"...","xislat":["...","...","..."],"rang":"oltin","tartib":["id1","id2"],"top":[{"id":"...","sabab":"..."}]}` }], `Sen odamni tushunadigan kutubxonachisan. Faqat JSON qaytar. ${GUARD}`, 3000);
            const prof = parseJson(r);
            if (!prof.tur || !Array.isArray(prof.tartib))
                throw Object.assign(new Error("bo'sh"), { code: "empty" });
            const valid = new Set(books.map((b) => b.id));
            const order = prof.tartib.filter((x) => valid.has(x));
            for (const b of books)
                if (!order.includes(b.id))
                    order.push(b.id);
            const saved = {
                tur: String(prof.tur).trim(),
                tavsif: String(prof.tavsif || "").trim(),
                xislat: (Array.isArray(prof.xislat) ? prof.xislat : []).filter(Boolean).slice(0, 3),
                rang: PALETTES.some((x) => x.id === prof.rang) ? prof.rang : "oltin",
                tartib: order,
                top: (Array.isArray(prof.top) ? prof.top : []).filter((x) => x && valid.has(x.id)).slice(0, 3),
                at: Date.now(),
            };
            await cacheSet(PROFILE_KEY, saved);
            onDone(saved);
        }
        catch (e) {
            setMsgs((m) => [...m, { role: "assistant", text: errText(e) + " Suhbat saqlangan — qayta urinib ko'ring." }]);
            setErr("finish");
            setBusy(false);
        }
    };
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-end justify-center sm:items-center", style: { background: "#000000d9" } },
        React.createElement("div", { className: "flex h-[88vh] w-full max-w-lg flex-col rounded-t-2xl sm:h-[80vh] sm:rounded-2xl", style: { background: "#15181D", border: "1px solid #ffffff14" } },
            React.createElement("div", { className: "flex items-start justify-between gap-4 border-b px-5 py-4", style: { borderColor: "#ffffff12" } },
                React.createElement("div", { className: "min-w-0" },
                    React.createElement("h3", { className: "text-lg", style: { fontFamily: F.display, color: "#F0EDE6" } }, "Men qanday insonman?"),
                    React.createElement("p", { className: "mt-0.5 text-xs", style: { color: "#8A9099" } }, busy && turn >= TOTAL - 1 ? "Profil tuzilmoqda..." : `${Math.min(turn + 1, TOTAL)} / ${TOTAL}`)),
                React.createElement("button", { onClick: onClose, style: { color: "#8A9099" }, "aria-label": "Yopish" },
                    React.createElement(X, { size: 18 }))),
            React.createElement("div", { className: "mx-5 mt-3 h-0.5 overflow-hidden rounded-full", style: { background: "#ffffff12" } },
                React.createElement("div", { className: "h-full transition-all duration-500", style: { width: `${(Math.min(turn, TOTAL) / TOTAL) * 100}%`, background: A } })),
            React.createElement("div", { className: "flex-1 space-y-4 overflow-y-auto px-5 py-5" },
                msgs.map((m, i) => m.role === "user" ? (React.createElement("div", { key: i, className: "flex justify-end" },
                    React.createElement("div", { className: "max-w-[85%] rounded-2xl rounded-br-sm px-4 py-2.5 text-sm", style: { background: A, color: "#12141A" } }, m.text))) : (React.createElement("p", { key: i, className: "max-w-[92%] whitespace-pre-wrap text-[15px] leading-relaxed", style: { color: "#E8E4DC", fontFamily: F.classic } }, m.text))),
                busy && (React.createElement("p", { className: "text-[13px] italic", style: { color: "#8A9099" } }, turn >= TOTAL - 1 ? "Javoblaringiz o'qilmoqda..." : "o'ylanmoqda...")),
                React.createElement("div", { ref: endRef })),
            chips.length > 0 && !busy && (React.createElement("div", { className: "flex flex-wrap gap-1.5 px-5 pb-2" }, chips.map((c, i) => (React.createElement("button", { key: i, onClick: () => send(c), className: "rounded-full px-3 py-1.5 text-xs", style: { color: A, border: `1px solid ${A}55` } }, c))))),
            React.createElement("div", { className: "flex items-end gap-2 border-t px-5 py-3", style: { borderColor: "#ffffff12" } },
                React.createElement("textarea", { value: text, onChange: (e) => setText(e.target.value), rows: 1, onKeyDown: (e) => { if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        send();
                    } }, placeholder: "O'z so'zingiz bilan yozing...", className: "max-h-28 flex-1 resize-none rounded-xl px-3.5 py-2.5 text-sm outline-none", style: { background: "#1E2229", color: "#F0EDE6", border: "1px solid #ffffff14" } }),
                React.createElement("button", { onClick: () => send(), disabled: busy || !text.trim(), className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full disabled:opacity-30", style: { background: A, color: "#12141A" }, "aria-label": "Yuborish" }, busy ? React.createElement(Loader2, { size: 15, className: "animate-spin" }) : React.createElement(Send, { size: 15 }))))));
}
/* ============================================================
   Kutubxonachi (global AI)
   ============================================================ */
const Q_STEPS = [
    {
        k: "holat",
        q: "Hozir sizni ko'proq nima band qilyapti?",
        opts: [
            "O'zimni tushunish", "Odamlar bilan munosabat", "Pul, ish, biznes",
            "Jamiyat va hokimiyat", "Ruhiy tinchlik", "Bilim va tarix",
        ],
    },
    {
        k: "tur",
        q: "Qanday kitob sizga yaqin?",
        opts: ["Badiiy — hikoya orqali", "Amaliy qo'llanma", "Chuqur fikr, falsafa", "Hayot yo'li, biografiya"],
    },
    {
        k: "hajm",
        q: "Qancha vaqtingiz bor?",
        opts: ["Yengil va qisqa", "O'rtacha", "Qalin va jiddiy — vaqtim yetadi"],
    },
];
function norm(x) {
    return (x || "").toLowerCase().replace(/[«»"'’‘.,!?:;()\[\]-]/g, "").replace(/\s+/g, " ").trim();
}
function findInLibrary(books, title) {
    const t = norm(title);
    if (!t)
        return null;
    return books.find((b) => {
        const bt = norm(b.title);
        return bt === t || (bt.length > 4 && t.length > 4 && (bt.includes(t) || t.includes(bt)));
    }) || null;
}
function Librarian({ books, onPick, onAdd, onClose }) {
    const A = useAccent();
    const [step, setStep] = useState(0);
    const [ans, setAns] = useState({});
    const [free, setFree] = useState("");
    const [out, setOut] = useState(null);
    const [busy, setBusy] = useState(false);
    const [adding, setAdding] = useState(null);
    const [addErr, setAddErr] = useState("");
    const [runErr, setRunErr] = useState("");
    const pick = (k, v) => {
        setAns((a) => ({ ...a, [k]: v }));
        setStep((n) => n + 1);
    };
    const run = async (extra = free, again = false) => {
        if (busy)
            return;
        setBusy(true);
        setOut(null);
        setAddErr("");
        setRunErr("");
        try {
            const have = books.map((b) => `${b.title} — ${b.author}`).join("; ");
            const seen = (Array.isArray(out) ? out : []).map((x) => x.title).join("; ");
            const holat = `Qiziqish sohasi: ${ans.holat || "aniq emas"}. ` +
                `Yoqadigan uslub: ${ans.tur || "aniq emas"}. ` +
                `Vaqt imkoniyati: ${ans.hajm || "aniq emas"}.` +
                (extra.trim() ? `\nO'z so'zi bilan: ${extra.trim()}` : "");
            const r = await askClaude([{ role: "user", content: `Kitob tanlay olmayotgan o'quvchi.\n${holat}\n\n` +
                        `Unga 4 ta kitob tavsiya qil. TANLOV DOIRASI — BUTUN DUNYO ADABIYOTI:\n` +
                        `— Jahon klassikasi, zamonaviy eng kuchli asarlar, o'zbek va rus adabiyoti, sharq merosi — hammasi ochiq.\n` +
                        `— Aynan shu mavzudagi ENG YAXSHI, eng e'tirof etilgan kitoblarni tanla. O'rtamiyona kitobni tavsiya qilma.\n` +
                        `— Kitob o'z sohasida ustun bo'lsin: yillar davomida o'qilib kelayotgan, jiddiy ta'sir ko'rsatgan asar.\n` +
                        `— 4 tasi turlicha bo'lsin: bittasi shubhasiz klassika, bittasi amaliy/zamonaviy, bittasi kutilmagan lekin mos.\n` +
                        `— O'zbek yoki rus tiliga tarjima qilingan kitoblarga ustunlik ber — o'quvchi topa olsin.\n` +
                        `— HAR BIR kitobni tavsiya qilishdan oldin internetdan tekshir: shu nomdagi kitob shu muallifda rostdan bormi?\n` +
                        `— Muallifga mavjud bo'lmagan asarni nisbat berma. Tekshira olmasang — o'sha kitobni ro'yxatdan chiqarib tashla.\n\n` +
                        `Bu kitoblar allaqachon uning kutubxonasida bor, TAKRORLAMA: ${have || "yo'q"}.\n` +
                        (seen ? `Bularni ham qayta tavsiya qilma: ${seen}.\n` : "") + `\n` +
                        `Faqat JSON qaytar:\n` +
                        `{"picks":[{"title":"aniq nomi","author":"muallifi","yil":"nashr yili yoki bo'sh",` +
                        `"nima":"kitob nima haqida — 1 jumla","nega":"nega aynan shu kishiga mos — 2 jumla, unga murojaat qilib",` +
                        `"nechun":"nega bu kitob shu mavzudagi eng yaxshilardan biri — 1 qisqa jumla"}]}` }], `Sen dunyo adabiyotini chuqur biladigan kutubxonachisan. Odamning holatini eshitib, ` +
                `unga butun jahon kitoblari ichidan eng kuchlisini topib berasan — mashhurligiga emas, mosligiga qarab. ` +
                `Kitob nomi va muallifini aniq bilmasang — o'sha kitobni tavsiya qilma, to'qima. Faqat JSON qaytar. ${GUARD}`, 1800, { web: true });
            const parsed = parseJson(r);
            const picks = (parsed.picks || [])
                .filter((x) => x && !isJunk(x.title) && !isJunk(x.author))
                .map((x) => ({ ...x, book: findInLibrary(books, x.title) }));
            setOut(picks.length ? picks : "error");
        }
        catch (e) {
            setOut("error");
            setRunErr(errText(e));
        }
        setBusy(false);
    };
    const addOne = async (p, i) => {
        setAdding(i);
        setAddErr("");
        try {
            onAdd(await makeBook({ title: p.title, author: p.author }));
        }
        catch (e) {
            setAddErr(e && e.code === "unknown"
                ? "Bu kitob profilini tuzib bo'lmadi — tanimadim. \"Kitob qo'shish\" orqali asl nomi bilan urinib ko'ring."
                : errText(e));
        }
        setAdding(null);
    };
    const restart = () => { setStep(0); setAns({}); setFree(""); setOut(null); setAddErr(""); };
    const cur = Q_STEPS[step];
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-end justify-center sm:items-center", style: { background: "#000000cc" } },
        React.createElement("div", { className: "max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-t-2xl p-5 sm:rounded-2xl", style: { background: "#15181D", border: "1px solid #ffffff14" } },
            React.createElement("div", { className: "mb-5 flex items-start justify-between gap-4" },
                React.createElement("div", null,
                    React.createElement("h3", { className: "text-lg", style: { fontFamily: F.display, color: "#F0EDE6" } }, "Kitob tavsiyachisi"),
                    React.createElement("p", { className: "mt-1 text-xs", style: { color: "#8A9099" } }, "Uch savol \u2014 jahon kitoblari ichidan eng mosini topamiz.")),
                React.createElement("button", { onClick: onClose, style: { color: "#8A9099" }, "aria-label": "Yopish" },
                    React.createElement(X, { size: 18 }))),
            !out && !busy && (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "mb-4 flex gap-1.5" }, Q_STEPS.map((_, i) => (React.createElement("div", { key: i, className: "h-[3px] flex-1 rounded-full", style: { background: i <= step ? A : "#ffffff18" } })))),
                cur ? (React.createElement(React.Fragment, null,
                    React.createElement("p", { className: "mb-3 text-[15px]", style: { color: "#F0EDE6", fontFamily: F.classic } }, cur.q),
                    React.createElement("div", { className: "grid gap-2" }, cur.opts.map((o) => (React.createElement("button", { key: o, onClick: () => pick(cur.k, o), className: "flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition-colors", style: { background: "#1E2229", border: "1px solid #ffffff12", color: "#E4E7EB" } },
                        o,
                        " ",
                        React.createElement(ChevronRight, { size: 14, style: { color: A } }))))),
                    step > 0 && (React.createElement("button", { onClick: () => setStep(step - 1), className: "mt-3 text-xs", style: { color: "#8A9099" } }, "\u2190 Orqaga")))) : (React.createElement(React.Fragment, null,
                    React.createElement("p", { className: "mb-2 text-[15px]", style: { color: "#F0EDE6", fontFamily: F.classic } }, "Qo'shimcha aytmoqchi bo'lganingiz bormi?"),
                    React.createElement("p", { className: "mb-3 text-xs", style: { color: "#6E747E" } }, "Ixtiyoriy \u2014 bo'sh qoldirsangiz ham bo'ladi."),
                    React.createElement("textarea", { value: free, onChange: (e) => setFree(e.target.value), rows: 3, placeholder: "Masalan: jamoamda ishonch yo'qolgan, qanday yo'l tutishni bilmayapman", className: "w-full rounded-lg px-3 py-2.5 text-sm outline-none", style: { background: "#1E2229", color: "#F0EDE6", border: "1px solid #ffffff18" } }),
                    React.createElement("button", { onClick: () => run(), className: "mt-3 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm", style: { background: A, color: "#12141A" } },
                        React.createElement(Compass, { size: 14 }),
                        " Menga kitob tanlang"),
                    React.createElement("button", { onClick: () => setStep(step - 1), className: "mt-3 text-xs", style: { color: "#8A9099" } }, "\u2190 Orqaga"))))),
            busy && (React.createElement("div", { className: "flex flex-col items-center py-12" },
                React.createElement(Loader2, { size: 22, className: "animate-spin", style: { color: A } }),
                React.createElement("p", { className: "mt-3 text-sm", style: { color: "#8A9099", fontFamily: F.classic } }, "Jahon kitoblari ichidan sizga mosi tanlanmoqda..."))),
            out === "error" && (React.createElement("div", { className: "py-8 text-center" },
                React.createElement("p", { className: "text-sm", style: { color: "#C97B72" } }, runErr || "Tavsiya olinmadi. Qayta urinib ko'ring."),
                React.createElement("button", { onClick: restart, className: "mt-3 text-xs", style: { color: A } }, "Boshidan boshlash"))),
            Array.isArray(out) && (React.createElement("div", { className: "space-y-3" },
                React.createElement("div", null,
                    React.createElement("p", { className: "text-xs uppercase tracking-[.24em]", style: { color: A } }, "Sizga mos kitoblar"),
                    React.createElement("p", { className: "mt-1.5 text-[11px]", style: { color: "#6E747E" } }, "Jahon adabiyoti ichidan tanlandi \u2014 kutubxonangizdagi 15 ta bilan cheklanmagan.")),
                out.map((p, i) => (React.createElement("div", { key: i, className: "rounded-xl p-4", style: { background: "#1E2229", border: "1px solid #ffffff12" } },
                    React.createElement("div", { className: "flex items-start gap-3" },
                        p.book && React.createElement(Cover, { book: p.book, size: "sm" }),
                        React.createElement("div", { className: "min-w-0 flex-1" },
                            React.createElement("div", { className: "text-[15px] leading-snug", style: { color: "#F0EDE6", fontFamily: F.display } }, p.title),
                            React.createElement("div", { className: "mt-0.5 text-xs", style: { color: A } },
                                p.author,
                                p.yil ? ` · ${p.yil}` : ""),
                            p.nima && (React.createElement("p", { className: "mt-2 text-xs leading-relaxed", style: { color: "#8A9099" } }, p.nima)))),
                    React.createElement("p", { className: "mt-3 border-l-2 pl-3 text-[13px] leading-relaxed", style: { color: "#D5D8DD", borderColor: A, fontFamily: F.classic } }, p.nega),
                    p.nechun && (React.createElement("div", { className: "mt-2.5 flex items-start gap-2 rounded-lg px-3 py-2", style: { background: "${A}14" } },
                        React.createElement(Sparkles, { size: 12, className: "mt-0.5 shrink-0", style: { color: A } }),
                        React.createElement("p", { className: "text-[12px] leading-relaxed", style: { color: "#B6BAC1" } }, p.nechun))),
                    p.book ? (React.createElement("button", { onClick: () => onPick(p.book), className: "mt-3 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm", style: { background: A, color: "#12141A" } },
                        React.createElement(BookOpen, { size: 14 }),
                        " Kutubxonangizda bor \u2014 ochish")) : (React.createElement("button", { onClick: () => addOne(p, i), disabled: adding !== null, className: "mt-3 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm disabled:opacity-40", style: { background: "transparent", color: A, border: `1px solid ${A}66` } }, adding === i
                        ? React.createElement(React.Fragment, null,
                            React.createElement(Loader2, { size: 14, className: "animate-spin" }),
                            " Kitob tayyorlanmoqda...")
                        : React.createElement(React.Fragment, null,
                            React.createElement(Plus, { size: 14 }),
                            " Kutubxonaga qo'shish")))))),
                addErr && React.createElement("p", { className: "text-xs", style: { color: "#C97B72" } }, addErr),
                React.createElement("div", { className: "flex gap-2 pt-1" },
                    React.createElement("button", { onClick: () => run(free, true), disabled: busy, className: "flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-xs", style: { background: "#1E2229", color: "#B6BAC1", border: "1px solid #ffffff12" } },
                        React.createElement(RotateCcw, { size: 12 }),
                        " Boshqa variantlar"),
                    React.createElement("button", { onClick: restart, className: "flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-xs", style: { background: "#1E2229", color: "#B6BAC1", border: "1px solid #ffffff12" } },
                        React.createElement(Compass, { size: 12 }),
                        " Qaytadan javob berish")))))));
}
/* ============================================================
   Kutubxona
   ============================================================ */
/* ------------------------------------------------------------
   Foydalanuvchi qo'shgan kitoblar uchun tayyor palitralar
   ------------------------------------------------------------ */
const PRESETS = {
    qizil: { bg: "#160A0C", panel: "#241014", ink: "#F3E3DF", muted: "#B08C8C", accent: "#9E1B25", accent2: "#E8C9A0", titleFont: F.display, bodyFont: F.classic, atmos: "smoke", cov: { base: "#5C1220", band: "#F0E3C8" } },
    oltin: { bg: "#120E07", panel: "#241B0E", ink: "#F6ECD8", muted: "#B79E74", accent: "#C99A2E", accent2: "#8E5A22", titleFont: F.display, bodyFont: F.classic, atmos: "ornament", cov: { base: "#3B2A15", band: "#C99A2E" } },
    kok: { bg: "#060A12", panel: "#0E1626", ink: "#E9F2FF", muted: "#7F93B0", accent: "#4EA8FF", accent2: "#C9E4FF", titleFont: F.grotesk, bodyFont: F.sans, atmos: "spark", cov: { base: "#0A0E16", band: "#4EA8FF" } },
    yashil: { bg: "#07120D", panel: "#0F2119", ink: "#E6F5EC", muted: "#84A794", accent: "#3FA06A", accent2: "#CDE9D8", titleFont: F.display, bodyFont: F.classic, atmos: "geo", cov: { base: "#0F2119", band: "#3FA06A" } },
    toq: { bg: "#170D07", panel: "#2A160C", ink: "#FBEBD9", muted: "#C39A75", accent: "#E07B39", accent2: "#F5C97A", titleFont: F.classic, bodyFont: F.classic, atmos: "warm", cov: { base: "#E8A16A", band: "#2A160C" } },
    siyoh: { bg: "#08090B", panel: "#121417", ink: "#E6E9EC", muted: "#7E858E", accent: "#8B8FA6", accent2: "#C9CCD4", titleFont: F.mono, bodyFont: F.mono, atmos: "grid", cov: { base: "#0B0C0E", band: "#C9CCD4" } },
    oq: { bg: "#F4F2ED", panel: "#FFFFFF", ink: "#1A1A1A", muted: "#6B6B6B", accent: "#8E1D2C", accent2: "#1A1A1A", titleFont: F.classic, bodyFont: F.sans, atmos: "paperlight", light: true, cov: { base: "#FFFFFF", band: "#8E1D2C", dark: true } },
    binafsha: { bg: "#0D0813", panel: "#1A1024", ink: "#F0E9F7", muted: "#9E8DB0", accent: "#8B5CF6", accent2: "#D6C4F0", titleFont: F.display, bodyFont: F.classic, atmos: "dawn", cov: { base: "#1A1024", band: "#8B5CF6" } },
};
function buildBook(raw) {
    const p = PRESETS[raw.mood] || PRESETS.oltin;
    const { cov, ...theme } = p;
    const ideas = (Array.isArray(raw.ideas) ? raw.ideas : [])
        .filter((x) => x && !isJunk(x.t) && !isJunk(x.d))
        .map((x) => ({ t: String(x.t).trim(), d: String(x.d).trim() }));
    const lens = (Array.isArray(raw.lens) ? raw.lens : []).filter((x) => !isJunk(x));
    /* Kitob tanilmagan bo'lsa — soxta ma'lumot bilan to'ldirmaymiz. */
    if (isJunk(raw.title) || isJunk(raw.essence) || ideas.length < 2) {
        const e = new Error("tanilmadi");
        e.code = "unknown";
        throw e;
    }
    return {
        id: raw.id,
        title: String(raw.title).trim(),
        author: isJunk(raw.author) ? "Muallif ko'rsatilmagan" : String(raw.author).trim(),
        origTitle: isJunk(raw.origTitle) ? null : String(raw.origTitle).trim(),
        year: isJunk(raw.year) ? "—" : raw.year,
        cat: CATS.includes(raw.cat) ? raw.cat : "Klassika",
        tagline: isJunk(raw.tagline) ? "" : raw.tagline,
        theme,
        cover: { base: cov.base, band: cov.band, motif: "type", dark: !!cov.dark },
        essence: String(raw.essence).trim(),
        ideas,
        lens: lens.length >= 2
            ? lens.slice(0, 4)
            : ["Umumiy tahlil", "Psixologik", "Amaliy", "Tanqidiy"],
        persona: raw.persona && !isJunk(raw.persona.name)
            ? { type: "guide", name: raw.persona.name, role: raw.persona.role || "kitob yo'lboshchisi" }
            : { type: "guide", name: "Kitob yo'lboshchisi", role: "tahlilchi" },
        forWho: isJunk(raw.forWho) ? "" : raw.forWho,
        custom: true,
    };
}
const BOOK_SCHEMA = `{"title":"...","author":"...","year":"...","cat":"Klassika|Psixologiya|Biznes|Jamiyat|Tarix|Ma'naviyat",` +
    `"mood":"qizil|oltin|kok|yashil|toq|siyoh|oq|binafsha","tagline":"kitob ruhini beruvchi qisqa jumla",` +
    `"essence":"4-6 jumlalik mohiyat","ideas":[{"t":"sarlavha","d":"3-4 jumla"}],` +
    `"lens":["4 ta tahlil burchagi"],"persona":{"type":"character|voice|guide","name":"...","role":"..."},` +
    `"forWho":"kimga mos","origTitle":"asl nomi (tarjima bo'lsa) yoki bo'sh","noaniq":false}`;
async function makeBook({ title, author, img }) {
    /* MUHIM: o'zbek bozoridagi kitoblarning ko'pi rus yoki ingliz tilidan tarjima.
       Nomi o'zbekcha bo'lgani uchun tanilmasligi mumkin — shuning uchun avval
       asl nomni topishni so'raymiz. */
    const ask = `Ushbu kitob uchun to'liq profil tuz. Faqat JSON qaytar, boshqa hech narsa yozma:\n${BOOK_SCHEMA}\n\n` +
        `MUHIM KO'RSATMA:\n` +
        `— Bu kitob o'zbek bozorida sotiladi. Nomi o'zbekchaga TARJIMA qilingan bo'lishi ehtimoli katta.\n` +
        `— Nomni shu holicha tanimasang, darhol "bilmayman" dema. Avval o'ylab ko'r: ` +
        `bu qaysi rus yoki ingliz kitobining tarjimasi bo'lishi mumkin? Muallif ismidan foydalan — ` +
        `masalan muallif rus bo'lsa, uning kitoblari ichidan nomi ma'noviy mos keladiganini top.\n` +
        `— Topsang "origTitle" ga asl nomini yoz va profilni ASL KITOB bo'yicha to'ldir.\n` +
        `— "ideas" da kamida 4 ta element bo'lsin, har biri mazmunli.\n` +
        `— Faqat rostdan ham kitobni aniqlay olmasang: {"noaniq":true} qaytar va boshqa maydonlarni ` +
        `"ma'lumot yo'q" kabi so'zlar bilan TO'LDIRMA — bo'sh qoldir. Yolg'on ma'lumot yozishdan ko'ra ` +
        `bilmasligini aytish yaxshiroq.`;
    const content = img
        ? [
            { type: "image", source: { type: "base64", media_type: "image/jpeg", data: img.data } },
            { type: "text", text: `Rasmda kitob muqovasi bor. Muqovadagi BARCHA yozuvlarni diqqat bilan o'qi: ` +
                    `kitob nomi, muallif ismi, kichik yozuvlar, seriya nomi, izohlar.\n` +
                    `Muqova kirill yozuvida bo'lsa — bu rus tilidagi asl nashr yoki o'zbekcha kirill tarjimasi bo'lishi mumkin.\n` +
                    `Muallif ismini asl holida ham yoz (masalan kirillda yozilgan bo'lsa, rus manbalarida qanday bo'lsa shunday).\n` +
                    (title && title.trim() ? `Foydalanuvchi nomini shunday deb yozdi: "${title}". ` : "") +
                    `\n${ask}` },
        ]
        : `Kitob: "${title}"${author ? `, muallif: ${author}` : ""}.\n\n${ask}`;
    const sys = `Sen kitoblar bo'yicha katalogchisan. Faqat JSON qaytar. ${GUARD}`;
    const run = async (useWeb) => {
        const r = await askClaude([{ role: "user", content: useWeb
                    ? (typeof content === "string"
                        ? `${content}\n\nAvval internetdan qidirib, kitob rostdan mavjudligini tekshir.`
                        : [...content, { type: "text", text: "Avval internetdan qidirib, kitobni aniqla." }])
                    : content }], sys, 2000, useWeb ? { web: true } : {});
        return parseJson(r);
    };
    let raw;
    try {
        raw = await run(false);
        /* Tanimasa — internetdan qidirib bir marta qayta urinamiz */
        if (!raw.title || raw.noaniq === true)
            raw = await run(true);
    }
    catch {
        raw = await run(true);
    }
    if (!raw.title || raw.noaniq === true) {
        const e = new Error("tanilmadi");
        e.code = "unknown";
        throw e;
    }
    // Bob ro'yxatini ham tuzib qo'yamiz — o'quvchi nima yozishni o'ylamasin
    return buildBook({
        ...raw,
        id: "u_" + Date.now().toString(36) + Math.floor(Math.random() * 999).toString(36),
    });
}
/* Yuklangan matnning o'zidan kitob profilini tuzish */
async function makeBookFromText(chunks, hint) {
    const head = chunks.slice(0, 6).join("\n\n").slice(0, 10000);
    const tail = chunks.slice(6, 14).join("\n\n").slice(0, 4000);
    const r = await askClaude([{ role: "user", content: `Quyida kitob matnining boshlanishi va bir qismi berilgan.\n\n` +
                `=== MATN BOSHI ===\n${head}\n\n=== KEYINGI QISM ===\n${tail}\n=== TUGADI ===\n\n` +
                (hint && hint.trim() ? `Foydalanuvchi kitob haqida shunday dedi: "${hint}".\n` : "") +
                `Shu matnga qarab kitob profilini tuz. Nomi va muallifi matnning o'zida yozilgan bo'lishi mumkin — topib ol.\n` +
                `Profil matnning haqiqiy mazmuniga tayansin, taxmin qilma.\n` +
                `Faqat JSON qaytar:\n${BOOK_SCHEMA}` }], `Sen matndan kitob profilini tuzuvchisan. Faqat JSON qaytar. ${GUARD}`, 2500);
    const raw = parseJson(r);
    return buildBook({
        ...raw,
        id: "f_" + Date.now().toString(36) + Math.floor(Math.random() * 999).toString(36),
    });
}
function AddBook({ onAdd, onClose }) {
    const A = useAccent();
    const [mode, setMode] = useState("nom");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [img, setImg] = useState(null);
    const [prep, setPrep] = useState(false);
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    /* Rasmni canvas orqali JPEG ga o'tkazamiz:
       HEIC/HEIF, katta hajm va noma'lum format muammosi shu yerda hal bo'ladi. */
    const pick = async (e) => {
        const f = e.target.files?.[0];
        e.target.value = "";
        if (!f)
            return;
        setErr("");
        setPrep(true);
        setImg(null);
        try {
            const url = URL.createObjectURL(f);
            const bitmap = await new Promise((res, rej) => {
                const im = new Image();
                im.onload = () => res(im);
                im.onerror = () => rej(new Error("o'qib bo'lmadi"));
                im.src = url;
            });
            const max = 1100;
            const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
            const cv = document.createElement("canvas");
            cv.width = Math.round(bitmap.width * scale);
            cv.height = Math.round(bitmap.height * scale);
            cv.getContext("2d").drawImage(bitmap, 0, 0, cv.width, cv.height);
            URL.revokeObjectURL(url);
            const dataUrl = cv.toDataURL("image/jpeg", 0.85);
            setImg({ data: dataUrl.split(",")[1], preview: dataUrl, name: f.name });
        }
        catch {
            setErr("Bu rasmni o'qib bo'lmadi. Telefon sozlamalarida format 'JPEG' ga o'zgartirilsa yoki skrinshot qilib yuborilsa ishlaydi.");
        }
        setPrep(false);
    };
    const create = async () => {
        setBusy(true);
        setErr("");
        try {
            onAdd(await makeBook({ title, author, img }));
        }
        catch (e) {
            /* Kitob tanilmasa — bo'sh kitob yaratmaymiz, ochiq aytamiz. */
            setErr(e && e.code === "unknown"
                ? "Bu kitob menga tanish emas, shuning uchun qo'shmadim — bo'sh kitob yaratgandan ko'ra shuni aytganim to'g'ri. " +
                    "Ko'p kitoblar tarjima bo'ladi: asl nomini yoki muallifning to'liq ismini yozib ko'ring " +
                    "(masalan rus muallifi bo'lsa — ismini ruscha yozing)."
                : e && (e.code === "limit" || e.code === "server" || e.code === "api")
                    ? errText(e)
                    : img
                        ? "Muqovadan kitobni aniqlab bo'lmadi. Rasm xira bo'lishi mumkin — nomini va muallifini qo'lda yozib ko'ring."
                        : "Kitob profili tayyorlanmadi. Nomini to'liqroq yozib, qayta urinib ko'ring.");
        }
        setBusy(false);
    };
    const ready = mode === "rasm" ? !!img : title.trim().length > 1;
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-end justify-center sm:items-center", style: { background: "#000000cc" } },
        React.createElement("div", { className: "max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-t-2xl p-5 sm:rounded-2xl", style: { background: "#15181D", border: "1px solid #ffffff14" } },
            React.createElement("div", { className: "mb-4 flex items-start justify-between gap-4" },
                React.createElement("div", null,
                    React.createElement("h3", { className: "text-lg", style: { fontFamily: F.display, color: "#F0EDE6" } }, "Kitob qo'shish"),
                    React.createElement("p", { className: "mt-1 text-xs", style: { color: "#8A9099" } }, "Muqova rasmini yuklang yoki nomini yozing \u2014 qolgan hammasi avtomatik tayyorlanadi.")),
                React.createElement("button", { onClick: onClose, style: { color: "#8A9099" }, "aria-label": "Yopish" },
                    React.createElement(X, { size: 18 }))),
            React.createElement("div", { className: "mb-4 flex gap-2" }, [["nom", "Nomi bo'yicha"], ["rasm", "Muqova rasmi"]].map(([k, l]) => (React.createElement("button", { key: k, onClick: () => { setMode(k); setErr(""); }, className: "flex-1 rounded-lg py-2 text-xs", style: mode === k
                    ? { background: A, color: "#12141A" }
                    : { background: "#1E2229", color: "#8A9099", border: "1px solid #ffffff12" } }, l)))),
            mode === "nom" ? (React.createElement("div", { className: "space-y-2" },
                React.createElement("input", { value: title, onChange: (e) => setTitle(e.target.value), placeholder: "Kitob nomi", className: "w-full rounded-lg px-3 py-2.5 text-sm outline-none", style: { background: "#1E2229", color: "#F0EDE6", border: "1px solid #ffffff18" } }),
                React.createElement("input", { value: author, onChange: (e) => setAuthor(e.target.value), placeholder: "Muallif (ixtiyoriy)", className: "w-full rounded-lg px-3 py-2.5 text-sm outline-none", style: { background: "#1E2229", color: "#F0EDE6", border: "1px solid #ffffff18" } }))) : (React.createElement("div", null,
                img ? (React.createElement("div", { className: "flex gap-3 rounded-xl p-3", style: { background: "#1E2229", border: "1px solid #ffffff12" } },
                    React.createElement("img", { src: img.preview, alt: "Muqova", className: "h-24 w-16 shrink-0 rounded object-cover" }),
                    React.createElement("div", { className: "flex min-w-0 flex-1 flex-col justify-between py-0.5" },
                        React.createElement("div", null,
                            React.createElement("div", { className: "flex items-center gap-1.5 text-xs", style: { color: "#7FBF8F" } },
                                React.createElement(Check, { size: 12 }),
                                " Rasm tayyor"),
                            React.createElement("p", { className: "mt-1 truncate text-[11px]", style: { color: "#6E747E" } }, img.name)),
                        React.createElement("button", { onClick: () => setImg(null), className: "self-start text-xs underline", style: { color: "#8A9099" } }, "Boshqa rasm tanlash")))) : (React.createElement("label", { className: "relative flex w-full cursor-pointer flex-col items-center gap-2 rounded-xl py-8", style: { background: "#1E2229", border: "1px dashed #ffffff2a", color: "#8A9099" } },
                    React.createElement("input", { type: "file", accept: "image/*", onChange: pick, className: "absolute inset-0 cursor-pointer opacity-0", style: { fontSize: 0 } }),
                    prep ? React.createElement(Loader2, { size: 22, className: "animate-spin", style: { color: A } })
                        : React.createElement(ImagePlus, { size: 22, style: { color: A } }),
                    React.createElement("span", { className: "text-sm" }, prep ? "Rasm tayyorlanmoqda..." : "Muqova rasmini tanlang"),
                    React.createElement("span", { className: "px-6 text-center text-[11px] leading-relaxed", style: { color: "#5E646D" } }, "Galereyadan rasm yoki skrinshot \u2014 muqovadagi yozuv ko'rinib tursin"))),
                img && (React.createElement("input", { value: title, onChange: (e) => setTitle(e.target.value), placeholder: "Kitob nomi (agar bilsangiz \u2014 aniqroq bo'ladi)", className: "mt-2 w-full rounded-lg px-3 py-2.5 text-sm outline-none", style: { background: "#1E2229", color: "#F0EDE6", border: "1px solid #ffffff18" } })))),
            err && (React.createElement("p", { className: "mt-3 rounded-lg p-3 text-xs leading-relaxed", style: { background: "#2A1518", color: "#E0A9A2", border: "1px solid #C9766655" } }, err)),
            React.createElement("button", { onClick: create, disabled: busy || prep || !ready, className: "mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm disabled:opacity-40", style: { background: A, color: "#12141A" } },
                busy ? React.createElement(Loader2, { size: 14, className: "animate-spin" }) : React.createElement(Plus, { size: 14 }),
                busy ? "Kitob tayyorlanmoqda..." : "Kutubxonaga qo'shish"),
            React.createElement("p", { className: "mt-3 text-[11px] leading-relaxed", style: { color: "#5E646D" } }, "Qo'shilgan kitobda ham suhbat, g'oyalar, tahlil, sinov va xulosa bo'limlari to'liq ishlaydi."))));
}
function Library({ books, ready, saveErr, profile, onProfile, onOpen, onAdd, onRemove }) {
    const A = useAccent();
    const [prof, setProf] = useState(false);
    const [withText, setWithText] = useState([]);
    /* Qaysi kitoblarga matn yuklangan */
    useEffect(() => {
        let live = true;
        (async () => {
            try {
                const r = await window.storage.list("txtmeta:");
                if (live && r && r.keys)
                    setWithText(r.keys.map((k) => k.replace("txtmeta:", "")));
            }
            catch { /* yo'q */ }
        })();
        return () => { live = false; };
    }, []);
    const [cat, setCat] = useState("Barchasi");
    const [q, setQ] = useState("");
    const [lib, setLib] = useState(false);
    const [add, setAdd] = useState(false);
    const [up, setUp] = useState(false);
    const [del, setDel] = useState(null); // o'chirish tasdig'i kutilayotgan kitob id'si
    /* Profil bo'lsa — kitoblar sizga mos kelishiga qarab tartiblanadi */
    const ranked = profile && Array.isArray(profile.tartib)
        ? [...books].sort((a, b) => {
            const ia = profile.tartib.indexOf(a.id);
            const ib = profile.tartib.indexOf(b.id);
            return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
        })
        : books;
    const topIds = profile && Array.isArray(profile.top) ? profile.top.map((x) => x.id) : [];
    const sabab = (id) => (profile?.top || []).find((x) => x.id === id)?.sabab;
    const list = ranked.filter((b) => (cat === "Barchasi" || b.cat === cat) &&
        ((b.title || "").toLowerCase().includes(q.toLowerCase()) ||
            (b.author || "").toLowerCase().includes(q.toLowerCase())));
    return (React.createElement("div", { className: "min-h-screen", style: { background: "#0F1114", color: "#F0EDE6" } },
        React.createElement("div", { className: "pointer-events-none fixed inset-0", style: { background: `radial-gradient(70% 40% at 50% 0%, ${A}1c, transparent 65%)` } }),
        React.createElement("div", { className: "relative mx-auto max-w-5xl px-5 pb-20" },
            React.createElement("header", { className: "pt-12 pb-8" },
                React.createElement("div", { className: "mb-3 text-[11px] uppercase tracking-[.34em]", style: { color: A } }, "Mutolaa laboratoriyasi"),
                React.createElement("h1", { className: "max-w-xl leading-[1.02]", style: { fontFamily: F.display, fontSize: "clamp(30px, 9vw, 46px)", fontWeight: 700 } },
                    "O'n besh kitob.",
                    React.createElement("br", null),
                    "O'n besh dunyo."),
                React.createElement("p", { className: "mt-4 max-w-lg text-[15px] leading-relaxed", style: { color: "#8A9099", fontFamily: F.classic } }, "Har bir kitobning o'z dunyosi bor \u2014 rangi, ohangi, va siz bilan gaplashadigan ovozi. Kiring, savol bering, bahslashing."),
                React.createElement("div", { className: "mt-6 flex flex-wrap gap-2" },
                    React.createElement("button", { onClick: () => setLib(true), className: "flex items-center gap-2 rounded-full px-5 py-3 text-sm", style: { background: A, color: "#12141A" } },
                        React.createElement(Compass, { size: 15 }),
                        " Qaysi kitob menga kerak?"),
                    React.createElement("button", { onClick: () => setProf(true), className: "flex items-center gap-2 rounded-full px-5 py-3 text-sm", style: { background: "transparent", color: A, border: `1px solid ${A}55` } },
                        React.createElement(Users, { size: 15 }),
                        " ",
                        profile ? "Profilimni yangilash" : "Men qanday insonman?"),
                    React.createElement("button", { onClick: () => setUp(true), className: "flex items-center gap-2 rounded-full px-5 py-3 text-sm", style: { background: "transparent", color: A, border: `1px solid ${A}55` } },
                        React.createElement(Upload, { size: 15 }),
                        " Kitob faylim bor"),
                    React.createElement("button", { onClick: () => setAdd(true), className: "flex items-center gap-2 rounded-full px-5 py-3 text-sm", style: { background: "transparent", color: A, border: `1px solid ${A}66` } },
                        React.createElement(Plus, { size: 15 }),
                        " Kitob qo'shish"))),
            React.createElement("div", { className: "mb-6 flex flex-col gap-3 sm:flex-row sm:items-center" },
                React.createElement("div", { className: "flex flex-1 items-center gap-2 rounded-lg px-3 py-2.5", style: { background: "#181B20", border: "1px solid #ffffff12" } },
                    React.createElement(Search, { size: 15, style: { color: "#6E747E" } }),
                    React.createElement("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Kitob yoki muallif", className: "w-full bg-transparent text-sm outline-none", style: { color: "#F0EDE6" } }))),
            React.createElement("div", { className: "mb-8 flex gap-1.5 overflow-x-auto pb-1" }, CATS.map((c) => (React.createElement("button", { key: c, onClick: () => setCat(c), className: "shrink-0 rounded-full px-3.5 py-1.5 text-xs", style: cat === c
                    ? { background: A, color: "#12141A" }
                    : { background: "#181B20", color: "#8A9099", border: "1px solid #ffffff12" } }, c)))),
            profile && cat === "Barchasi" && !q && (React.createElement("div", { className: "mb-6 rounded-2xl p-5", style: { background: `${A}12`, border: `1px solid ${A}33` } },
                React.createElement("div", { className: "mb-1 text-[11px] uppercase tracking-[.24em]", style: { color: A } }, "Siz"),
                React.createElement("h3", { className: "text-xl", style: { fontFamily: F.display, color: "#F0EDE6" } }, profile.tur),
                profile.tavsif && (React.createElement("p", { className: "mt-2 text-[13.5px] leading-relaxed", style: { color: "#B6BAC1", fontFamily: F.classic } }, profile.tavsif)),
                profile.xislat?.length > 0 && (React.createElement("div", { className: "mt-3 flex flex-wrap gap-1.5" }, profile.xislat.map((x, i) => (React.createElement("span", { key: i, className: "rounded-full px-2.5 py-1 text-[11px]", style: { background: `${A}1F`, color: A } }, x))))),
                React.createElement("p", { className: "mt-3 text-[11px]", style: { color: "#6E747E" } }, "Kitoblar shu profilga qarab tartiblandi \u2014 eng mosi birinchi turibdi."))),
            saveErr && (React.createElement("div", { className: "mb-5 flex items-start gap-2 rounded-xl px-4 py-3", style: { background: "#C97B7218", border: "1px solid #C97B7240" } },
                React.createElement(AlertTriangle, { size: 14, className: "mt-0.5 shrink-0", style: { color: "#C97B72" } }),
                React.createElement("p", { className: "text-xs leading-relaxed", style: { color: "#E0B5B0" } }, saveErr))),
            books.some((b) => b.custom) && cat === "Barchasi" && !q && (React.createElement("div", { className: "mb-4 flex items-center gap-2 text-[11px] uppercase tracking-[.24em]", style: { color: A } },
                React.createElement(Bookmark, { size: 12 }),
                " Siz qo'shgan kitoblar birinchi turadi")),
            React.createElement("div", { className: "grid grid-cols-2 gap-x-5 gap-y-8 transition-opacity duration-300 sm:grid-cols-3 lg:grid-cols-4", style: { opacity: ready ? 1 : 0.55 } }, list.map((b) => (React.createElement("div", { key: b.id, className: "group relative flex flex-col items-center text-center" },
                React.createElement("button", { onClick: () => onOpen(b), className: "flex flex-col items-center" },
                    React.createElement("div", { className: "transition-transform duration-300 group-hover:-translate-y-1.5" },
                        React.createElement(Cover, { book: b })),
                    React.createElement("div", { className: "mt-3 text-sm leading-tight", style: { fontFamily: F.display } }, b.title),
                    React.createElement("div", { className: "mt-1 text-xs", style: { color: "#6E747E" } }, b.author),
                    topIds.includes(b.id) && (React.createElement("div", { className: "mt-1.5 flex items-start gap-1 text-[10px] leading-snug", style: { color: A } },
                        React.createElement(Sparkles, { size: 9, className: "mt-0.5 shrink-0" }),
                        React.createElement("span", null, sabab(b.id) || "Sizga eng mos"))),
                    withText.includes(b.id) && (React.createElement("div", { className: "mt-1.5 flex items-center gap-1 text-[10px]", style: { color: A } },
                        React.createElement(FileText, { size: 9 }),
                        " matn yuklangan"))),
                b.custom && (React.createElement("button", { onClick: () => setDel(b.id), className: "absolute -top-2 right-2 rounded-full p-1.5", style: { background: "#1E2229", border: "1px solid #ffffff1a", color: "#8A9099" }, "aria-label": "O'chirish" },
                    React.createElement(X, { size: 12 }))))))),
            list.length === 0 && (React.createElement("div", { className: "py-14 text-center" },
                React.createElement("p", { className: "mb-4 text-sm", style: { color: "#6E747E" } }, q ? `"${q}" bo'yicha kitob topilmadi.` : "Bu bo'limda hozircha kitob yo'q."),
                React.createElement("div", { className: "flex flex-wrap justify-center gap-2" },
                    q && (React.createElement("button", { onClick: () => setAdd(true), className: "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm", style: { background: A, color: "#12141A" } },
                        React.createElement(Plus, { size: 14 }),
                        " Shu kitobni qo'shish")),
                    React.createElement("button", { onClick: () => setLib(true), className: "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm", style: { background: "transparent", color: A, border: `1px solid ${A}66` } },
                        React.createElement(Compass, { size: 14 }),
                        " Tavsiya oling")))),
            React.createElement("footer", { className: "mt-16 border-t pt-6 text-xs leading-relaxed", style: { borderColor: "#ffffff12", color: "#5E646D" } }, "Tahlil va suhbatlar AI tomonidan yaratiladi \u2014 ular kitob o'rnini bosmaydi, unga yo'l ochadi. Aniq iqtibos va tafsilotlar uchun asl nashrga murojaat qiling.")),
        lib && (React.createElement(Librarian, { books: books, onClose: () => setLib(false), onPick: (b) => { setLib(false); onOpen(b); }, onAdd: (b) => { setLib(false); onAdd(b); } })),
        add && React.createElement(AddBook, { onClose: () => setAdd(false), onAdd: (b) => { setAdd(false); onAdd(b); } }),
        prof && (React.createElement(Profiler, { books: books, onClose: () => setProf(false), onDone: (pf) => { setProf(false); onProfile(pf); } })),
        del && (React.createElement("div", { className: "fixed inset-0 z-50 flex items-end justify-center sm:items-center", style: { background: "#000000cc" } },
            React.createElement("div", { className: "w-full max-w-sm rounded-t-2xl p-5 sm:rounded-2xl", style: { background: "#15181D", border: "1px solid #ffffff14" } },
                React.createElement("h3", { className: "text-base", style: { fontFamily: F.display, color: "#F0EDE6" } },
                    "\"",
                    books.find((b) => b.id === del)?.title,
                    "\" o'chirilsinmi?"),
                React.createElement("p", { className: "mt-2 text-xs leading-relaxed", style: { color: "#8A9099" } }, "Kitob bilan birga uning matni va saqlangan javoblari ham o'chadi. Bu amal qaytmaydi."),
                React.createElement("div", { className: "mt-5 flex gap-2" },
                    React.createElement("button", { onClick: () => setDel(null), className: "flex-1 rounded-lg py-2.5 text-sm", style: { background: "#1E2229", color: "#F0EDE6", border: "1px solid #ffffff14" } }, "Bekor qilish"),
                    React.createElement("button", { onClick: () => { onRemove(del); setDel(null); }, className: "flex-1 rounded-lg py-2.5 text-sm", style: { background: "#8E2F2A", color: "#F7E9E7" } }, "O'chirish"))))),
        up && (React.createElement(UploadModal, { onClose: () => setUp(false), onAdd: (b) => {
                setUp(false);
                setWithText((prev) => [...new Set([...prev, b.id])]);
                onAdd(b);
            } }))));
}
/* ============================================================
   Ilova
   ============================================================ */
const GLOBAL_CSS = `
  * { -webkit-tap-highlight-color: transparent; }
  button:focus-visible, input:focus-visible, textarea:focus-visible, label:focus-within {
    outline: 2px solid currentColor; outline-offset: 2px; border-radius: 8px;
  }
  ::selection { background: #B8945F; color: #12141A; }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
  }
`;
export default function App() {
    const [book, setBook] = useState(null);
    const [mine, setMine] = useState([]);
    const [ready, setReady] = useState(false);
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        let live = true;
        (async () => {
            try {
                const r = await window.storage.get("customBooks");
                if (live && r) {
                    const v = JSON.parse(r.value);
                    if (Array.isArray(v))
                        setMine(v);
                }
            }
            catch { /* hali saqlangan kitob yo'q */ }
            /* Saqlangan o'quvchi profili — rang va kitob tartibi shundan olinadi */
            const pf = await cacheGet(PROFILE_KEY);
            if (live && pf && pf.tur)
                setProfile(pf);
            if (live)
                setReady(true);
        })();
        return () => { live = false; };
    }, []);
    const accent = (PALETTES.find((x) => x.id === profile?.rang) || PALETTES[0]).accent;
    const [saveErr, setSaveErr] = useState("");
    /* Xotiradagi haqiqiy ro'yxatni o'qish — ekrandagi holatga ishonmaymiz */
    const readStored = async () => {
        try {
            const r = await window.storage.get("customBooks");
            const v = r ? JSON.parse(r.value) : [];
            return Array.isArray(v) ? v : [];
        }
        catch {
            return null;
        } // null = o'qib bo'lmadi
    };
    const write = async (next) => {
        setMine(next);
        try {
            await window.storage.set("customBooks", JSON.stringify(next));
            const back = await readStored();
            if (!back || back.length !== next.length)
                throw new Error("tasdiqlanmadi");
            setSaveErr("");
            return true;
        }
        catch {
            setSaveErr("Kitob qurilmaga saqlanmadi — ilovani yopsangiz yo'qolishi mumkin.");
            return false;
        }
    };
    /* Kitob qo'shish: yozishdan oldin xotirani qayta o'qib, ustiga qo'shamiz.
       Shunday qilmasak, ro'yxat hali yuklanmagan bo'lsa eski kitoblar o'chib ketardi. */
    const addBook = async (b) => {
        const stored = await readStored();
        if (stored === null) {
            setSaveErr("Xotira o'qilmadi — eski kitoblarni o'chirib qo'ymaslik uchun saqlanmadi. Ilovani qayta oching.");
            setMine((prev) => [b, ...prev]);
            return;
        }
        await write([b, ...stored.filter((x) => x.id !== b.id)]);
    };
    const removeBook = async (id) => {
        const stored = await readStored();
        await write((stored === null ? mine : stored).filter((x) => x.id !== id));
        /* Kitob bilan birga uning matni va saqlangan javoblari ham o'chsin */
        await dropText(id);
        for (const pre of ["chat:", "idea:", "ideas:", "sum:", "qz:", "an:"]) {
            try {
                const r = await window.storage.list(`${pre}${id}`);
                if (r && r.keys) {
                    for (const k of r.keys) {
                        try {
                            await window.storage.delete(k);
                        }
                        catch { /* yo'q */ }
                    }
                }
            }
            catch { /* bu turdagi kesh yo'q */ }
        }
    };
    const books = [...mine, ...BOOKS];
    return (React.createElement(AccentCtx.Provider, { value: accent },
        React.createElement("style", null, GLOBAL_CSS),
        React.createElement("style", null, `::selection { background: ${accent}; color: #12141A; }`),
        book ? (React.createElement(BookPage, { book: book, onBack: () => setBook(null) })) : (React.createElement(Library, { books: books, ready: ready, saveErr: saveErr, profile: profile, onProfile: setProfile, onOpen: setBook, onAdd: async (b) => { await addBook(b); setBook(b); }, onRemove: removeBook }))));
}
