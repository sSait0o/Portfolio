import { useEffect, useRef, useState } from "react";
import useActiveSection from "../hooks/useActiveSection";
import "../styles/Navbar.css";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skill" },
  { label: "Github", href: "#github" },
  { label: "Expérience", href: "#experience" },
  { label: "Projects", href: "#project" },
  { label: "Liens+", href: "#link" },
];

const Navbar = () => {
  const navRef = useRef(null);
  const activeSection = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    setIsOpen(false);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - navRef.current.offsetHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav ref={navRef}>
      <button
        type="button"
        className={`navToggle${isOpen ? " open" : ""}`}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`navContainer${isOpen ? " open" : ""}`}>
        {NAV_ITEMS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={handleClick}
            className={activeSection === href.substring(1) ? "active" : ""}
          >
            {label}
          </a>
        ))}
      </div>
      {isOpen && (
        <div
          className="navBackdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;
