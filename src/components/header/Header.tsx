import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react';

function Header() {
  const [visible, setVisible] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // console.log("window->",window.scrollY)
      setMenuOpen(false)
      const currentScroll = window.scrollY;
      if (currentScroll > 200 && currentScroll > lastScroll) {
        setVisible(true);
      } else if (currentScroll < lastScroll) {
        setVisible(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);


  return (
    <header className={`fixed left-0 right-0 z-50 bg-white border-b border-[#E1E3E8] shadow transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="max-w-[1240px] mx-auto flex justify-between items-center px-4 md:px-6 py-3">
        <img src="/assets/logo.png" alt="Mangalam Logo" className="w-[109px] h-[45px] object-contain"/>

        <button className="md:hidden p-2 rounded-md border border-gray-200" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
        <nav className={`${ menuOpen ? "absolute top-14 right-6 bg-white p-4 flex flex-col gap-3 rounded-lg border shadow-md" : "hidden"} md:flex items-center gap-5`}>
          <a className="px-3 py-2 text-[#262A2E] hover:text-primary-blue transition cursor-pointer">
            About Us
          </a>

          <a className="px-3 py-2 flex items-center gap-2 text-[#262A2E] hover:text-primary-blue transition cursor-pointer">
            Products
            <ChevronDown className="size-4 text-[#262A2E]" />
          </a>

          <button className="px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-[#202d7a] transition">
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header