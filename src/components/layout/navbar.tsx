import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ThemeMode from "../utils/theme";
import { ChevronDown, ChevronUp } from "lucide-react";
import settings from "../../content/_settings.json";
import content from "../../content/navbar.json";
import css from "../../styles/scss/structure/navbar.module.scss";

declare global {
  interface Window {
    sticky: {
      nav: HTMLElement | null;
      at: number;
    };
  }
}

interface RouteEvents {
  addEventListeners: () => void;
  removeEventListeners: () => void;
  closeMenu: () => void;
}

interface ScrollEvents {
  addEventListeners: () => void;
  removeEventListeners: () => void;
  getPosition: (e: HTMLElement | null, top: boolean) => number;
  maybeHideNav: () => void;
}

interface MenuItem {
  title: string;
  url: string;
  subMenu?: DropdownItem[];
}

interface DropdownItem {
  title: string;
  url: string;
}

export default function Navbar() {
  const router = useRouter();
  const [menuState, menuToggle] = useState<boolean | undefined>(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    menuToggle(false);
    setDropdownOpen(false);
  }, []);

  const toggleMenu = () => {
    menuToggle((prev) => !prev);
    setDropdownOpen(false);
  };

  const closeMenu = () => {
    menuToggle(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav id="Navbar" className={css.container}>
      <ul className={css.menu}>
        <li className={css.menuHeader}>
          <Link className={css.logo} href="/">
            {settings.name}
          </Link>

          <div className={css.headerActions}>
            <div className={css.themeToggle}>
              <ThemeMode />
            </div>
            
            <button
              onClick={toggleMenu}
              className={css.mobileToggle}
              data-open={menuState}
              aria-label="Toggle menu"
            >
              <div>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </li>
        
        <li data-open={menuState} className={css.menuContent}>
          <ul>
            {content.map(({ url, title, subMenu }: MenuItem, index) => {
              return subMenu ? (
                <li key={index} className={css.dropdownContainer}>
                  <button 
                    className={css.dropdownButton} 
                    onClick={toggleDropdown}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {title}
                    {dropdownOpen ? (
                      <ChevronUp className={css.dropdownIcon} />
                    ) : (
                      <ChevronDown className={css.dropdownIcon} />
                    )}
                  </button>
                  {dropdownOpen && (
                    <div className={css.dropdownMenu}>
                      {subMenu.map((item, subIndex) => (
                        <Link
                          key={subIndex}
                          href={item.url}
                          className={css.dropdownItem}
                          onClick={closeMenu}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={index}>
                  <Link href={url} onClick={closeMenu}>
                    {title}
                  </Link>
                </li>
              );
            })}
            <li className={css.desktopTheme}>
              <ThemeMode />
            </li>
          </ul>
        </li>
      </ul>

      <span
        onClick={toggleMenu}
        className={css.menuBlackout}
        data-open={menuState}
      ></span>
    </nav>
  );
}