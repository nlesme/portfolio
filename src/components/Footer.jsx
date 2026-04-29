import styles from "./Footer.module.css"

function Footer() {
    const year = new Date().getFullYear()
   
    return (
      <footer>
        <div className={styles.container}>
          <div className={styles.footerInner}>
            <div className={styles.footerLeft}>
              © {year} <span>Norbelis</span> · Built with React + Vite + Coffee
            </div>
            <div className={styles.footerRight}>
              <a href="#hero">Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  export default Footer;