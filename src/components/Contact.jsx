import { useState } from "react";
import { links } from "../data/portfolioData";
import styles from "./Contact.module.css"

function Contact() {
    const [form, setForm] = useState({name: "", email: "", subject:"", message:""});
    const [showMsg, setShowMsg] = useState(false);

    function handleChange(e) {
        setForm(prev => ({...prev, [e.target.name] : e.target.value}) )
    }

    function handleSubmit(e) {
        e.preventDefault();
        setShowMsg(true);
        setForm({name: "", email: "", subject:"", message:""});
        setTimeout(() => setShowMsg(false), 3500);
    }
    return (
        <>
            <section id="contact" className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.contactInner}>
                        <div className={styles.contactLeft}>
                            <p className={styles.sectionEyeBrow}>__Contact</p>
                            <h2 className={styles.title}>Let's<em> work together</em></h2>
                            <p className={styles.description}>
                                I'm currently open to junior opportunities, freelance projects,
                                and collaborations. Don't hesitate to reach out — I respond fast.
                        </p>

                        <div>
                            {links.map(link => (
                                <a 
                                    className={styles.contactCards}
                                    key={link.label}
                                    href={link.href}
                                    target="_blank">
                                        <div className={styles.individualCard}>
                                            <div className={styles.linkIcon}>{link.icon}</div>
                                                <div className={styles.linkText}>
                                                    <strong className={styles.label}>{link.label}</strong>
                                                    <br />{link.sub}
                                                </div>
                                                
                                            </div>
                                    </a>
                            ))}
                        </div>
                        </div>

                        <div>
                            <div className={styles.contactRight}>
                                <h3 className={styles.titleForm}>Send a message</h3>
                                <form className={styles.form} onSubmit={handleSubmit}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label} htmlFor="name">Name</label>
                                            <input type="text"
                                                id="name"
                                                name="name"
                                                className={styles.formInput}
                                                placeholder="Your name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label className={styles.label} htmlFor="email">Email</label>
                                            <input type="email"
                                                id="email"
                                                name="email"
                                                className={styles.formInput}
                                                placeholder="Your email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                                />
                                        </div>

                                        <div className={`${styles.formGroup} ${styles.subjectGroup}`}>
                                            <label className={styles.label} htmlFor="subject">Subject</label>
                                            <input type="text"
                                                id="subject"
                                                name="subject"
                                                className={styles.formSubject}
                                                placeholder="What's this about?"
                                                value={form.subject}
                                                onChange={handleChange}
                                                />
                                        </div>

                                        <div className={`${styles.formGroup} ${styles.messageGroup}`}>
                                            <label className={styles.label} htmlFor="message">Message</label>
                                            <textarea 
                                                id="message"
                                                name="message"
                                                className={styles.formTextArea}
                                                placeholder="Tell me about your project or opportunity..."
                                                value={form.message}
                                                onChange={handleChange}
                                                required
                                                />
                                        </div>

                                        <button type="submit" className={styles.btnSend}>Send message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {showMsg && (
                        <div className={styles.showMsg}>
                        <span className={styles.icon}>✓</span>
                                Message sent! I'll get back to you soon.
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Contact;