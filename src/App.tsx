import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Numbers from "./components/Numbers";
import Services from "./components/Services"; // Import the Services component
import Footer from "./components/Footer";
import Header from "./components/Header";
import Feature1 from "./components/feature1";
import ServicesSection from "./components/ServicesSection";

const translations = {
  en: {
    header: "Alsaqer Security Services",
    aboutTitle: "About Us",
    aboutText: "At Alsaqer Security Services, we strive to expand our services to meet the needs of our valued clients across the country. With over 25 years of experience, we continue to deliver the highest standards of security.",
    missionTitle: "Our Mission",
    missionText: "'Your safety is our goal' — At Alsaqer, we believe that security is not just a service, but a commitment.",
    whyChooseUsTitle: "Why Choose Alsaqer?",
    services: [
      {
        title: "Trained Teams",
        description: "Our security teams undergo intensive and certified training to ensure they provide the highest level of professional services. This rigorous training equips them with the skills necessary to handle various security situations effectively and efficiently.",
        image: "/img/service-1.jpg",
      },
      {
        title: "24/7 Availability",
        description: "We provide round-the-clock security services to ensure complete protection at all times. With our dedicated team available 24/7, you can have peace of mind knowing that your safety is our top priority, day or night.",
        image: "/img/about-img.jpg",
      },
      {
        title: "Tailored Solutions",
        description: "We design innovative security solutions tailored to meet the specific needs of different sectors. Whether it's commercial, residential, or public safety, our customized approaches ensure that we address the unique challenges faced by each client.",
        image: "/img/service-3.jpg",
      },
      {
        title: "Proven Experience",
        description: "With over 25 years of experience in civil security, we have established ourselves as leaders in the industry. Our extensive background allows us to understand and adapt to the evolving security landscape, ensuring that our clients receive the best protection possible.",
        image: "/img/contact-bg.jpg",
      },
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
  },
  ar: {
    header: "شركة الصقر لخدمات الأمن",
    aboutTitle: "من نحن",
    aboutText: "شركة الصقر لخدمات الأمن تسعى دائمًا لتوسيع خدماتها لتلبية احتياجات عملائها الكرام في جميع أنحاء البلاد. بفضل خبرتنا الممتدة لأكثر من 25 عامًا، نواصل تقديم أعلى معايير الأمن.",
    missionTitle: "رسالتنا",
    missionText: "أمانكم هدفنا — في شركة الصقر، نؤمن بأن الحماية ليست مجرد خدمة، بل هي التزام.",
    whyChooseUsTitle: "لماذا تختار شركة الصقر؟",
    services: [
      {
        title: "فرق عمل مدربة",
        description: "فرقنا الأمنية تخضع لتدريبات مكثفة ومعتمدة لضمان تقديم أعلى مستويات الخدمة المهنية. هذا التدريب الصارم يزودهم بالمهارات اللازمة للتعامل مع مختلف الحالات الأمنية بكفاءة وفعالية.",
        image: "/img/service-1.jpg",
      },
      {
        title: "متوفرة على مدار الساعة",
        description: "نقدم خدمات أمنية مستمرة على مدار 24 ساعة لضمان الحماية الكاملة في جميع الأوقات. مع فريقنا المتخصص المتاح 24/7، يمكنك أن تشعر بالراحة knowing أن سلامتك هي أولويتنا القصوى.",
        image: "/img/about-img.jpg",
      },
      {
        title: "حلول مخصصة",
        description: "نقوم بتصميم حلول أمنية مبتكرة مصممة لتلبية الاحتياجات المحددة لمختلف القطاعات. سواء كانت تجارية أو سكنية أو للسلامة العامة، تضمن نهجنا المخصص أننا نتعامل مع التحديات الفريدة التي يواجهها كل عميل.",
        image: "/img/service-3.jpg",
      },
      {
        title: "خبرة مثبتة",
        description: "مع أكثر من 25 عامًا من الخبرة في الأمن المدني، أقمنا أنفسنا كقادة في الصناعة. تسمح لنا خلفيتنا الواسعة بفهم والتكيف مع المشهد الأمني المتطور، مما يضمن أن عملائنا يتلقون أفضل حماية ممكنة.",
        image: "/img/contact-bg.jpg",
      },
    ],
    contactTitle: "تواصل معنا",
    email: "البريد الإلكتروني:",
    phone: "أرقام الهاتف:",
    location: "الموقع:",
    address: ["كريتر - شارع الملك سلمان", "عمارة أبديت الدور الثاني"],
    footer: "© 2024 شركة الصقر لخدمات الأمن. جميع الحقوق محفوظة.",
  },
};

function App() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const t = translations[language];
  const backgroundImages = [
    "/img/ss.jpg",
    "/img/hero-bg.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  // Define your services with images
  

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"} className="font-sans">
      {/* Language Switcher */}
      
      {/* Header */}
      <Header language={language} setLanguage={setLanguage} />
      <Navbar language={language} />
      
      {/* Main Content */}

      <main className="container mx-auto px-4 py-8">
        {/* About Section */}
        <section id="about" className="relative mb-12 flex flex-col md:flex-row h-auto md:h-[600px]">
  {/* Background Image Container */}
  <div className="relative w-full md:w-1/2 h-40 md:h-full">
    <div
      className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        opacity: 0.9, // Adjust opacity for overlay effect
      }}
    />
  </div>
  
  {/* Text Container */}
  <div className="relative z-10 w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center bg-white bg-opacity-75">
    <h2 className="text-3xl md:text-2xl font-bold mb-4">{t.aboutTitle}</h2>
    <p className="text-gray-700 text-lg md:text-base">
      {t.aboutText}
    </p>
  </div>
</section>
<div className="my-4 border-t border-[#A5993A]"></div>
        <Feature1 language={language} />
        
        <div className="my-4 border-t border-[#A5993A]"></div>
        <section id="mission" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{t.missionTitle}</h2>
          <p className="text-gray-700">{t.missionText}</p>
        </section>
        <div className="my-4 border-t border-[#A5993A]"></div>
        {/* Numbers Section */}
        <section id="numbers" className="mb-12">
          <Numbers language={language} />
        </section>
        <div className="my-4 border-t border-[#A5993A]"></div>
    <div id="services">
      <ServicesSection language={language} />
      <div className="my-4 border-t border-[#A5993A]"></div>
        {/* Why Choose Us Section */}
        <Services services={t.services} language={language} />
        </div>
        <div className="my-4 border-t border-[#A5993A]"></div>
      </main>
    
{/* Contact Section */}
<section id="contact" className="bg-gray-100 py-8">
  <div className="container mx-auto px-4 md:px-8"> {/* Added padding on the sides */}
    <h2 className="text-2xl font-bold mb-4 text-center">{t.contactTitle}</h2> {/* Centered title */}
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <h3 className="font-semibold">{t.email}</h3>
        <a className="text-gray-600 dark:text-gray-400" href="mailto:info@alsaqersecurity.com">
          info@alsaqersecurity.com
        </a>

        <h3 className="font-semibold mt-4">{t.phone}</h3>
        <p className={`text-gray-700 ${language === 'ar' ? 'text-right' : 'text-left'} mb-2`} style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          +967 02 258 013
        </p>
        <p className={`text-gray-700 ${language === 'ar' ? 'text-right' : 'text-left'} mb-2`} style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          +967 02 264 491
        </p>

        <h3 className="font-semibold mt-4">{t.location}</h3>
        <p className="text-gray-700">{t.address.join(", ")}</p>
      </div>
    </div>
  </div>
</section>
<div className="my-4 border-t border-[#A5993A]"></div>
      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}

export default App;