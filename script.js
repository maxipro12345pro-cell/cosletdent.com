const PHONE_HREF = "tel:+37379519542";

const icons = {
  team: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
  value: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 3.1 6.4 6.9 1-5 4.9 1.2 6.9L12 18l-6.2 3.2L7 14.3 2 9.4l6.9-1Z"/></svg>',
  consult: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 11h6"/><path d="M12 8v6"/><path d="M21 12a8.5 8.5 0 0 1-12.7 7.4L3 21l1.6-5.1A8.5 8.5 0 1 1 21 12Z"/></svg>',
  parking: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h7a5 5 0 0 1 0 10H9v8H6Z"/><path d="M9 10h4a2 2 0 0 0 0-4H9Z"/></svg>',
  tooth: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c3.9-2 8 1 8 5.7 0 5.8-3.6 12.3-6 12.3-1.1 0-1.1-3.4-2-3.4s-.9 3.4-2 3.4c-2.4 0-6-6.5-6-12.3C4 4 8.1 1 12 3Z"/><path d="M8 7.8c1.2-1 2.5-1.2 4-.3 1.5-.9 2.8-.7 4 .3"/></svg>',
  crown: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 8 4.5 4L12 5l4.5 7L21 8l-2 11H5Z"/><path d="M5 19h14"/></svg>',
  surgery: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 4 6 6"/><path d="m4 20 7.5-7.5"/><path d="m12 6 6 6-5 5-6-6Z"/><path d="M8 16l-4 4"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>'
};

