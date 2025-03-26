import styles from "./profile.module.css";
import Image from "next/image";

export default function Page() {
  const name = `Sarah Dole`;
  const role = `Front End Engineer @ Microsoft`;
  const introduction = `I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.`;
  const imageAlt = `Sarah Dole's Profile Picture`;
  const imageSrc = "/profile-thumbnail.png";

  const icons = [
    {
      id: 1,
      src: "/github-fill.png",
      alt: "GitHub",
      ariaLabel: "Link to GitHub profile",
    },
    {
      id: 2,
      src: "/linkedin-box-fill.png",
      alt: "LinkedIn",
      ariaLabel: "Link to LinkedIn profile",
    },
    {
      id: 3,
      src: "/instagram-fill.png",
      alt: "Instagram",
      ariaLabel: "Link to Instagram profile",
    },
    {
      id: 4,
      src: "/twitter-x-fill.png",
      alt: "Twitter/X",
      ariaLabel: "Link to Twitter/X profile",
    },
  ];
  return (
    <figure className={styles.card}>
      <div className={styles.bio}>
        <Image
          className={styles.avatarImage}
          src={imageSrc}
          alt={imageAlt}
          width={64}
          height={64}
          priority
        />
        <div className={styles.bioHeader}>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
        <div className={styles.bioIntro}>
          <p className={styles.intro}>{introduction}</p>
        </div>
      </div>
      <figcaption className={styles.contact}>
        {/* test button hover, active states: */}
        {/* test disabled button state: */}
        {/* <button className={styles.button} disabled={true}> */}
        <button className={styles.button} disabled={false}>
          Contact me
        </button>
        <div className={styles.socials}>
          {icons.map((item) => (
            // test link hover, active states:
            <a
              href={""}
              key={item.id}
              className={styles.socialLink}
              aria-label={item.ariaLabel}
            >
              <Image
                aria-hidden={true}
                src={item.src}
                alt={item.alt}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
