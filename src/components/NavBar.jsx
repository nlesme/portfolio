import styles from "./NavBar.module.css";
import { useState } from "react";
function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
   
    return (
        <>
        <nav className={styles.navBar}>
            
            <div className={styles.container}>
                <a className={styles.logo} href="#hero">&lt;Norbelis<span>Dev</span>/&gt;</a>
                <div className={`${styles.link} ${menuOpen ? styles.linkOpen : ""}`}>
                    <a href="#hero" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </div>
               
                <div className={styles.actions}>
                    <button
                    className={styles.menuButton}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                            >
                                ☰
                            </button>
                        </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;