const translations = {
  ro: {
    brandName: 'Coșleț Dent',
    navServices: "Servicii",
    navAdvantages: "Avantaje",
    navDoctor: "Despre medic",
    navBooking: "Programare",
    navReviews: "Recenzii",
    navContact: "Contacte",
    ctaBook: "Programează-te",
    ctaCall: "Sună acum",
    ctaCallBooking: "Sună pentru programare",
    heroEyebrow: "Stomatologie în Chișinău",
    heroTitle: 'Coșleț Dent',
    heroSubtitle: "Tratament dentar profesionist pentru sănătatea și estetica zâmbetului tău.",
    heroText: "Terapie dentară, ortopedie, chirurgie orală și profilaxie într-un cabinet cu abordare atentă și personal calificat.",
    quickBookingTitle: "Programare doar prin apel",
    quickBookingText: "Sună și stabilim ora potrivită pentru consultație.",
    trustBadges: ["Consultație gratuită", "Parcare gratuită", "Personal calificat", "Prețuri competitive"],
    advantagesEyebrow: "Avantaje",
    advantagesTitle: "De ce să ne alegeți?",
    advantages: [
      ["Personal calificat", "Echipă cu experiență și atenție la detalii.", "team"],
      ["Prețuri competitive", "Servicii stomatologice cu raport corect calitate-preț.", "value"],
      ["Consultație gratuită", "Primul pas spre un plan de tratament potrivit.", "consult"],
      ["Parcare gratuită", "Acces comod la cabinet pe bd. Dacia 47.", "parking"]
    ],
    servicesEyebrow: "Servicii",
    servicesTitle: "Serviciile noastre",
    servicesIntro: "Oferim tratamente stomatologice pentru prevenție, sănătate și restaurarea zâmbetului.",
    serviceCta: "Sună pentru programare",
    services: [
      ["Terapie dentară", "Tratarea dinților și retratarea periodontitelor.", "tooth"],
      ["Ortopedie dentară", "Fațete, coroane, punți dentare și proteze dentare.", "crown"],
      ["Chirurgie orală", "Tratamente chirurgicale la nivelul cavității orale.", "surgery"],
      ["Profilaxie", "Prevenirea problemelor dentare prin controale și tratamente profilactice.", "shield"]
    ],
    doctorEyebrow: "Despre medic",
    doctorTitle: "Despre medic",
    doctorName: "Medicul Evghenii",
    clinicRole: 'Coșleț Dent',
    doctorText: "Medicul Evghenii oferă tratamente stomatologice cu atenție la detalii, grijă față de pacient și explicații clare la fiecare etapă a tratamentului.",
    doctorText2: 'La Coșleț Dent, pacienții beneficiază de o abordare calmă, profesionistă și orientată spre soluții potrivite pentru fiecare caz.',
    doctorCta: "Programează o consultație",
    bookingEyebrow: "Programare",
    bookingTitle: "Cum te poți programa?",
    bookingIntro: "Programarea se face rapid prin telefon, fără formular online.",
    bookingCalloutTitle: "Sună pentru programare",
    bookingCalloutText: "Îți răspundem la întrebări și alegem împreună ora potrivită.",
    booking: [
      ["Suni la clinică", "Apelezi unul dintre numerele afișate pe site."],
      ["Alegem ora potrivită", "Stabilim ziua și ora convenabilă pentru consultație."],
      ["Vii la consultație", "Medicul evaluează situația și îți explică opțiunile."],
      ["Primești recomandări", "Stabilim pașii următori pentru tratament."]
    ],
    reviewsEyebrow: "Recenzii",
    reviewsTitle: "Pacienții ne recomandă",
    reviewsCta: "Vezi recenziile pe Google",
    reviews: [
      ["Iulia Lee", "Foarte atent și meticulos. Prețuri bune, radiografie proprie și producție de coroane și proteze dentare."],
      ["LEANART", "Un medic foarte atent și cu experiență."],
      ["Alina L", "Dentistry with quality services and affordable prices."]
    ],
    contactEyebrow: "Contacte",
    contactTitle: "Unde ne găsiți",
    contactAddressLabel: "ADRESĂ",
    contactPhonesLabel: "CONTACTE",
    contactHoursLabel: "ORAR",
    contactFollowLabel: "URMĂREȘTE-NE",
    hoursShort: "Lun–Vin: 09:00–19:00<br>Dum: Închis",
    hoursFull: "Luni–Vineri: 09:00–19:00<br>Duminică: Închis",
    mapsCta: "Deschide în Google Maps",
    finalTitle: "Ai nevoie de o consultație stomatologică?",
    finalText: 'Sună la Coșleț Dent și programează o vizită la medicul Evghenii.',
    footerNote: "Tratament dentar cu abordare atentă în Chișinău."
  },
  ru: {
    brandName: "Coșleț Dent",
    navServices: "Услуги",
    navAdvantages: "Преимущества",
    navDoctor: "О враче",
    navBooking: "Запись",
    navReviews: "Отзывы",
    navContact: "Контакты",
    ctaBook: "Записаться",
    ctaCall: "Позвонить",
    ctaCallBooking: "Позвонить для записи",
    heroEyebrow: "Стоматология в Кишиневе",
    heroTitle: "Coșleț Dent",
    heroSubtitle: "Профессиональное стоматологическое лечение для здоровья и эстетики вашей улыбки.",
    heroText: "Терапия, ортопедия, хирургия полости рта и профилактика в кабинете с внимательным подходом и квалифицированным персоналом.",
    quickBookingTitle: "Запись только по телефону",
    quickBookingText: "Позвоните, и мы подберём удобное время консультации.",
    trustBadges: ["Бесплатная консультация", "Бесплатная парковка", "Квалифицированный персонал", "Конкурентные цены"],
    advantagesEyebrow: "Преимущества",
    advantagesTitle: "Почему выбирают нас?",
    advantages: [
      ["Квалифицированный персонал", "Команда с опытом и вниманием к деталям.", "team"],
      ["Конкурентные цены", "Стоматологические услуги с честным соотношением качества и цены.", "value"],
      ["Бесплатная консультация", "Первый шаг к подходящему плану лечения.", "consult"],
      ["Бесплатная парковка", "Удобный доступ к кабинету на бул. Дачия 47.", "parking"]
    ],
    servicesEyebrow: "Услуги",
    servicesTitle: "Наши услуги",
    servicesIntro: "Предлагаем стоматологическое лечение для профилактики, здоровья и восстановления улыбки.",
    serviceCta: "Позвонить для записи",
    services: [
      ["Терапия зубов", "Лечение зубов и перелечивание периодонтитов.", "tooth"],
      ["Ортопедическая стоматология", "Виниры, коронки, мосты и зубные протезы.", "crown"],
      ["Хирургия полости рта", "Хирургическое лечение в области полости рта.", "surgery"],
      ["Профилактика", "Предотвращение стоматологических проблем через осмотры и профилактические процедуры.", "shield"]
    ],
    doctorEyebrow: "О враче",
    doctorTitle: "О враче",
    doctorName: "Врач Евгений",
    clinicRole: "Coșleț Dent",
    doctorText: "Врач Евгений проводит стоматологическое лечение с вниманием к деталям, заботой о пациенте и понятными объяснениями на каждом этапе.",
    doctorText2: "В Coșleț Dent пациенты получают спокойный, профессиональный подход и решения, подобранные под конкретный случай.",
    doctorCta: "Записаться на консультацию",
    bookingEyebrow: "Запись",
    bookingTitle: "Как записаться?",
    bookingIntro: "Запись проходит быстро по телефону, без онлайн-формы.",
    bookingCalloutTitle: "Позвонить для записи",
    bookingCalloutText: "Ответим на вопросы и вместе подберём подходящее время.",
    booking: [
      ["Позвоните в клинику", "Наберите один из номеров, указанных на сайте."],
      ["Подберем удобное время", "Согласуем день и время консультации."],
      ["Приходите на консультацию", "Врач оценит ситуацию и объяснит возможные варианты."],
      ["Получите рекомендации", "Определим следующие шаги лечения."]
    ],
    reviewsEyebrow: "Отзывы",
    reviewsTitle: "Пациенты нас рекомендуют",
    reviewsCta: "Посмотреть отзывы в Google",
    reviews: [
      ["Iulia Lee", "Очень чуткий и старательный врач. Цены отличные, собственный рентген и производство коронок и зубных протезов."],
      ["LEANART", "Очень аккуратный и опытный врач."],
      ["Alina L", "Dentistry with quality services and affordable prices."]
    ],
    contactEyebrow: "Контакты",
    contactTitle: "Где нас найти",
    contactAddressLabel: "АДРЕС",
    contactPhonesLabel: "КОНТАКТЫ",
    contactHoursLabel: "ГРАФИК",
    contactFollowLabel: "МЫ В СОЦСЕТЯХ",
    hoursShort: "Пн–Пт: 09:00–19:00<br>Вс: закрыто",
    hoursFull: "Понедельник–Пятница: 09:00–19:00<br>Воскресенье: закрыто",
    mapsCta: "Открыть в Google Maps",
    finalTitle: "Нужна стоматологическая консультация?",
    finalText: "Позвоните в Coșleț Dent и запишитесь на визит к врачу Евгению.",
    footerNote: "Стоматологическое лечение с внимательным подходом в Кишиневе."
  },
  en: {
    brandName: 'Coșleț Dent',
    navServices: "Services",
    navAdvantages: "Advantages",
    navDoctor: "About the doctor",
    navBooking: "Booking",
    navReviews: "Reviews",
    navContact: "Contacts",
    ctaBook: "Book an appointment",
    ctaCall: "Call now",
    ctaCallBooking: "Call to book",
    heroEyebrow: "Dentistry in Chișinău",
    heroTitle: 'Coșleț Dent',
    heroSubtitle: "Professional dental care for the health and aesthetics of your smile.",
    heroText: "Dental therapy, prosthetics, oral surgery and prevention in a cabinet with attentive care and qualified staff.",
    quickBookingTitle: "Booking by phone only",
    quickBookingText: "Call us and we will choose a suitable consultation time.",
    trustBadges: ["Free consultation", "Free parking", "Qualified staff", "Competitive prices"],
    advantagesEyebrow: "Advantages",
    advantagesTitle: "Why choose us?",
    advantages: [
      ["Qualified staff", "An experienced team with attention to detail.", "team"],
      ["Competitive prices", "Dental services with a fair balance of quality and cost.", "value"],
      ["Free consultation", "The first step toward a suitable treatment plan.", "consult"],
      ["Free parking", "Convenient access to the cabinet on Dacia boulevard 47.", "parking"]
    ],
    servicesEyebrow: "Services",
    servicesTitle: "Our services",
    servicesIntro: "We provide dental treatments for prevention, health and smile restoration.",
    serviceCta: "Call to book",
    services: [
      ["Dental therapy", "Tooth treatment and retreatment of periodontitis.", "tooth"],
      ["Dental prosthetics", "Veneers, crowns, dental bridges and dentures.", "crown"],
      ["Oral surgery", "Surgical treatments in the oral cavity.", "surgery"],
      ["Prevention", "Preventing dental problems through checkups and preventive care.", "shield"]
    ],
    doctorEyebrow: "About the doctor",
    doctorTitle: "About the doctor",
    doctorName: "Doctor Evghenii",
    clinicRole: 'Coșleț Dent',
    doctorText: "Doctor Evghenii provides dental treatment with attention to detail, patient care and clear explanations at each stage.",
    doctorText2: 'At Coșleț Dent, patients receive a calm, professional approach focused on suitable solutions for each case.',
    doctorCta: "Book a consultation",
    bookingEyebrow: "Booking",
    bookingTitle: "How can you book?",
    bookingIntro: "Booking is handled quickly by phone, without an online form.",
    bookingCalloutTitle: "Call to book",
    bookingCalloutText: "We answer your questions and choose a suitable time together.",
    booking: [
      ["Call the clinic", "Use one of the phone numbers shown on the site."],
      ["Choose a suitable time", "We agree on a convenient day and time for the consultation."],
      ["Come for consultation", "The doctor evaluates the situation and explains your options."],
      ["Receive recommendations", "We define the next steps for treatment."]
    ],
    reviewsEyebrow: "Reviews",
    reviewsTitle: "Patients recommend us",
    reviewsCta: "See reviews on Google",
    reviews: [
      ["Iulia Lee", "A very attentive and diligent doctor. Excellent prices, in-house X-ray and production of crowns and dental prostheses."],
      ["LEANART", "A very careful and experienced doctor."],
      ["Alina L", "Dentistry with quality services and affordable prices."]
    ],
    contactEyebrow: "Contacts",
    contactTitle: "Where to find us",
    contactAddressLabel: "ADDRESS",
    contactPhonesLabel: "CONTACTS",
    contactHoursLabel: "HOURS",
    contactFollowLabel: "FOLLOW US",
    hoursShort: "Mon–Fri: 09:00–19:00<br>Sun: Closed",
    hoursFull: "Monday–Friday: 09:00–19:00<br>Sunday: Closed",
    mapsCta: "Open in Google Maps",
    finalTitle: "Need a dental consultation?",
    finalText: 'Call Coșleț Dent and book a visit with doctor Evghenii.',
    footerNote: "Attentive dental care in Chișinău."
  }
};

