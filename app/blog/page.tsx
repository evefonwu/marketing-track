import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";

export default function Page() {
  const title = `Top 5 Living Room Inspirations`;
  const description = `Curated vibrants colors for your living, make it pop & calm in the same time.`;
  const tag = `Interior`;

  return (
    <figure className={styles.card}>
      <div className={styles.cover}>
        <Image
          src={`/spacejoy-YqFz7UMm8qE-unsplash.jpg`}
          alt={`Cover image for article ${title}`}
          className={styles.coverImage}
          width={340}
          height={288}
          priority={true}
        />
      </div>
      <figcaption className={styles.details}>
        <div className={styles.detailsHeading}>
          <div className={styles.badge}>
            <span className={styles.tagText}>{tag}</span>
          </div>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.detailsContent}>
          <p className={styles.description}>{description}</p>
          <Link
            href={""}
            className={styles.ctaLink}
            aria-label={`Read full article about ${title}`}
          >
            <div className={styles.ctaText}>Read more</div>
            <div className={styles.ctaRightArrow}>
              <Image
                aria-hidden="true"
                src="/arrow-right-line.png"
                alt="Right Arrow Icon"
                width={13}
                height={13}
              />
            </div>
          </Link>
        </div>
      </figcaption>
    </figure>
  );
}
