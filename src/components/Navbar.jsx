import { useRef } from "react";
import useActiveSection from "../hooks/useActiveSection";
import "../styles/Navbar.css";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skill" },
  { label: "Projects", href: "#project" },
  { label: "Liens+", href: "#link" },
];

const Navbar = () => {
  const navRef = useRef(null);
  const activeSection = useActiveSection();

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - navRef.current.offsetHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav ref={navRef}>
      <div className="navContainer">
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
    </nav>
  );
};

export default Navbar;
