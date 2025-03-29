import gridStyles from "./grid.module.css";
import styles from "./content.module.css";
import Image from "next/image";

const title = `Well crafted abstract images`;
const description = `High quality abstract images for your projects, wallpaper and presentations.`;
const imageAlt = "Prism Photo";

import heroImage from "./prism.png";

export default function Page() {
  return (
    <div className={styles.pageContent}>
      <div className={`${styles.section}`}>
        <div className={gridStyles.gridParent}>
          <div className={`${gridStyles.left} ${styles.heroText}`}>
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
          <div className={`${gridStyles.right} ${styles.imageContainer}`}>
            <Image
              className={styles.heroImage}
              src={heroImage}
              alt={imageAlt}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
