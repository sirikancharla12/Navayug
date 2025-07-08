// import { useState } from "react";
// import { ArrowRight, Menu, X } from "lucide-react";
// import ConnectButton from "../ui/connectButton";

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white px-6 lg:px-12 py-4 ">
//       <div className="flex items-center justify-between">
//   <div className="h-10 md:h-12 lg:h-14 flex items-center">
//   <img
//     src="/navayug.png"
//     alt="Navayug Logo"
//     className=" w-50 h-50 object-contain filter brightness-0"
//   />
// </div>



//         <div className="hidden md:flex items-center space-x-8">
//           {["HOME", "ABOUT US", "SERVICES", "PLANS & PRICING"].map((text, idx) => (
//             <a key={idx} href="#" className="uppercase  tracking-widest text-base font-normal leading-5 font-[DegularDisplay] text-[var(--color-gray)] hover:text-[var(--color-dark)] transition-colors">
//               {text}
//             </a>
//           ))}
// <div className="h-6 w-px bg-[var(--color-soft-gray)] mr-6" />

// <ConnectButton label="CONTACT US"/>
//         </div>

//         <button
//           className="md:hidden text-[var(--color-dark)]"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {isOpen && (
//         <div className="md:hidden mt-4 flex flex-col space-y-4">
//           {["HOME", "ABOUT US", "SERVICES", "PLANS & PRICING"].map((text, idx) => (
//             <a key={idx} href="#" className="text-sm text-[var(--color-dark)] hover:text-black transition">
//               {text}
//             </a>
//           ))}
//           <button className="flex items-center bg-gray-100 hover:bg-gray-200 transition px-4 py-2 rounded-full shadow-sm w-fit">
//             <span className="text-sm font-semibold text-[var(--color-dark)] mr-2">CONTACT US</span>
//             <div className="w-6 h-6 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white">
//               <ArrowRight size={16} />
//             </div>
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import ConnectButton from "../ui/connectButton";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "PLANS & PRICING", href: "/pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white px-6 lg:px-12 py-4 ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="h-10 md:h-12 lg:h-14 flex items-center">
         <img
    src="/navayug.png"
    alt="Navayug Logo"
    className=" w-50 h-50 object-contain filter brightness-0"
  />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ label, href }, idx) => (
            <a
              key={idx}
              href={href}
              className="uppercase tracking-widest text-base font-normal leading-5 font-[DegularDisplay] text-[var(--color-gray)] hover:text-[var(--color-dark)] transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="h-6 w-px bg-[var(--color-soft-gray)] mr-6" />
          <ConnectButton label="CONTACT US" />
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-[var(--color-dark)]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          {navLinks.map(({ label, href }, idx) => (
            <a
              key={idx}
              href={href}
              className="text-sm font-medium text-[var(--color-dark)] hover:text-black transition"
            >
              {label}
            </a>
          ))}
          <button className="flex items-center bg-gray-100 hover:bg-gray-200 transition px-4 py-2 rounded-full shadow-sm w-fit">
            <span className="text-sm font-semibold text-[var(--color-dark)] mr-2">CONTACT US</span>
            <div className="w-6 h-6 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white">
              <ArrowRight size={16} />
            </div>
          </button>
        </div>
      )}
    </nav>
  );
};
