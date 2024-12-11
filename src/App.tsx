import { useState } from "react";
import Navbar from "./components/Navbar";
import Numbers from "./components/Numbers";
import Services from "./components/Services"; // Import the Services component
import Footer from "./components/Footer";
import Header from "./components/Header";

const translations = {
  en: {
    header: "Alsaqer Security Services",
    aboutTitle: "About Us",
    aboutText:
      "At Alsaqer Security Services, we strive to expand our services to meet the needs of our valued clients across the country. With over 25 years of experience, we continue to deliver the highest standards of security and protection through trained teams equipped with the latest security technologies.",
    missionTitle: "Our Mission",
    missionText:
      "'Your safety is our goal' — At Alsaqer, we believe that security is not just a service, but a commitment to which we dedicate all our energies and expertise.",
    whyChooseUsTitle: "Why Choose Alsaqer?",
    whyChooseUsPoints: [
      "Trained and certified teams: Our security teams undergo intensive and certified training to ensure professional services.",
      "24/7 services: We provide round-the-clock security services to ensure complete protection at all times.",
      "Innovative and tailored security solutions: We design security solutions to meet the needs of all sectors.",
      "Over 25 years of experience: Our extensive experience in civil security makes us among the leaders in the country.",
    ],
    contactTitle: "Contact Us",
    email: "Email:",
    phone: "Phone Numbers:",
    location: "Location:",
    address: [
      "Crater - King Salman Street",
      "Update Building, 2nd Floor",
    ],
    footer: "© 2024 Alsaqer Security Services. All Rights Reserved.",
    numbersHeader: "Our Achievements Speak for Themselves",
    numbersDescription: "With dedication and expertise, we have marked our presence in the security industry.",
    numbersStats: [
      {
        value: "25+",
        label: {
          en: "Years in Business",
          ar: "سنوات من العمل",
        },
        description: {
          en: "Providing top-notch security solutions.",
          ar: "تقديم حلول أمنية عالية الجودة.",
        },
      },
      {
        value: "3000+",
        label: {
          en: "Projects Delivered",
          ar: "المشاريع المنجزة",
        },
        description: {
          en: "Successfully completed in the last 25 years.",
          ar: "تم إنجازها بنجاح في آخر 25 عامًا.",
        },
      },
      {
        value: "50+",
        label: {
          en: "Team Members",
          ar: "أعضاء الفريق",
        },
        description: {
          en: "Experts dedicated to your safety.",
          ar: "خبراء مكرسون لسلامتك.",
        },
      },
    ],
  },
  ar: {
    header: "شركة الصقر لخدمات الأمن",
    aboutTitle: "مقدمة للموقع",
    aboutText:
      "شركة الصقر لخدمات الأمن نسعى دائمًا لتوسيع خدماتنا لتلبية احتياجات عملائنا الكرام في جميع أنحاء البلد. بفضل خبراتنا الممتدة لأكثر من 25 عامًا، نواصل تقديم أعلى معايير الأمن والحماية من خلال فرق عمل مدربة ومجهزة بأحدث التقنيات الأمنية.",
    missionTitle: "رسالتنا",
    missionText:
      "أمانكم هدفنا — في شركة الصقر، نؤمن بأن الحماية ليست مجرد خدمة، بل هي التزام نكرس له كل طاقاتنا وخبراتنا.",
    whyChooseUsTitle: "لماذا تختار شركة الصقر؟",
    whyChooseUsPoints: [
      "فرق عمل مدربة ومعتمدة: فرقنا الأمنية تخضع لتدريبات مكثفة ومعتمدة وفق أعلى المعايير.",
      "خدمات متوفرة على مدار الساعة: نقدم خدمات أمنية مستمرة على مدار 24 ساعة.",
      "حلول أمنية مبتكرة ومخصصة: نصمم حلول أمنية تناسب احتياجات جميع القطاعات.",
      "خبرة تتجاوز 25 عامًا: خبرتنا الطويلة في مجال الأمن المدني تجعلنا من الأوائل.",
    ],
    contactTitle: "تواصل معنا",
    email: "البريد الإلكتروني:",
    phone: "أرقام الهاتف:",
    location: "الموقع:",
    address: ["كريتر - شارع الملك سلمان", "عمارة أبديت الدور الثاني"],
    footer: "© 2024 شركة الصقر لخدمات الأمن. جميع الحقوق محفوظة.",
    numbersHeader: "إنجازاتنا تتحدث عن نفسها",
    numbersDescription: "بفضل التزامنا وخبرتنا، وضعنا بصمتنا في صناعة الأمن.",
    numbersStats: [
      {
        value: "25+",
        label: {
          en: "سنوات من العمل",
          ar: "Years in Business",
        },
        description: {
          en: "تقديم حلول أمنية عالية الجودة.",
          ar: "Providing top-notch security solutions.",
        },
      },
      {
        value: "550+",
        label: {
          en: "المشاريع المنجزة",
          ar: "Projects Delivered",
        },
        description: {
          en: "تم إنجازها بنجاح في آخر 25 عامًا.",
          ar: "Successfully completed in the last 25 years.",
        },
      },
      {
        value: "50+",
        label: {
          en: "أعضاء الفريق",
          ar: "Team Members",
        },
        description: {
          en: "خبراء مكرسون لسلامتك.",
          ar: "Experts dedicated to your safety.",
        },
      },
    ],
  },
};

