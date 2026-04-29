import { projects } from "../data/portfolioData";
import styles from "./Projects.module.css";

function Projects() {
    return (
        <>
        <section id="projects" className={styles.projectsSection}>
            <div className={styles.container}>
                <div className={styles.projectsHeader}>
                    <p className={styles.sectionEyeBrow}>__Portfolio</p>
                    <h2 className={styles.projectsTitle}>Selected <em>Projects</em></h2>
                </div>
            </div>

            <div className={styles.projectGrid}>
                {projects.map((project, i) => (
                    <div key={i}
                        className={styles.projectCard}>
                            <div className={styles.imgProject}>
                                <img src={project.img} alt="Project Image" />
                            </div>
                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.tag}>
                                {project.tech.map(t => (
                                    <div className={styles.t}>{t}</div>
                                ))}
                            </div>
                            <div className={styles.linksProjects}>
                                <a target="_blank" href={project.live} className={styles.live}>Live demo → </a>
                                <a href={project.repo} className={styles.git}>GitHub → </a>
                            </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}

export default Projects;