import styles from "./page.module.css";
import Link from "next/link";

const links = [
  {
    id: 1,
    name: "Testimonial Card",
    href: "./testimonial",
  },
  {
    id: 2,
    name: "Blog Card",
    href: "./blog",
  },
  {
    id: 3,
    name: "Profile Card",
    href: "./profile",
  },
  {
    id: 4,
    name: "Hero Section",
    href: "./hero",
  },
];
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul>
          {links.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
