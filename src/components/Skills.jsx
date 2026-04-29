import { useState } from "react";
import { skills, categories } from "../data/portfolioData";
import styles from "./Skills.module.css";



const marqueeItems = [...skills, ...skills];

function Skills () {
const [active, setActive] = useState("All");

const visible = active === "All" ? skills : skills.filter(skill => skill.category === active);

    return (
        <>
        <section id="skills" className={styles.skillsSection}>
            <div className={styles.skillsContainer}>
                <div className={styles.skillsHeader}>
                    <div>
                        <p className={styles.eyebrow}>__Tech Stack</p>
                        <h2 className={styles.sectionTitle}> What I  <em>work with</em></h2>
                    </div>

                    <p className={styles.introText}>
                    A curated set of tools and technologies I've used to build real
                    projects — from responsive UIs to basic full-stack apps.
                    Always learning more.
                    </p>
                 </div>
            </div>

            <div className={styles.filterCat}>
                {categories.map(cat => (
                    <button
                        className={styles.btnCat}
                        key={cat}
                        onClick={() => setActive(cat)}>{cat}</button>
                ))}
            </div>

            <div className={styles.grid}>
                {visible.map((skill, i) => (
                    <div
                        className={styles.card}
                        key={skill.name}
                        style={{ animationDelay: `${i * 0.07}s` }}>

                            <div className={styles.cardTop}>
                                <div className={styles.skillIcon}>{skill.icon}</div>
                                <div className={skill.category === "Frontend" ? styles.skillGold : skill.category === "Tools" ? styles.skillGreen : styles.skillPink}>{skill.category}</div>
                            </div>
                            <div className={styles.skillName}>{skill.name}</div>
                            <div className={styles.skillDescription}>{skill.description}</div>
                    </div>
                ))}
            </div>
        </section>
        <div className={styles.marqueeContainer} aria-hidden="true">
                <div className={styles.marqueeContent}>
                    {marqueeItems.map((skill, i) => (
                        <span className={styles.marqueeItem} key={i}>
                            <span className={styles.dot}>·</span>
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Skills;