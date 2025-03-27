import styles from "./page.module.css";
import Link from "next/link";

const links = [
  {
    id: 1,
    name: "Testimonial Card",
    description: "User testimonial card",
    href: "./testimonial",
  },
  {
    id: 2,
    name: "Blog Card",
    description: "Article/blog card with cover image",
    href: "./blog",
  },
  {
    id: 3,
    name: "Profile Card",
    description:
      "Profile card with contact button and social links for normal, hover, and focus states",
    href: "./profile",
  },
  {
    id: 4,
    name: "Hero Section",
    description:
      "Responsive hero section for desktop, tablet, and mobile views",
    href: "./hero",
  },
];
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul className={styles.container}>
          {links.map((item) => (
            <li key={item.id} className={styles.item}>
              <>
                <p>
                  <Link href={item.href}>{item.name}</Link>
                </p>
                <p>{item.description}</p>
              </>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
