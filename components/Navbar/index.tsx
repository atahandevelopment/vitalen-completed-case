/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import "./styles/index.css";
import { useEffect } from "react";

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const { id } = useParams();

  useEffect(() => {
    const handleScroll = (event: {
      preventDefault: () => void;
      target: any;
    }) => {
      event.preventDefault();
      const target = event.target;
      if (target.tagName === "A") {
        const sectionId = target.getAttribute("href").slice(1);
        scrollToSection(sectionId);
      }
    };

    const navbar = document.getElementById("navbar");
    if (navbar) {
        navbar.addEventListener("click", handleScroll);
        return () => {
          navbar.removeEventListener("click", handleScroll);
        };
    }
  }, []);
  return (
    <div className={`${!id ? "navbar-container" : "navbar-container-detail"}`}>
      <div className="nav-content">
        <a href="#home" style={{ textDecoration: "none"}}>
          <p>Logo</p>
        </a>
        <nav id="navbar" className="navbar">
          <a className="links" href={`#tv-series`}>
            Popular Tv Series
          </a>
          <a className="links" href={`#popular-movies`}>
            Popular Movies
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
