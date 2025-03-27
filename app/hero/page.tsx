import styles from "./hero.module.css";
import Image from "next/image";

const title = `Well crafted abstract images`;
const description = `High quality abstract images for your projects, wallpaper and presentations.`;
const imageAlt = "Prism Photo";

// import image file and Next.js automatically determines dimensions
import heroImage from "./prism.png";

export default function Page() {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.heroText}>
            <div className={styles.intro}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.cta}>
              <button className={`${styles.button} ${styles.secondary}`}>
                <span>Learn more</span>
              </button>
              <button className={`${styles.button} ${styles.primary}`}>
                <span>See pricing</span>
              </button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.heroImage}
              // use imported image file
              src={heroImage}
              alt={imageAlt}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