const state = {
  lang: "ro"
};

const textNodes = document.querySelectorAll("[data-i18n]");
const langButtons = document.querySelectorAll("[data-lang]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const menuToggle = document.querySelector("[data-menu-toggle]");

function setHtml(target, value) {
  target.innerHTML = value;
}

function renderList(selector, items) {
  const target = document.querySelector(selector);
  if (!target) return;
  target.innerHTML = items.map((item) => `<li class="reveal">${item}</li>`).join("");
}

function renderCards(selector, items, type, serviceCta = "") {
  const target = document.querySelector(selector);
  if (!target) return;

  target.innerHTML = items.map((item, index) => {
    const [title, text, iconKey] = item;
    const delay = `${index * 70}ms`;
    const icon = icons[iconKey] || icons.tooth;

    if (type === "service") {
      return `
        <article class="service-card reveal" style="--delay: ${delay}">
          <span class="icon-badge">${icon}</span>
          <h3>${title}</h3>
          <p>${text}</p>
          <a href="${PHONE_HREF}">${serviceCta}</a>
        </article>
      `;
    }

    if (type === "review") {
      return `
        <article class="review-card reveal" style="--delay: ${delay}">
          <blockquote>${text}</blockquote>
          <cite>${title}</cite>
        </article>
      `;
    }

    return `
      <article class="info-card reveal" style="--delay: ${delay}">
        <span class="icon-badge">${icon}</span>
        <h3>${title}</h3>
        <p>${text}</p>
      </article>
    `;
  }).join("");
}

function renderSteps(items) {
  const target = document.querySelector("[data-steps='booking']");
  if (!target) return;

  target.innerHTML = items.map(([title, text], index) => `
    <li class="step reveal" style="--delay: ${index * 70}ms">
      <h3>${title}</h3>
      <p>${text}</p>
    </li>
  `).join("");
}

function refreshRevealTargets() {
  const revealItems = document.querySelectorAll(".reveal");
  revealItems.forEach((item) => observer.observe(item));
}

function setLanguage(lang) {
  const dict = translations[lang];
  state.lang = lang;
  document.documentElement.lang = lang;

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (typeof dict[key] === "string") {
      setHtml(node, dict[key]);
    }
  });

  renderList("[data-list='trustBadges']", dict.trustBadges);
  renderCards("[data-cards='advantages']", dict.advantages, "info");
  renderCards("[data-cards='services']", dict.services, "service", dict.serviceCta);
  renderCards("[data-cards='reviews']", dict.reviews, "review");
  renderSteps(dict.booking);

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  refreshRevealTargets();
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
setLanguage("ro");