function App() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const t = translations[language];

  // Define your services with images
  const services = [
    {
      title: t.whyChooseUsPoints[0],
      description: t.whyChooseUsPoints[0],
      image: "/img/service-1.jpg", // Replace with actual image path
    },
    {
      title: t.whyChooseUsPoints[1],
      description: t.whyChooseUsPoints[1],
      image: "/img/service-2.jpg", // Replace with actual image path
    },
    {
      title: t.whyChooseUsPoints[2],
      description: t.whyChooseUsPoints[2],
      image: "/img/service-3.jpg", // Replace with actual image path
    },
    {
      title: t.whyChooseUsPoints[3],
      description: t.whyChooseUsPoints[3],
      image: "/img/service-4.jpg", // Replace with actual image path
    },
  ];

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"} className="font-sans">
      {/* Language Switcher */}
      
      {/* Header */}
      <Header language={language} setLanguage={setLanguage} />
      <Navbar language={language} />
      
      {/* Main Content */}

      <main className="container mx-auto px-4 py-8">
        {/* About Section */}
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{t.aboutTitle}</h2>
          <p className="text-gray-700">{t.aboutText}</p>
        </section>
        
        
        <section id="mission" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{t.missionTitle}</h2>
          <p className="text-gray-700">{t.missionText}</p>
        </section>
        
        {/* Numbers Section */}
        <section id="numbers" className="mb-12">
          <Numbers language={language} />
        </section>
    <div id="services">
        {/* Why Choose Us Section */}
        <Services services={services} language={language} />
        </div>

      </main>

{/* Contact Section */}
<section id="contact" className="bg-gray-100 py-8">
  <div className="container mx-auto">
    <h2 className="text-2xl font-bold mb-4">{t.contactTitle}</h2>
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <h3 className="font-semibold">{t.email}</h3>
        <p className="text-gray-700">info@alsaqersecurity.com</p>

        <h3 className="font-semibold mt-4">{t.phone}</h3>
        <p className={`text-gray-700 ${language === 'ar' ? 'text-right' : 'text-left'}`} style={{ direction: 'ltr' }}>
          +967 02 258 013
        </p>
        <p className={`text-gray-700 ${language === 'ar' ? 'text-right' : 'text-left'}`} style={{ direction: 'ltr' }}>
          +967 02 264 491
        </p>

        <h3 className="font-semibold mt-4">{t.location}</h3>
        <p className="text-gray-700">{t.address.join(", ")}</p>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}

export default App;