import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PowerSection from './components/PowerSection';
import Founders from './components/Founders';
import Footer from './components/Footer';
import OverlayPage from './components/OverlayPage';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string | null>(null);

  const closeOverlay = () => setActivePage(null);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-indigo-500/30">
      <Navbar onOpenPage={setActivePage} />

      {/* Main Landing Page Content */}
      <main>
        <Hero />
        <PowerSection />
        <Founders />
      </main>

      <Footer />

      {/* Full Screen Overlay Pages */}
      <AnimatePresence>
        
        {/* About Us Page */}
        {activePage === 'about' && (
          <OverlayPage
            key="about"
            isOpen={true}
            onClose={closeOverlay}
            title="درباره ما"
          >
            <p>
              در شرکت الگوریتم هوشمند نسترن (با نام تجاری HumanV)، مأموریت ما فراتر از توسعه نرم‌افزار است. ما به دنبال خلق زبان مشترکی میان انسان و ماشین هستیم. هدف ما طراحی الگوریتم‌های متنوع و پیشرفته‌ای است که نه تنها مسائل پیچیده ریاضی را حل می‌کنند، بلکه در حوزه‌های خلاقانه‌ای نظیر هنر، موسیقی و کدنویسی نیز پیشگام هستند. ما باور داریم که هوش مصنوعی می‌تواند به عنوان دستیاری خلاق، الهام‌بخش هنرمندان و توسعه‌دهندگان باشد.
            </p>
            <p>
              ما با بهره‌گیری از جدیدترین متدهای یادگیری عمیق و شبکه‌های عصبی، زیرساخت‌هایی را فراهم می‌کنیم که در آن کدنویسی به شعر، و نت‌های موسیقی به داده‌های قابل پردازش تبدیل می‌شوند. تمرکز تیم فنی ما بر ایجاد ابزارهایی است که با درک ظرافت‌های انسانی، خروجی‌هایی دقیق و در عین حال لطیف ارائه می‌دهند تا تکنولوژی نه به عنوان یک ماشین سرد، بلکه به عنوان یک همراه هوشمند در کنار انسان قرار گیرد.
            </p>
          </OverlayPage>
        )}

        {/* Vision Page */}
        {activePage === 'vision' && (
          <OverlayPage
              key="vision"
              isOpen={true}
              onClose={closeOverlay}
              title="چشم‌انداز"
          >
              <p>
                تعریف ما از هوش مصنوعی در HumanV در یک کلمه خلاصه می‌شود: <strong>«سادگی»</strong>. ما معتقدیم که اوج پیچیدگی مهندسی باید در قالبی چنان ساده و روان به کاربر ارائه شود که تمام پیچیدگی‌های فنی در پس‌زمینه محو شوند. هدف ما ساخت ابزارهایی است که قدرتمندترین محاسبات را با رابطی بصری و تجربه‌ای لذت‌بخش در اختیار کاربر قرار می‌دهند.
              </p>
              <p>
                چشم‌انداز ما خلق آینده‌ای است که در آن مرز میان ابزار و کاربر از بین می‌رود. ما می‌خواهیم هوش مصنوعی را از انحصار آزمایشگاه‌ها خارج کرده و آن را به شکلی کاربردی، مینیمال و زیبا وارد جریان زندگی و کسب‌وکار کنیم. هدف نهایی ما، توانمندسازی انسان‌هاست؛ جایی که تکنولوژی بارِ پیچیدگی را به دوش می‌کشد تا انسان‌ها بتوانند بر خلاقیت و نوآوری تمرکز کنند.
              </p>
          </OverlayPage>
        )}

         {/* Founders Page (Overlay Version) */}
         {activePage === 'founders' && (
          <OverlayPage
              key="founders"
              isOpen={true}
              onClose={closeOverlay}
              title="تیم مدیریت"
          >
              <div className="flex flex-col gap-12">
                <p className="text-xl text-indigo-400 mb-4">
                  خالقین و استراتژیست‌های HumanV
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Founder 1 */}
                  <div className="p-8 border border-neutral-800 rounded-lg bg-neutral-900/50 hover:border-indigo-500/50 transition-colors">
                    <h3 className="text-3xl font-bold font-serif mb-2 text-white">محمدمعین پیسوده</h3>
                    <span className="text-sm text-neutral-500 uppercase tracking-widest block mb-4">Co-Founder & Lead Architect</span>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      با تمرکز بر معماری سیستم‌های کلان و الگوریتم‌های هوشمند، محمدمعین نقش کلیدی در تعیین استراتژی فنی و توسعه زیرساخت‌های HumanV ایفا می‌کند.
                    </p>
                  </div>

                  {/* Founder 2 */}
                  <div className="p-8 border border-neutral-800 rounded-lg bg-neutral-900/50 hover:border-indigo-500/50 transition-colors">
                    <h3 className="text-3xl font-bold font-serif mb-2 text-white">آیدین بابازاده</h3>
                    <span className="text-sm text-neutral-500 uppercase tracking-widest block mb-4">Co-Founder & Tech Lead</span>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      آیدین با تخصص در مهندسی نرم‌افزار و هوش مصنوعی، رهبری تیم‌های توسعه را بر عهده دارد و بر پیاده‌سازی دقیق و هنرمندانه‌ی راه‌حل‌ها نظارت می‌کند.
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-neutral-800 pt-8">
                  <p className="text-center text-neutral-500 text-sm">
                    تمام حقوق پلتفرم HumanV متعلق به شرکت <strong>الگوریتم هوشمند نسترن</strong> می‌باشد.
                  </p>
                </div>
              </div>
          </OverlayPage>
        )}

      </AnimatePresence>
    </div>
  );
};

export default App;