"use client";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "features", "about", "contact"];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
  active === id
    ? "text-blue-400 font-semibold"
    : "text-gray-300 hover:text-white transition duration-300";

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50 shadow-md px-8 py-4 flex justify-between items-center">
      
      <h1 className="text-white text-xl font-bold">Accredian</h1>

      <ul className="flex gap-6">
        <li><a href="#home" className={linkClass("home")}>Home</a></li>
        <li><a href="#features" className={linkClass("features")}>Features</a></li>
        <li><a href="#about" className={linkClass("about")}>About</a></li>
        <li><a href="#contact" className={linkClass("contact")}>Contact</a></li>
      </ul>

    </nav>
  );
};

export default Navbar;