import Image from "next/image";
import styles from "./testimonial.module.css";
import { noto } from "@/app/ui/fonts";

export default function Page() {
  return (
    <div className={`${noto.className} ${styles.card}`}>
      {/* figure and figcaption for image and its description */}
      <figure className={styles.who}>
        <div className={styles.avatar}>
          <Image
            className={styles.avatarImage}
            src="/profile-thumbnail.png"
            alt={`Sarah Dole's Profile Picture`}
            width={48}
            height={48}
            priority
          />
        </div>
        <figcaption className={styles.info}>
          {/* test line-clamp: */}
          {/* <p className={`${styles.name} ${styles.singleLine}`}>
            SarahDoleSarahDoleSarahDole SarahDoleSarahDole
          </p> */}
          <p className={styles.name}>Sarah Dole</p>
          <p className={styles.username}>@sarahdole</p>
        </figcaption>
      </figure>
      {/* use blockquote, meaning a quotation element, instead of generic div */}
      <blockquote>
        <p className={styles.testimonial}>
          {`I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!`}
        </p>
      </blockquote>
    </div>
  );
}
