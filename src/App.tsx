import { useEffect, useState } from "react";
import Numbers from "./components/Numbers";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";
import HeaderNavbar from "./components/HeaderNavbar";
import { motion } from "framer-motion";
import Feature1 from "./components/feature1";

const translations = {
  en: {
    header: "Alsaqer Security Services",
    aboutTexts: [
      {
        title: "About Us",
        text: "At Alsaqer Security Services, we strive to expand our services to meet the needs of our valued clients across the country. With over 25 years of experience, we continue to deliver the highest standards of security."
      },
      {
        title: "Our Commitment",
        text: "Our mission is to provide unparalleled security solutions tailored to your needs. We understand the importance of safety, and our dedicated teams are here to ensure your peace of mind."
      }
    ],
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
    phone: "Whatsapp:",
    location: "Location:",
    address: [
      "Crater - King Salman Street",
      "Update Building, 2nd Floor",
    ],
    footer: "© 2024 Alsaqer Security Services. All Rights Reserved.",
  },
  ar: {
    header: "شركة الصقر لخدمات الأمن",
    aboutTexts: [
      {
        title: "من نحن",
        text: "شركة الصقر لخدمات الأمن تسعى دائمًا لتوسيع خدماتها لتلبية احتياجات عملائها الكرام في جميع أنحاء البلاد. بفضل خبرتنا الممتدة لأكثر من 25 عامًا، نواصل تقديم أعلى معايير الأمن."
      },
      {
        title: "التزامنا",
        text: "تتمثل مهمتنا في تقديم حلول أمنية لا مثيل لها مصممة لتلبية احتياجاتك. نحن نفهم أهمية السلامة، وفريقنا هنا لضمان راحتك."
      }
    ],
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
        description: "نقدم خدمات أمنية مستمرة على مدار 24 ساعة لضمان الحماية الكاملة في جميع الأوقات. مع فريقنا المتخصص المتاح 24/7، يمكنك أن تشعر بالراحة علماً أن سلامتك هي أولويتنا القصوى.",
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
    phone: "واتساب :",
    location: "الموقع:",
    address: ["كريتر - شارع الملك سلمان", "عمارة أبديت الدور الثاني"],
    footer: "© 2024 شركة الصقر لخدمات الأمن. جميع الحقوق محفوظة.",
  },
};
function App() {
  const [language, setLanguage] = useState<"en" | "ar">("ar");
  const t = translations[language];
  const backgroundImages = [
    "/img/ss.avif",
    "/img/hero-bg.avif",
  ];
  const icon = "/icons/alsaqer.avif";
  const [currentImage, setCurrentImage] = useState(0);
  const [currentAboutText, setCurrentAboutText] = useState(t.aboutTexts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [backgroundImages.length]);

  useEffect(() => {
    const newText = t.aboutTexts[currentImage % t.aboutTexts.length];
    setCurrentAboutText(newText);
  }, [currentImage, t.aboutTexts]);

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"} className="font-sans">
      {/* Language Switcher */}
      <HeaderNavbar language={language} setLanguage={setLanguage} />
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* About Section */}
        <section
  id="about"
  className="relative mt-20 pt-8 mb-12 flex flex-col md:flex-row h-auto md:h-[600px] bg-cover rounded-lg border border-[#8f7a2e] border-opacity-50 shadow-lg"
  style={{
    backgroundImage: `url(${backgroundImages[currentImage]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
          {/* Background Image Container */}
          <motion.div
            className="relative w-full flex items-center justify-center mb-4 md:mb-0"
            initial={{ y: -50, opacity: 0 }}  // Start position and opacity
            animate={{ y: 0, opacity: 1 }}    // End position and opacity
            transition={{ duration: 1 }}        // Animation duration
          >
            <div
              className="w-64 h-64 rounded-full overflow-hidden shadow-lg transition-opacity duration-500"
              style={{
                backgroundImage: `url(${icon})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.9,
              }} 
            />
          </motion.div>

          {/* Text Container */}
          <motion.div
            className="relative z-10 w-full p-4 md:p-6 flex flex-col justify-center bg-white bg-opacity-90 rounded-lg shadow-md border border-[#A5993A] mt-4 mb-auto ml-auto mr-auto  md:mt-0 md:mb-0"
            initial={{ opacity: 0 }}  // Start opacity
            animate={{ opacity: 1 }}   // End opacity
            exit={{ opacity: 0 }}      // Exit opacity for fade-out effect
            transition={{ duration: 3 }} // Animation duration
          >
            <h2 className="text-2xl md:text-xl font-bold mb-2 text-gray-800">
              {currentAboutText.title}
            </h2>
            <p className="text-gray-700 text-base">
              {currentAboutText.text}
            </p>
          </motion.div>
        </section>

        <div className="my-4 border-t border-[#A5993A]"></div>
        <Feature1 language={language} />

        <div className="my-4 border-t border-[#A5993A]"></div>
        <section id="mission" className="mb-12">
        <h2
  className="text-2xl font-bold mb-4 text-black"
  style={{ textDecoration: "underline", textDecorationColor: "#8f7a2e" }}
>
  {t.missionTitle}
</h2>
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
      <section
        id="contact"
        className="bg-cover bg-center py-8"
        style={{
          backgroundImage: 'url(/img/carousel-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 bg-white bg-opacity-75 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">{t.contactTitle}</h2>
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <i className="fas fa-envelope mr-2"></i>
                  {t.email}
                </h3>
                <a className="text-blue-600 hover:text-blue-400" href="mailto:info@alsaqersecurity.com">
                  info@alsaqersecurity.com
                </a>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <i className="fab fa-whatsapp mr-2"></i>
                  {t.phone}
                </h3>
                <p className={`text-gray-800 ${language === 'ar' ? 'text-right' : 'text-left'} mb-2`}style={{ direction: 'ltr' }}>
                  <a
                    href="https://wa.me/967737179330"
                    className="text-gray-800 hover:text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +967 737 179 330
                  </a>
                </p>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  {t.location}
                </h3>
                <p className="text-gray-800">{t.address.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-4 border-t border-[#A5993A]"></div>
      {/* Footer */}
      <Footer language={language} />
      <a
  href={`tel:${'+967737179330'}`}
  className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition group bg-cover bg-center z-50"
  style={{
    backgroundImage: `url('/icons/alsaqer.png')`,
  }}
>
  <div className="flex items-center justify-center w-full h-full transition-all duration-300 group-hover:bg-[#8f7a2e] group-hover:rounded-full">
    <i className="fas fa-phone-alt text-[#111827] text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></i>
  </div>
</a>
    </div>
  );
}

export default App;