import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import ConnectButton from "./connectButton";

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-16 py-20 border-t border-gray-200 bg-white">
      <div className="flex flex-col lg:flex-row justify-evenly text-sm">
        <div className="lg:w-[40%] space-y-5 mb-12 lg:mb-0">
          <div className="h-10 md:h-12 lg:h-14 flex items-center justify-center lg:justify-start">
  <img
    src="/navayug.png"
    alt="Navayug Logo"
    className=" w-50 h-50 object-contain filter brightness-0"
  />
</div>
          <p className="mt-6 text-sm lg:text-lg text-[--color-soft-gray] leading-snug font-medium">
            Empowering Brands With Bold Digital Solutions. From Strategy To Design,
            We Turn Ideas Into Impact. Let’s Build Something Amazing Together.
          </p>

        <div className="flex items-center gap-4 mt-4">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <img src="/s1.png" alt="Facebook" className="w-6 h-6 hover:opacity-80 transition" />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <img src="/s2.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <img src="/s3.png" alt="Instagram" className="w-6 h-6 hover:opacity-80 transition" />
  </a>
  <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
    <img src="/s4.png" alt="Behance" className="w-6 h-6 hover:opacity-80 transition" />
  </a>
  <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
    <img src="/s5.png" alt="Dribbble" className="w-6 h-6 hover:opacity-80 transition" />
  </a>
</div>


          <div className="mt-4">
            <ConnectButton label="LET'S CONNECT" to="/" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:w-[50%]">
          <div>
            <h3 className="text-base font-semibold mb-4 text-[--color-soft-gray]">Menu</h3>
            <ul className="space-y-3 text-[--color-soft-gray]">
              <li><Link to="/" className="hover:text-black transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-black transition">About</Link></li>
              <li><Link to="/services" className="hover:text-black transition">Service</Link></li>
              <li><Link to="/pricing" className="hover:text-black transition">Plans & Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-[--color-soft-gray]">Services</h3>
            <ul className="space-y-3 text-[--color-soft-gray]">
              <li>Branding & Digital Design</li>
              <li>Web & App Development</li>
              <li>Performance Marketing</li>
              <li>Content & Social Media</li>
              <li>Event Marketing & PR</li>
              <li>Digital Strategy Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-[--color-soft-gray]">Contact</h3>
            <div className="space-y-2 text-[--color-soft-gray]">
              <p>Hyderabad, Telangana</p>
              <p>+91 8886880567</p>
              <p>info@techmocha.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 mt-12 pt-6 text-xs text-center text-[--color-soft-gray] font-text">
        © {new Date().getFullYear()} The Purple Box. All rights reserved.
      </div>
    </footer>
  );
}
