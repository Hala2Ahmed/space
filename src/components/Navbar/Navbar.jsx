import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import icon from "../../assets/Subtract.png";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // SVG للقائمة (Hamburger icon)
  const MenuIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

  // SVG لأيقونة الإغلاق (X icon)
  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  return (
    <nav className="flex justify-between items-center py-6 px-6 lg:px-[64px] bg-transparent fixed top-0 left-0 right-0 z-50">
      {/* شعار الموقع */}
      <div>
        <img src={icon} alt="Logo" className="h-10" />
      </div>

      {/* زر القائمة (للشاشات الصغيرة) */}
      <button
        className="md:hidden text-white z-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* شريط التنقل الرئيسي (للشاشات الكبيرة) */}
      <div className="hidden md:flex items-center space-x-8 py-[38.5px] px-[64px] bg-white/5 backdrop-blur-[80px]">
        <NavLinks location={location} />
      </div>

      {/* الشريط الجانبي (للشاشات الصغيرة) */}
      <div
        className={`
        fixed top-0 right-0 h-full w-64 bg-[rgba(11,13,23,0.15)] backdrop-blur-[80px] z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        md:hidden flex flex-col pt-24 px-8
      `}
      >
        <NavLinks
          location={location}
          mobile={true}
          onNavigate={() => setIsOpen(false)}
        />
      </div>
    </nav>
  );
}

// مكون مساعد لروابط التنقل
function NavLinks({ location, mobile = false, onNavigate = () => {} }) {
  const links = [
    { path: "/", number: "00", text: "HOME" },
    { path: "/destination", number: "01", text: "DESTINATION" },
    { path: "/crew", number: "02", text: "CREW" },
    { path: "/technology", number: "03", text: "TECHNOLOGY" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          onClick={onNavigate}
          className={`
            ${mobile ? "py-4 text-xl border-b border-gray-700 w-full" : "pb-2"}
            text-white hover:border-b-2 hover:border-white transition-all
            ${location.pathname === link.path ? "border-b-2 border-white" : ""}
          `}
        >
          <span className="font-bold mr-3">{link.number}</span>
          {link.text}
        </Link>
      ))}
    </>
  );
}
