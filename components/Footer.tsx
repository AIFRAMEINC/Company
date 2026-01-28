import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const element = document.querySelector(href);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-950 pt-24 pb-12 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Navigation & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                    <Logo />
                    <span className="text-2xl font-bold text-white tracking-tight">HumanV</span>
                </div>
                <p className="text-neutral-500 text-sm leading-loose max-w-md rtl-text text-justify">
                    ما در HumanV با تلفیق هنرِ مهندسی و قدرت هوش مصنوعی، زیرساخت‌هایی خلق می‌کنیم که فراتر از ابزارند؛ آن‌ها شرکای هوشمند شما در مسیر آینده هستند.
                </p>
            </div>
            
            {/* Links Column */}
            <div className="text-right flex flex-col items-end">
                <h6 className="text-white font-bold mb-6 rtl-text border-b-2 border-indigo-900 pb-2 inline-block">دسترسی‌ها</h6>
                <ul className="space-y-4 text-sm text-neutral-500 rtl-text w-full">
                    <li>
                        <a href="#" onClick={(e) => scrollToSection(e, '#')} className="hover:text-indigo-400 transition-colors block">صفحه اصلی</a>
                    </li>
                    <li>
                        <a href="#power" onClick={(e) => scrollToSection(e, '#power')} className="hover:text-indigo-400 transition-colors block">چشم‌انداز</a>
                    </li>
                    <li>
                        <a href="#founders" onClick={(e) => scrollToSection(e, '#founders')} className="hover:text-indigo-400 transition-colors block">رهبری</a>
                    </li>
                </ul>
            </div>

            {/* Contact Column */}
            <div className="text-right flex flex-col items-end">
                <h6 className="text-white font-bold mb-6 rtl-text border-b-2 border-indigo-900 pb-2 inline-block">ارتباطات</h6>
                <p className="text-neutral-500 text-sm mb-2 font-mono" dir="ltr">Iran, Tehran</p>
                <a href="mailto:info@humanv.ir" className="text-neutral-500 text-sm hover:text-white transition-colors font-mono" dir="ltr">info@humanv.ir</a>
            </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-12"></div>

        {/* Legal & Copyright Section - Strictly Separated */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            
            {/* LTR Section: HumanV Brand Copyright */}
            <div className="text-center lg:text-left w-full lg:w-auto order-2 lg:order-1" dir="ltr">
                 <p className="text-neutral-600 text-xs font-mono tracking-wider">
                    © {currentYear} HumanV Platform.
                    <br />
                    <span className="text-neutral-700">All Rights Reserved.</span>
                </p>
            </div>

            {/* RTL Section: Legal Ownership */}
            <div className="w-full lg:w-auto order-1 lg:order-2">
                <div className="bg-neutral-900/50 border border-neutral-800 px-6 py-4 rounded-lg flex flex-col items-center lg:items-end gap-2 shadow-lg max-w-md mx-auto lg:mx-0">
                    <div className="flex items-center gap-2 mb-1">
                         <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        <h5 className="text-white text-sm font-bold rtl-text">شرکت الگوریتم هوشمند نسترن</h5>
                    </div>
                    <p className="text-neutral-400 text-xs leading-relaxed rtl-text text-center lg:text-right">
                        تمامی حقوق مادی و معنوی این پلتفرم (HumanV) متعلق به شرکت <span className="text-indigo-300">الگوریتم هوشمند نسترن</span> می‌باشد.
                    </p>
                </div>
            </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;