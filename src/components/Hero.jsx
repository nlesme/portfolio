import styles from "./Hero.module.css";
import avatar from "../assets/imgCartoon.png"
function Hero() {
    return (
        <>
        <section id="hero" className={styles.welcome}>
          <div className={styles.heroContent}> 
              <div className={styles.sideLeft}>
                <div className={styles.available}>
                    <p>Open to work · Junior Developer</p>
                </div>

                <div className={styles.sideLeftContent}>
                    <h1 className={styles.heroH1}>
                      <span className={`${styles.nameLine} ${styles.nameWeight}`}>Hello, I'm</span>
                      <span className={`${styles.nameLineAccent} ${styles.nameLine}`}>Norbelis</span>
                    </h1>

                    <p className={styles.heroDesc}>
                      I build clean, responsive web interfaces with {' '}
                      <strong>React</strong> and modern frontend tools. I’m currently expanding into 
                      full-stack development by creating real projects that connect user-friendly interfaces with APIs,
                      backend logic, and databases.
                    </p>

                  <div className={styles.btnActions}>
                      
                      <a href="#projects" className={styles.btnProjects}>
                        See my work ↓
                      </a>
                      <a href="#contact" className={styles.btnContact}>
                        Let's talk →
                      </a>
          
                  </div>
                </div>
                </div>
                
                <div className={styles.sideRight}>
                <div className={styles.heroCard}>
                <div className={styles.heroCardInner}>
                  <img
                      className={styles.heroCardAvatar}   
                      src={avatar}
                      width="80"
                      height="80" />
                  <div className={styles.heroCardName}>Norbelis</div>
                  <div className={styles.heroCardRol}>Junior Web Developer</div>
                  <div className={styles.heroCardTags}>
                    <span className={styles.heroTagGold}>React</span>
                    <span className={styles.heroTagSage}>Node.js</span>
                    <span className={styles.heroTagRose}>CSS</span>
                    <span className={styles.heroTagGold}>HTML</span>
                    <span className={styles.heroTag}>Prisma</span>
                    <span className={styles.heroTag}>Git</span>
                    <span className={styles.heroTag}>PostgreSQL</span>
                  </div>
                </div>
              </div>
              </div>
            
          </div>
        </section>
        </>
    )
}

export default Hero;